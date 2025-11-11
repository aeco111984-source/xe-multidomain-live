export default function Widgets(){
  return (<main className="container py-8"><h1 className="text-2xl font-semibold mb-3" style={{color:"var(--brand-500)"}}>Widgets</h1>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="card"><h3 className="font-medium mb-2">Interest Rates (World)</h3><iframe src="https://s.tradingview.com/embed-widget/economic-calendar/?locale=en#%7B%7D" style={{width:"100%",height:"420px",border:"0"}}/></div>
      <div className="card"><h3 className="font-medium mb-2">Oil & Metals Snapshot</h3><iframe src="https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%7D" style={{width:"100%",height:"420px",border:"0"}}/></div>
    </div>
  </main>);
}