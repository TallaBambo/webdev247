import Header from "./_components/_Header";
import AOSInitializer from "./_components/AOSInitializer";
import "../public/css/style.css";
import Footer from "./_components/_Footer";

export const metadata = {
  title:
    "Web Dev 247 | Empowering your brand with high-performance web experiences.",
  description:
    "Your 24/7 partner for exceptional web development solutions in Cameroon and abroad. We specialize in crafting stunning websites and providing round-the-clock support to ensure your online presence thrives day and night.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
