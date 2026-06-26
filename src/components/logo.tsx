import logoImage from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`flex gap-2 items-center ${className}`}>
      <img src={logoImage} alt="logo" className="w-10 h-10" />
    </Link>
  );
}
