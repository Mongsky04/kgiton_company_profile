import { imgFeatureIcon1, imgFeatureIcon2, imgFeatureIcon3, imgFeatureIcon4 } from '../assets/images';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="border-2 border-[#646464] hover:border-[#b6f500] rounded-2xl md:rounded-3xl flex flex-col gap-3 md:gap-4 items-center justify-center px-4 md:px-3 py-6 md:py-4 transition-colors duration-300">
      <div className="w-[54px] h-[54px]">
        <img src={icon} alt={`${title} Icon`} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-2 text-center w-full">
        <h3 className="font-bold text-lg md:text-xl text-white tracking-tight">
          {title}
        </h3>
        <p className="font-normal text-sm md:text-base leading-5 md:leading-6 text-[#aeaeae] tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );
}

function WhyChooseUsSection() {
  const features = [
    {
      icon: imgFeatureIcon1,
      title: "Real-Time & Terintegrasi",
      description: "Pencatatan akurat untuk memantau transaksi dan omset dari berbagai lokasi secara real-time."
    },
    {
      icon: imgFeatureIcon2,
      title: "Sentralisasi Pengolahan Data",
      description: "Menghubungkan banyak timbangan ke satu outlet untuk mempermudah pengelolaan semua transaksi."
    },
    {
      icon: imgFeatureIcon3,
      title: "Keamanan dan Privasi Data",
      description: "Perlindungan keamanan. memastikan data yang dikirimkan dari timbangan ke aplikasi tetap aman & terenkripsi."
    },
    {
      icon: imgFeatureIcon4,
      title: "Terintegrasi Pembayaran",
      description: "Terhubung ke berbagai pembayaran digital untuk transaksi lebih fleksibel dan efisien."
    }
  ];

  return (
    <section id="kenapa-kgiton" className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="flex flex-col gap-8 md:gap-16 w-full">
        {/* Section Title */}
        <h2 className="font-roboto font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center tracking-tight">
          Kenapa harus KGiTON
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
