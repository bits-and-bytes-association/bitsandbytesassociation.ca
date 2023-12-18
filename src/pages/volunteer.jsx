import Link from 'next/link';
import Image from 'next/image';
import PageContainer from '@/components/layout/PageContainer';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';

// Icons
import {
  AtSymbolIcon,
  CodeBracketIcon,
  NewspaperIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export default function VolunteerPage() {
  return (
    <PageContainer>
      <PageTitle title="Volunteer" />
      <p className="mb-12">
        The Bits and Bytes Association believes in the power of collaboration,
        creativity, and community. As a student-run organization dedicated to
        enhancing the educational experience within the Applied Computer
        Education (ACE) department at Red River College Polytechnic, we
        understand the value of student engagement. Our volunteer opportunities
        are designed to not only contribute to the success of the BBA but also
        to provide a platform for personal and professional growth.
      </p>
      <div className="mt-16 mb-4">
        {/* Who We're Looking For */}
        <section id="who-were-looking-for">
          <div className="mb-4 text-4xl font-black text-neutral-900">
            Who We're Looking For
          </div>
          <p className="mb-20 text-xl text-neutral-500">
            All students with a passion for technology and eager to develop your
            skills and contribute to a supportive community are welcome! If
            you're enrolled in any of RRC Polytech's ACE programs, there's a
            place for you to contribute in the BBA.
          </p>
        </section>

        {/* Opportunities */}
        <section id="opportunities" className="mb-20">
          <div className="mb-6 text-4xl font-black text-neutral-900">
            Opportunities
          </div>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <CodeBracketIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">Web Development</div>
                <p>
                  Put your web development skills to use by helping us keep our
                  online presence fresh and engaging.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <AtSymbolIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">
                  Represent Your Program at Orientations
                </div>
                <p>
                  Be a friendly face for new students, sharing your experiences
                  and insights about your program.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <NewspaperIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">Content Creation</div>
                <p>
                  Whether you have a flair for writing, graphic design,
                  photography, video editing, or even podcast hosting, your
                  unique talents can shine here. Contribute to our various
                  social media accounts and newsletters to keep our community
                  informed and engaged.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <TrophyIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">
                  Serve as Project Champion
                </div>
                <p>
                  Take the lead on specific projects and events, bringing your
                  passion and skills to the forefront.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Time and Place */}
        <section id="time-and-place" className="mb-20">
          <div className="mb-4 text-4xl font-black text-neutral-900">
            Time and Place
          </div>
          <p className="text-xl text-neutral-500">
            Join us at one of our weekly meetings or events at the EDC campus in
            the Manitou A Bi Bii Dazigae building for in-person collaboration.
            Location details and times will be shared on our Discord server.
            Can't make it? No problem! Contribute your ideas via our open
            Discord server.
          </p>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mb-20">
          <div className="mb-6 text-4xl font-black text-neutral-900">
            Benefits
          </div>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <WrenchScrewdriverIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">Build Community</div>
                <p>
                  Forge meaningful connections with fellow students, staff, and
                  alumni within the ACE department. BBA is more than an
                  association; it's a community where your voice matters, and
                  your presence makes a difference.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <PaintBrushIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">Develop Skillsets</div>
                <p>
                  Gain practical skills that go beyond the classroom. Whether
                  you're interested in web development, event planning, social
                  media management, or content creation, BBA offers hands-on
                  experiences to enhance your skillset and boost your
                  confidence.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <PuzzlePieceIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">Team Building</div>
                <p>
                  Whether you have a flair for writing, graphic design,
                  photography, video editing, or even podcast hosting, your
                  unique talents can shine here. Contribute to our various
                  social media accounts and newsletters to keep our community
                  informed and engaged.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
                <UserGroupIcon className="mb-5 h-16 w-16" />
                <div className="mb-1 text-xl font-bold">Leadership Skills</div>
                <p>
                  Take on leadership roles within the association and develop
                  valuable skills that will serve you well in your future
                  endeavors. BBA is a platform for you to lead projects,
                  contribute ideas, and make a real impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section id="how-to-get-started" className="mb-20">
          <div className="mb-3 text-4xl font-black text-neutral-900">
            How to Get Started
          </div>
          <p className="text-xl text-neutral-500">
            Join our Discord server and introduce yourself sharing your program
            and passions. Attend a meeting in-person (check for our Discord
            announcements), discover your contribution and the explore
            opportunites listed above. Reach out to our leadership team and
            executive members for guidance and support.
          </p>
        </section>

        {/* Start now CTA */}
        <div className="flex items-center justify-center gap-10">
          <div className="relative inline-block text-4xl font-semibold before:absolute before:-inset-y-1 before:-inset-x-5 before:block before:-skew-y-3 before:bg-yellow-200/80">
            <span className="relative text-yellow-900/90">Start now.</span>
          </div>
          <Button
            className="!px-[1.25em] !py-[0.4em]"
            as={Link}
            variant="secondary"
            size="lg"
            href="https://discord.gg/RXySZQE"
            target="_blank"
          >
            <Image
              src="/images/discord-logo-white.svg"
              alt="Join our Discord"
              width={147}
              height={40}
              priority
            />
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
