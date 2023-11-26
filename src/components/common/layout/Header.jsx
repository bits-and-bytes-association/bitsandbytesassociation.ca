import Link from 'next/link';
import Image from 'next/image';
import TopNavigation from '../navigation/TopNavigation';

/**
 * A reusable navigation bar at the top of the page.
 */
export default function Header() {
  return (
    <header className="bg-light">
      <div
        className={
          'container mx-auto flex flex-wrap items-center justify-between px-6 py-8 text-xl font-medium'
        }
      >
        {/* Left-aligned nav logo */}
        <Link href="/">
          <Image
            className="ml-2 lg:ml-0"
            src="/images/bba-logo.svg"
            alt="Bits and Bytes Association logo"
            width={250}
            height={53}
            priority={true}
          />
        </Link>

        {/* Right-aligned navigation */}
        <TopNavigation />
      </div>
    </header>
  );
}
