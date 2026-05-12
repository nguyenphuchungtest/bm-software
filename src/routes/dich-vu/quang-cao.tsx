import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Megaphone,
  Target,
  BarChart3,
  TrendingUp,
  Search,
  Share2,
  Mail,
  Video,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react'

export const Route = createFileRoute('/dich-vu/quang-cao')({
  head: () => ({
    meta: [
      { title: 'Dịch Vụ Quảng Cáo - TechPro Solutions' },
      { name: 'description', content: 'Dịch vụ quảng cáo số toàn diện: Google Ads, Facebook Ads, TikTok, SEO. Tăng doanh thu, tiếp cận đúng khách hàng mục tiêu.' },
    ],
  }),
  component: QuangCaoPage,
})

const channels = [
  { icon: Search, name: 'Google Ads & SEO', desc: 'Xuất hiện top đầu kết quả tìm kiếm, thu hút khách hàng có nhu cầu' },
  { icon: Share2, name: 'Facebook & Instagram', desc: 'Tiếp cận hàng triệu người dùng với quảng cáo nhắm mục tiêu chính xác' },
  { icon: Video, name: 'TikTok & YouTube', desc: 'Marketing video viral, xây dựng thương hiệu trên nền tảng video' },
  { icon: Mail, name: 'Email Marketing', desc: 'Chăm sóc khách hàng cũ, nuôi dưỡng leads với chiến dịch email hiệu quả' },
  { icon: Target, name: 'Remarketing', desc: 'Tiếp thị lại với khách đã ghé thăm, tăng tỷ lệ chuyển đổi' },
  { icon: BarChart3, name: 'Phân Tích & Báo Cáo', desc: 'Dashboard real-time, báo cáo chi tiết ROI cho mọi chiến dịch' },
]

const packages = [
  {
    name: 'Starter',
    price: '5.000.000',
    period: '/tháng',
    desc: 'Phù hợp với doanh nghiệp vừa bắt đầu quảng cáo số',
    features: ['2 kênh quảng cáo', 'Ngân sách ads đến 10 triệu', 'Báo cáo hàng tuần', 'Hỗ trợ qua email'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '12.000.000',
    period: '/tháng',
    desc: 'Dành cho doanh nghiệp muốn tăng tốc tăng trưởng',
    features: ['4 kênh quảng cáo', 'Ngân sách ads đến 30 triệu', 'Báo cáo hàng ngày', 'Hỗ trợ ưu tiên', 'A/B Testing', 'Remarketing'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Liên hệ',
    period: '',
    desc: 'Giải pháp toàn diện cho doanh nghiệp lớn',
    features: ['Không giới hạn kênh', 'Ngân sách không giới hạn', 'Báo cáo real-time', 'Dedicated manager', 'Chiến lược tùy chỉnh', 'Workshop định kỳ'],
    highlight: false,
  },
]

function QuangCaoPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <Megaphone className="w-4 h-4" />
                Dịch Vụ Quảng Cáo
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Quảng Cáo Số Hiệu Quả,<br />
                <span className="text-orange-400">ROI Tối Đa</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Tối ưu hóa chiến dịch quảng cáo đa kênh với công nghệ AI. Tiếp cận đúng người, đúng thời điểm,
                tăng tỷ lệ chuyển đổi và doanh thu một cách bền vững.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/lien-he" className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Bắt Đầu Ngay <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4 max-w-sm lg:max-w-none">
              {[
                { label: 'Campaigns', value: '1,200+' },
                { label: 'ROAS Avg', value: '450%' },
                { label: 'Clients', value: '150+' },
              ].map((s) => (
                <div key={s.label} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Kênh Quảng Cáo Chúng Tôi Triển Khai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.name} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{c.name}</h3>
                  <p className="text-slate-400 text-sm">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Bảng Giá Dịch Vụ</h2>
          <p className="text-slate-400 text-center mb-12">Lựa chọn gói phù hợp với quy mô và mục tiêu của bạn</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border ${pkg.highlight ? 'bg-gradient-to-b from-orange-500/10 to-red-500/10 border-orange-500/50 relative' : 'bg-slate-800/50 border-slate-700/50'}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-semibold">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-extrabold text-orange-400">{pkg.price}</span>
                  <span className="text-slate-400 text-sm">{pkg.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/lien-he"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${pkg.highlight ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:opacity-90' : 'border border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400'}`}
                >
                  Bắt Đầu Ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-1 justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Sẵn sàng tăng doanh thu?</h2>
          <p className="text-slate-400 mb-8">Nhận tư vấn miễn phí và audit chiến dịch quảng cáo hiện tại của bạn.</p>
          <Link to="/lien-he" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:opacity-90 transition-opacity">
            Nhận Tư Vấn Miễn Phí <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
