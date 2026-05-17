"use client";
import Image from "next/image";

export default function WindowsInfo({isOpen, onClose}: {isOpen: boolean; onClose: () => void}){
   
    if (!isOpen) return null;
    return (
        <>
         <div className="fixed bottom-0  transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-gray-800 rounded-lg shadow-2xl z-[200]">
        
            <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-xl">🪟</span>
                    <span className="font-medium">About Windows</span>
                </div>
                <button 
                    onClick={onClose}
                    className="hover:bg-red-600 px-2 rounded"
                >
                    ✕
                </button>
            </div>
            
         
            <div className="p-6 bg-gray-900 rounded-b-lg text-center">
                <div className="text-6xl mb-4">🪟</div>
                <h2 className="text-white text-xl font-bold mb-2">Windows Portfolio OS</h2>
                <p className="text-gray-300 text-sm mb-4">Version 1.0</p>
                <p className="text-gray-400 text-xs mb-2">© 2024 Your Name</p>
                <p className="text-gray-500 text-xs">This OS is a portfolio project</p>
                
                <button 
                    onClick={onClose}
                    className="mt-4 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 text-sm"
                >
                    OK
                </button>
            </div>
        </div>
        </>
    )
}