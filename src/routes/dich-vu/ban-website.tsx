import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Globe,
  Palette,
  Search,
  Zap,
  ShoppingCart,
  Calendar,
  Building2,
  CheckCircle,
  ArrowRight,
  Monitor,
  Star,
} from 'lucide-react'

export const Route = createFileRoute('/dich-vu/ban-website')({
  head: () => ({
    meta: [
      { title: 'Bán Website - TechPro Solutions' },
      { name: 'description', content: 'Thiết kế và bán website chuyên nghiệp: landing page, website công ty, website bán hàng, TMĐT. Tối ưu SEO, tốc độ nhanh, giá tốt nhất.' },
    ],
  }),
  component: BanWebsitePage,
})

const websiteTypes = [
  {
    icon: Building2,
    name: 'Website Công Ty',
    price: 'Từ 5.000.000đ',
    desc: 'Giới thiệu doanh nghiệp, sản phẩm dịch vụ. Thiết kế chuyên nghiệp, tạo uy tín với khách hàng.',
    features: ['Tối đa 10 trang', 'Form liên hệ', 'Tối ưu SEO cơ bản', 'Responsive mobile', 'Bàn giao mã nguồn'],
  },
  {
    icon: ShoppingCart,
    name: 'Website Bán Hàng',
    price: 'Từ 15.000.000đ',
    desc: 'E-commerce đầy đủ tính năng: quản lý sản phẩm, giỏ hàng, thanh toán online, quản lý đơn hàng.',
    features: ['Sản phẩm không giới hạn', 'Cổng thanh toán (VNPay, MoMo)', 'Quản lý tồn kho', 'Admin dashboard', 'Báo cáo doanh thu'],
  },
  {
    icon: Monitor,
    name: 'Landing Page',
    price: 'Từ 3.000.000đ',
    desc: 'Trang đích chuyên dụng cho chiến dịch marketing, tối ưu tỷ lệ chuyển đổi.',
    features: ['1 trang duy nhất', 'A/B testing ready', 'Tốc độ tải cực nhanh', 'CTA tối ưu', 'Tích hợp analytics'],
  },
  {
    icon: Calendar,
    name: 'Website Đặt Lịch',
    price: 'Từ 8.000.000đ',
    desc: 'Hệ thống đặt lịch hẹn online cho spa, phòng khám, salon, dịch vụ tư vấn.',
    features: ['Lịch đặt hẹn realtime', 'SMS & Email nhắc nhở', 'Quản lý nhân viên', 'Thanh toán online', 'App mobile kèm theo'],
  },
]

const features = [
  { icon: Zap, title: 'Tốc Độ Siêu Nhanh', desc: 'PageSpeed score 90+, Core Web Vitals đạt chuẩn Google.' },
  { icon: Search, title: 'SEO Chuyên Sâu', desc: 'On-page SEO, schema markup, sitemap, meta tags tối ưu.' },
  { icon: Palette, title: 'Thiết Kế Độc Đáo', desc: 'UI/UX thiết kế theo thương hiệu, không dùng template rẻ tiền.' },
  { icon: Globe, title: 'Hosting Tốc Độ Cao', desc: 'Hosting SSD tốc độ cao, SSL miễn phí, uptime 99.9%.' },
]

const portfolioItems = [
  { name: 'Spa & Beauty Center', category: 'Website + Đặt Lịch', result: '+250% đặt lịch online' },
  { name: 'Chuỗi F&B', category: 'Website Bán Hàng', result: '+180% đơn hàng online' },
  { name: 'Công ty Bất Động Sản', category: 'Website Công Ty', result: 'Top 3 Google trong 3 tháng' },
  { name: 'Cửa hàng Thời Trang', category: 'E-Commerce', result: '+320% doanh thu online' },
  { name: 'Phòng Khám Nha Khoa', category: 'Website + Đặt Lịch', result: '+400% lượt đặt lịch' },
  { name: 'Công ty Logistics', category: 'Website + Tracking', result: 'Tiết kiệm 50% chi phí CSKH' },
]

function BanWebsitePage() {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Thiết Kế & Bán Website
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Website Chuyên Nghiệp,<br />
            <span className="text-emerald-400">Bán Hàng Hiệu Quả</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Từ landing page đơn giản đến hệ thống thương mại điện tử phức tạp — chúng tôi thiết kế website
            đẹp, nhanh và tối ưu SEO để doanh nghiệp của bạn nổi bật trên Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lien-he" className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Báo Giá Ngay <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              '200+ Website đã bàn giao',
              'Bảo hành 12 tháng',
              'Miễn phí hosting 1 năm',
            ].map((b) => (
              <div key={b} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Loại Website Chúng Tôi Cung Cấp</h2>
          <p className="text-slate-400 text-center mb-12">Tất cả đều responsive, SEO-friendly và bàn giao mã nguồn hoàn chỉnh</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {websiteTypes.map((wt) => {
              const Icon = wt.icon
              return (
                <div key={wt.name} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-emerald-400 font-bold text-sm">{wt.price}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{wt.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{wt.desc}</p>
                  <ul className="space-y-1.5">
                    {wt.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Website Của Chúng Tôi Khác Gì?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="text-center p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-xs">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Một Số Dự Án Tiêu Biểu</h2>
          <p className="text-slate-400 text-center mb-12">Kết quả thực tế từ khách hàng của chúng tôi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map((p) => (
              <div key={p.name} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-slate-400">{p.category}</span>
                </div>
                <div className="font-medium text-white text-sm mb-2">{p.name}</div>
                <div className="text-emerald-400 text-xs font-semibold">{p.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Quy Trình Thiết Kế</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              { step: '1', title: 'Tư vấn & Báo giá', desc: '24h phản hồi' },
              { step: '2', title: 'Thiết kế giao diện', desc: '3-5 ngày' },
              { step: '3', title: 'Lập trình & test', desc: '5-14 ngày' },
              { step: '4', title: 'Bàn giao & training', desc: '1 ngày' },
            ].map((p) => (
              <div key={p.step} className="flex-1 text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm flex items-center justify-center mx-auto mb-2">
                  {p.step}
                </div>
                <div className="text-white text-sm font-medium">{p.title}</div>
                <div className="text-slate-400 text-xs mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Nhận báo giá website trong 24 giờ!</h2>
          <p className="text-slate-400 mb-8">Chia sẻ yêu cầu, chúng tôi sẽ tư vấn và báo giá chi tiết hoàn toàn miễn phí.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lien-he" className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Nhận Báo Giá Miễn Phí <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
