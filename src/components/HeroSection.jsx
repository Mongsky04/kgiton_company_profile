import Button from './Button';
import { imgHeroImage, imgPattern, imgVector } from '../assets/images';

function HeroSection() {
  return (
    <section id="hero" className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      {/* Background Pattern */}
      <div className="absolute right-[-432px] top-[-508px] w-[1331px] h-[1322px] pointer-events-none opacity-30 hidden lg:block">
        <img src={imgPattern} alt="" className="w-full h-full object-contain" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 w-full lg:w-[704px]">
        {/* Hero Text */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-roboto font-bold text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[64px] text-white">
            Timbangan Cerdas untuk Bisnis Modern berbasis IOT
          </h1>
          <p className="font-roboto text-base md:text-xl lg:text-2xl leading-6 md:leading-8 text-[#a8a8a8]">
            Kuasai operasional bisnismu dengan sistem berat IoT yang menyajikan data real-time, akurat, dan otomatis tersinkron. Semua tercatat tanpa proses manual, meminimalkan kesalahan dan memudahkan keputusan cepat.
          </p>
        </div>
        
        {/* CTA Button */}
        <Button className="w-full md:w-[200px]" />
      </div>
      
      {/* Hero Image Container */}
      <div className="relative flex gap-8 lg:gap-16 items-center w-full lg:w-auto">
        {/* Hero Image */}
        <div className="relative w-full lg:w-[545px] h-[300px] md:h-[400px] lg:h-[510px] rounded-2xl md:rounded-[32px] overflow-hidden">
          <img 
            src={imgHeroImage} 
            alt="Forest with KGiTON logo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
          
          {/* Vector/Logo Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[206px] h-[200px]">
            <img src={imgVector} alt="KGiTON Icon" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
