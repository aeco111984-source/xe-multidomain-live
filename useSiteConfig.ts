import cfg from "@/config/site.config.json";
export type SiteEntry = { title:string; primaryColor:string; defaultPair:[string,string]; region:string; description:string; features?:Record<string,boolean> };
export function useSiteEntry(host?:string): SiteEntry {
  try{
    const h = (host || (typeof window!=='undefined' ? window.location.hostname : '') || '').toLowerCase();
    const entry = (cfg as any).sites[h] || (cfg as any).sites["forexrate.ai"];
    if (typeof document!=='undefined') document.documentElement.style.setProperty('--brand-500', entry.primaryColor);
    return entry;
  }catch{
    return { title:"FOREXRATE", primaryColor:"#FF7A00", defaultPair:["EUR","USD"], region:"Europe", description:"Fast converter" };
  }
}