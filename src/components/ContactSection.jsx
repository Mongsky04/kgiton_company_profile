import { imgContactIcon1, imgContactIcon2, imgContactIcon3 } from '../assets/images';

function ContactItem({ icon, title, content, href, isLink = false }) {
  return (
    <div className="flex gap-3 md:gap-4 items-start">
      <div className="bg-[#1d1d1d] rounded-full p-2 md:p-2.5 shrink-0">
        <div className="w-6 h-6 md:w-8 md:h-8">
          <img src={icon} alt={`${title} Icon`} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 md:gap-4">
        <p className="font-roboto font-medium text-lg md:text-2xl leading-6 text-white">
          {title}
        </p>
        {isLink ? (
          <a href={href} className="font-roboto text-base md:text-2xl leading-6 text-[#939393] underline break-all">
            {content}
          </a>
        ) : (
          <p className="font-roboto text-base md:text-2xl leading-6 md:leading-8 text-[#939393] underline">
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
      <div className="border-t border-b border-[#939393] px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <h2 className="font-roboto font-medium text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-10 text-white">
          Hubungi Kami
        </h2>
      </div>

      {/* Contact Info */}
      <div className="border-b border-[#939393] flex flex-col lg:flex-row">
        {/* Left Column - Email & Phone */}
        <div className="flex-1 flex flex-col gap-8 md:gap-16 p-6 md:p-12 lg:p-16">
          <ContactItem 
            icon={imgContactIcon1}
            title="Email"
            content="info@kgiton.example"
            href="mailto:info@kgiton.example"
            isLink={true}
          />
          
          <ContactItem 
            icon={imgContactIcon2}
            title="Telepon"
            content="(+62) 21 1234 5678"
            href="tel:+622112345678"
            isLink={true}
          />
        </div>

        {/* Right Column - Address */}
        <div className="flex-1 border-t lg:border-t-0 lg:border-l border-[#939393] p-6 md:p-12 lg:p-16">
          <ContactItem 
            icon={imgContactIcon3}
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
