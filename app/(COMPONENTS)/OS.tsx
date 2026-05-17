"use client";

import IconsList from "@/COMPONENTS/IconList";
import Image from "next/image";
import type { WindowApp } from "@/TYPES/index";
import wallpaper from "@/IMAGES/wallpaper.jpg";
import AppWindow from "@/COMPONENTS/app.window";

export default function OS({ 
  onOpenWindow, 
  openWindows, 
  onCloseWindow,
  onOpenWindowsInfo,
  onMinimizeWindow
  
}: { 
  onOpenWindow: (name: string, link: string, iconPath: any) => void;
  openWindows: WindowApp[];
  onOpenWindowsInfo: () => void;
  onCloseWindow: (name: string) => void;
  onMinimizeWindow: (name: string) => void;
}) {
  
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
   
        <Image
          src={wallpaper}
          alt="Desktop Wallpaper"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        
   
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
      
        <div className="relative z-10 w-full h-full">
          <div className="desktop" onContextMenu={(e) => e.preventDefault()}>
            <IconsList onOpenWindow={onOpenWindow} />
            
            {openWindows.map((window) => (
              <AppWindow
                key={window.name}
                name={window.name}
                link={window.link}
                iconPath={window.iconPath}
                isOpen={window.isOpen}
                onClose={() => onCloseWindow(window.name)}
                onMinimize={() => onMinimizeWindow(window.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}