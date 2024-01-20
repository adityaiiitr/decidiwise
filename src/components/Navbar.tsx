import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
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
                        <Link href='/' className={buttonVariants({
                            variant:"ghost",
                            size:"sm",
                        })}>Features</Link>
                        <div className={buttonVariants({      
                            variant:"ghost",
                            size:"sm",
                        })}>Community</div>
                        <div className={buttonVariants({ 
                            variant:"ghost",     
                            size:"sm",
                        })}>FAQ<ArrowRight className="ml-1.5 h-5 w-5"></ArrowRight></div>

                        </>
                    </div>

                </div>
            </MaxWidthWrapper>
        </div>
    )
}
export default Navbar