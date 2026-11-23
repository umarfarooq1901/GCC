import { UnderConstruction } from "@/components/shared/under-construction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("agenda");

export default function Page() {
  return <UnderConstruction routeKey="agenda" />;
}
