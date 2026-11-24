/** Product screenshot that follows the docs theme: `<name>-light.webp` in light mode, `<name>-dark.webp` in dark mode. */
export function Screenshot({
  name,
  alt,
  width = 1280,
  height = 577,
  priority = false,
}: {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const base = `/screenshots/${name}`;
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : undefined;
  const lightSrcSet = priority ? `${base}-light-720.webp 720w, ${base}-light.webp 1280w` : undefined;
  const darkSrcSet = priority ? `${base}-dark-720.webp 720w, ${base}-dark.webp 1280w` : undefined;
  const sizes = priority ? '(max-width: 768px) 100vw, 860px' : undefined;
  return (
    <span className="my-6 block overflow-hidden rounded-xl border">
      <img
        src={`${base}-light.webp`}
        srcSet={lightSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        className="!my-0 block h-auto w-full dark:hidden"
      />
      <img
        src={`${base}-dark.webp`}
        srcSet={darkSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        className="!my-0 hidden h-auto w-full dark:block"
      />
    </span>
  );
}
