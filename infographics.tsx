export default function Infographics(){
  const imgs = ["/infographics/sample1.png","/infographics/sample2.png","/infographics/sample3.png"];
  return (<main className="container py-8"><h1 className="text-2xl font-semibold mb-3" style={{color:"var(--brand-500)"}}>Infographics</h1>
    <div className="grid md:grid-cols-3 gap-4">{imgs.map((src,i)=>(<div key={i} className="card" style={{height:220,display:"flex",alignItems:"center",justifyContent:"center"}}>Placeholder {i+1}</div>))}</div>
  </main>);
}