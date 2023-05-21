import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';

/**
 * A reusable navigation bar at the top of the page.
 */
export default function TopNavigation() {
  /**
   * Stores visibility state for mobile navigation links.
   */
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="bg-light">
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

        {/* Hamburger button */}
        <button
          className={`${
            isCollapsed ? '' : 'bg-dark-hover'
          } rounded-lg bg-dark p-2 text-light-font duration-100 ease-linear hover:bg-dark-hover lg:hidden`}
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Bars3Icon className="h-6 w-6" />
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
            <TextLink href="/contact">Contact</TextLink>
            <li>
              <ul className="mx-3.5 mt-2 mb-4 flex flex-row items-center justify-around gap-8 sm:justify-start lg:mt-0 lg:mb-0 lg:ml-12">
                {/* Discord */}
                <SocialLink
                  href="https://discord.gg/RXySZQE"
                  src="/images/discord-logomark-black.svg"
                  alt="Discord logo"
                  width={36}
                  height={36}
                />

                {/* YouTube */}
                <SocialLink
                  href="https://www.youtube.com/@bitsandbytesassociation7743"
                  src="/images/youtube-logomark-black.svg"
                  alt="Youtube logo"
                  width={36}
                  height={26}
                />

                {/* Instagram */}
                <SocialLink
                  href="https://www.instagram.com/rrcbba/"
                  src="/images/instagram-logomark-black.svg"
                  alt="Instagram logo"
                  width={30}
                  height={30}
                />

                {/* RRC */}
                <SocialLink
                  href="https://www.rrc.ca/explore/computer-and-information-systems-technology/"
                  src="/images/rrc-logomark-black.svg"
                  alt="Red River College logo"
                  width={38}
                  height={38}
                />
              </ul>
            </li>
          </ul>
        </div>
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
          'linear block rounded-lg p-4 font-normal text-dark no-underline duration-100 hover:bg-primary hover:text-light-font active:bg-primary active:text-light-font lg:m-3 lg:p-1 lg:hover:bg-inherit lg:hover:text-primary lg:active:bg-inherit lg:active:text-primary'
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
 * @param {string} src  The path where the icon asset is stored.
 * @param {string} className  The classes to add to the icon.
 * @param {string} alt  The alternative text of the icon.
 * @param {int} width  The width of the icon.
 * @param {int} height  The height of the icon.
 * @param {bool} priority  Set to true if the image is considered high priority and should preload instead of lazy loading.
 * @returns An icon link.
 */
function SocialLink({ href, src, alt = '', width, height, priority = false }) {
  return (
    <li>
      <Link href={href}>
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-dark p-[0.45em] duration-200 ease-linear hover:bg-dark-hover lg:h-auto lg:w-auto lg:bg-inherit lg:p-0 lg:hover:bg-inherit`}
        >
          <Image
            className="p-1 invert lg:invert-0"
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
          />
        </div>
      </Link>
    </li>
  );
}
