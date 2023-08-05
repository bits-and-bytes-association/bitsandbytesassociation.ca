import { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import HeadingBBAStyle from './HeadingBBAStyle';
import Link from 'next/link';

/**
 * Component that displays a collection of thumbnails of Instagram posts from the given account.
 * @param {string} title  The title of the widget.
 * @param {string} instagramHandle  The handle for the Instagram account.
 * @returns  A component with a collection of image thumbnails.
 */
export default function InstagramWidget({ title, instagramHandle }) {
  const [isMounted, setIsMounted] = useState(false); // Using state to prevent hydratation issues that can be caused by the useMediaQuery hook
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const instagramImages = [
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/334582093_937607827253408_4872161509600452505_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=qBa2D0TXBv4AX_j0LK-&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1NTUzNjEzMDQzMTU1NTEyNg%3D%3D.2-ccb7-5&oh=00_AfCdHXN4jJB919OV1VN4d46-gLHSbEGHiNcT49dk7K7fXw&oe=64D2486B&_nc_sid=ee9879',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/329109004_1605031446625841_7214731077982621334_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=hIvv34BWA4gAX8jljeG&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAzMjM5NTMzNzU0MTg3OTU2Mg%3D%3D.2-ccb7-5&oh=00_AfBmi5vZcDwbswpF-eeyC1EUAQsW0gTTTFw4bJw1Ed9w9Q&oe=64D0D1BC&_nc_sid=ee9879',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/327824273_213932551118548_6905632684116415768_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=P3TKApH3eTwAX_qgVuT&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyNzY3NjI3NDk4MTkyMzg5OA%3D%3D.2-ccb7-5&oh=00_AfBszwH-chIX2_FIyVN6sNClAlC1fFV20hZlHYMCrSEEbA&oe=64D07791&_nc_sid=ee9879',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/324395222_179153411408239_2164168081678146259_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4d867c1HfhIAX94zi0W&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAxMzQ1MzIyODIxNzc2MzgxNw%3D%3D.2-ccb7-5&oh=00_AfBhrPtmv2Jy-Jo90KJbnmDevFDW_v8CL5p88v8CL5TJAQ&oe=64D072AB&_nc_sid=ee9879',
  ];

  return (
    <div className="my-10">
      <HeadingBBAStyle>{title}</HeadingBBAStyle>
      <div className="my-4 grid grid-cols-3 gap-4 sm:my-8 sm:grid-cols-4 sm:gap-8 md:my-10 md:gap-10 lg:my-14 lg:gap-14">
        {instagramImages.slice(0, isSmallScreen ? 3 : 4).map((src, index) => (
          <div key={index} className={`aspect-w-1 aspect-h-1 bg-slate-100`}>
            <Link href={`https://www.instagram.com/${instagramHandle}`}>
              <Image
                src={src}
                fill={true}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                alt={'Instagram post'}
              />
            </Link>
          </div>
        ))}
      </div>
      <HeadingBBAStyle
        className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-5xl"
        inverted={true}
      >
        <Link href={`https://www.instagram.com/${instagramHandle}`}>
          @{instagramHandle}
        </Link>
      </HeadingBBAStyle>
    </div>
  );
}
