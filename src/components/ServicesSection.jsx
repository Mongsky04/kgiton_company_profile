import { imgServiceImage1, imgServiceImage2, imgServiceImage3, imgServiceIconContainer1, imgServiceIconContainer2, imgServiceIconContainer3 } from '../assets/images';

function ServiceCard({ image, icon, title, description }) {
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[371px]">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group">
        <div className="h-[200px] md:h-[264px] w-full">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[82px] h-[110px]">
          <img src={icon} alt="Service Icon" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-base md:text-lg lg:text-xl leading-6 md:leading-8">
        <h3 className="font-roboto font-extrabold text-white">
          {title}
        </h3>
        <p className="font-roboto font-normal text-[#939393]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      image: imgServiceImage1,
      icon: imgServiceIconContainer1,
      title: "Semua Data, Real-Time & Terverifikasi.",
      description: "Kami menghadirkan integrasi IoT yang otomatis mengirim dan memvalidasi data dalam hitungan detik. Semua angka langsung sinkron di satu dashboard"
    },
    {
      image: imgServiceImage2,
      icon: imgServiceIconContainer2,
      title: "Satu Ekosistem. Semua Terhubung.",
      description: "Kami menyatukan perangkat IoT dan sistem transaksi dalam satu alur kerja terpadu — lebih cepat, efisien, dan scalable."
    },
    {
      image: imgServiceImage3,
      icon: imgServiceIconContainer3,
      title: "Transaksi aman & Terenskripsi.",
      description: "Setiap transaksi terekam otomatis, terenkripsi dan sepenuhnya terlacak dari awal hingga akhir. mengurangi risiko manipulasi."
    }
  ];

  return (
    <section id="layanan" className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Section Title */}
        <div className="border-l-[8px] md:border-l-[16px] border-[#b6f500] px-4 md:px-8">
          <h2 className="font-roboto font-bold text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[64px] text-white">
            Layanan Yang Kami Berikan
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
