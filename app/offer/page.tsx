
import OfferHeroHome from './OfferHeroHome';
import OfferProcess from './OfferProcess';
import OfferTestimonials from './OfferTestimonials';
import OfferForm from './OfferForm';
import Footer from '../../components/Footer';

export default function OfferPage() {
  return (
    <main className="min-h-screen">
      <OfferHeroHome />
      <OfferProcess />
      <OfferTestimonials />
      <OfferForm />
      <Footer />
    </main>
  );
}
