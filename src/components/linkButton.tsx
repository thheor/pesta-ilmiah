import { Link } from "react-router-dom";

export function LinkButton({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) {
  return (
    <button className={className}>
      <Link
        to={href}
        className={`py-2 px-5 bg-contain text-sm sm:text-lg bg-navy-primary hover:bg-navy-primary/80  text-white-primary shadow-lg rounded-xl`}
      >
        {title}
      </Link>
    </button>
  );
}
