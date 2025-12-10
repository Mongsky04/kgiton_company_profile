import { imgSegmentIndustries1 } from '../assets/images';

function IndustriesSection() {
  return (
    <section id="industri" className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-0">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        <h2 className="font-roboto font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center tracking-tight px-2">
          Solusi untuk Berbagai Sektor Industri:
        </h2>
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[2/1] lg:aspect-[1264/680]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img 
              src={imgSegmentIndustries1} 
              alt="Segment Industries" 
              className="absolute inset-0 w-full h-full object-contain md:h-[106.91%] md:left-[-0.02%] md:top-[-6.91%] md:w-[100.04%] md:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
