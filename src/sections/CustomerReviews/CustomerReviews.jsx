import { reviews } from '../../constants';
import { ReviewCard } from '../../components';

const CustomerReviews = () => {
  return (
    <section className="bg-pale-blue padding sm:pb-24 pb-12">
      <div className="max-container">
        <div>
          <h3 className="text-4xl text-center font-bold font-palanquin">
            <span className="text-coral-red"></span>
          </h3>
          <p className="text-lg text-center font-montserrat font-medium text-slate-gray"></p>
          <div className="flex max-lg:flex-col justify-evenly items-center gap-10">
            {reviews.map((review) => (
              <ReviewCard
                key={review.customerName}
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
