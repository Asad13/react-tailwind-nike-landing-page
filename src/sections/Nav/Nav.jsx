import { headerLogo } from '../../assets/images';
import { hamburger } from '../../assets/icons';
import { navLinks } from '../../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-20 w-full bg-white">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
