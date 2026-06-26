import React from "react";

// 1. Import the SVGs as raw URL strings (Vite default behavior)
const svgModules = import.meta.glob<string>("../assets/background/*.svg", {
  eager: true,
  import: "default",
});

const icons: Record<string, string> = {};

Object.entries(svgModules).forEach(([path, url]) => {
  const name = path.split("/").pop()?.replace(".svg", "") || path;
  icons[name] = url;
});

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  size?: number;
}

export function Background({ name, size = 24, ...props }: IconProps) {
  const src = icons[name];

  if (!src) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <img src={src} width={size} height={size} alt={`${name} icon`} {...props} />
  );
}
