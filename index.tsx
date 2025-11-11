import { useEffect, useMemo, useState } from "react";
import { getSuggestedPairs } from "@/components/RegionSuggest";
import pairsData from "@/data/consumer_pairs.json";
import { useSiteEntry } from "@/components/useSiteConfig";
type Quote = { rate:number, ts:number };
export default function Home(){
  const entry = useSiteEntry();
  const suggest = useMemo(()=>getSuggestedPairs(entry.region), [entry.region]);
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState<string>(entry.defaultPair[0]);
  const [to, setTo] = useState<string>(entry.defaultPair[1]);
  const [quote, setQuote] = useState<Quote|null>(null);
  async function fetchRate(f:string, t:string){
    try{
      const r = await fetch(`https://api.exchangerate.host/latest?base=${encodeURIComponent(f)}&symbols=${encodeURIComponent(t)}`);
      const j = await r.json(); const rate = j?.rates?.[t] ?? null; if(rate) setQuote({ rate, ts: Date.now() });
    }catch{}
  }
  useEffect(()=>{ fetchRate(from,to); },[from,to]);
  const converted = quote ? (amount * quote.rate) : null;
  const majors = pairsData.global;
  return (<main className="container py-8">
    <h1 className="text-2xl font-semibold mb-2" style={{color:"var(--brand-500)"}}>{entry.title}</h1>
    <p className="opacity-70 mb-4">{entry.description}</p>
    <div className="grid md:grid-cols-3 gap-4">
      <div className="card md:col-span-2">
        <div className="grid sm:grid-cols-3 gap-3 items-end">
          <div><label className="block text-sm mb-1">Amount</label>
            <input value={amount} onChange={e=>setAmount(Number(e.target.value)||0)} className="w-full border rounded-md px-3 py-2" type="number" min="0"/></div>
          <div><label className="block text-sm mb-1">From</label>
            <input value={from} onChange={e=>setFrom(e.target.value.toUpperCase())} className="w-full border rounded-md px-3 py-2" /></div>
          <div><label className="block text-sm mb-1">To</label>
            <input value={to} onChange={e=>setTo(e.target.value.toUpperCase())} className="w-full border rounded-md px-3 py-2" /></div>
        </div>
        <div className="mt-4"><button className="btn" onClick={()=>fetchRate(from,to)}>Convert</button></div>
        <div className="mt-4 card"><div className="text-sm opacity-70">Result</div>
          <div className="text-xl font-semibold mt-1">{converted !== null ? `${amount} ${from} = ${converted.toFixed(4)} ${to}` : "—"}</div>
          {quote && <div className="text-xs opacity-60 mt-1">Rate {from}/{to}: {quote.rate.toFixed(6)} • Updated {(new Date(quote.ts)).toLocaleTimeString()}</div>}
        </div>
      </div>
      <aside className="card">
        <h3 className="font-medium mb-2">Popular in {suggest.region}</h3>
        <ul className="space-y-1">{suggest.local?.length ? suggest.local.map((p:any,i:number)=>(
          <li key={i}><button className="underline" onClick={()=>{setFrom(p.from); setTo(p.to);}}>{p.from} → {p.to}</button></li>
        )) : <li className="opacity-60">No local pairs detected</li>}</ul>
        <h3 className="font-medium mt-4 mb-2">Global majors</h3>
        <ul className="space-y-1">{majors.map((p:any,i:number)=>(
          <li key={i}><button className="underline" onClick={()=>{setFrom(p.from); setTo(p.to);}}>{p.from} → {p.to}</button></li>
        ))}</ul>
      </aside>
    </div>
  </main>);
}