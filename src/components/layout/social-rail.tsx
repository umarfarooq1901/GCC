import { SOCIAL_LINKS } from "@/config/site";
import { SocialIcon } from "@/components/shared/social-icons";

/**
 * Floating social bar pinned to the right edge (as on the reference site).
 * Renders nothing until at least one profile URL is set in `config/site.ts`.
 */
export function SocialRail() {
  const links = SOCIAL_LINKS.filter((s) => s.href);
  if (links.length === 0) return null;
  return (
    <aside aria-label="Social media" className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 md:block">
      <ul className="flex flex-col gap-1 rounded-l-2xl bg-navy/90 px-2.5 py-3 shadow-xl">
        {links.map((s) => (
          <li key={s.network}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-lg text-white transition hover:bg-white/10 hover:text-saffron-400"
            >
              <SocialIcon network={s.network} className="size-[18px]" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
