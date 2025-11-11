import data from "@/data/providers.json";
export default function Providers(){
  return (<main className="container py-8">
    <h1 className="text-2xl font-semibold mb-2" style={{color:"var(--brand-500)"}}>Money Transfer Providers</h1>
    <div className="card overflow-auto">
      <table className="min-w-full text-sm">
        <thead><tr className="text-left border-b"><th className="py-2 pr-4">Provider</th><th className="py-2 pr-4">Fee</th><th className="py-2 pr-4">Delivery</th><th className="py-2 pr-4">Example Rate</th></tr></thead>
        <tbody>{data.rows.map((row:any,i:number)=>(<tr key={i} className="border-b">
          <td className="py-2 pr-4">{row.name}</td><td className="py-2 pr-4">{row.fee}</td><td className="py-2 pr-4">{row.delivery}</td><td className="py-2 pr-4">{row.example_rate}</td>
        </tr>))}</tbody>
      </table>
    </div>
  </main>);
}