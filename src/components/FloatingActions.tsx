import { useEffect, useState } from 'react'
import { ArrowUp, Mail, MapPin, MessageCircle, Phone, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const phoneNumber = '0369026023'
const phoneHref = `tel:+84${phoneNumber.slice(1)}`
const emailHref = 'mailto:bmsoftware.contact@gmail.com'
const zaloHref = `https://zalo.me/${phoneNumber}`
const mapHref = 'https://maps.app.goo.gl/hE7gp36EeYvNLzPg9'
const messengerHref = 'https://m.me/106249205828035'

const contactItems = [
  { label: 'Email', href: emailHref, icon: Mail, external: true },
  { label: 'Gọi điện', href: phoneHref, icon: Phone, external: true },
  { label: 'Messenger', href: messengerHref, icon: MessageCircle, external: true },
  { label: 'Zalo', href: zaloHref, icon: MessageCircle, external: true },
  { label: 'Google Maps', href: mapHref, icon: MapPin, external: true },
]

export function FloatingActions() {
  const [contactOpen, setContactOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 320)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:right-6">
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Về đầu trang"
          title="Về đầu trang"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 shadow-lg shadow-slate-950/30 transition-colors hover:border-blue-400 hover:text-white"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <div className="flex flex-col items-end gap-2" aria-label="Các phương thức liên hệ">
        {contactOpen && (
          <div className="flex flex-col items-end gap-2" role="menu">
            {contactItems.map(({ label, href, icon: Icon, external }, index) => {
              const className = 'floating-contact-link flex min-h-10 items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 text-sm font-medium text-slate-200 shadow-lg shadow-slate-950/30 transition-colors hover:border-blue-400 hover:text-white'
              const content = <><span>{label}</span><Icon className="h-4 w-4 text-blue-400" /></>

              return external ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className={className}
                  role="menuitem"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {content}
                </a>
              ) : (
                <Link key={label} to={href} className={className} role="menuitem" onClick={() => setContactOpen(false)}>
                  {content}
                </Link>
              )
            })}
          </div>
        )}

        <button
          type="button"
          onClick={() => setContactOpen((open) => !open)}
          aria-expanded={contactOpen}
          aria-label={contactOpen ? 'Đóng liên hệ' : 'Mở liên hệ'}
          title={contactOpen ? 'Đóng liên hệ' : 'Liên hệ'}
          className="floating-contact-button flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-950/40 transition-colors hover:bg-blue-500"
        >
          {contactOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </div>
  )
}