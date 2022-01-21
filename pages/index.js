import Joureny from '../src/Components/Joureny/Joureny';
import OurValue from '../src/Components/OurValue/OurValue';
import styles from '../styles/Home.module.css';
import BannerTop from './../src/Components/BannerTop/BannerTop';
import ParksSection from './../src/Components/PerksSection/ParksSection';

export default function Home() {
  return (
    <div>
      <BannerTop />
      <OurValue />
      <ParksSection />
      <Joureny />
    </div>
  );
}
