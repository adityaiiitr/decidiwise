import Image from 'next/image';

interface CommunityFeature {
  title: string;
  imageSrc: string;
  count: number;
}

interface CommunitySectionProps {
  communityData: CommunityFeature[];
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ communityData }) => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-14 mt-28 sm:mt-40 text-black text-xl'>
      <div className='sm:text-center'>
        <h2 className='mt-2 mb-12 font-bold text-4xl text-black sm:text-5xl'>
          Our Community
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-x-48 align-center sm:px-32' >
        {communityData.map((feature, index) => (
          <div key={index} className='w-full p-[1px] rounded-[20px] ring ring-inset ring-black ring-opacity-80 my-6'>
            <div className='bg-tertiary rounded-[20px] py-1 px-8 min-h-[280px] flex justify-evenly items-center flex-col'>
              {/* <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={100}
                height={100}
                className='w-32 h-32 object-contain'
              /> */}
              <p className='w-16 h-16 object-contain text-7xl font-serif font-bold flex justify-center'>{feature.count}+</p>

              <h3 className='text-black text-[20px] font-bold text-center'>
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
