import { createFileRoute, Link } from '@tanstack/react-router'
import {
  RefreshCw,
  Cloud,
  Bot,
  Workflow,
  Database,
  LineChart,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Cpu,
} from 'lucide-react'

export const Route = createFileRoute('/dich-vu/chuyen-doi-so')({
  head: () => ({
    meta: [
      { title: 'Chuyển Đổi Số - TechPro Solutions' },
      { name: 'description', content: 'Tư vấn và triển khai chuyển đổi số toàn diện cho doanh nghiệp. Áp dụng AI, automation và cloud để tăng hiệu suất hoạt động.' },
    ],
  }),
  component: ChuyenDoiSoPage,
})

const solutions = [
  { icon: Workflow, name: 'Tự Động Hóa Quy Trình', desc: 'RPA và workflow automation giúp tiết kiệm 60-80% thời gian xử lý thủ công.' },
  { icon: Cloud, name: 'Chuyển Đổi Lên Cloud', desc: 'Di chuyển hạ tầng lên AWS, Google Cloud, Azure an toàn và tối ưu chi phí.' },
  { icon: Bot, name: 'AI & Machine Learning', desc: 'Tích hợp AI vào quy trình kinh doanh, chatbot chăm sóc khách hàng 24/7.' },
  { icon: Database, name: 'Quản Lý Dữ Liệu', desc: 'Data warehouse, business intelligence và analytics để đưa ra quyết định dựa trên dữ liệu.' },
  { icon: LineChart, name: 'Tối Ưu Hiệu Suất', desc: 'KPI dashboard và báo cáo real-time giúp quản lý tối ưu mọi hoạt động.' },
  { icon: GraduationCap, name: 'Đào Tạo Nhân Sự Số', desc: 'Chương trình upskilling đội ngũ nhân viên thích nghi với công nghệ mới.' },
]

const process = [
  { step: '01', title: 'Đánh Giá Hiện Trạng', desc: 'Khảo sát và phân tích toàn bộ quy trình, hệ thống hiện tại.' },
  { step: '02', title: 'Lập Chiến Lược', desc: 'Xây dựng lộ trình chuyển đổi số phù hợp với mục tiêu kinh doanh.' },
  { step: '03', title: 'Triển Khai Từng Giai Đoạn', desc: 'Thực thi có kiểm soát, đảm bảo không gián đoạn hoạt động.' },
  { step: '04', title: 'Đo Lường & Tối Ưu', desc: 'Theo dõi KPI, tối ưu liên tục để đạt hiệu quả cao nhất.' },
]

const industries = ['Bán lẻ & TMĐT', 'Sản xuất', 'Logistics', 'Tài chính & Ngân hàng', 'Y tế', 'Giáo dục', 'Bất động sản', 'F&B']

function ChuyenDoiSoPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <RefreshCw className="w-4 h-4" />
            Chuyển Đổi Số
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Số Hóa Doanh Nghiệp,<br />
            <span className="text-blue-400">Bứt Phá Cạnh Tranh</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Chúng tôi đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số toàn diện — từ tư vấn chiến lược,
            triển khai công nghệ đến đào tạo nhân sự, đảm bảo thành công bền vững.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lien-he" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Bắt Đầu Hành Trình <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { icon: Cpu, label: 'AI-Powered' },
              { icon: ShieldCheck, label: 'Bảo Mật ISO 27001' },
              { icon: Cloud, label: 'Cloud Native' },
            ].map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Icon className="w-4 h-4 text-blue-400" />
                  {b.label}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Giải Pháp Chuyển Đổi Số</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.name} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{s.name}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quy Trình Triển Khai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-4xl font-extrabold text-blue-500/20 mb-4">{p.step}</div>
                <h3 className="font-semibold text-white mb-2 text-sm">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ngành Nghề Chúng Tôi Phục Vụ</h2>
          <p className="text-slate-400 mb-10">Kinh nghiệm triển khai đa dạng ngành nghề, hiểu sâu đặc thù từng lĩnh vực</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Kết Quả Thực Tế</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '40%', label: 'Giảm chi phí vận hành', color: 'text-emerald-400' },
              { value: '3x', label: 'Tăng năng suất làm việc', color: 'text-blue-400' },
              { value: '60%', label: 'Tiết kiệm thời gian xử lý', color: 'text-violet-400' },
            ].map((r) => (
              <div key={r.label} className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className={`text-4xl font-extrabold mb-2 ${r.color}`}>{r.value}</div>
                <div className="text-slate-300 text-sm">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Bắt đầu hành trình số hóa ngay hôm nay</h2>
          <p className="text-slate-400 mb-8">Nhận đánh giá mức độ sẵn sàng chuyển đổi số miễn phí cho doanh nghiệp của bạn.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lien-he" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Nhận Đánh Giá Miễn Phí <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
