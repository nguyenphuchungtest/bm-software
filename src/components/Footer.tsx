import { Link } from '@tanstack/react-router'
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center p-1 shrink-0">
                <img src="/images/bmsoftware-logo.png" alt="BMSoftware" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-bold text-lg">BMSoftware</span>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Đối tác công nghệ tin cậy, giúp doanh nghiệp Việt Nam chuyển đổi và phát triển bền vững trong kỷ nguyên số.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dich-vu/quang-cao" className="hover:text-white transition-colors">Dịch Vụ Quảng Cáo</Link></li>
              <li><Link to="/dich-vu/chuyen-doi-so" className="hover:text-white transition-colors">Chuyển Đổi Số</Link></li>
              <li><Link to="/dich-vu/giai-phap-phan-mem" className="hover:text-white transition-colors">Giải Pháp Phần Mềm</Link></li>
              <li><Link to="/dich-vu/ban-website" className="hover:text-white transition-colors">Bán Website</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Công Ty</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ve-chung-toi" className="hover:text-white transition-colors">Về Chúng Tôi</Link></li>
              <li><Link to="/lien-he" className="hover:text-white transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <span>123 Nguyễn Văn Linh, Q.7, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+84901234567" className="hover:text-white transition-colors">0901 234 567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contact@bmsoft.vn" className="hover:text-white transition-colors">contact@bmsoft.vn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 BMSoftware. Tất cả quyền được bảo lưu.</p>
          <p>Mã số thuế: 0123456789 | GPKD số: 0123456789</p>
        </div>
      </div>
    </footer>
  )
}
