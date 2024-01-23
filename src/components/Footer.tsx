// Footer.js
import { Coffee, Facebook, Twitter, Instagram } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <MaxWidthWrapper>
    <footer className="bg-transparent text-black p-4">
      <div className="px-4 mx-auto flex items-center justify-between">
        <p className="text-sm">Made with <Coffee className="inline-block text-red-500" /> by Team Decidiwise</p>
        
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-500"><Facebook /></a>
          <a href="#" className="text-black hover:text-gray-500"><Twitter /></a>
          <a href="#" className="text-black hover:text-gray-500"><Instagram /></a>
        </div>
      </div>
    </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
