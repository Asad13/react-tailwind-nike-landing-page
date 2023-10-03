import { Button } from '../../components';
const Subscribe = () => {
  return (
    <section id="contact-us" className="padding-x sm:py-32 py-16 w-full">
      <div className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign Up for
          <span className="text-coral-red"> Updates </span>& Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input
            type="email"
            placeholder="subscribe@nike.com"
            className="input"
          />
          <div className="flex items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
