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
    <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-28 sm:mt-40 text-white text-xl animate-in slide-in-from-bottom delay-150 duration-500'>
      <div className='sm:text-center'>
        <h2 className='mt-2 mb-4 font-bold text-4xl text-white sm:text-5xl'>
          Key Features
        </h2>
        <p className='mt-2 mb-12 text-lg text-white text-opacity-80'>
          Discover the powerful features that make Budddy the ultimate platform for college insights.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {featuresData.map((feature, index) => (
          <div key={index} className='w-full p-[1px] rounded-[20px] ring ring-inset ring-white ring-opacity-80'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={100}
                height={100}
                className='w-16 h-16 object-contain bg-white p-2'
              />

              <h3 className='text-white text-[20px] font-bold text-center'>
                {feature.title}
              </h3>
              <p className='text-[16px] text-center'>
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
