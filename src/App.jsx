import {
  Nav,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections';

const App = () => {
  return (
    <>
      <Nav />
      <main className="relative pt-24">
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
};

export default App;
