import { UnderConstruction } from "@/components/shared/under-construction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("about");

export default function Page() {
  return <UnderConstruction routeKey="about" />;
}
