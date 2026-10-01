"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type TrustedClient = readonly [string, string];

export default function TrustedClientsSlider({ clients }: { clients: readonly TrustedClient[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % clients.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [clients.length]);

  const move = (direction: number) => {
    setActive((current) => (current + direction + clients.length) % clients.length);
  };

  return (
    <div className="trusted-clients-carousel">
      <div className="trusted-clients-carousel-topline">
        <span>SELECTED CLIENT NETWORK / {String(active + 1).padStart(2, "0")} — {String(clients.length).padStart(2, "0")}</span>
        <div className="trusted-clients-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous client">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next client">→</button>
        </div>
      </div>
      <div className="trusted-clients-viewport">
        <div className="trusted-clients-track" style={{ "--trusted-slide": active } as React.CSSProperties}>
          {[...clients, ...clients].map(([name, logo], index) => (
            <div className="trusted-client-card" key={`${name}-${index}`}>
              <div className="trusted-client-logo">
                <Image src={logo} alt={`${name} logo`} width={180} height={96} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
