export default function Header() {
  return (
    <header className="container py-5 w-full flex justify-between items-center">
      <img src="/logo-platzi-video-BW2.png" alt="Main_icon" className="w-48" />
      <div className="text-white relative cursor-pointer header__menu">
        <div className="flex items-center justify-end">
          <img src="/user-icon.png" alt="User" className="w-8 mr-2" />
          <p>Perfil</p>
        </div>

        <ul className="hidden text-right w-32 right-0 absolute header__menu--list">
          <li>Cuenta</li>
          <li>Cerrar Sesión</li>
        </ul>
      </div>
    </header>
  );
}
