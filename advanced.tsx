import { useEffect, useState } from "react";
type Row = { code:string; amount:number; result?:number };
export default function Advanced(){
  const [base,setBase]=useState("USD");
  const [rows,setRows]=useState<Row[]>([{code:"EUR",amount:100},{code:"GBP",amount:100},{code:"JPY",amount:10000}]);
  async function convert(){
    try{
      const r = await fetch(`https://api.exchangerate.host/latest?base=${encodeURIComponent(base)}`);
      const j = await r.json(); const rates = j?.rates || {};
      setRows(prev => prev.map(row => ({...row, result: rates[row.code] ? row.amount * rates[row.code] : undefined })));
    }catch{}
  }
  useEffect(()=>{ convert(); },[base]);
  return (<main className="container py-8">
    <h1 className="text-2xl font-semibold mb-3" style={{color:"var(--brand-500)"}}>Advanced Conversion Engine</h1>
    <div className="card mb-4"><div className="grid sm:grid-cols-3 gap-3">
      <div><label className="block text-sm mb-1">Base Currency</label>
        <input value={base} onChange={e=>setBase(e.target.value.toUpperCase())} className="w-full border rounded-md px-3 py-2" placeholder="USD"/></div>
      <div className="sm:col-span-2 flex items-end"><button className="btn" onClick={convert}>Recalculate</button></div>
    </div></div>
    <div className="card overflow-auto">
      <table className="min-w-full text-sm"><thead><tr className="text-left border-b"><th className="py-2 pr-4">Currency</th><th className="py-2 pr-4">Amount</th><th className="py-2 pr-4">Converted</th></tr></thead>
        <tbody>{rows.map((row,i)=>(<tr key={i} className="border-b">
          <td className="py-2 pr-4"><input value={row.code} onChange={e=>{ const v=e.target.value.toUpperCase(); setRows(r=>r.map((x,ix)=> ix===i? {...x,code:v}:x)); }} className="border rounded px-2 py-1 w-24"/></td>
          <td className="py-2 pr-4"><input type="number" value={row.amount} onChange={e=>{ const v=Number(e.target.value)||0; setRows(r=>r.map((x,ix)=> ix===i? {...x,amount:v}:x)); }} className="border rounded px-2 py-1 w-28"/></td>
          <td className="py-2 pr-4">{row.result !== undefined ? row.result.toFixed(4) : "—"}</td>
        </tr>))}</tbody>
      </table>
    </div>
  </main>);
}