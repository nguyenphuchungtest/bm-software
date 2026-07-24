import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Code2,
  Smartphone,
  Monitor,
  Plug,
  Settings,
  TestTube,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  GitBranch,
} from 'lucide-react'

export const Route = createFileRoute('/dich-vu/giai-phap-phan-mem')({
  head: () => ({
    meta: [
      { title: 'Giải Pháp Phần Mềm - BMSoftware' },
      { name: 'description', content: 'Phát triển phần mềm tùy chỉnh, ứng dụng mobile, hệ thống ERP/CRM theo yêu cầu. Công nghệ tiên tiến, bảo trì 24/7.' },
    ],
  }),
  component: GiaiPhapPhanMemPage,
})

const services = [
  { icon: Monitor, name: 'Phần Mềm Web App', desc: 'Ứng dụng web hiệu năng cao với React, Next.js, Node.js. Responsive, bảo mật và mở rộng linh hoạt.' },
  { icon: Smartphone, name: 'App Mobile iOS & Android', desc: 'Ứng dụng di động native và cross-platform với React Native, Flutter. UX/UI chuẩn Apple & Google.' },
  { icon: Settings, name: 'Hệ Thống ERP & CRM', desc: 'Phần mềm quản lý doanh nghiệp tùy chỉnh: kế toán, nhân sự, bán hàng, kho vận.' },
  { icon: Plug, name: 'API & Tích Hợp Hệ Thống', desc: 'RESTful API, GraphQL, tích hợp bên thứ ba: thanh toán, vận chuyển, kế toán.' },
  { icon: TestTube, name: 'QA & Kiểm Thử', desc: 'Test automation, performance testing, security audit đảm bảo chất lượng cao nhất.' },
  { icon: Shield, name: 'Bảo Mật & DevSecOps', desc: 'Penetration testing, code review, CI/CD pipeline an toàn theo chuẩn OWASP.' },
]

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'Java Spring'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Docker/K8s'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain'] },
]

const projectTypes = [
  { name: 'Landing Page / Website', price: 'Từ 5.000.000', time: '1-2 tuần' },
  { name: 'Web App cơ bản', price: 'Từ 20.000.000', time: '1-2 tháng' },
  { name: 'App Mobile', price: 'Từ 50.000.000', time: '2-4 tháng' },
  { name: 'Hệ thống ERP/CRM', price: 'Từ 100.000.000', time: '3-6 tháng' },
  { name: 'Dự án Enterprise', price: 'Liên hệ', time: 'Theo yêu cầu' },
]

function GiaiPhapPhanMemPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            Giải Pháp Phần Mềm
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Phần Mềm Tùy Chỉnh,<br />
            <span className="text-violet-400">Hiệu Quả Vượt Trội</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Đội ngũ 50+ kỹ sư phần mềm kinh nghiệm, phát triển giải pháp công nghệ theo đúng nhu cầu của bạn.
            Từ web app, mobile app đến hệ thống quản trị doanh nghiệp phức tạp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lien-he" className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Tư Vấn Dự Án <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { icon: GitBranch, label: '500+ Dự án' },
              { icon: Clock, label: 'Đúng tiến độ 95%' },
              { icon: Shield, label: 'Bảo hành 12 tháng' },
            ].map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Icon className="w-4 h-4 text-violet-400" />
                  {b.label}
                </div>
              )
            })}
          </div>

          <div className="mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-violet-500/10">
            <img
              src="/images/bmsoftware-software-showcase.jpg"
              alt="Sản phẩm phần mềm do BMSoftware phát triển"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Dịch Vụ Phát Triển Phần Mềm</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.name} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{s.name}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Công Nghệ Chúng Tôi Sử Dụng</h2>
          <p className="text-slate-400 text-center mb-12">Luôn cập nhật công nghệ mới nhất để mang lại giải pháp tốt nhất</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techStack.map((ts) => (
              <div key={ts.category} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <h3 className="text-violet-400 font-semibold text-sm mb-3">{ts.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {ts.items.map((item) => (
                    <span key={item} className="px-2 py-1 rounded-md bg-slate-700 text-slate-300 text-xs">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Chi Phí Tham Khảo</h2>
          <p className="text-slate-400 text-center mb-10">Giá phụ thuộc vào độ phức tạp và yêu cầu cụ thể</p>
          <div className="space-y-3">
            {projectTypes.map((pt) => (
              <div key={pt.name} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div>
                  <div className="font-medium text-white text-sm">{pt.name}</div>
                  <div className="text-slate-400 text-xs">Thời gian: {pt.time}</div>
                </div>
                <div className="text-violet-400 font-semibold text-sm">{pt.price}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">* Giá chỉ mang tính chất tham khảo. Liên hệ để nhận báo giá chính xác.</p>
        </div>
      </section>

      {/* Why features */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Agile & Scrum methodology',
              'Cập nhật tiến độ hàng ngày',
              'Code review và documentation đầy đủ',
              'Bảo hành 12 tháng sau khi bàn giao',
              'Training nhân viên sử dụng hệ thống',
              'Hỗ trợ bảo trì dài hạn',
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-slate-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Có ý tưởng? Hãy biến nó thành thực tế!</h2>
          <p className="text-slate-400 mb-8">Chia sẻ ý tưởng của bạn — chúng tôi sẽ tư vấn giải pháp và báo giá miễn phí.</p>
          <Link to="/lien-he" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity">
            Gửi Yêu Cầu Ngay <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
