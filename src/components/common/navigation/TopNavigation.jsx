import { useState } from 'react';
import Link from 'next/link';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DiscordIcon from '@/icons/discord.svg';
import InstagramIcon from '@/icons/instagram.svg';
import LinkedInIcon from '@/icons/linkedin.svg';
import RRCIcon from '@/icons/rrc.svg';

export default function TopNavigation() {
  /**
   * Stores visibility state for mobile navigation links.
   */
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav>
      {/* Hamburger button */}
      <button
        className={`rounded-lg bg-dark p-2 text-light-font duration-100 ease-linear hover:bg-dark-hover lg:hidden`}
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <Bars3Icon className="h-6 w-6" />
        ) : (
          <XMarkIcon className="h-6 w-6" />
        )}
      </button>

      {/* Right-aligned nav items */}
      <div
        className={`mt-3.5 w-full items-center lg:m-0 ${
          isCollapsed ? 'hidden' : ''
        } lg:flex lg:w-auto`}
      >
        {/* Text links */}
        <ul
          className={`flex list-none flex-col rounded-lg bg-slate-200 lg:flex-row lg:items-center lg:bg-inherit lg:pt-0`}
        >
          <TextLink href="/about">About</TextLink>
          <TextLink href="/events">Events</TextLink>
          <TextLink href="/volunteer">Volunteer</TextLink>
          <li>
            <ul className="mx-3.5 mt-2 mb-4 flex flex-row items-center justify-around gap-6 sm:justify-start lg:mt-0 lg:mb-0 lg:ml-12">
              {/* Discord */}
              <SocialLink
                href="https://discord.gg/RXySZQE"
                Icon={DiscordIcon}
                alt="Discord logo"
              />

              {/* Instagram */}
              <SocialLink
                href="https://www.instagram.com/rrcbba/"
                Icon={InstagramIcon}
                alt="Instagram logo"
              />

              {/* LinkedIn */}
              <SocialLink
                href="https://www.linkedin.com/company/bits-and-bytes-association"
                Icon={LinkedInIcon}
                alt="LinkedIn logo"
              />

              {/* RRC */}
              <SocialLink
                href="https://www.rrc.ca/explore/computer-and-information-systems-technology/"
                Icon={RRCIcon}
                alt="Red River College logo"
              />
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/**
 * Component that generates text links in the top navigation.
 * @param {string} href  The URL where the user will be redirected when clicking on the link.
 * @param {ReactNode} children  The content of the link.
 * @returns A text link.
 */
function TextLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className={
          'block rounded-lg p-4 font-normal text-dark no-underline hover:bg-primary hover:text-light-font active:bg-primary active:text-light-font lg:m-3 lg:p-1 lg:hover:bg-inherit lg:hover:text-primary lg:active:bg-inherit lg:active:text-primary'
        }
      >
        {children}
      </Link>
    </li>
  );
}

/**
 * Component that generates social icon links in the top navigation.
 * @param {string} href  The URL where the user will be redirected when clicking on the link.
 * @param {string} Icon  The icon component to display.
 * @param {string} alt  The alternative text of the icon.
 * @returns An icon link.
 */
function SocialLink({ href, Icon, alt = '' }) {
  return (
    <li>
      <Link
        href={href}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-dark p-[0.45em] text-light-font hover:bg-dark-hover hover:text-light-font lg:h-auto lg:w-auto lg:bg-inherit lg:p-0 lg:text-dark-font lg:hover:bg-inherit lg:hover:text-primary`}
      >
        <Icon className="h-8 w-8 p-1" alt={alt} />
      </Link>
    </li>
  );
}
