'use client';
import { useRef } from 'react';

// A framed hero image that opens a full-screen viewer, like a gallery lightbox.
export default function WorldMap({ alt, openLabel, closeLabel }: { alt: string; openLabel: string; closeLabel: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <button type="button" className="hero-frame" onClick={() => dialog.current?.showModal()} aria-label={openLabel}>
      <img src="/images/notebook-world-map.webp" alt={alt} width="1268" height="784" fetchPriority="high"/>
    </button>
    <dialog ref={dialog} className="map-viewer" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button type="button" className="map-viewer-close" onClick={() => dialog.current?.close()} aria-label={closeLabel}>×</button>
      <img src="/images/notebook-world-map.webp" alt={alt} width="1268" height="784"/>
    </dialog>
  </>;
}
