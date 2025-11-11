export default function Calendar(){
  return (<main className="container py-8"><h1 className="text-2xl font-semibold mb-3" style={{color:"var(--brand-500)"}}>Economic Calendar</h1>
    <div className="card"><iframe src="https://s.tradingview.com/embed-widget/events/?locale=en#%7B%7D" style={{width:"100%",height:"680px",border:"0"}}/></div>
  </main>);
}