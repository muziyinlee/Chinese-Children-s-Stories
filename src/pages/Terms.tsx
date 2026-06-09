import { motion } from "motion/react";
import { BilingualText } from "../components/BilingualText";

export function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-xl text-slate-500 mb-12">服务条款</p>
        
        <div className="space-y-8">
          <BilingualText 
            en="These terms and conditions outline the rules and regulations for the use of our educational website. By accessing this website, we assume you accept these terms and conditions in full."
            zh="这些条款和条件规定了使用我们教育网站的规则和法规。访问本网站，即表示我们假定您完全接受这些条款和条件。"
          />
          
          <BilingualText 
            en="The content on this website is provided for general information and educational purposes only. The stories, myths, and bilingual translations are curated for cultural appreciation."
            zh="本网站上的内容仅供一般信息和教育目的提供。其中的故事、神话和双语翻译均为了文化欣赏而策划发布。"
          />
          
          <BilingualText 
            en="Intellectual Property: While the ancient myths themselves are in the public domain, the specific bilingual translations, website layouts, and curated collections provided here fall under standard copyright protections. The images displayed alongside stories are synthesized via Generative AI."
            zh="知识产权：虽然古老的神话本身属于公共领域，但此处提供的特定双语翻译、网站布局和精心整理的合集均受标准版权保护。故事所附图片均由生成式 AI 合成。"
          />

          <BilingualText 
            en="Advertising Restrictions: Users agree not to artificially inflate ad impressions, utilize automated click scripts, or interfere with the Google AdSense network scripts embedded within this site structure. Fraudulent engagement is strictly prohibited."
            zh="广告限制：用户同意不人为制造虚假的广告展示量，不使用自动点击脚本，也不干扰嵌入在本站结构内的 Google AdSense 网络脚本。严禁任何弄虚作假的交互行为。"
          />
        </div>
      </motion.div>
    </div>
  );
}
