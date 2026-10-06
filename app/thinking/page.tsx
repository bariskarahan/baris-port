import { Suspense } from 'react';
import Archive from '@/components/archive';
import { Label } from '@/components/site';
export const metadata={title:'thinking'};
export default function Thinking(){return <main id="main" className="shell page-main"><div className="page-intro"><Label>the public notebook / 01</Label><h1>thinking,<br/><em>in progress.</em></h1><p>Teardowns, observations, and questions about the systems that make us play. All current notes are illustrative samples.</p></div><Suspense fallback={<p>opening the notebook…</p>}><Archive/></Suspense></main>}
