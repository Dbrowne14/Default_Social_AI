"use client";

import { useEffect, useState } from "react";

export default function LoaderStrip() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return <div className="loader-strip" aria-hidden="true" />;
}

