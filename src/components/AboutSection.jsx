function AboutSection() {
  return (
    <section id="tentang-kami" className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
      {/* Left Container - Vision & Mission */}
      <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full">
        {/* Vision Container */}
        <div className="bg-[#1d1d1d] flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl">
          <div className="bg-[#b6f500] flex items-center justify-center p-2.5 rounded-full w-fit">
            <div className="w-8 h-8 flex items-center justify-center">
              <p className="font-roboto font-bold text-base text-[#234e2b] leading-6">
                Visi
              </p>
            </div>
          </div>
          <p className="font-roboto font-medium text-xl leading-7 text-[#a8a8a8]">
            Menjadi pemimpin solusi IoT terintegrasi yang handal dan dapat diandalkan untuk mendukung transformasi digital di sektor logistik, manufaktur, dan perdagangan.
          </p>
        </div>

        {/* Mission Container */}
        <div className="bg-[#1d1d1d] flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl">
          <div className="bg-[#b6f500] flex items-center justify-center p-2.5 rounded-full w-fit">
            <div className="w-8 h-8 flex items-center justify-center">
              <p className="font-roboto font-bold text-base text-[#234e2b] leading-6">
                Misi
              </p>
            </div>
          </div>
          <p className="font-roboto font-medium text-xl leading-7 text-[#a8a8a8]">
            Menghadirkan solusi berbasis IoT yang mudah diintegrasikan, aman, dan dapat diskalakan, serta memberikan layanan dukungan teknis yang responsif untuk pelanggan kami.
          </p>
        </div>
      </div>

      {/* Right Container - About Content */}
      <div className="w-full lg:w-[606px] flex flex-col gap-4 md:gap-6">
        {/* Title with Border */}
        <div className="border-l-[8px] md:border-l-[16px] border-[#b6f500] px-4 md:px-8">
          <h2 className="font-roboto font-bold text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[64px] text-white">
            Tentang Kami
          </h2>
        </div>

        {/* Description */}
        <div className="font-roboto text-base md:text-lg lg:text-xl leading-6 md:leading-8 text-[#a8a8a8]">
          <p className="mb-4">
            PT KGiTON hadir untuk menjawab kebutuhan pengelolaan penimbangan dan transaksi berbasis data secara real-time. Dengan teknologi IoT yang menggabungkan sensor pintar, microcontroller, dan keamanan end-to-end, kami menghadirkan sistem yang akurat, aman, dan mudah diintegrasikan dengan platform cloud.
          </p>
          <p>
            Kami membantu bisnis meningkatkan efisiensi operasional, transparansi data, serta meminimalkan kesalahan melalui solusi perangkat keras dan perangkat lunak yang dirancang untuk industri modern. PT. KGiTON berkomitmen menghadirkan produktivitas yang lebih tinggi melalui inovasi IoT yang dapat diandalkan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
