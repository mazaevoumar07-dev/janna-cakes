import Navbar from '../../components/Navbar';
import Mochi from '../../components/Mochi';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Моти — janna.cakes',
};

export default function MochiPage() {
  return (
    <div>
      <Navbar />
      <Mochi />
      <Footer />
    </div>
  );
}
