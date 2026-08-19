import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/i18n/LanguageProvider'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'BMSoftware - Đối Tác Công Nghệ Tin Cậy' },
      { name: 'description', content: 'BMSoftware cung cấp dịch vụ quảng cáo, chuyển đổi số, giải pháp phần mềm và bán website chuyên nghiệp cho doanh nghiệp Việt Nam.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-950 text-white">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  )
}
