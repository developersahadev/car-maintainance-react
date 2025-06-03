import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div id="about" className="h-screen bg-gray-50 py-20 px-6 scroll-mt-20 overflow-y-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Azure Car Service Center
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Welcome to <span className="font-semibold text-blue-600">Azure Car Service Center</span> — your one-stop destination for quality, reliability, and innovation.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        🟥 مركز خدمة أزور للسيارات الفاخرة

        At Azure Car Service Center, we take immense pride in being recognized as one of the most trusted names in luxury car maintenance in Saudi Arabia. Specializing in Bentley and Rolls-Royce, our expert technicians and state-of-the-art service facility are dedicated to delivering precision, elegance, and performance with every service.

        في مركز أزور لخدمة السيارات، نفخر بكوننا من الأسماء الرائدة في صيانة السيارات الفاخرة في المملكة العربية السعودية...
      </p>

      <p className="text-lg text-gray-700 mb-4">
        ✅ Why Choose Azure? — ✅ لماذا تختار مركز أزور؟

        Certified professionals in Bentley & Rolls-Royce service — فنيون معتمدون  
        Advanced diagnostics & repair systems — أحدث أجهزة الفحص
        Genuine OEM parts only — قطع غيار أصلية
      </p>

      <p className="text-lg text-gray-700">
        <span className="font-semibold text-blue-600">
          VIP pick-up & drop service — خدمة استلام وتسليم السيارة لكبار العملاء
        </span>
        🚗 We don’t just service supercars – we maintain prestige.
      </p>
    </div>
  );
};

export default AboutUs;