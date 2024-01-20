// Footer.js
import { Coffee, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white p-4">
      <div className="px-4 mx-auto flex items-center justify-between">
        <p className="text-sm">Made with <Coffee className="inline-block text-red-500" /> by Team Decidiwise</p>
        
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-500"><Facebook /></a>
          <a href="#" className="text-white hover:text-gray-500"><Twitter /></a>
          <a href="#" className="text-white hover:text-gray-500"><Instagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
