import Link from 'next/link';
import Image from 'next/image';

/**
 * Component that generates text links in the top navigation.
 * @param {string} label  The text that will appear on the link.
 * @param {string} href  The URL where the user will be redirected when clicking on the link.
 * @returns A text link.
 */
function TextLink({ label, href }) {
  return (
    <li>
      <Link
        href={href}
        className={
          'linear mx-2 p-3.5 font-normal text-dark no-underline duration-100 hover:text-[var(--dark-font-hover-color)]'
        }
      >
        {label}
      </Link>
    </li>
  );
}

/**
 * Component that generates icon links in the top navigation.
 * @param {string} href  The URL where the user will be redirected when clicking on the link.
 * @param {string} src  The path where the icon asset is stored.
 * @param {string} className  The classes to add to the icon.
 * @param {string} alt  The alternative text of the icon.
 * @param {int} width  The width of the icon.
 * @param {int} height  The height of the icon.
 * @param {bool} priority  Set to true if the image is considered high priority and should preload instead of lazy loading.
 * @returns An icon link.
 */
function IconLink({ href, src, alt = '', width, height, priority = false }) {
  return (
    <li className="ml-3">
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          className="p-1"
          width={width}
          height={height}
          priority={priority}
        />
      </Link>
    </li>
  );
}

/**
 * A reusable navigation bar at the top of the page, including items such as logo, links and social media.
 */
export default function TopNavigation() {
  return (
    <nav className="bg-light">
      <div
        className={
          'container mx-auto flex h-32 flex-1 items-center justify-between py-4 px-5 text-xl font-medium'
        }
      >
        {/* BBA main logo */}
        <ul className="list-none">
          <IconLink
            href="/"
            src="/images/bba-logo.svg"
            alt="Bits and Bytes Association logo"
            width={260}
            height={80}
            priority={true}
          />
        </ul>

        <div className="flex items-center">
          {/* Main links */}
          <ul className={'mr-12 flex list-none items-center'}>
            <TextLink label="About" href="/about" />
            <TextLink label="Events" href="/events" />
            <TextLink label="Volunteer" href="/volunteer" />
            <TextLink label="Contact" href="/contact" />
          </ul>

          {/* Social media icons */}
          <ul className={'flex list-none items-center justify-between'}>
            {/* Discord */}
            <IconLink
              href="https://discord.gg/RXySZQE"
              src="/images/discord-logomark-black.svg"
              alt="Discord logo"
              width={36}
              height={36}
            />

            {/* YouTube */}
            <IconLink
              href="https://www.youtube.com/@bitsandbytesassociation7743"
              src="/images/youtube-logomark-black.svg"
              alt="Youtube logo"
              width={36}
              height={26}
            />

            {/* Instagram */}
            <IconLink
              href="https://www.instagram.com/rrcbba/"
              src="/images/instagram-logomark-black.svg"
              alt="Instagram logo"
              width={30}
              height={30}
            />

            {/* RRC */}
            <IconLink
              href="https://www.rrc.ca/explore/computer-and-information-systems-technology/"
              src="/images/rrc-logomark-black.svg"
              alt="Red River College logo"
              width={38}
              height={38}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
