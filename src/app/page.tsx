

"use client"
import { useState, FormEvent } from 'react'
import { useToast } from "@/components/ui/use-toast"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FAQSection from '@/components/FAQSection'
import KeyFeaturesSection from '@/components/KeyFeaturesSection'
import CommunitySection from '@/components/CommunitySection'


import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight, Loader, Loader2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'


export default function Home() {
  const { toast } = useToast()
  const faqsData = [
    {
      question: 'What is Decidiwise?',
      answer: 'Decidiwise is a unique platform connecting aspiring students with current college seniors to provide real-time insights into college life, academics, and campus culture.',
    },
    {
      question: 'How can I benefit from connecting with seniors on Decidiwise?',
      answer: 'By connecting with seniors, you can gain firsthand information about college experiences, making informed decisions about your academic journey, and avoiding potential regrets.',
    },
    {
      question: 'What types of questions can I ask during a 1:1 video call with a senior?',
      answer: 'You can ask any questions related to academics, campus life, faculty, extracurricular activities, and more. It\'s your chance to get personalized insights.',
    },
    {
      question: 'Which colleges are represented by mentors on Decidiwise?',
      answer: 'We are actively working to expand our network, and currently, we have mentors from all IIITs.As we grow, our expansion plan includes incorporating mentors from NITs, GFTIs, IITs, and other esteemed educational institutions. Our goal is to offer a broad spectrum of perspectives to help you make well-informed decisions about your academic journey.',
    },
    {
      question: 'Will there be a cost associated with connecting with mentors on Decidiwise?',
      answer: 'Yes, there will be a nominal fee for accessing the full benefits of connecting with mentors on Decidiwise. This fee will help us ensure the quality of the interactions and provide you with a valuable experience as you seek personalized insights from experienced mentors.',
    },
   {
      question: 'Will the information provided by mentors on Decidiwise be verified?',
      answer: 'We assure you that we will diligently verify the information provided by our mentors.We are committed to selecting experienced and knowledgeable mentors to ensure the accuracy and reliability of the insights they share. Your trust is our priority, and we will work to deliver credible and valuable information to aid in your decision-making process.',
    },
{
      question: 'How can I contribute as a senior to Decidiwise?',
      answer: 'If you are a senior willing to share your college experiences, you can express your interest by reaching out to our team at [email]. We welcome your valuable insights and look forward to having you contribute to Decidiwise.',
    }
  ];

  const featuresData = [
    {
      title: 'Personalized Recommendations',
      description: 'Receive tailored recommendations based on your interests, goals, and preferences.',
      imageSrc: '/images/personalized_recommendations.png',
    },
    {
      title: '1:1 Video Call Meet',
      description: 'Connect directly with senior students through our exclusive 1:1 video call feature.',
      imageSrc: '/images/video_call.png',
    },
    {
      title: 'Campus Tours',
      description: 'Explore colleges through immersive campus tours videos.',
      imageSrc: '/images/campus_tour.png',
    },
    {
      title: 'College Admission Process',
      description: 'Get full guidance on the college admission process.',
      imageSrc: '/images/college_admission_process.png',
    },
  ];

  const communityData = [
    {
      title: 'Mentors Boarded on Decidiwise',
      count: 100,
      imageSrc: '/images/count100.png',
    },
    {
      title: 'Colleges available on Decidiwise',
      count: 25,
      imageSrc: '/images/count25.png',
    },
  ];

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading,setLoading] = useState(false);
  const handleSubmit = async (e:FormEvent) => {
    setLoading(true);
    e.preventDefault();


    try {
      const response = await fetch(`/api/email?email=${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ email }),
      });

      const data = await response.json();
      // console.log(data)

      if (response.ok) {
        // Handle success
        setMessage(data.message);
        
        toast({
          description: data.message,
        })      
      } else {
        // Handle error
        setMessage(data.error || data.message);
        toast({
          description: message,
          variant: "destructive"
        })  
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }

    // setMessage('');
    setLoading(false);
  };

  return (
    <>
      {/* TOP VIEW SECTION */}
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-20 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-black/40 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-700 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-zinc text-opacity-80'>
          Register Decidiwise For Early Access!
          </p>
        </div>
        
        
    
        <div className='text-black'>
          <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          The simplest way to  {' '}
            <span className='text-blue-600'>Connect</span>{' '}
            with Seniors for real-time college experiences
          </h1>
          <p className='mt-5 max-w-4xl sm:text-lg text-black text-opacity-80'>
          Be the first to experience Decidiwise. Sign up now for early access and revolutionize the way you approach college decisions!
          </p>
        </div>
        {/* <div className="flex w-full max-w-sm items-center space-x-2 mt-5"> */}
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2 mt-5">
          <Input type="email" className="bg-white placeholder-opacity-80 ring-black/40 ring-1"placeholder="Enter your Email" value={email} onChange={(e) => {setEmail(e.target.value); console.log(email);}}/>
          {/* <Button type="submit">Subscribe</Button> */}
          <button disabled={loading}
          type="submit"
          className={`${buttonVariants({
            size: 'lg',
            className: 'max-h ring-1 ring-inset ring-white ring-opacity-50 bg-black',
          })}`}
          >
          {loading ? 'Submitting' : 'Submit'}
          {loading ? <Loader className='animate-spin ml-2 h-5 w-5' />: <ArrowRight className='ml-2 h-5 w-5' />}
          

        </button>
        </form>
        {/* <p className='text-black mt-2'>{message}</p> */}

        {/* </div> */}

        
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
      <div id="key-features-section"></div>
      <KeyFeaturesSection featuresData={featuresData} />


      {/* value proposition section */}
      <div>

        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 48% 37%, 90% 25%, 90% 50%, 43% 73%, 70% 79%, 35% 100%, 12% 87%, 10% 50%)',
              }}
              className='relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#656ee5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
            </div>  
        </div>
      </div>
      <div id="community-section"></div>

      <CommunitySection communityData={communityData} />


      {/* value proposition section */}
      <div>

        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'ellipse(25% 40% at 100% 68%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#656ee5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
            </div>  
        </div>
      </div>
      <div id="faq-section"></div>

      <FAQSection faqsData={faqsData} />

      <div className="mt-8 h-32">

      </div>





    </>
  )
}
