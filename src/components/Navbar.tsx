"use client"
import { useEffect, useState } from 'react'

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { usePathname, useSearchParams } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()

  // State to manage the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect to update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scroll to a section
  const scrollToSection = (sectionId: string) => {
    if(pathname === "/") {
      const sectionElement = document.getElementById(sectionId);
      
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: 'smooth',
        });
      }
      // window.location.href = `/#${sectionId}`
    } else {
      window.location.href = `/#${sectionId}`
    }
  };

    return (
        <div className='sticky h-14 inset-x-0 top-0 z-30 w-full  bg-[#030712]/70 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-zinc-200 text-white opacity-80">
                    <Link href='/' className="flex z-40 font-semibold">
                        <span>
                        Decidiwise 
                        </span>
                    </Link>

                    {/* todo add mobiledivbar  */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                      <Link href='/#key-features-section' className={`${buttonVariants({
                            variant:"ghost",
                            size:"sm",
                        })} cursor-pointer`} >Features</Link>
                        <Link href='/#community-section' className={`${buttonVariants({
                            variant:"ghost",
                            size:"sm",
                        })} cursor-pointer`} >Community</Link>
                       <Link href='/#faq-section' className={`${buttonVariants({
                            variant:"ghost",
                            size:"sm",
                        })} cursor-pointer`} >FAQ</Link>
                        <Link href='/who-are-we' className={`${buttonVariants({
                            variant:"ghost",
                            size:"sm",
                        })} cursor-pointer ${pathname==='/who-are-we'? 'overline':''}`} >Who are we?</Link>
                        </>
                    </div>

                </div>
            </MaxWidthWrapper>

        </div>
        
    )
}
export default Navbar