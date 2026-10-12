'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import type { Locale } from '@/lib/i18n';
import { createPenSequence } from '@/lib/marker-lettering';

export default function MarkerDemo({ locale }: { locale: Locale }) {
  const tr = locale === 'tr';
  const sequence = useMemo(() => createPenSequence(locale), [locale]);
  const container = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLImageElement>(null);
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [complete, setComplete] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [progress, setProgress] = useState(0);
  const elapsed = useRef(0);
  const playing = started && !paused && !complete;

  useEffect(() => {
    // A cached image can finish before React attaches the load handler.
    if (photo.current?.complete) setImageReady(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!imageReady) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: .25 });
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, [imageReady]);

  useEffect(() => {
    if (!playing || reduceMotion) return;
    let previous = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      elapsed.current += (now - previous) * speed;
      previous = now;
      const value = Math.min(1, elapsed.current / sequence.duration);
      setProgress(value);
      if (value === 1) setComplete(true);
    }, 80);
    return () => window.clearInterval(timer);
  }, [playing, reduceMotion, sequence.duration, speed, run]);

  function replay(nextSpeed = speed) {
    elapsed.current = 0;
    setProgress(0);
    setComplete(false);
    setPaused(false);
    setStarted(true);
    setSpeed(nextSpeed);
    setRun(value => value + 1);
  }

  const status = reduceMotion || complete ? (tr ? 'notlar tamamlandı' : 'notes complete') : !started ? (tr ? 'sahne hazırlanıyor' : 'setting the scene') : paused ? (tr ? 'bir an duralım' : 'a little pause') : tr ? 'kalem hareket ediyor' : 'the pen is moving';

  return <section className="marker-study" aria-label={tr ? 'Animasyonlu kalem denemesi' : 'Animated pen study'}>
    <div className="marker-scene" ref={container} data-playing={playing} data-reduced={reduceMotion}>
      {/* A single shared coordinate system keeps the marks attached to their subjects at every viewport size. */}
      <img ref={photo} className="marker-photo" src="/images/deneme-workspace.webp" alt={tr ? 'Mavi ve mor ışıkta bir çalışma masası; solda telefon, sağda açık bir defter ve kahve.' : 'A desk in blue and violet light, with a phone on the left and an open notebook and coffee on the right.'} onLoad={() => setImageReady(true)} onError={() => setImageReady(true)} />
      <div className="marker-photo-shade" />
      <div className="marker-scene-meta" aria-hidden="true"><span>01 / {tr ? 'gece notları' : 'after-hours notes'}</span><span>{tr ? 'biraz daha yakından' : 'a little closer'}</span></div>
      <svg key={run} className="marker-overlay" viewBox="0 0 1200 750" fill="none" aria-label={tr ? 'Yakından bak. Bir hamle daha? Yeni bir soru. Telefonu ve defteri işaret eden el çizimi oklar.' : 'Look closer. One more move? A new question. Hand-drawn arrows point to the phone and notebook.'} role="img">
        {sequence.strokes.map((stroke, index) => <path key={index} className="marker-stroke" d={stroke.d} transform={stroke.transform} pathLength="1" strokeWidth={stroke.width} style={{ '--pen-delay': `${stroke.start / speed}ms`, '--pen-duration': `${stroke.duration / speed}ms` } as CSSProperties} />)}
      </svg>
    </div>
    <div className="marker-controls">
      <div className="marker-status"><span className="marker-status-dot" data-active={playing && !reduceMotion}/><span role="status">{status}</span></div>
      <div className="marker-actions">
        <label className="marker-speed"><span>{tr ? 'yazım hızı' : 'pen speed'}</span><select value={speed} onChange={event => replay(Number(event.target.value))}><option value={.7}>{tr ? 'yavaş' : 'slow'}</option><option value={1}>{tr ? 'normal' : 'normal'}</option><option value={1.5}>{tr ? 'hızlı' : 'fast'}</option></select></label>
        <button type="button" className="marker-pause" disabled={reduceMotion || complete || !started} onClick={() => setPaused(value => !value)} aria-label={paused ? (tr ? 'Animasyona devam et' : 'Resume animation') : (tr ? 'Animasyonu duraklat' : 'Pause animation')}>
          {paused ? <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m5 3 8 5-8 5z" fill="currentColor"/></svg> : <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3v10M11 3v10" stroke="currentColor" strokeWidth="2"/></svg>}
        </button>
        <button type="button" className="marker-replay" onClick={() => replay()}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 8a6 6 0 1 1 0 5M4 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>{tr ? 'yeniden çiz' : 'draw again'}</button>
      </div>
      <div className="marker-progress" aria-hidden="true"><span style={{ width: `${reduceMotion ? 100 : progress * 100}%` }}/></div>
    </div>
  </section>;
}
