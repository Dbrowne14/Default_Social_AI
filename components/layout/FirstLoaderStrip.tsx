"use client";

import { useEffect, useState } from "react";
import LoaderStrip from "@/components/ui/LoaderStrip";

export default function FirstLoadLoaderStrip() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("loader-strip-shown");

    if (hasSeenLoader) return;

    sessionStorage.setItem("loader-strip-shown", "true");
    setShowLoader(true);

    const timer = setTimeout(() => setShowLoader(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return <LoaderStrip />;
}