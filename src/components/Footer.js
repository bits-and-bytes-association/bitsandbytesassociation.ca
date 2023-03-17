import Link from 'next/link';
import Image from 'next/image';

// For copyright notice
const firstYear = 2023;
const curYear = new Date().getFullYear();

/**
 * Footer component
 */
export default function Footer() {
  return (
    <div className="bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-row items-center py-6 md:flex-row md:py-12">
          <nav className="grid grid-cols-[repeat(2,min-content)] gap-y-8 gap-x-20 lg:grid-cols-[repeat(4,min-content)]">
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
          </nav>
          <div className="ml-auto hidden shrink-0 self-center sm:inline">
            <Image
              src="/images/bba-logomark-white.svg"
              alt="Bits and Bytes Association logo"
              width={70}
              height={70}
              priority
            />
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 bg-neutral-900 px-6">
        <div className="flex justify-between py-3 sm:justify-center">
          <div className="flex cursor-default flex-col gap-x-1 text-sm text-gray-400 sm:flex-row">
            <p>
              Made with ❤️ by our{' '}
              <Link
                href="#"
                className="linear underline underline-offset-2 duration-300 hover:text-light-font"
              >
                contributors
              </Link>
              .
            </p>
            <p>
              © {curYear > firstYear ? firstYear + '-' + curYear : firstYear}{' '}
              Bits and Bytes Association.
            </p>
          </div>
          <Image
            className="sm:hidden"
            src="/images/bba-logomark-white.svg"
            alt="Bits and Bytes Association logo"
            width={40}
            height={40}
            priority
          />
        </div>
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
    <ul className="flex flex-col whitespace-nowrap">
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
