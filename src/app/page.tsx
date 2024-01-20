import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}


import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'


export default function Home() {
  return (
    <>
      {/* TOP VIEW SECTION */}
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-700 hover:bg-white/50'>
          <p className='text-sm font-semibold text-white text-opacity-80'>
          Register Decidiwise For Early Access!
          </p>
        </div>
        
    
        <div className='text-white'>
          <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          The simplest way to  {' '}
            <span className='text-blue-600'>Connect</span>{' '}
            with College Seniors
          </h1>
          <p className='mt-5 max-w-prose sm:text-lg text-white text-opacity-80 text-wrap'>
          Be the first to experience Decidiwise. Sign up now for early access and revolutionize the way you approach college decisions!
          </p>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
          <Input type="email" className="bg-white placeholder-opacity-80"placeholder="Enter your Email" />
          {/* <Button type="submit">Subscribe</Button> */}
          <Link
          className={buttonVariants({
            size: 'lg',
            className: 'max-h ring-1 ring-inset ring-white bg-black',
          })}
          href='/dashboard'
          target='_blank'>
          Submit{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
        </div>

        
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>

        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#656ee5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
            </div>  
        </div>
      </div>
                
        {/* How it works section */}
      <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 text-white opacity-80 text-xl '>

        <div className='sm:text-center'>
            <h2 className='mt-2 mb-4 font-bold text-4xl text-white sm:text-5xl'>
              Key Features
            </h2>
            <p className='mt-2 mb-12 text-lg text-white text-opacity-80'>
              Discover the powerful features that make Budddy the ultimate platform for college insights.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src='/images/mentor.svg'
                alt='mentor'
                width={100}
                height={100}
                className='w-16 h-16 object-contain'

              />

              <h3 className='text-white text-[20px] font-bold text-center'>
              Personalized Recommendations
              </h3>
              <p className='text-[16px] text-center'>
              Receive tailored recommendations based on your interests, goals, and preferences.
              </p>
            </div>
          </div>
          <div className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src='/images/mentor.svg'
                alt='mentor'
                width={100}
                height={100}
                className='w-16 h-16 object-contain'

              />

              <h3 className='text-white text-[20px] font-bold text-center'>
              1:1 Video Call Meet
              </h3>
              <p className='text-[16px] text-center'>
              Connect directly with senior students through our exclusive 1:1 video call feature.              
              </p>
            </div>
          </div>

          <div className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src='/images/mentor.svg'
                alt='mentor'
                width={100}
                height={100}
                className='w-16 h-16 object-contain'

              />

              <h3 className='text-white text-[20px] font-bold text-center'>
              Campus Tours
              </h3>
              <p className='text-[16px] text-center'>
                Explore colleges through immersive campus tours videos.
              </p>
            </div>
          </div>

          <div className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src='/images/mentor.svg'
                alt='mentor'
                width={100}
                height={100}
                className='w-16 h-16 object-contain'

              />

              <h3 className='text-white text-[20px] font-bold text-center'>
              College Admission Process
              </h3>
              <p className='text-[16px] text-center'>
              Get full guidance on the college admission process.
              </p>
            </div>
          </div>

          
        </div>
        

      </div>



      {/* Our Community Section */}
      <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 text-white text-xl '>

        <div className='sm:text-center'>
            <h2 className='mt-2 mb-12 font-bold text-4xl text-white sm:text-5xl'>
              Our Community
            </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src='/images/mentor.svg'
                alt='mentor'
                width={100}
                height={100}
                className='w-16 h-16 object-contain'

              />

              <h3 className='text-white text-[20px] font-bold text-center'>
              Mentors Boarded on [Platform Name]
              </h3>
            </div>
          </div>
          <div className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src='/images/mentor.svg'
                alt='mentor'
                width={100}
                height={100}
                className='w-16 h-16 object-contain'

              />

              <h3 className='text-white text-[20px] font-bold text-center'>
              Colleges available on [Platform Name]
              </h3>
            </div>
          </div>
          
        </div>

      </div>

      {/* FAQ section */}
      <div className='container mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 text-white text-xl '>

        <div className='sm:text-center'>
            <h2 className='mt-2 mb-12 font-bold text-4xl text-white opacaity-80 sm:text-5xl'>
              FAQs
            </h2>
        </div>
        <div className='text-sm text-left sm:text-xl'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger  className='text-center p-4 font-bold'>What is Decidiwise?</AccordionTrigger>
            <AccordionContent>
            Decidiwise is a unique platform connecting aspiring students
            with current college seniors to provide real-time insights into
            college life, academics, and campus culture.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='text-center p-4 font-bold'>How can I benefit from connecting with seniors on Decidiwise?</AccordionTrigger>
            <AccordionContent className='text-center'>
            By connecting with seniors, you can gain firsthand information 
            about college experiences, making informed decisions about your
            academic journey, and avoiding potential regrets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger  className='text-center p-4 font-bold'>What types of questions can I ask during a 1:1 video call with a senior?</AccordionTrigger>
            <AccordionContent className='text-center'>
            You can ask any questions related to academics, campus life, faculty,
            extracurricular activities, and more. It&apos;s your chance to get personalized insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className='text-center p-4 font-bold'>Which colleges are represented by mentors on Decidiwise?</AccordionTrigger>
            <AccordionContent className='text-center'>
            As we grow, our expansion plan includes incorporating mentors from NITs, GFTIs, IITs, and 
            other esteemed educational institutions. Our goal is to offer a broad spectrum of perspectives 
            to help you make well-informed decision about your academic journey.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className='text-center p-4 font-bold'>Will there be a cost associated with connecting with mentors on Decidiwise?</AccordionTrigger>
            <AccordionContent className='text-center'>
            Yes, there will be a nominal fee for accessing the full benefits of connecting
            with mentors on Decidiwise. This fee will help us ensure the quality
            of the interactions and provide you with a valuable experience as you seek personalized 
            insights from experienced mentors.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </div>


    </>
  )
}
