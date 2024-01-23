import Image from 'next/image';

interface KeyFeature {
  title: string;
  description: string;
  imageSrc: string;
}

interface KeyFeaturesSectionProps {
  featuresData: KeyFeature[];
}

const KeyFeaturesSection: React.FC<KeyFeaturesSectionProps> = ({ featuresData }) => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 text-balck text-xl animate-in slide-in-from-bottom delay-150 duration-500'>
      <div className='sm:text-center'>
        <h2 className='mt-2 mb-4 font-bold text-4xl text-balck sm:text-5xl'>
          Key Features
        </h2>
        <p className='mt-2 mb-12 text-lg text-balck text-opacity-80'>
          Discover the powerful features that make Budddy the ultimate platform for college insights.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {featuresData.map((feature, index) => (
          <div key={index} className='w-full p-[1px] rounded-[20px] ring ring-inset ring-black ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={100}
                height={100}
                className='w-32 h-32 object-contain p-2 mb-2 bg-blend'
              />

              <h3 className='text-balck text-[24px] font-bold text-center py-2'>
                {feature.title}
              </h3>
              <p className='text-[16px] text-center leading-5'>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
