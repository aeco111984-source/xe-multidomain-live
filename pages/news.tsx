import { useEffect, useState } from "react"; import { useSiteEntry } from "@/components/useSiteConfig";
type Item = { title:string; link:string };
export default function News(){
  const entry = useSiteEntry(); const [items,setItems]=useState<Item[]>([]);
  useEffect(()=>{ setItems([{title:`${entry.defaultPair[0]}/${entry.defaultPair[1]} latest headlines`,link:"#"},{title:"FX roundup and calendar",link:"#"}]); },[entry.defaultPair.join("-")]);
  return (<main className="container py-8"><h1 className="text-2xl font-semibold mb-3" style={{color:"var(--brand-500)"}}>News</h1>
    <div className="grid gap-3">{items.map((it,i)=>(<a key={i} href={it.link} className="card hover:shadow-lg">{it.title}</a>))}</div>
    <p className="text-xs opacity-60 mt-3">Replace placeholder feed with curated RSS later.</p>
  </main>);
}