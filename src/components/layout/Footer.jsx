import Image from 'next/image';
import BottomNav from './BottomNav';

// For copyright notice
const firstYear = 2023;
const curYear = new Date().getFullYear();

/**
 * Footer component
 * @param {Object} data - The footer links data. See ./src/data/footer-links.json
 */
export default function Footer({ data }) {
  return (
    <footer className="bg-neutral-800 text-base text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-row items-center py-6 md:flex-row md:py-12">
          <BottomNav data={data} />
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
      <div className="border-t border-neutral-700 px-6">
        <div className="flex justify-between py-3 sm:justify-center">
          <div className="flex flex-col gap-x-1 text-sm text-gray-400 sm:flex-row">
            <p>
              Made with ❤️ by our{' '}
              <a
                href="https://github.com/bits-and-bytes-association/bitsandbytesassociation.ca"
                className="underline underline-offset-2 hover:text-white"
              >
                volunteers
              </a>
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
    </footer>
  );
}
