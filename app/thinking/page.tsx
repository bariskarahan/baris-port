import { Suspense } from 'react';
import Archive from '@/components/archive';
import { Label, NotebookArt } from '@/components/site';
export const metadata={title:'thinking'};
export default function Thinking(){return <main id="main" className="shell page-main"><div className="page-intro"><div><Label>01 / the public notebook</Label><h1>thinking.<br/>in progress.</h1></div><div className="intro-aside"><NotebookArt kind="notebook" className="intro-art" priority/><p>Teardowns, observations, and questions about the systems that make us play.<span className="intro-meta">Current notes are illustrative samples.</span></p></div></div><Suspense fallback={<p>opening the notebook…</p>}><Archive/></Suspense></main>}
