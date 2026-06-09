import { motion } from "motion/react";
import { BilingualText } from "../components/BilingualText";

export function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-2">About Us</h1>
        <p className="text-xl text-slate-500 mb-12">关于我们</p>
        
        <div className="space-y-8">
          <BilingualText 
            en="Welcome to Chinese Children's Stories. Our platform is dedicated to bridging cultural gaps by sharing the classical literature, foundational myths, and timeless fables of ancient China. We believe that stories are the greatest vehicles for cultural heritage."
            zh="欢迎来到中国儿童故事。我们的平台致力于通过分享中国古代的古典文学、创世神话与永恒的寓言来弥合文化差距。我们深信，故事是传承文化遗产最伟大的载体。"
          />
          
          <BilingualText 
            en="Our carefully curated bilingual format is designed to assist language learners and provide accessible reading materials for everyone, from young children to adults interested in comparative literature."
            zh="我们精心策划的双语排版旨在帮助语言学习者，为从幼儿到对比较文学感兴趣的成年人的所有读者，提供无障碍的阅读材料。"
          />
          
          <BilingualText 
            en="Transparency Disclaimer: To enhance the reading experience and provide visual context, the illustrations accompanying our stories are synthetically generated using Artificial Intelligence (AI). These abstract visual interpretations help bring ancient texts to life."
            zh="透明度声明：为了提升阅读体验并提供视觉背景，我们故事附带的插图均是使用人工智能（AI）技术合成生成的。这些抽象的视觉演绎有助于让古老的文字变得栩栩如生。"
          />
        </div>
      </motion.div>
    </div>
  );
}
