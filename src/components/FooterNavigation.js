import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer navigation component
 */
export default function FooterNavigation() {
  /**
   * Footer navigation column component
   * @param {string} header  Header text for the column
   * @param {object} links   Object with link display and href props
   * @returns  The footer navigation column.
   */
  const FooterNavColumn = ({ header, links }) => (
    <ul className="flex flex-col mx-10">
      <li className="flex-initial mb-1">
        <p href="#" className="text-white font-bold text-xl cursor-default">
          {header.toUpperCase()}
        </p>
      </li>
      {links.map((link, i) => (
        <li className="flex-initial" key={i}>
          <Link href={link.href} className="text-gray-300 linear duration-200">
            {link.display}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-zinc-900">
      <div className="container flex py-12 px-16 mx-auto">
        <FooterNavColumn
          header="Club"
          links={[
            { display: 'Mission Statement', href: '#' },
            { display: 'Current Board', href: '#' },
            { display: 'Past Executives', href: '#' },
          ]}
        />
        <FooterNavColumn
          header="Involvement"
          links={[
            { display: 'Events', href: '#' },
            { display: 'Volunteer', href: '#' },
            { display: 'GitHub', href: '#' },
          ]}
        />
        <FooterNavColumn
          header="Socials"
          links={[
            { display: 'Discord', href: '#' },
            { display: 'Instagram', href: '#' },
            { display: 'YouTube', href: '#' },
            { display: 'LinkedIn', href: '#' },
          ]}
        />
        <FooterNavColumn
          header="Get In Touch"
          links={[{ display: 'Contact', href: '#' }]}
        />
        <div className="ml-auto mr-10 self-center shrink-0">
          <Image
            src="/images/bba-logomark-white.svg"
            alt="Bits and Bytes Association logo"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
      <div className="bg-neutral-900 border-t border-neutral-800">
        <p className="text-sm text-center py-3 text-gray-400 cursor-default">
          Made with ❤️ by our{' '}
          <Link
            href="#"
            className="underline underline-offset-2 linear duration-300"
          >
            contributors
          </Link>
          {'. '}© {new Date().getFullYear()} Bits and Bytes Association
        </p>
      </div>
    </nav>
  );
}