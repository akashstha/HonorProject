import ComfortBlock from '../comfortBlock/ComfortBlock';
import FindCare from '../findCare/findCare';
import LeftImage from '../leftImage/LeftImage';
import ServiceCard from '../serviceCard /ServiceCard';
import TwoColumn from '../twoColumn/TwoColumn';
import styles from './MainSection.module.css';

const MainSection = () => {
  const ComfortBlockContent = [{
    heading : "Comfort. Security. Connection.",
    paragraph : "We all need these as we age, and that's where Home Instead can help. Our high-quality, trained Care Professionals offer the guidance and support you deserve, all in the comfort of home."
  },{
    heading : "Experience meets innovation",
    paragraph : "With over two decades of experience caring for seniors, Home Instead is the world’s largest home care network, serving about 100,000 families in nearly 1,200 locations."
  }]
  return (
    <section className={styles.main}>
      {/* <Nav /> */}
      <FindCare/>
        <ComfortBlock content = {ComfortBlockContent[0]}/>
      <div className={styles.sectionContainer}>
        <ServiceCard
          title="Personalized Home Care"
          description="Tailored in-home care services designed to meet individual needs."
          image="/homeCare.png"
        />
        <ServiceCard
          title="24/7 Availability"
          description="We're available around the clock to provide care and support whenever needed."
          image="/co-home_care-pro-stone_transparent_2x.png"
          link="/about"
        />
        <ServiceCard
          title="Alzheimer's & Dementia Care"
          description="Our caregivers are experienced in providing specialized memory care services."
          image="/sddefault.png"
          link="/memory-care"
        />
      </div>
      <TwoColumn />
      <LeftImage/>
      <ComfortBlock content = {ComfortBlockContent[1]}/>
    </section>
  );
};

export default MainSection;
