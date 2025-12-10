import { imgContactIconNew1, imgContactIconNew2, imgContactIconNew3 } from '../assets/images';

function ContactItem({ icon, title, content, href, isLink = false }) {
  return (
    <div className="flex gap-3 sm:gap-3 md:gap-4 items-start">
      <div className="bg-[#1d1d1d] rounded-full p-2 sm:p-2 md:p-2.5 shrink-0">
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
          <img src={icon} alt={`${title} Icon`} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 sm:gap-2 md:gap-4">
        <p className="font-roboto font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-5 sm:leading-6 text-white">
          {title}
        </p>
        {isLink ? (
          <a href={href} className="font-roboto text-sm sm:text-base md:text-xl lg:text-2xl leading-5 sm:leading-6 text-[#939393] underline break-all">
            {content}
          </a>
        ) : (
          <p className="font-roboto text-sm sm:text-base md:text-xl lg:text-2xl leading-5 sm:leading-6 md:leading-8 text-[#939393] underline">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="kontak" className="relative max-w-[1440px] mx-auto w-full">
      {/* Contact Header */}
      <div className="border-t border-b border-[#939393] px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-5 md:py-6 lg:py-8">
        <h2 className="font-roboto font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-10 text-white">
          Hubungi Kami
        </h2>
      </div>

      {/* Contact Info */}
      <div className="border-b border-[#939393] flex flex-col lg:flex-row">
        {/* Left Column - Email & Phone */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 p-4 sm:p-6 md:p-10 lg:p-16">
          <ContactItem 
            icon={imgContactIconNew1}
            title="Email"
            content="support@kgiton.com"
            href="mailto:support@kgiton.com"
            isLink={true}
          />
          
          <ContactItem 
            icon={imgContactIconNew2}
            title="Telepon"
            content="+62 819-9479-0864"
            href="tel:+6281994790864"
            isLink={true}
          />
        </div>

        {/* Right Column - Address */}
        <div className="flex-1 border-t lg:border-t-0 lg:border-l border-[#939393] p-4 sm:p-6 md:p-10 lg:p-16">
          <ContactItem 
            icon={imgContactIconNew3}
            title="Alamat"
            content="Jl. Ir H. Juanda No.2, Cemp. Putih, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412"
            isLink={false}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
