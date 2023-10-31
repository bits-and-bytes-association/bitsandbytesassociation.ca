import React from 'react';
import Head from 'next/head';

import currentBoard from '@/data/current-board.json';

import InstagramIcon from '@/icons/instagram.svg';
import TikTokIcon from '@/icons/tiktok.svg';
import GitHubIcon from '@/icons/github.svg';
import ThreadsIcon from '@/icons/threads.svg';
import LinkedInIcon from '@/icons/linkedin.svg';
import XIcon from '@/icons/x.svg';

const socialMediaIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  x: XIcon,
  threads: ThreadsIcon,
};

export default function CurrentBoardPage() {
  return (
    <div className="container mx-auto px-6 pb-16">
      <Head>
        <title>Current Board</title>
      </Head>
      <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="mb-4 text-2xl font-semibold sm:mb-0">Current Board</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {currentBoard.map((member) => {
          return (
            <div key={member.name} className="items-center bg-gray-100 sm:flex">
              <div>
                <img
                  className="w-full"
                  src={member.photoUrl}
                  alt={`${member.name} Avatar`}
                />
              </div>
              <div className="p-5">
                <h6 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h6>
                <span className="text-gray-600">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-gray-800">
                  {member.bio}
                </p>
                <ul className="flex space-x-4">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    return (
                      <li key={`member-${member.name}-${platform}`}>
                        <a
                          href={url}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {React.createElement(socialMediaIcons[platform], {
                            className: 'h-4 w-4',
                          })}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
