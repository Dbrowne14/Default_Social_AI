"use client";

import { useEffect, useState } from "react";
import LoaderStrip from "@/components/ui/LoaderStrip";

export default function FirstLoaderStrip() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === "undefined") return false;

    const hasSeenLoader = sessionStorage.getItem("loader-strip-shown");

    if (hasSeenLoader) return false;

    sessionStorage.setItem("loader-strip-shown", "true");
    return true;
  });

  useEffect(() => {
    if (!showLoader) return;

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [showLoader]);

  if (!showLoader) return null;

  return <LoaderStrip />;
}