import Link from 'next/link';
import Image from 'next/image';
import TopNav from './TopNav';

/**
 * A reusable navigation bar at the top of the page.
 */
export default function Header() {
  return (
    <header className="bg-light text-xl font-medium text-neutral-900">
      <div
        className={
          'container mx-auto flex flex-wrap items-center justify-between px-6 py-8'
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
        <TopNav />
      </div>
    </header>
  );
}
