/** Product screenshot that follows the docs theme: `<name>-light.webp` in light mode, `<name>-dark.webp` in dark mode. */
export function Screenshot({ name, alt, width = 1440, height = 900 }: { name: string; alt: string; width?: number; height?: number }) {
  const base = `/screenshots/${name}`;
  return (
    <span className="my-6 block overflow-hidden rounded-xl border">
      <img src={`${base}-light.webp`} alt={alt} width={width} height={height} loading="lazy" className="!my-0 block h-auto w-full dark:hidden" />
      <img src={`${base}-dark.webp`} alt={alt} width={width} height={height} loading="lazy" className="!my-0 hidden h-auto w-full dark:block" />
    </span>
  );
}
