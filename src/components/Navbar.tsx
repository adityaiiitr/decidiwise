"use client"
import { useEffect, useState } from 'react'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: 'smooth',
        });
      }
    } else {
      window.location.href = `/#${sectionId}`
    }
  };

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
    <div className="sticky top-0 z-30 w-full bg-[#030712]/70 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-zinc-200 text-white opacity-80">
          <Link href='/' className="flex z-40 font-bold">
            <span>Decidiwise</span>
          </Link>

          {/* Mobile Navbar Toggle Button */}
          <div className="block sm:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="text-white p-2 focus:outline-none"
            >
              {toggle ? (
                <Image src="/close.svg" alt="Close" width={28} height={28} />
              ) : (
                <Image src="/menu.svg" alt="Menu" width={28} height={28} />
              )}
            </button>
          </div>

          <div className="hidden items-center space-x-4 sm:flex">
            {navLinks.map((nav) => (
              <Link key={nav.id} href={nav.id}>
                <div
                  className={`${buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })} cursor-pointer ${pathname === nav.id ? 'overline' : ''}`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Navbar Links */}
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#030712]/70`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-gray-600" : "text-white"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <Link href={nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
