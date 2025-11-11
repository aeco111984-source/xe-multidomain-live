import { useEffect } from "react";
const ID="tv-market-overview";
export default function Charts(){
  useEffect(()=>{
    if(document.getElementById(ID)) return;
    const s=document.createElement("script"); s.id=ID;
    s.src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"; s.async=true;
    s.innerHTML=JSON.stringify({
      colorTheme:"light",dateRange:"1D",showChart:true,locale:"en",isTransparent:false,showSymbolLogo:true,width:"100%",height:660,
      tabs:[
        {title:"FX Majors",symbols:["FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX:AUDUSD","FX:USDCAD","FX:USDCHF"].map(s=>({s}))},
        {title:"Metals & Energy",symbols:["TVC:GOLD","TVC:SILVER","TVC:USOIL","TVC:UKOIL"].map(s=>({s}))},
        {title:"Crypto",symbols:["BINANCE:BTCUSDT","BINANCE:ETHUSDT","BINANCE:SOLUSDT"].map(s=>({s}))}
      ]
    });
    document.querySelector(".tv-container")?.appendChild(s);
  },[]);
  return (<main className="container py-8"><h1 className="text-2xl font-semibold mb-3" style={{color:"var(--brand-500)"}}>Charts</h1><div className="card"><div className="tv-container" style={{minHeight:680}}/></div></main>);
}