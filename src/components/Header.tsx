import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageProvider'

const services = [
  { name: 'Dịch Vụ Quảng Cáo', href: '/dich-vu/quang-cao' },
  { name: 'Chuyển Đổi Số', href: '/dich-vu/chuyen-doi-so' },
  { name: 'Giải Pháp Phần Mềm', href: '/dich-vu/giai-phap-phan-mem' },
  { name: 'Bán Website', href: '/dich-vu/ban-website' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const servicesHoverTimeout = useRef<number | null>(null)

  const clearServicesHoverTimeout = () => {
    if (servicesHoverTimeout.current) {
      window.clearTimeout(servicesHoverTimeout.current)
      servicesHoverTimeout.current = null
    }
  }

  const openServicesMenu = () => {
    clearServicesHoverTimeout()
    setServicesOpen(true)
  }

  const closeServicesMenu = () => {
    clearServicesHoverTimeout()
    servicesHoverTimeout.current = window.setTimeout(() => {
      setServicesOpen(false)
    }, 150)
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('bmsoftware-theme')
    const lightTheme = savedTheme === 'light'
    setIsLightTheme(lightTheme)
    document.body.classList.toggle('theme-light', lightTheme)

    return () => {
      clearServicesHoverTimeout()
    }
  }, [])

  const toggleTheme = () => {
    const nextIsLightTheme = !isLightTheme
    setIsLightTheme(nextIsLightTheme)
    document.body.classList.toggle('theme-light', nextIsLightTheme)
    window.localStorage.setItem('bmsoftware-theme', nextIsLightTheme ? 'light' : 'dark')
  }

  const themeLabel = isLightTheme ? 'Chuyển sang giao diện đêm' : 'Chuyển sang giao diện ngày'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center p-1 shrink-0">
              <img
                src={isLightTheme ? '/images/BMLogoBlack.png' : '/images/BMLogoWhite.png'}
                alt="BMSoftware"
                className="w-full h-full object-contain"
              />
            </div>
            {/* <span className="text-white font-bold text-lg">BMSoftware</span> */}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Trang Chủ
            </Link>
            <div className="relative py-2" onMouseEnter={openServicesMenu} onMouseLeave={closeServicesMenu}>
              <button className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors text-sm font-medium">
                Dịch Vụ <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-slate-800 rounded-xl border border-slate-700 shadow-xl py-2"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/ve-chung-toi" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Về Chúng Tôi
            </Link>
            <Link to="/lien-he" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Liên Hệ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
              title={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
              className="min-w-10 h-10 rounded-lg border border-slate-700 px-2 text-slate-300 hover:text-white hover:border-blue-400 transition-colors flex items-center justify-center text-xs font-bold"
            >
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              className="w-10 h-10 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-blue-400 transition-colors flex items-center justify-center"
            >
              {isLightTheme ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <Link
              to="/lien-he"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25"
            >
              Tư Vấn Miễn Phí
            </Link>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
                className="flex items-center gap-2 px-2 py-2 text-slate-300 hover:text-white text-sm text-left"
              >
                <span className="font-bold text-xs">{language === 'vi' ? 'EN' : 'VI'}</span>
                {language === 'vi' ? 'English' : 'Tiếng Việt'}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={themeLabel}
                className="flex items-center gap-2 px-2 py-2 text-slate-300 hover:text-white text-sm text-left"
              >
                {isLightTheme ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {isLightTheme ? 'Giao diện đêm' : 'Giao diện ngày'}
              </button>
              <Link to="/" className="px-2 py-2 text-slate-300 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>Trang Chủ</Link>
              {services.map((s) => (
                <Link key={s.href} to={s.href} className="px-2 py-2 text-slate-300 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
                  {s.name}
                </Link>
              ))}
              <Link to="/ve-chung-toi" className="px-2 py-2 text-slate-300 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>Về Chúng Tôi</Link>
              <Link to="/lien-he" className="px-2 py-2 text-slate-300 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>Liên Hệ</Link>
              <Link
                to="/lien-he"
                className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold text-center"
                onClick={() => setMenuOpen(false)}
              >
                Tư Vấn Miễn Phí
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
