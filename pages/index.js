import React from "react";
import "../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Header />
    <section className="container flex flex-col justify-center h-64 items-center">
      <h2 className="text-white text-2xl font-bold mb-8">
        ¿Qué quieres ver hoy?
      </h2>
      <input
        type="text"
        placeholder="Buscar ..."
        className="w-full border-white border-2 rounded-full py-3 px-4 text-white placeholder-white font-muli focus:outline-none"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)"
        }}
      />
    </section>
    <section className="w-full overflow-x-scroll container">
      <h2 className="text-base text-white">Mi lista</h2>
      <div className="whitespace-no-wrap my-20 carousel__container">
        {new Array(10).fill(0).map((_, i) => (
          <div
            className="w-48 h-64 rounded-lg bg-white inline-block mr-4 cursor-pointer relative carousel__item"
            key={i}
            style={{
              backgroundImage: "url(/pexels-photo-3154302.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <div
              className="absolute inset-0 text-xs p-5 opacity-0 flex flex-col justify-end hover:opacity-100 text-white"
              style={{
                transition: "400ms opacity",
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)"
              }}
            >
              <div className="flex mb-2">
                <img src="/play-icon.png" alt="play" className="w-4 mr-1" />
                <img src="/plus-icon.png" alt="plus" className="w-4" />
              </div>
              <p className="font-bold m-0">Titulo descriptivo</p>
              <p className="m-0">lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </>
);

export default Home;
