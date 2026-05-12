import { createFileRoute, Link } from '@tanstack/react-router'
import { Users, Target, Heart, TrendingUp, Award, Globe, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/ve-chung-toi')({
  head: () => ({
    meta: [
      { title: 'Về Chúng Tôi - TechPro Solutions' },
      { name: 'description', content: 'TechPro Solutions - Đối tác công nghệ tin cậy hơn 8 năm kinh nghiệm. Đội ngũ 80+ chuyên gia đồng hành cùng 200+ doanh nghiệp Việt Nam.' },
    ],
  }),
  component: VeChungToiPage,
})

const values = [
  { icon: Target, title: 'Tập Trung Kết Quả', desc: 'Mọi giải pháp chúng tôi xây dựng đều hướng đến kết quả đo lường được cho khách hàng.' },
  { icon: Heart, title: 'Tận Tâm Phục Vụ', desc: 'Đội ngũ hỗ trợ nhiệt tình, lắng nghe và đặt lợi ích khách hàng lên hàng đầu.' },
  { icon: TrendingUp, title: 'Đổi Mới Liên Tục', desc: 'Luôn cập nhật công nghệ mới nhất để mang lại lợi thế cạnh tranh cho đối tác.' },
  { icon: Globe, title: 'Tư Duy Toàn Cầu', desc: 'Chuẩn mực quốc tế trong mọi sản phẩm, phù hợp với thị trường toàn cầu.' },
]

const team = [
  { name: 'Nguyễn Minh Đức', role: 'CEO & Founder', exp: '12 năm kinh nghiệm' },
  { name: 'Trần Thanh Hà', role: 'CTO', exp: 'Ex-Google Engineer' },
  { name: 'Lê Phương Linh', role: 'Head of Marketing', exp: '10 năm Digital Marketing' },
  { name: 'Phạm Quốc Bảo', role: 'Head of Design', exp: 'Award-winning Designer' },
]

const milestones = [
  { year: '2016', event: 'Thành lập TechPro Solutions tại TP.HCM' },
  { year: '2018', event: 'Mở rộng đội ngũ lên 20 thành viên, 50 khách hàng' },
  { year: '2020', event: 'Ra mắt dịch vụ chuyển đổi số và AI Integration' },
  { year: '2022', event: 'Đạt mốc 100 nhân viên, 300 dự án hoàn thành' },
  { year: '2024', event: '200+ khách hàng tin tưởng, mở văn phòng tại Hà Nội' },
]

function VeChungToiPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Câu Chuyện Của<br />
            <span className="gradient-text">TechPro Solutions</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Được thành lập năm 2016 với sứ mệnh giúp doanh nghiệp Việt Nam bứt phá trong kỷ nguyên số,
            TechPro Solutions đã và đang đồng hành cùng hơn 200 doanh nghiệp trên hành trình chuyển đổi và phát triển.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <Target className="w-8 h-8 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Sứ Mệnh</h2>
            <p className="text-slate-300 leading-relaxed">
              Trở thành đối tác công nghệ tin cậy nhất, giúp mọi doanh nghiệp Việt Nam — từ startup đến tập đoàn
              — tận dụng sức mạnh công nghệ để cạnh tranh và phát triển bền vững.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-violet-500/5 border border-violet-500/20">
            <TrendingUp className="w-8 h-8 text-violet-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-3">Tầm Nhìn</h2>
            <p className="text-slate-300 leading-relaxed">
              Đến năm 2030, TechPro Solutions sẽ là công ty công nghệ hàng đầu Đông Nam Á, đồng hành cùng
              1.000+ doanh nghiệp trong cuộc cách mạng công nghiệp 4.0.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '8+', label: 'Năm hoạt động' },
            { value: '80+', label: 'Thành viên đội ngũ' },
            { value: '200+', label: 'Khách hàng' },
            { value: '500+', label: 'Dự án hoàn thành' },
          ].map((s) => (
            <div key={s.label} className="text-center p-4">
              <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="flex gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{v.title}</h3>
                    <p className="text-slate-400 text-sm">{v.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Hành Trình Phát Triển</h2>
          <div className="space-y-4">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="w-16 text-right shrink-0">
                  <span className="text-blue-400 font-bold text-sm">{m.year}</span>
                </div>
                <div className="w-px bg-slate-700 self-stretch relative">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <div className="pb-6 flex-1">
                  <p className="text-slate-300 text-sm pt-0.5">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Đội Ngũ Lãnh Đạo</h2>
          <p className="text-slate-400 text-center mb-12">Những người đặt nền móng và dẫn dắt TechPro vươn xa</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-blue-400 text-sm">{t.role}</div>
                <div className="text-slate-400 text-xs mt-1">{t.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Google Partner',
              'Meta Business Partner',
              'AWS Partner',
              'ISO 9001:2015',
              'Microsoft Partner',
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                <Award className="w-4 h-4 text-yellow-400" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Hãy Cùng Chúng Tôi Tạo Nên Thành Công!</h2>
          <p className="text-slate-400 mb-8">Liên hệ ngay để được tư vấn miễn phí và khám phá cách TechPro có thể giúp doanh nghiệp bạn.</p>
          <Link to="/lien-he" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity">
            Liên Hệ Ngay <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
