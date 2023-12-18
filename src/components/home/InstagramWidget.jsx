import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import HeadingBBAStyle from '../common/ui/HeadingBBAStyle';
import Link from 'next/link';

/**
 * Component that displays a collection of thumbnails of Instagram posts from the given account.
 * @param {string} title  The title of the widget.
 * @param {string} instagramHandle  The handle for the Instagram account.
 * @returns  A component with a collection of image thumbnails.
 */
export default function InstagramWidget({ title, instagramHandle, feed }) {
  const [isMounted, setIsMounted] = useState(false); // Using state to prevent hydration issues that can be caused by the useMediaQuery hook
  const isSmallScreen = useMediaQuery({ maxWidth: '640px' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="my-10">
      <HeadingBBAStyle>{title}</HeadingBBAStyle>
      <div className="my-4 grid grid-cols-3 gap-4 sm:my-8 sm:grid-cols-4 sm:gap-8 md:my-10 md:gap-10 lg:my-14 lg:gap-14">
        {feed.slice(0, isSmallScreen ? 3 : 4).map((post) => (
          <div key={post.id} className={'aspect-w-1 aspect-h-1'}>
            <a
              className="rounded-lg focus:outline-none focus:outline-4 focus:outline-offset-2 focus-visible:outline-brand"
              href={post.permalink}
            >
              <Image
                src={post.thumbnailUrl ?? post.mediaUrl}
                fill={true}
                className={
                  'rounded-lg border border-neutral-300 object-cover object-center shadow-md transition hover:brightness-75 active:scale-[.98]'
                }
                alt="Instagram post"
              />
            </a>
          </div>
        ))}
      </div>
      <HeadingBBAStyle
        className="text-2xl font-bold text-brand hover:text-brand-400 sm:text-3xl md:text-4xl lg:text-5xl"
        inverted={true}
      >
        <a href={`https://www.instagram.com/${instagramHandle}`}>
          @{instagramHandle}
        </a>
      </HeadingBBAStyle>
    </div>
  );
}
