"use client";
import { useEffect, useState } from "react";
import ContactModal from "@/components/ui/ContactModal";

const TRIGGER_HASH = "#talk";

export default function ContactModalManager() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === TRIGGER_HASH);
    sync(); // handle deep links like /#talk
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = () => {
    // Clear the hash without adding a history entry, so back-button
    // behaviour stays intuitive.
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
    setOpen(false);
  };

  return <ContactModal open={open} onClose={close} />;
}