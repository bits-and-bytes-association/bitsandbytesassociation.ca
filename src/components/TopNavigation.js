import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/TopNavigation.module.css';

/**
 * A reusable navigation bar at the top of the page, including items such as logo, links and social media.
 */
export default function TopNavigation() {
  /**
   * Component that generates text links in the top navigation.
   * @param {string} label  The text that will appear on the link.
   * @param {string} href   The URL where the user will be redirected when clicking on the link.
   * @returns A text link.
   */
  const TextLink = ({ label, href }) => {
    return (
      <li>
        <Link href={href} className={styles['nav-link']}>
          {label}
        </Link>
      </li>
    );
  };

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
  const IconLink = ({
    href,
    src,
    className = '',
    alt = '',
    width,
    height,
    priority = false,
  }) => {
    return (
      <li>
        <Link href={href}>
          <Image
            src={src}
            alt={alt}
            className={styles[{ className }]}
            width={width}
            height={height}
            priority={priority}
          />
        </Link>
      </li>
    );
  };

  return (
    <nav id={styles['top-nav']}>
      <div className={styles['nav-container']}>
        {/* BBA main logo */}
        <IconLink
          href="/"
          src="/images/bba-logo.svg"
          alt="Bits and Bytes Association logo"
          width={260}
          height={80}
          priority={true}
        />

        <div className={styles['nav-links']}>
          {/* Main links */}
          <ul className={styles['nav-text-links']}>
            <TextLink label="About" href="/about" />
            <TextLink label="Events" href="/events" />
            <TextLink label="Volunteer" href="/volunteer" />
            <TextLink label="Contact" href="/contact" />
          </ul>

          {/* Social media icons */}
          <ul className={styles['nav-icon-links']}>
            {/* Discord */}
            <IconLink
              href="https://discord.gg/RXySZQE"
              src="/images/discord-logomark-black.svg"
              alt="Discord logo"
              width={28}
              height={28}
            />

            {/* YouTube */}
            <IconLink
              href="https://www.youtube.com/@bitsandbytesassociation7743"
              src="/images/youtube-logomark-black.svg"
              alt="Youtube logo"
              width={28}
              height={20}
            />

            {/* Instagram */}
            <IconLink
              href="https://www.instagram.com/rrcbba/"
              src="/images/instagram-logomark-black.svg"
              alt="Instagram logo"
              width={22}
              height={22}
            />

            {/* RRC */}
            <IconLink
              href="https://www.rrc.ca/explore/computer-and-information-systems-technology/"
              src="/images/rrc-logomark-black.svg"
              alt="Red River College logo"
              width={30}
              height={30}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
