import Footer from "../components/Footer";
import "../styles/main.css";

export default function Error() {
  return (
    <>
      <section className="container flex flex-col flex-1 items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-8">404</h1>
        <p>Página no encontrada</p>
      </section>
      <Footer />
    </>
  );
}
