import React from 'react';
import currentBoard from '@/data/current-board.json';

// Icons
import InstagramIcon from '@/icons/instagram.svg';
import TikTokIcon from '@/icons/tiktok.svg';
import GitHubIcon from '@/icons/github.svg';
import ThreadsIcon from '@/icons/threads.svg';
import LinkedInIcon from '@/icons/linkedin.svg';
import DiscordIcon from "@/icons/discord.svg"
import XIcon from '@/icons/x.svg';
import WebsiteIcon from '@/icons/website.svg'
import PageContainer from '@/components/layout/PageContainer';
import PageTitle from '@/components/PageTitle';

const socialMediaIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  x: XIcon,
  threads: ThreadsIcon,
  discord: DiscordIcon,
  website: WebsiteIcon
};

export default function CurrentBoardPage() {
  return (
    <PageContainer>
      <PageTitle title="Current Board" />
      <p className="mb-12">
        Meet the driving force behind our current leadership team. The continuous
        journey of the Bits and Bytes Association is made possible by these
        students who generously invest their time and passion, actively molding
        the future of our community.
      </p>
      <div className="grid gap-8 lg:grid-cols-2">
        {currentBoard.map((member) => {
          return (
            <div
              key={member.name}
              className="items-center rounded border border-neutral-300 bg-neutral-50 text-base shadow-md sm:flex sm:rounded-lg"
            >
              <img
                className="w-full sm:w-[225px] sm:rounded-l-lg lg:w-[150px] xl:w-[225px]"
                // src={member.photoUrl ?? '/images/default-avatar.png'}
                src={
                  member.photoUrl && member.photoUrl.trim() !== ''
                    ? member.photoUrl
                    : '/images/default-avatar.png'
                }
                alt={`${member.name} Avatar`}
              />
              <div className="p-5">
                <div className="text-xl font-bold text-neutral-900">
                  {member.name}
                </div>
                <div className="text-neutral-600">{member.program}</div>
                <div className="text-neutral-600">{member.role}</div>
                <p className="mt-3 mb-4 font-light text-neutral-800">
                  {member.bio}
                </p>
                <ul className="flex space-x-4">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    if (platform == "discord") {
                      return (
                        <li
                          key={`member-${member.name}-${platform}`}
                          className={'relative [&_span]:hover:block'}
                        >
                          <span
                            className={
                              'absolute -top-10 left-1/2 z-10 hidden w-auto -translate-x-1/2 transform whitespace-nowrap bg-black text-white rounded-md px-2 py-1' 
                            }
                          >
                            {url}
                          </span>
                          <div className="text-neutral-600 hover:text-neutral-900">
                            {React.createElement(socialMediaIcons[platform], {
                              className: 'h-7 w-7',
                            })}
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li key={`member-${member.name}-${platform}`}>
                          <a
                            href={url}
                            className="text-neutral-600 hover:text-neutral-900"
                            target={"_blank"}
                          >
                            {React.createElement(socialMediaIcons[platform], {
                              className: 'h-7 w-7',
                            })}
                          </a>
                        </li>
                      );
                    }
                    
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}
