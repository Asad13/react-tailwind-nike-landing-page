import { ServiceCard } from '../../components';
import { services } from '../../constants';

const Services = () => {
  return (
    <section className="padding-x py-10">
      <div className="max-container flex justify-between items-center flex-wrap gap-9">
        {services.map((item) => (
          <ServiceCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
