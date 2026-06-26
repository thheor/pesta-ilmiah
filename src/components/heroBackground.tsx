import DarkCloud from "@/assets/background/dark-cloud.svg";
import LightCloud from "@/assets/background/light-cloud.svg";
import Sun from "@/assets/background/sun.svg";

export function HeroBackground() {
  return (
    <div className="left-0 top-0 absolute w-full h-full pointer-events-none inset-0 z-0">
      <div className="relative w-full h-full">
        <img
          src={DarkCloud}
          className="w-full absolute left-0 bottom-0 sm:-bottom-12 z-10"
        />
        <img
          src={LightCloud}
          className="w-full absolute left-0 bottom-5 sm:-bottom-12"
        />
        <img
          src={Sun}
          className="w-full absolute left-0 bottom-0 sm:-bottom-36 -z-10"
        />
      </div>
    </div>
  );
}
