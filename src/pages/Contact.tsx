import { motion } from "motion/react";
import { BilingualText } from "../components/BilingualText";
import { AdPlaceholder } from "../components/AdPlaceholder";

export function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Contact Us</h1>
        <p className="text-xl text-slate-500 mb-12">联系我们</p>
        
        <div className="space-y-8 mb-16">
          <BilingualText 
            en="We would love to hear from you. Whether you have feedback on our bilingual translations, suggestions for new classic stories to feature, or simply want to say hello, feel free to reach out to our team."
            zh="我们非常乐意收到您的来信。无论您是对我们的双语翻译有任何反馈，还是对未来将要展示的经典故事有任何建议，或者是单纯想和我们打个招呼，随时欢迎联系我们的团队。"
          />

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl text-center">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email Inquiries / 电子邮件查询</h3>
            <p className="text-blue-600 font-medium text-lg">hello@chinesechildrensstories.com</p>
            <p className="text-slate-500 text-sm mt-4">
              We aim to respond to all inquiries within 48 hours. <br/>
              我们力求在48小时内回复所有咨询。
            </p>
          </div>
          
          <BilingualText 
            en="For business partnerships or AdSense-related advertising network inquiries, please ensure you use the subject line 'Business Inquiry' in your message so it can be routed securely to our administration team."
            zh="若涉及商业合作或者与 AdSense 广告网络相关的查询，请确保在您的邮件中注明“商务咨询”的标题，以便安全、准确地转交给我们的管理团队。"
          />
        </div>

        <AdPlaceholder />
        
      </motion.div>
    </div>
  );
}
