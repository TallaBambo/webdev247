import Header from "./_components/_Header";
import AOSInitializer from "./_components/AOSInitializer";
import "../public/css/style.css";
import Footer from "./_components/_Footer";

export const metadata = {
  title:
    "WebDev-247 | Empowering your brand with high-performance web experiences in Cameroon.",
  description:
    "Expert web development solutions in Cameroon & abroad. Founded by Talla Bambo Blaise in 2022, WebDev247 offers 24/7 support and high-performance web apps.",
  openGraph: {
    title: "WebDev247 - Shaping the Digital Future of Cameroon",
    description:
      "Specializing in Next.js, React, SEO and Full-Stack Engineering.",
    url: "https://webdev247.netlify.app/",
    siteName: "WebDev-247",
    locale: "en_CM",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PFV7ERKBW7"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PFV7ERKBW7');
        `}
        </script>
        <script>
          {`
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "WebDev247",
                "image": "https://webdev247.netlify.app/images/logo.png",
                "url": "https://webdev247.netlify.app",
                "telephone": "+237670704984",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Yaoundé",
                  "addressCountry": "CM"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 3.8480,
                  "longitude": 11.5021
                },
                "description": "WebDev247 is a premier full-stack web development agency in Cameroon specializing in Next.js, MERN stack and SEO solutions.",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "06:00",
                  "closes": "19:00"
                }
              }
            `}
        </script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          precedence="default"
        />
      </head>
      <body>
        <AOSInitializer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
