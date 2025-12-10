import { imgFooterLogo } from '../assets/images';

function Footer() {
  return (
    <footer className="relative w-full max-w-[1440px] mx-auto">
      <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-16 py-3">
        <p className="font-roboto font-normal text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-[19px] leading-3 sm:leading-4 md:leading-5 lg:leading-6 xl:leading-[29px] text-white">
          Copyright © 2025 PT. KGiTON
        </p>
        <div className="h-[30px] sm:h-[35px] md:h-[45px] lg:h-[55px] xl:h-[61.643px] w-[100px] sm:w-[116px] md:w-[150px] lg:w-[182px] xl:w-[205px] shrink-0">
          <img 
            src={imgFooterLogo} 
            alt="KGiTON Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
