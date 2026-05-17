"use client";

import OS from "@/COMPONENTS/OS";
import FooterOS from "@/COMPONENTS/footer";
import type { WindowApp, Setting } from "@/TYPES/index";
import { useState } from "react";
import mikesenpai from "@/IMAGES/mike senpai.png";
import syncro from "@/IMAGES/Syncro logo.png";
import resetme from "@/IMAGES/logg.png";
import fivem from "@/IMAGES/five m.png";

export default function Home() {

  const [openWindows, setOpenWindows] = useState<WindowApp[]>([]);
  
  const [minimizedWindows, setMinimizedWindows] = useState<WindowApp[]>([]);

  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);

  const handleOpenSetting = () => {
     
    
  }
  
  const handleOpenWindow = (name: string, link: string, iconPath: any) => {
   
    const windowExists = openWindows.some(window => window.name === name);
   
    const minimizedExists = minimizedWindows.some(window => window.name === name);
    
    if (minimizedExists) {
     
      const windowToRestore = minimizedWindows.find(w => w.name === name);
      if (windowToRestore) {
        setMinimizedWindows(minimizedWindows.filter(w => w.name !== name));
        setOpenWindows([...openWindows, { ...windowToRestore, isOpen: true }]);
      }
    } else if (!windowExists) {
     
      setOpenWindows([...openWindows, { 
        name, 
        link, 
        iconPath, 
        isOpen: true 
      }]);
    }
  };
  
  const handleCloseWindow = (name: string) => {

    setOpenWindows(openWindows.filter(window => window.name !== name));
    setMinimizedWindows(minimizedWindows.filter(window => window.name !== name));
  };
  
  const handleMinimizeWindow = (name: string) => {
  
    const windowToMinimize = openWindows.find(w => w.name === name);
    if (windowToMinimize) {
      setOpenWindows(openWindows.filter(w => w.name !== name));
      setMinimizedWindows([...minimizedWindows, { ...windowToMinimize, isOpen: false }]);
    }
  };
  
  const handleRestoreWindow = (name: string) => {
  
    const windowToRestore = minimizedWindows.find(w => w.name === name);
    if (windowToRestore) {
      setMinimizedWindows(minimizedWindows.filter(w => w.name !== name));
      setOpenWindows([...openWindows, { ...windowToRestore, isOpen: true }]);
    }
  };

 
  const allWindows = [...openWindows, ...minimizedWindows];

  return (
    <>
      <div>
        <OS 
          onOpenWindow={handleOpenWindow}
          openWindows={openWindows}
          onCloseWindow={handleCloseWindow}
          onMinimizeWindow={handleMinimizeWindow}
        />
      </div>

      <div>
        <FooterOS 
          windows={allWindows}
          openWindows={openWindows}
          minimizedWindows={minimizedWindows}
          onRestoreWindow={handleRestoreWindow}
          onCloseWindow={handleCloseWindow}
        />
      </div>
    </>
  );
}