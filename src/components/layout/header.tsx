import Logo from '../logo';

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      <div className="flex items-center justify-between h-(--header-height) px-4">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
