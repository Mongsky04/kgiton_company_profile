import { imgIndustriesImage } from '../assets/images';

function IndustriesSection() {
  return (
    <section id="industri" className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 pt-8 md:pt-16 pb-0">
      <div className="flex flex-col gap-6 md:gap-8">
        <h2 className="font-roboto font-bold text-2xl md:text-4xl lg:text-5xl text-white text-center tracking-tight">
          Solusi untuk Berbagai Sektor Industri:
        </h2>
        <div className="flex justify-center px-0 md:px-8 lg:px-[152px]">
          <div className="relative w-full max-w-[1008px] aspect-[2/1]">
            <img 
              src={imgIndustriesImage} 
              alt="Industries Sectors" 
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
