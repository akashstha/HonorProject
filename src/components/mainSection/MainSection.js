import ComfortBlock from '../comfortBlock/ComfortBlock';
import FindCare from '../findCare/findCare';
import LeftImage from '../leftImage/LeftImage';
import ProfessionalButton from '../professionalButton/ProfessionalButton';
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
    <section className={`page-wrapper`}>
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
      <ProfessionalButton/>
      <svg viewBox="0 0 968 1450" fill="none" xmlns="http://www.w3.org/2000/svg" class="stone-svg right blue">
        <g clip-path="url(#mid_stone_clip)">
            <path d="M-0.00024026 1450L529.153 915.367C657.962 785.224 650.734 573.568 513.344 452.471L-0.00024026 0V1450Z" fill="url(#mid_stone_gradient)"></path>
        </g>
        <defs>
            <linearGradient id="mid_stone_gradient" x1="164.678" y1="1.33641e-05" x2="145.975" y2="1450" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--stone-color, #fff)"></stop>
                <stop offset="1" stop-color="var(--stone-color, #fff)" stop-opacity="0.42"></stop>
            </linearGradient>
            <clipPath id="mid_stone_clip">
                <rect width="968" height="1450" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
    <svg viewBox="0 0 968 1450" fill="none" xmlns="http://www.w3.org/2000/svg" class="stone-svg bottom left red">
        <g clip-path="url(#bottom_stone_clip)">
            <path d="M-0.00024026 1450L529.153 915.367C657.962 785.224 650.734 573.568 513.344 452.471L-0.00024026 0V1450Z" fill="url(#bottom_stone_gradient)"></path>
        </g>
        <defs>
            <linearGradient id="bottom_stone_gradient" x1="164.678" y1="1.33641e-05" x2="145.975" y2="1450" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--stone-color, #fff)"></stop>
                <stop offset="1" stop-color="var(--stone-color, #fff)" stop-opacity="0.42"></stop>
            </linearGradient>
            <clipPath id="bottom_stone_clip">
                <rect width="968" height="1450" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
    </section>
    
  );
};

export default MainSection;
