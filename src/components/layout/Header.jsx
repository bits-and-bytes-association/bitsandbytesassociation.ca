import Link from 'next/link';
import Image from 'next/image';
import TopNav from './TopNav';

/**
 * A reusable navigation bar at the top of the page.
 */
export default function Header() {
  return (
    <header className="bg-light text-xl font-medium text-neutral-900">
      <div className={'container mx-auto px-6 py-8'}>
        <TopNav />
      </div>
    </header>
  );
}
