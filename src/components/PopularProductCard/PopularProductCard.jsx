import { star } from '../../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="mt-3 px-2">
        <div className="flex gap-2">
          <img src={star} alt="star" width={24} height={24} />
          <span className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </span>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 text-coral-red font-montserrat font-semibold text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
