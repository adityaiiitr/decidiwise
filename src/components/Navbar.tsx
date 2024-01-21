"use client"
import { useEffect, useState } from 'react'

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'


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
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      title: "Features",
      id: "#key-features-section",
    },
    {
      title: "Community",
      id: "/#community-section",
    },
    {
      title: "FAQ",
      id: "/#faq-section",
    },
    {
      title: "Who Are We?",
      id: "/who-are-we",
    },

  ];

    return (
        <div className='sticky h-14 inset-x-0 top-0 z-30 w-full  bg-[#030712]/70 backdrop-blur-lg transition-all flex'>
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-zinc-200 text-white opacity-80">
                    <Link href='/' className="flex z-40 font-bold">
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
            <div className='sm:hidden flex flex-1 justify-end items-center bg-black mt-4 px-2'>
            <Image className='w-[28px] h-[28px] object-contain text-white'
            onClick={() => setToggle(!toggle)} src={toggle ? '/close.svg' : '/menu.svg '} width={100} height={100} alt='menu' />


          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-zinc-300 bg-opacity-80`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-gray-600" : "text-black"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link href={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        </div>
        
        
    )
}
export default Navbar