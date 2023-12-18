import Link from 'next/link';

export default function BottomNav({ data }) {
  return (
    <nav className="grid grid-cols-[repeat(2,min-content)] gap-y-8 gap-x-20 lg:grid-cols-[repeat(4,min-content)]">
      {data.map(({ columnTitle, links }) => (
        <NavColumn header={columnTitle} key={`col-${columnTitle}`}>
          {links.map((link) => (
            <NavLink href={link.href} key={`link-${link.label}`}>
              {link.label}
            </NavLink>
          ))}
        </NavColumn>
      ))}
    </nav>
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
        <p className="cursor-default text-lg font-bold">{header}</p>
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
      <Link href={href} className=" text-gray-400 hover:text-white">
        {children}
      </Link>
    </li>
  );
}
