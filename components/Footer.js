export default function Footer() {
  return (
    <footer className="container h-32 flex flex-col items-start justify-center text-sm text-white w-full sm:flex-row sm:items-center sm:justify-start">
      <span className="mr-4 cursor-pointer hover:underline">
        Terminos de uso
      </span>
      <span className="mr-4 cursor-pointer hover:underline">
        Declaración de privacidad
      </span>
      <span className="cursor-pointer hover:underline">Centro de ayuda</span>
    </footer>
  );
}
