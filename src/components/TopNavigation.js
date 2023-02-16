import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/TopNavigation.module.css';

/*
 * A reusable navigation bar at the top of the page, including items such as logo, links and social media.
 */
export default function TopNavigation() {
  return (
    <nav id={styles['top-nav']}>
      <div className={styles['nav-container']}>
        {/* Main logo */}
        <Link href="/">
          <Image
            src="/images/bba-logo.svg"
            alt="Bits and Bytes Association logo"
            className={styles['bba-logo']}
            width={260}
            height={80}
            priority
          />
        </Link>

        <div className={styles['nav-links']}>
          {/* Main links */}
          <ul className={styles['nav-text-links']}>
            <li>
              <Link href="/about" className={styles['nav-link']}>
                About
              </Link>
            </li>
            <li>
              <Link href="/events" className={styles['nav-link']}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className={styles['nav-link']}>
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles['nav-link']}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Social media icons */}
          <ul className={styles['nav-icon-links']}>
            <li>
              <Link href="https://discord.gg/RXySZQE">
                <Image
                  src="/images/discord-logomark-black.svg"
                  alt="Discord logo"
                  className={styles['discord-logo']}
                  width={28}
                  height={28}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@bitsandbytesassociation7743">
                <Image
                  src="/images/youtube-logomark-black.svg"
                  alt="Youtube logo"
                  className={styles['youtube-logo']}
                  width={28}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/rrcbba/">
                <Image
                  src="/images/instagram-logomark-black.svg"
                  alt="Instagram logo"
                  className={styles['instagram-logo']}
                  width={22}
                  height={22}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.rrc.ca/explore/computer-and-information-systems-technology/">
                <Image
                  src="/images/rrc-logomark-black.svg"
                  alt="Red River College logo"
                  className={styles['rrc-logo']}
                  width={30}
                  height={30}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
