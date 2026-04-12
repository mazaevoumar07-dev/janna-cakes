import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <div className="page-noscroll">
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}
