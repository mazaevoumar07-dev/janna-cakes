import Navbar from '../../components/Navbar';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Контакты — janna.cakes',
};

export default function ContactsPage() {
  return (
    <div className="page-noscroll">
      <Navbar />
      <Contacts />
      <Footer />
    </div>
  );
}
