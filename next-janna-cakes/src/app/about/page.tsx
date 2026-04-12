import Navbar from '../../components/Navbar';
import About from '../../components/About';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'О мне — janna.cakes',
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
