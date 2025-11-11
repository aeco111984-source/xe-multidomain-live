import pairs from "@/data/consumer_pairs.json";
type Pair = {from:string; to:string};
export function getSuggestedPairs(forcedRegion?:string){
  const region = forcedRegion || guessRegion();
  const local: Pair[] = region ? (pairs.regions as any)[region] : [];
  const global: Pair[] = (pairs.global as any);
  return { region: region || "Global", local, global };
}
function guessRegion(): keyof typeof pairs.regions | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (/Kolkata|Karachi|Dhaka|Kathmandu/i.test(tz)) return "SouthAsia";
    if (/Manila|Jakarta|Singapore|Kuala_Lumpur|Ho_Chi_Minh/i.test(tz)) return "SoutheastAsia";
    if (/Mexico|Bogota|Santiago|Lima/i.test(tz)) return "LatinAmerica";
    if (/Berlin|Paris|Warsaw|Bucharest|Budapest|London|Lisbon|Madrid/i.test(tz)) return "Europe";
    if (/Cairo|Lagos|Accra|Johannesburg|Nairobi|Riyadh|Dubai/i.test(tz)) return "MiddleEastAfrica";
  } catch {}
  return null;
}