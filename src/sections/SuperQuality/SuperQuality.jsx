import { Button } from '../../components';
import { shoe8 } from '../../assets/images';

const SuperQuality = () => {
  return (
    <section id="about-us" className="padding">
      <div className="max-container">
        <div className="w-full flex max-lg:flex-col justify-between items-center lg:items-start gap-10">
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl lg:max-w-lg font-bold font-palanquin">
              We Provide You
              <span className="text-coral-red"> Super </span>
              <span className="text-coral-red">Quality </span> Shoes
            </h2>
            <p className="info-text mt-4 lg:max-w-lg">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="info-text mt-4 lg:max-w-lg">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-8">
              <Button label="View details" />
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={shoe8}
              alt="Shoe"
              width={570}
              height={522}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
