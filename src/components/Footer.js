import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer component
 */
export default function Footer() {
  return (
    <div className="bg-dark">
      <nav className="container mx-auto flex py-12 px-16">
        <NavColumn header="Club">
          <NavLink href="#">Mission Statement</NavLink>
          <NavLink href="#">Current Board</NavLink>
          <NavLink href="#">Past Executives</NavLink>
        </NavColumn>
        <NavColumn header="Involvement">
          <NavLink href="#">Events</NavLink>
          <NavLink href="#">Volunteer</NavLink>
          <NavLink href="#">GitHub</NavLink>
        </NavColumn>
        <NavColumn header="Socials">
          <NavLink href="#">Discord</NavLink>
          <NavLink href="#">Instagram</NavLink>
          <NavLink href="#">YouTube</NavLink>
          <NavLink href="#">LinkedIn</NavLink>
        </NavColumn>
        <NavColumn header="Get In Touch">
          <NavLink href="#">Contact</NavLink>
        </NavColumn>
        <div className="ml-auto mr-10 shrink-0 self-center">
          <Image
            src="/images/bba-logomark-white.svg"
            alt="Bits and Bytes Association logo"
            width={70}
            height={70}
            priority
          />
        </div>
      </nav>
      <div className="border-t border-neutral-800 bg-neutral-900">
        <p className="cursor-default py-3 text-center text-sm text-gray-400">
          Made with ❤️ by our{' '}
          <Link
            href="#"
            className="linear underline underline-offset-2 duration-300 hover:text-light-font"
          >
            contributors
          </Link>
          {'. '}© {new Date().getFullYear()} Bits and Bytes Association
        </p>
      </div>
    </div>
  );
}

/**
 * Footer navigation column component
 * @param {string} header  Header text
 * @param {ReactNode} children  Column link components
 */
function NavColumn({ header, children }) {
  return (
    <ul className="mx-10 flex flex-col">
      <li className="mb-2 flex-initial">
        <p className="cursor-default text-lg font-bold text-light-font">
          {header}
        </p>
      </li>
      {children}
    </ul>
  );
}

/**
 * Footer navigation column link
 * @param {string} href  Link destination
 * @param {ReactNode} children  Link content
 */
function NavLink({ href, children }) {
  return (
    <li className="mb-1 flex-initial">
      <Link
        href={href}
        className="linear text-gray-400 duration-100 hover:text-light-font"
      >
        {children}
      </Link>
    </li>
  );
}
