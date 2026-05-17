import type {Icons} from "@/TYPES/index";
import Image from "next/image";

export default function DesktopIcon ({name, iconPath, onClick, onDoubleClick}: Icons){

    return (
        <>
        <div className="w-[80px] m-5 sm:w-[85px] md:w-[90px] flex-shrink-0">

          <div className="desktop-icon bg-transparent hover:bg-blue-300/60  transition-all duration-150 py-1 px-0.5" onClick={onClick} onDoubleClick={onDoubleClick} onContextMenu={(e) => {
            e.preventDefault();
             console.log(`Right-clicked on ${name}`);
          }}>

          <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <Image
                  src={iconPath}
                  alt={name}
                  loading="lazy"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain cursor-pointer"
                />
              </div>
            
            <div className="mt-1 w-full">
              <h1 className="text-with-border text-[10px] sm:text-[11px] text-center break-words leading-tight px-0.5">
               {name.length > 11 ? name.substring(0, 12) + "..." : name}
              </h1>
            </div>

          </div>
          </div>

        </div>
        </>
    )
}