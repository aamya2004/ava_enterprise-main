"use client";
import SideNav from "@/components/ui/sideNav";
import { useEffect } from 'react';

export default function Layout({ children }) {

  useEffect(() => {
    const root = document.documentElement;
    const gradientKeyframes = `
      @keyframes gradientAnimation {
        0% {
          background-position: 100% 0%;
        }
        30% {
          background-position: 0% 100%;
        }
        100% {
          background-position: 100% 0%;
        }
      }
    `;
    const gradientAnimation = `
      background-image: linear-gradient(-45deg, #4b0082, black, #4b0082);
      background-size: 400% 400%;
      animation: gradientAnimation 30s ease-in-out infinite; /* Use ease-in-out timing function */
    `;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = gradientKeyframes;
    document.head.appendChild(styleTag);
    root.style.cssText = gradientAnimation;

    return () => {
      document.head.removeChild(styleTag);
      root.style.cssText = '';
    };
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-col">
         <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:pt-8 md:pl-28">{children}</div>
    </div>
  );
}
