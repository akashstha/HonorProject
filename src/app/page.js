import "@fontsource/dm-serif-display"; // Defaults to weight 400
import "@fontsource/dm-serif-display/400-italic.css"; // Specify weight and style
import "@fontsource/dm-serif-display/400.css"; // Specify weight
import Head from 'next/head';
import MainSection from '../components/mainSection/MainSection';

const organizationSchema =  {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Home Instead",
  "description": "Home Instead, a trusted source of in home elderly care services.",
  "telephone": "(402) 498-4466",
  "logo": "https://www.homeinstead.com/Static/img/logo/hi_logo_vertical_woTagline.png",
  "url": "https://www.homeinstead.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13323 California Street Suite 101",
    "addressLocality": "Omaha",
    "addressRegion": "NE",
    "postalCode": "68154"
  }
}

const serviceSchema = 
    {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "In Home Care"
    }

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Instead Clone</title>
        <meta name="description" content="Home care services for seniors." />
        <link rel="canonical" href="Home care services for seniors." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      <MainSection className="page-wrapper"/>
    </div>
  );
}
