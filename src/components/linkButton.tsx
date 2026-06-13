import { Link } from "react-router-dom";

export function LinkButton({ href, title }: { href: string; title: string }) {
  return (
    <Link
      to={href}
      className="py-2 px-5 bg-primary rounded-xl text-primary-foreground"
    >
      {title}
    </Link>
  );
}
