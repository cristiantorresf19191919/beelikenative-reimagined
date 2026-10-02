'use client';
import {createContext,useContext,useEffect,useState,useCallback} from 'react';
import messages from './messages.json';
export const languages=[['en','English'],['ar','العربية'],['fr','Français'],['de','Deutsch'],['es','Español'],['hi','हिन्दी'],['pt','Português'],['it','Italiano'],['ca','Català'],['ru','Русский']] as const;
export type Locale=typeof languages[number][0];
type Key=keyof typeof messages.en;
const keys=Object.keys(messages.en) as Key[];
const Context=createContext({locale:'en' as Locale,setLocale:(_l:Locale)=>{},t:(key:Key):string=>messages.en[key],tr:(text:string):string=>text});
export function LanguageProvider({children}:{children:React.ReactNode}){
 const [locale,setLocaleState]=useState<Locale>('en');
 useEffect(()=>{try{const saved=localStorage.getItem('bee-language');if(languages.some(([code])=>code===saved))setLocaleState(saved as Locale)}catch{}},[]);
 useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr'},[locale]);
 const setLocale=useCallback((value:Locale)=>{setLocaleState(value);try{localStorage.setItem('bee-language',value)}catch{}},[]);
 const t=(key:Key):string=>messages[locale][key]??messages.en[key];
 const tr=(text:string):string=>{const key=keys.find(k=>messages.en[k].trim()===text.trim());return key?t(key):text};
 return <Context.Provider value={{locale,setLocale,t,tr}}>{children}</Context.Provider>
}
export const useLanguage=()=>useContext(Context);
export function LanguageSwitcher(){const {locale,setLocale,t}=useLanguage();return <label className="language-switch"><span aria-hidden="true">◎</span><span className="sr-only">{t('language')}</span><select aria-label={t('language')} value={locale} onChange={e=>setLocale(e.target.value as Locale)}>{languages.map(([value,label])=><option key={value} value={value} lang={value}>{label}</option>)}</select></label>}
