import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { AdPlaceholder } from "../components/AdPlaceholder";
import { BilingualText } from "../components/BilingualText";

export function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 md:py-24"
      >
        <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Bilingual Cultural Heritage</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Classic Chinese Tales<br/>
          <span className="text-3xl md:text-5xl font-normal text-slate-600 mt-2 block">传承经典儿童故事</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          Explore a curated collection of ancient myths, historical legends, and timeless fables. Read in English and Chinese. 
          <br /> <span className="text-base">探索精细编撰的古代神话、历史传说和永恒寓言。提供中英双语阅读。</span>
        </p>
      </motion.section>

      {/* Ad Placeholder 1 */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <AdPlaceholder />
      </motion.div>

      {/* Trust / Why Read Us Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-20 bg-slate-50 p-10 md:p-16 rounded-2xl"
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Why Read Our Stories</h2>
          <p className="text-slate-500">为什么选择阅读我们的故事</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <BilingualText 
              en="Language Learning Companion. Our unique side-by-side bilingual format makes it easy for readers of all ages to learn English or Chinese while enjoying captivating literature. Every sentence is carefully aligned to maximize comprehension."
              zh="语言学习的完美伴侣。我们独特的平行双语排版使得各个年龄段的读者在享受迷人文学的同时，能够轻松学习英语或中文。每一个句子都经过精心对齐，以最大化阅读理解效率。"
            />
          </div>
          <div>
            <BilingualText 
              en="Cultural Bridge. Each story is selected for its profound moral lessons, historical significance, and representation of traditional values like filial piety, bravery, and harmony with nature."
              zh="文化的桥梁。每一个故事的挑选都是基于其深刻的道德寓意、历史意义以及对诸如孝道、勇敢、人与自然和谐等传统价值观的展现。"
            />
          </div>
        </div>
      </motion.section>

      {/* Articles Grid */}
      <section className="my-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10 border-b border-slate-200 pb-4"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Stories</h2>
            <p className="text-sm text-slate-500 mt-1">精选故事</p>
          </div>
          <Link to="/articles" className="text-sm font-medium text-blue-600 hover:underline">
            View All / 查看全部 &rarr;
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 6).map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
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
      </section>

      {/* Ad Placeholder 2 */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <AdPlaceholder />
      </motion.div>

    </div>
  );
}
