import type { Metadata } from 'next';
import './globals.css';
import {LanguageProvider} from './i18n/provider';
export const metadata: Metadata = { title: 'BeeLikeNative — Small lessons. Real conversations.', description: 'Build your English confidence with four free interactive A1 lessons. Learn everyday words, listen, practise, and take your next step toward A2.', icons: {icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><LanguageProvider>{children}</LanguageProvider></body></html> }
