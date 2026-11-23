import { UnderConstruction } from "@/components/shared/under-construction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("terms");

export default function Page() {
  return <UnderConstruction routeKey="terms" />;
}
