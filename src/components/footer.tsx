import Logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="w-screen  h-fill">
      <div className="flex items-center">
        <img src={Logo} className="w-10 h-10 sm:w-100 sm:h-100" />
        <h2 className="sm:text-[300px] tracking-wide">SRSC</h2>
      </div>
    </footer>
  );
}
