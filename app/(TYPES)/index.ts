
import { StaticImageData } from "next/image";

export interface Header {
}

export type Icons = {
   name: string;
   iconPath: string | StaticImageData;
   link: string;
   onClick: () => void;
   onDoubleClick?: () => void;
}

export type WindowApp = {
   isOpen: boolean;
   name: string;
   iconPath?: string | StaticImageData;
   link: string;
}



export type Footer = {
   windows: WindowApp;
   openedWindows: string[];
}

export type WindowsInfo = {
   isOpen: boolean;
   onClick: () => void;
   onClose?: () => void;
}