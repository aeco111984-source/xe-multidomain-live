import Link from "next/link";
import { useSiteEntry } from "@/components/useSiteConfig";
export default function Nav(){
  const entry = useSiteEntry();
  const base = [
    {href:"/", label:"Converter"},
    {href:"/providers", label:"Money Providers"},
    {href:"/charts", label:"Charts"},
    {href:"/live-prices", label:"Live Prices"},
    {href:"/advanced", label:"Advanced Engine"}
  ];
  const extra = [
    entry.features?.calendar ? {href:"/calendar", label:"Calendar"} : null,
    entry.features?.infographics ? {href:"/infographics", label:"Infographics"} : null,
    entry.features?.widgets ? {href:"/widgets", label:"Widgets"} : null,
    entry.features?.news ? {href:"/news", label:"News"} : null
  ].filter(Boolean) as {href:string;label:string}[];
  return (<nav className="border-b">
    <div className="container py-3 flex gap-4 items-center">
      <div className="font-semibold" style={{color:"var(--brand-500)"}}>{entry.title}</div>
      <div className="flex gap-3 text-sm flex-wrap">
        {[...base, ...extra].map(t=>(<Link key={t.href} href={t.href} className="hover:underline">{t.label}</Link>))}
      </div>
    </div>
  </nav>);
}