import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer navigation component
 */
export default function FooterNavigation() {
  /**
   * Footer navigation column component
   * @param {string} header  Header text for the column
   * @param {object} links  Object with link label and href props
   * @returns  The footer navigation column.
   */
  const FooterNavColumn = ({ header, links }) => (
    <ul className="mx-10 flex flex-col">
      <li className="mb-2 flex-initial">
        <p className="cursor-default text-lg font-bold text-light">{header}</p>
      </li>
      {links.map((link, i) => (
        <li className="mb-1 flex-initial" key={i}>
          <Link
            href={link.href}
            className="linear text-gray-400 duration-100 hover:text-light"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-dark">
      <div className="container mx-auto flex py-12 px-16">
        <FooterNavColumn
          header="Club"
          links={[
            { label: 'Mission Statement', href: '#' },
            { label: 'Current Board', href: '#' },
            { label: 'Past Executives', href: '#' },
          ]}
        />
        <FooterNavColumn
          header="Involvement"
          links={[
            { label: 'Events', href: '#' },
            { label: 'Volunteer', href: '#' },
            { label: 'GitHub', href: '#' },
          ]}
        />
        <FooterNavColumn
          header="Socials"
          links={[
            { label: 'Discord', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'YouTube', href: '#' },
            { label: 'LinkedIn', href: '#' },
          ]}
        />
        <FooterNavColumn
          header="Get In Touch"
          links={[{ label: 'Contact', href: '#' }]}
        />
        <div className="ml-auto mr-10 shrink-0 self-center">
          <Image
            src="/images/bba-logomark-white.svg"
            alt="Bits and Bytes Association logo"
            width={70}
            height={70}
            priority
          />
        </div>
      </div>
      <div className="border-t border-neutral-800 bg-neutral-900">
        <p className="cursor-default py-3 text-center text-sm text-gray-400">
          Made with ❤️ by our{' '}
          <Link
            href="#"
            className="linear underline underline-offset-2 duration-300 hover:text-light"
          >
            contributors
          </Link>
          {'. '}© {new Date().getFullYear()} Bits and Bytes Association
        </p>
      </div>
    </nav>
  );
}
