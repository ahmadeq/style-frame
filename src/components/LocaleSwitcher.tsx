"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPathname = segments.join("/");
    router.push(newPathname);
  };

  return (
    <div>
      <button
        onClick={() => switchLocale("en")}
        disabled={pathname.startsWith("/en")}
      >
        English
      </button>
      <button
        onClick={() => switchLocale("ar")}
        disabled={pathname.startsWith("/ar")}
      >
        Arabic
      </button>
    </div>
  );
};

export default LocaleSwitcher;
