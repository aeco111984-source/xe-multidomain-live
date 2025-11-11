import { useEffect } from "react";
export default function Live(){
  useEffect(()=>{
    if(!document.getElementById("tv-ticker")){
      const s=document.createElement("script");
      s.id="tv-ticker"; s.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"; s.async=true;
      s.innerHTML=JSON.stringify({
        symbols:[
          {proName:"FX:EURUSD",title:"EUR/USD"},{proName:"FX:GBPUSD",title:"GBP/USD"},{proName:"FX:USDJPY",title:"USD/JPY"},
          {proName:"FX:AUDUSD",title:"AUD/USD"},{proName:"FX:USDCAD",title:"USD/CAD"},{proName:"FX:USDCHF",title:"USD/CHF"},
          {proName:"BINANCE:BTCUSDT",title:"BTC/USDT"}
        ], showSymbolLogo:true, colorTheme:"light", isTransparent:false, displayMode:"adaptive", locale:"en"
      });
      document.querySelector(".ticker")?.appendChild(s);
    }
  },[]);
  return (<main className="container py-8">
    <h1 className="text-2xl font-semibold mb-3" style={{color:"var(--brand-500)"}}>Live Prices</h1>
    <div className="card mb-6"><div className="ticker"/></div>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="card"><h3 className="font-medium mb-2">Forex Cross Rates</h3><iframe src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%7D" style={{width:"100%",height:"420px",border:"0"}}/></div>
      <div className="card"><h3 className="font-medium mb-2">Forex Heat Map</h3><iframe src="https://s.tradingview.com/embed-widget/forex-heat-map/?locale=en#%7B%7D" style={{width:"100%",height:"420px",border:"0"}}/></div>
    </div>
  </main>);
}