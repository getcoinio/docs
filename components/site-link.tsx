import { ArrowUpRight } from 'lucide-react';

/** Sidebar card that leads back to the product site. */
export function SiteLink() {
  return (
    <a
      href="https://getcoinio.me"
      className="group flex items-center gap-3 rounded-lg border bg-fd-card p-2 pe-3 transition-colors hover:border-fd-primary/40 hover:bg-fd-accent/40"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-md bg-fd-primary/10">
        <img src="/mark-light.svg" alt="" width={22} height={22} className="size-[22px] dark:hidden" />
        <img src="/mark-dark.svg" alt="" width={22} height={22} className="hidden size-[22px] dark:block" />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="text-sm font-medium text-fd-foreground">Coinio website</span>
        <span className="text-xs text-fd-muted-foreground">getcoinio.me</span>
      </span>
      <ArrowUpRight className="ms-auto size-4 text-fd-muted-foreground transition-colors group-hover:text-fd-primary" />
    </a>
  );
}
