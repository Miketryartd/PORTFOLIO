import type { Icons } from "@/TYPES/index";
import mikesenpai from "@/IMAGES/mike senpai.png";
import resetme from "@/IMAGES/logg.png";
import fivem from "@/IMAGES/five m.png";
import syncro from "@/IMAGES/Syncro logo.png";
import DesktopIcon from "@/COMPONENTS/DesktopIcon";

export default function IconsList({ onOpenWindow }: { onOpenWindow: (name: string, link: string, iconPath: any) => void }) {
  
  const apps: Icons[] = [
    {
      name: "Mike Senpai",
      iconPath: mikesenpai,
      link: "https://mike-senpai.vercel.app/Main",
      onClick: () => console.log("Clicked Mike Senpai"),
      onDoubleClick: () => onOpenWindow("Mike Senpai", "https://mike-senpai.vercel.app/Main", mikesenpai)
    },
    {
      name: "Syncro",
      link: "https://syncro-test-ground.onrender.com/",
      iconPath: syncro,
      onClick: () => console.log("Clicked Syncro"),
      onDoubleClick: () => onOpenWindow("Syncro", "https://syncro-test-ground.onrender.com/", syncro)
    },
    {
      name: "reset me",
      link: "https://reset-me.vercel.app/Home",
      iconPath: resetme,
      onClick: () => console.log("Clicked reset me"),
      onDoubleClick: () => onOpenWindow("reset me", "https://reset-me.vercel.app/Home", resetme)
    },
    {
      name: "Five M",
      iconPath: fivem,
      link: "https://fivembusiness.vercel.app/",
      onClick: () => console.log("Clicked Five M"),
      onDoubleClick: () => onOpenWindow("Five M", "https://fivembusiness.vercel.app/", fivem)
    }
  ];

  return (
    <div className="desktop-icons-container flex flex-col gap-0">
      {apps.map((app, index) => (
        <DesktopIcon
          key={index}
          name={app.name}
          iconPath={app.iconPath}
          link={app.link}
          onClick={app.onClick}
          onDoubleClick={app.onDoubleClick}
        />
      ))}
    </div>
  );
}