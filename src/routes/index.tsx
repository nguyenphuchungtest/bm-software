import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Megaphone,
  RefreshCw,
  Code2,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  HeadphonesIcon,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    icon: Megaphone,
    title: 'Dịch Vụ Quảng Cáo',
    description:
      'Tối ưu hóa chiến dịch quảng cáo trên Google, Facebook, TikTok và các nền tảng số. Tiếp cận đúng khách hàng mục tiêu, tăng doanh thu hiệu quả.',
    href: '/dich-vu/quang-cao',
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    features: ['Google Ads & SEO', 'Facebook & Instagram Ads', 'TikTok Marketing', 'Email Marketing'],
  },
  {
    icon: RefreshCw,
    title: 'Chuyển Đổi Số',
    description:
      'Số hóa toàn diện quy trình kinh doanh, áp dụng công nghệ AI và automation để nâng cao hiệu suất và cạnh tranh trên thị trường.',
    href: '/dich-vu/chuyen-doi-so',
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    features: ['Tư vấn chiến lược số', 'Tự động hóa quy trình', 'Cloud & AI Integration', 'Đào tạo nhân sự số'],
  },
  {
    icon: Code2,
    title: 'Giải Pháp Phần Mềm',
    description:
      'Phát triển phần mềm tùy chỉnh, ứng dụng mobile, hệ thống quản lý doanh nghiệp theo yêu cầu với công nghệ tiên tiến nhất.',
    href: '/dich-vu/giai-phap-phan-mem',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    features: ['Phần mềm ERP/CRM', 'App iOS & Android', 'API & Tích hợp hệ thống', 'Bảo trì & hỗ trợ 24/7'],
  },
  {
    icon: Globe,
    title: 'Bán Website',
    description:
      'Thiết kế và bán website chuyên nghiệp, tối ưu SEO, tốc độ tải nhanh. Từ landing page đến hệ thống thương mại điện tử đầy đủ tính năng.',
    href: '/dich-vu/ban-website',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    features: ['Website giới thiệu', 'Website bán hàng', 'Landing Page', 'Website đặt lịch'],
  },
]

const stats = [
  { value: '500+', label: 'Dự Án Hoàn Thành' },
  { value: '200+', label: 'Khách Hàng Tin Tưởng' },
  { value: '8+', label: 'Năm Kinh Nghiệm' },
  { value: '98%', label: 'Khách Hàng Hài Lòng' },
]

const whyUs = [
  {
    icon: Zap,
    title: 'Triển Khai Nhanh',
    description: 'Quy trình làm việc tối ưu, cam kết đúng tiến độ cho mọi dự án.',
  },
  {
    icon: Shield,
    title: 'Bảo Mật Cao',
    description: 'Tuân thủ tiêu chuẩn bảo mật quốc tế, bảo vệ dữ liệu doanh nghiệp.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Hỗ Trợ 24/7',
    description: 'Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc, mọi nơi.',
  },
  {
    icon: Award,
    title: 'Chất Lượng Đỉnh Cao',
    description: 'Cam kết chất lượng cao nhất với đội ngũ chuyên gia giàu kinh nghiệm.',
  },
]

const testimonials = [
  {
    name: 'Nguyễn Văn An',
    role: 'CEO, Công ty TNHH ABC',
    content:
      'BMSoftware đã giúp chúng tôi tăng doanh thu online lên 300% chỉ trong 6 tháng nhờ chiến lược quảng cáo số hiệu quả.',
    stars: 5,
  },
  {
    name: 'Trần Thị Mai',
    role: 'Giám đốc Marketing, XYZ Corp',
    content:
      'Website do BMSoftware thiết kế rất đẹp, tốc độ nhanh và tỷ lệ chuyển đổi tăng vọt. Đội ngũ hỗ trợ nhiệt tình, chuyên nghiệp.',
    stars: 5,
  },
  {
    name: 'Lê Minh Tuấn',
    role: 'COO, TechStart Vietnam',
    content:
      'Giải pháp phần mềm ERP của BMSoftware giúp chúng tôi tiết kiệm 40% chi phí vận hành. Đây là khoản đầu tư xứng đáng nhất.',
    stars: 5,
  },
]

function HomePage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Đối Tác Công Nghệ Hàng Đầu Việt Nam
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Chuyển Đổi Doanh Nghiệp<br />
            <span className="gradient-text">Trong Kỷ Nguyên Số</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            BMSoftware cung cấp giải pháp công nghệ toàn diện — từ quảng cáo số, chuyển đổi số,
            phát triển phần mềm đến xây dựng website — giúp doanh nghiệp bứt phá và tăng trưởng bền vững.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/lien-he"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-violet-500 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              Tư Vấn Miễn Phí <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/ve-chung-toi"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-600 text-slate-300 font-semibold text-lg hover:border-slate-400 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Tìm Hiểu Thêm
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-500/10">
            <img
              src="/images/bmsoftware-hero-banner.jpg"
              alt="BMSoftware - We turn ideas into powerful software"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Giải pháp công nghệ tổng thể, tùy chỉnh theo nhu cầu của từng doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`service-card rounded-2xl p-6 border ${service.bg} ${service.border} hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    Xem Chi Tiết <ArrowRight className="w-4 h-4" style={{ color: 'inherit' }} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tại Sao Chọn BMSoftware?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi là đối tác đồng hành cùng sự phát triển của bạn
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Khách Hàng Nói Gì?
            </h2>
            <p className="text-slate-400 text-lg">Hàng trăm doanh nghiệp đã tin tưởng và thành công cùng chúng tôi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{t.content}"</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-blue-500/20 p-12">
            <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sẵn Sàng Đưa Doanh Nghiệp Lên Tầm Cao Mới?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Hãy để BMSoftware đồng hành cùng bạn. Nhận tư vấn miễn phí ngay hôm nay và khám phá tiềm năng tăng trưởng của doanh nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/lien-he"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-violet-500 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Nhận Tư Vấn Miễn Phí <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+84901234567"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-600 text-slate-300 font-semibold text-lg hover:border-white hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Gọi: 0901 234 567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
