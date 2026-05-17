'use client';

import { useState, useEffect, useRef } from "react";
import type { WindowApp } from "@/TYPES/index";

export default function AppWindow({ name, isOpen, link, iconPath, onClose, onMinimize }: WindowApp & { 
  onClose?: () => void;
  onMinimize?: () => void;
}) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [size, setSize] = useState({ width: 800, height: 600 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const windowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(isOpen);
        if (isOpen) {
            setIsMinimized(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.(); 
    };

    const handleMinimize = () => {
        setIsVisible(false);
        setIsMinimized(true);
        onMinimize?.(); 
       
    };

    const handleMaximize = () => {
        if (!isMaximized) {
            setPosition({ x: 0, y: 0 });
            setSize({ width: window.innerWidth, height: window.innerHeight });
        } else {
            setPosition({ x: 100, y: 100 });
            setSize({ width: 800, height: 600 });
        }
        setIsMaximized(!isMaximized);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (isMaximized) return;
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart]);

    if (!isVisible) return null;

    return (
        <div
            ref={windowRef}
            className="fixed bg-gray-800 rounded-lg shadow-2xl flex flex-col overflow-hidden z-50"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
                resize: 'both',
                minWidth: '300px',
                minHeight: '200px'
            }}
        >
            <div 
                className="bg-purple-800 text-white px-3 py-2 flex justify-between items-center cursor-move"
                onMouseDown={handleMouseDown}
            >
                <div className="flex items-center gap-2">
                    {iconPath && (
                        <img src={typeof iconPath === 'string' ? iconPath : iconPath.src} alt={name} className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{name}</span>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={handleMinimize}
                        className="hover:bg-blue-500 px-2 rounded text-sm"
                    >
                        ─
                    </button>
                    <button 
                        onClick={handleMaximize}
                        className="hover:bg-blue-500 px-2 rounded text-sm"
                    >
                        □
                    </button>
                    <button 
                        onClick={handleClose}
                        className="hover:bg-red-600 px-2 rounded text-sm"
                    >
                        ✕
                    </button>
                </div>
            </div>

            <div className="flex-1 bg-white overflow-hidden">
                <iframe
                    src={link}
                    title={name}
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                    allow="fullscreen"
                />
            </div>
        </div>
    );
}