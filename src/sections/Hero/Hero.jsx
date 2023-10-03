import { useState } from 'react';
import { Button, ShoeCard } from '../../components';
import { shoes, statistics } from '../../constants';
import { arrowRight } from '../../assets/icons';

const Hero = () => {
  const [heroImage, setHeroImage] = useState(shoes[0].bigShoe);

  return (
    <section
      id="home"
      className="min-h-screen xl:padding-l wide:padding-r padding-b"
    >
      <div className="w-full flex max-xl:flex-col justify-center gap-10 max-container">
        <div className="w-full xl:w-2/5 flex flex-col items-start justify-start max-xl:padding-x pt-12">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer collections
          </p>
          <h1 className="text-8xl max-sm:text-[64px] max-sm:leading-[72px] font-bold font-palanquin mt-8">
            <span className="relative xl:bg-white xl:whitespace-nowrap z-10 pr-8">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-10 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button label="Shop now" iconURL={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-12">
            {statistics.map((item) => (
              <div key={item.label}>
                <p className="font-palanquin text-4xl font-bold">
                  {item.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-primary bg-hero bg-cover bg-center">
          <img
            src={heroImage}
            alt="Hero Image"
            width={610}
            height={502}
            className="object-contain relative z-5"
          />

          <div className="flex justify-center items-center sm:gap-6 gap-4 absolute -bottom-[15%] max-sm:px-6">
            {shoes.map((item, index) => (
              <ShoeCard
                key={`shoe-thumbnail-${index}`}
                data={item}
                selectedImage={heroImage}
                changeImage={setHeroImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
