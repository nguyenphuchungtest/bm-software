import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, Send } from 'lucide-react'

export const Route = createFileRoute('/lien-he')({
  head: () => ({
    meta: [
      { title: 'Liên Hệ - BMSoftware' },
      { name: 'description', content: 'Liên hệ BMSoftware để được tư vấn miễn phí về quảng cáo số, chuyển đổi số, phần mềm và website.' },
    ],
  }),
  component: LienHePage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const services = [
  'Dịch vụ quảng cáo',
  'Chuyển đổi số',
  'Giải pháp phần mềm',
  'Bán website',
  'Tư vấn tổng hợp',
]

function LienHePage() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    'bot-field': '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setError('Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-slate-300 text-lg">
            Nhận tư vấn miễn phí trong vòng 24 giờ làm việc
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Thông Tin Liên Hệ</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Phone,
                      label: 'Hotline',
                      value: '0369 026 023',
                      href: 'tel:+84369026023',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'bmsoftware.contact@gmail.com',
                      href: 'mailto:bmsoftware.contact@gmail.com',
                    },
                    {
                      icon: MapPin,
                      label: 'Trụ sở chính',
                      value: '20/4 Nguyễn Khoa Đăng, P.Thành Nhất, Tỉnh Đắk Lắk',
                      href: 'https://maps.app.goo.gl/hE7gp36EeYvNLzPg9',
                    },
                  ].map((c) => {
                    const Icon = c.icon
                    return (
                      <div key={c.label} className="flex gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-slate-400 text-xs mb-0.5">{c.label}</div>
                          {c.href ? (
                            <a href={c.href} className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                              {c.value}
                            </a>
                          ) : (
                            <div className="text-white text-sm font-medium">{c.value}</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">Giờ Làm Việc</div>
                    <div className="text-white text-sm">Thứ 2 – Thứ 6: 8:00 – 17:30</div>
                    <div className="text-white text-sm">Thứ 7: 8:00 – 12:00</div>
                    <div className="text-slate-400 text-xs mt-1">Hỗ trợ kỹ thuật: 24/7</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-700/50">
                <img
                  src="/images/bmsoftware-brand-banner.jpg"
                  alt="BMSoftware"
                  className="w-full h-auto"
                />
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20">
                <h3 className="font-semibold text-white mb-3 text-sm">Tại sao nên liên hệ ngay?</h3>
                <ul className="space-y-2">
                  {[
                    'Tư vấn miễn phí không ràng buộc',
                    'Phản hồi trong 24 giờ làm việc',
                    'Báo giá chi tiết và minh bạch',
                    'Chuyên gia giàu kinh nghiệm tư vấn',
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Gửi Thành Công!</h3>
                    <p className="text-slate-300 text-sm">
                      Cảm ơn bạn đã liên hệ. Đội ngũ BMSoftware sẽ phản hồi trong vòng 24 giờ làm việc.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white mb-6">Gửi Yêu Cầu Tư Vấn</h2>
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden">
                        <input name="bot-field" onChange={handleChange} />
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-slate-300 text-sm font-medium mb-1.5">
                            Họ và tên <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={fields.name}
                            onChange={handleChange}
                            required
                            placeholder="Nguyễn Văn A"
                            className="w-full px-3 py-2.5 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 text-sm font-medium mb-1.5">
                            Số điện thoại
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={fields.phone}
                            onChange={handleChange}
                            placeholder="0369 026 023"
                            className="w-full px-3 py-2.5 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={fields.email}
                          onChange={handleChange}
                          required
                          placeholder="email@company.com"
                          className="w-full px-3 py-2.5 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Dịch vụ quan tâm
                        </label>
                        <select
                          name="service"
                          value={fields.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="">-- Chọn dịch vụ --</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-6">
                        <label className="block text-slate-300 text-sm font-medium mb-1.5">
                          Nội dung cần tư vấn <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={fields.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Mô tả ngắn về doanh nghiệp và nhu cầu của bạn..."
                          className="w-full px-3 py-2.5 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                      </div>

                      {error && (
                        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Đang gửi...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Gửi Yêu Cầu Tư Vấn
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
              <div className="mt-10 rounded-xl overflow-hidden border border-slate-700/50">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.217872779175!2d108.0044843858221!3d12.6337071948187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721e79498e8ab5%3A0xc382d4c3f69d5fb0!2zMjAgTmd1eeG7hW4gS2hvYSDEkMSDbmcsIFRow6BuaCBOaOG6pXQsIMSQ4bqvayBM4bqvaywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1787138027601!5m2!1svi!2s" width="100%" height="450" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
