export function AdPlaceholder({ className }: { className?: string }) {
  return (
    <div className={`w-full bg-slate-50 border border-slate-200 rounded flex flex-col items-center justify-center p-4 min-h-[250px] my-10 text-slate-400 text-sm overflow-hidden ${className}`}>
      <span className="mb-2 font-medium tracking-wide">ADVERTISEMENT / 广告</span>
      <p className="text-xs text-center max-w-sm opactiy-70">
        Google AdSense Placeholder
      </p>
      {/* 
        DEVELOPER INSTRUCTION FOR ADSENSE:
        Replace this entire <div className="... bg-slate-50 ..."> component content with the AdSense <ins> tag.
        Example:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      */}
    </div>
  );
}
