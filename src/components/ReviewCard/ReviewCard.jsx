import { star } from '../../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex-1 w-full max-w-[400px] flex flex-col justify-center items-center gap-2.5 px-6 py-8 border-2 rounded hover:shadow-2xl">
      <img
        src={imgURL}
        alt={customerName}
        width="120px"
        height="120px"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-4 text-center info-text">{feedback}</p>
      <div className="mt-2 flex justify-center items-center gap-2">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="object-contain m-0"
        />
        <span className="text-xl font-montserrat text-slate-gray">
          ({rating})
        </span>
      </div>
      <h3 className="mt-2 text-2xl font-palanquin font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
