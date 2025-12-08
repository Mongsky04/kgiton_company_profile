import { imgFooter } from '../assets/images';

function Footer() {
  return (
    <footer className="relative w-full">
      <img 
        src={imgFooter} 
        alt="©2025" 
        className="w-full h-auto object-contain"
      />
    </footer>
  );
}

export default Footer;
