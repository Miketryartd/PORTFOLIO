import type { WindowApp } from "@/TYPES/index";
import Image from "next/image";

export default function Footer({ 
  windows, 
  openWindows,
  minimizedWindows,
  onRestoreWindow, 
  onCloseWindow ,
  onOpenWindowsInfo
}: { 
  windows: WindowApp[];
  onOpenWindowsInfo: () => void;
  openWindows: WindowApp[];
  minimizedWindows: WindowApp[];
  onRestoreWindow: (name: string) => void;
  onCloseWindow: (name: string) => void;
}) {
  return (
    <footer className="w-full px-2 py-1 fixed bottom-0 h-12 z-100 bg-purple-800/10 text-white flex gap-1 items-center border-t border-gray-700">
        <div className="flex flex-row gap-2">
          <button onClick={onOpenWindowsInfo} className="cursor-pointer w-10 bg-pink-300/20 p-1 hover:bg-pink-300/40">M</button>
            <button className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-chrome"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 9h8.4" /><path d="M14.598 13.5l-4.2 7.275" /><path d="M9.402 13.5l-4.2 -7.275" /></svg></button>
        </div>
      {windows.map((window) => {
        const isOpen = openWindows.some(w => w.name === window.name);
        const isMinimized = minimizedWindows.some(w => w.name === window.name);
        
        return (
          <button
            key={window.name}
            onClick={() => {
              if (isMinimized) {
                onRestoreWindow(window.name); 
              } else if (isOpen) {
                onRestoreWindow(window.name); 
              }
            }}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm transition-colors ${
              isOpen ? 'bg-pink-400/50 hover:bg-pink-300/60 cursor-pointer' : 'bg-pink-400/50 hover:bg-pink-300/60 cursor-pointer'
            }`}
          >
            {window.iconPath && (
              <Image 
                src={window.iconPath} 
                alt={window.name} 
                width={16} 
                height={16} 
                className="w-4 h-4"
              />
            )}
            <span>{window.name}</span>
            {isMinimized && <span className="text-xs">(minimized)</span>}
          </button>
        );
      })}
      {windows.length === 0 && <p className="text-gray-400 text-sm ml-2"></p>}
    </footer>
  );
}