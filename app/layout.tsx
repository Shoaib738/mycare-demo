import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'MoveMyCar UAE | Vehicle Collection & Delivery',description:'Premium vehicle collection, delivery and professional driver logistics across the UAE. Frontend concept demo.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
