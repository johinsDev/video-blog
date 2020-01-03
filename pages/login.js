import Header from "../components/Header";
import "../styles/main.css";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Header />
      <section className="container flex flex-col flex-1 justify-center">
        <div
          className="py-10 w-full text-white sm:bg-whiteOpacity sm:mx-auto sm:w-3/5 lg:w-2/5 sm:px-20 sm:border-2 sm:border-white "
          style={{
            borderRadius: 40
          }}
        >
          <h2 className="text-2xl text-center mb-16">Inicia Sesión</h2>
          <form className="flex flex-col">
            <input
              type="text"
              className="border-b-2 border-white bg-transparent placeholder-white mb-8 py-3 px-4 text-sm font-muli focus:outline-none"
              placeholder="Correo"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="border-b-2 border-white bg-transparent placeholder-white mb-8 py-3 px-4 text-sm font-muli focus:outline-none"
            />
            <button
              className="py-3 rounded-full flex items-center justify-center text-sm focus:outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.3)"
              }}
            >
              Iniciar Sesión
            </button>
            <div className="flex justify-between items-center mt-5">
              <label htmlFor="remember-me" className="text-sm">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="mr-1"
                />
                Recuérdame
              </label>

              <p className="text-sm">Olvidé mi contraseña</p>
            </div>
          </form>
          <section className="mt-16">
            <div className="flex text-sm items-center">
              <img src="/google-icon.png" alt="Google" className="mr-2" />
              <span>Inicia sesión con google</span>
            </div>
            <div className="flex text-sm items-center">
              <img src="/twitter-icon.png" alt="Twitter" className="mr-2" />
              <span>Inicia sesión con twitter</span>
            </div>
            <p className="mt-10 text-sm">
              No tienes ninguna cuenta{" "}
              <strong className="text-base cursor-pointer hover:underline">
                Regístrate
              </strong>
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
