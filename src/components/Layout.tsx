import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <header className="border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight leading-none mb-1">C·C·S</h1>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Classic Tales</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition">Home / 首页</Link>
            <Link to="/articles" className="hover:text-blue-600 transition">All Articles / 全部文章</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About / 关于</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact / 联系我们</Link>
          </nav>
          
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl overflow-hidden z-40">
            <div className="flex flex-col p-4 w-full h-full gap-4 font-medium text-slate-600">
              <Link to="/" className="block p-2 hover:bg-slate-50 hover:text-blue-600 rounded">Home / 首页</Link>
              <Link to="/articles" className="block p-2 hover:bg-slate-50 hover:text-blue-600 rounded">All Articles / 全部文章</Link>
              <Link to="/about" className="block p-2 hover:bg-slate-50 hover:text-blue-600 rounded">About / 关于</Link>
              <Link to="/contact" className="block p-2 hover:bg-slate-50 hover:text-blue-600 rounded">Contact / 联系我们</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-16 mt-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-800">
              <BookOpen size={20} />
              <span className="font-bold tracking-tight">Chinese Children's Stories</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              Dedicated to preserving and sharing the rich cultural heritage of classical Chinese literature and myths with children and adults around the globe.
              <br/><br/>
              致力于在全球范围内传承与分享中国古典文学及神话故事的丰富文化遗产。
            </p>
            <p className="text-xs text-slate-400">
              Note: All images on this site are AI-generated for illustrative purposes. 
              <br/>注：本站所有图片均由人工智能生成，仅供配图参考。
            </p>
          </div>
          <div className="md:justify-self-end text-sm text-slate-600">
            <h3 className="font-semibold text-slate-800 mb-4 uppercase tracking-wider text-xs">Legal & Info / 法律与信息</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-blue-600 transition">About Us / 关于我们</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us / 联系我们</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy / 隐私政策</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition">Terms of Service / 服务条款</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Chinese Children's Stories. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
