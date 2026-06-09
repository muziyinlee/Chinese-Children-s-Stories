import { motion } from "motion/react";
import { BilingualText } from "../components/BilingualText";

export function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-xl text-slate-500 mb-12">隐私政策</p>
        
        <div className="space-y-8">
          <BilingualText 
            en="This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website. By using our website, you consent to the data practices described in this statement."
            zh="本隐私政策描述了当您访问我们的网站时，我们将如何收集、使用和共享您的个人信息。使用我们的网站即表示您同意本声明中描述的数据操作。"
          />
          
          <div className="border-l-4 border-blue-500 pl-6 my-8">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Google AdSense & Cookies / 谷歌广告与Cookies</h2>
            <BilingualText 
              en="We use Google AdSense to display advertisements on our website. Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites."
              zh="我们使用 Google AdSense 在本站投放广告。包括 Google 在内的第三方供应商会使用 Cookie 来根据用户之前对本网站或其他网站的访问记录来投放广告。"
            />
            <BilingualText 
              en="Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet."
              zh="Google通过使用广告 Cookie，可使其及其合作伙伴能够根据用户对我们网站和/或互联网上其他网站的访问情况，向用户投放广告。"
            />
            <BilingualText 
              en="Users may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting www.aboutads.info."
              zh="用户可通过访问 Google 广告设置 (https://www.google.com/settings/ads) 来选择停用个性化广告。此外，您也可以通过访问 www.aboutads.info 来选择停用第三方供应商用于个性化广告的 Cookie。"
            />
          </div>

          <BilingualText 
            en="Other than cookies used for personalized advertising, log files may automatically collect certain device information, including IP addresses, browser types, and timestamp data to maintain site security and analyze traffic trends."
            zh="除了用于个性化广告的 Cookie 之外，日志文件可能会自动收集某些设备信息，包括 IP 地址、浏览器类型和时间戳数据，以维护网站安全并分析流量趋势。"
          />

          <BilingualText 
            en="Our content generation utilizes Artificial Intelligence. Generative models do not collect personal data from visitors while browsing the site. We are committed to protecting the privacy of young readers; however, this website is fully public and accessible without accounts."
            zh="我们的内容创作使用了人工智能。生成模型在用户浏览网站时不会收集访问者的个人数据。我们致力于保护小读者的隐私；但是，本网站完全公开，无需注册账号即可访问。"
          />
        </div>
      </motion.div>
    </div>
  );
}
