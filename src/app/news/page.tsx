import { UnderConstruction } from "@/components/shared/under-construction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("news");

export default function Page() {
  return <UnderConstruction routeKey="news" />;
}
