import Image from 'next/image';

interface CommunityFeature {
  title: string;
  imageSrc: string;
}

interface CommunitySectionProps {
  communityData: CommunityFeature[];
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ communityData }) => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 text-white text-xl'>
      <div className='sm:text-center'>
        <h2 className='mt-2 mb-12 font-bold text-4xl text-white sm:text-5xl'>
          Our Community
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {communityData.map((feature, index) => (
          <div key={index} className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={100}
                height={100}
                className='w-16 h-16 object-contain'
              />

              <h3 className='text-white text-[20px] font-bold text-center'>
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
