import Image from 'next/image';
import styles from './ServiceCard.module.css';
const ServiceCard = ({ title, description, image, link }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} className={styles.cardImage} width={1000} height ={1050}/>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        {/* <Link href={link}> */}
          {/* <a className={styles.linkButton}>Learn More</a> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ServiceCard;
