import Navbar from '../../components/Navbar';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Галерея — janna.cakes',
};

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
