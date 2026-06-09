import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { AdPlaceholder } from "../components/AdPlaceholder";

export function Articles() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          All Stories
        </h1>
        <h2 className="text-2xl text-slate-600 font-medium tracking-wide">
          全部文章
        </h2>
      </motion.div>

      <AdPlaceholder className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {articles.map((article, index) => (
          <motion.div 
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
            className="group flex flex-col bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <Link to={`/article/${article.id}`} className="block h-48 overflow-hidden bg-slate-100 relative">
              <img 
                src={article.coverImage} 
                alt={article.coverImageAltEn} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 text-white/90 text-[10px] px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                AI Generated / AI 生成
              </div>
            </Link>
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs font-semibold text-blue-600 mb-3 tracking-wider">TALE / 传说</div>
              <Link to={`/article/${article.id}`} className="block mb-4">
                <h3 className="font-bold text-xl text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                  {article.titleEn}
                </h3>
                <h4 className="text-md text-slate-600 font-medium">{article.titleZh}</h4>
              </Link>
              <div className="text-sm text-slate-500 line-clamp-3 mb-2 flex-grow">
                {article.excerptEn}
              </div>
              <div className="text-sm text-slate-400 line-clamp-2 mt-auto pt-4 border-t border-slate-50">
                {article.excerptZh}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AdPlaceholder className="mt-10" />
    </div>
  );
}
