import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import vi from './vi.json'
import en from './en.json'

type Language = 'vi' | 'en'
type Messages = Record<string, string>

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)
const messages: Record<Language, Messages> = { vi, en }
const originalText = new WeakMap<Text, string>()
const originalAttributes = new WeakMap<Element, Partial<Record<'placeholder' | 'title' | 'aria-label' | 'alt', string>>>()

function normalize(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function translateDocument(language: Language) {
  const dictionary = messages[language]
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  const textNodes: Text[] = []
  let node = walker.nextNode()

  while (node) {
    const parent = (node as Text).parentElement
    if (parent && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
      textNodes.push(node as Text)
    }
    node = walker.nextNode()
  }

  textNodes.forEach((textNode) => {
    const current = textNode.nodeValue ?? ''
    const source = originalText.get(textNode) ?? normalize(current)
    originalText.set(textNode, source)
    const translated = dictionary[source]
    if (translated) {
      const leading = current.match(/^\s*/)?.[0] ?? ''
      const trailing = current.match(/\s*$/)?.[0] ?? ''
      const nextValue = `${leading}${translated}${trailing}`
      if (current !== nextValue) textNode.nodeValue = nextValue
    }
  })

  document.querySelectorAll<HTMLElement>('[placeholder], [title], [aria-label], img[alt]').forEach((element) => {
    const stored = originalAttributes.get(element) ?? {}
    for (const attribute of ['placeholder', 'title', 'aria-label', 'alt'] as const) {
      const value = element.getAttribute(attribute)
      if (value && !stored[attribute]) stored[attribute] = value
      const source = stored[attribute]
      if (source && dictionary[normalize(source)]) {
        const translated = dictionary[normalize(source)]
        if (value !== translated) element.setAttribute(attribute, translated)
      }
    }
    originalAttributes.set(element, stored)
  })

  document.documentElement.lang = language
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('bmsoftware-language')
    if (savedLanguage === 'en' || savedLanguage === 'vi') setLanguageState(savedLanguage)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('bmsoftware-language', language)
    translateDocument(language)

    const observer = new MutationObserver(() => translateDocument(language))
    observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true })
    return () => observer.disconnect()
  }, [language])

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage: setLanguageState,
    toggleLanguage: () => setLanguageState((current) => current === 'vi' ? 'en' : 'vi'),
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
