import {
  siCloudflare,
  siDocker,
  siExpress,
  siFirebase,
  siGit,
  siLinux,
  siMongodb,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPodman,
  siPostgresql,
  siPostman,
  siReact,
  siRedis,
  siShadcnui,
  siTailwindcss,
  siTrpc,
  siTypescript,
} from "simple-icons";

const BRAND_ICONS = {
  cloudflare: siCloudflare,
  docker: siDocker,
  express: siExpress,
  firebase: siFirebase,
  git: siGit,
  linux: siLinux,
  mongodb: siMongodb,
  nextdotjs: siNextdotjs,
  nginx: siNginx,
  nodedotjs: siNodedotjs,
  podman: siPodman,
  postgresql: siPostgresql,
  postman: siPostman,
  react: siReact,
  redis: siRedis,
  shadcnui: siShadcnui,
  tailwindcss: siTailwindcss,
  trpc: siTrpc,
  typescript: siTypescript,
} as const;

const NEUTRAL_BRANDS = new Set(["express", "nextdotjs", "shadcnui"]);

export type BrandIconName = keyof typeof BRAND_ICONS;

export function BrandIcon({
  name,
  size = 20,
  className,
}: {
  name: BrandIconName;
  size?: number;
  className?: string;
}) {
  const icon = BRAND_ICONS[name];
  const color = NEUTRAL_BRANDS.has(name) ? "currentColor" : `#${icon.hex}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color }}
      fill="none"
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
