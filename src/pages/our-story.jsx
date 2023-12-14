import Page from '@/components/common/layout/Page';

// Icons
import {
  HeartIcon,
  BookOpenIcon,
  UserGroupIcon,
  AcademicCapIcon,
  EyeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export default function OurStoryPage() {
  return (
    <Page
      title="Our Story"
      description={
        <>
          Fueled by a shared passion for learning, the Bits and Bytes
          Association (BBA) has emerged as a vibrant community dedicated to
          enhancing communication within the Red River College Applied Computer
          Education (ACE) department. Our journey began in 2015, guided by a
          collective ambition to elevate the educational experience across ACE
          programs.
          <br />
          <br />
          From its modest start, the BBA has evolved into a lively community of
          over 150 members, establishing itself not only among current students
          and staff but also resonating with alumni and industry professionals.
          Join us in shaping the narrative of educational excellence and be a
          part of our continuing growth and impact!
        </>
      }
    >
      {/* Mission and Vision cards */}
      <div className="mb-16 flex justify-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 shadow-md">
            <RocketLaunchIcon className="mb-5 h-16 w-16" />
            <h2 className="text-xl font-bold text-neutral-900">Mission</h2>
            <p>
              Cultivate a thriving community through meaningful communication,
              connecting ACE Department students, staff, and alumni.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="max-w-xs grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 shadow-md">
            <EyeIcon className="mb-5 h-16 w-16" />
            <h2 className="text-xl font-bold text-neutral-900">Vision</h2>
            Establish a distinguished RRC Polytech tech community, uniting
            students, alumni, and staff with a dedication to high-quality
            education and enduring relationships within the ACE Department.
          </div>
        </div>
      </div>
      {/* Goals */}
      <div className="flex flex-col">
        <div className="mb-12 text-center">
          <h2 className="cursor-default text-4xl font-bold text-neutral-900">
            Goals
          </h2>
          <p className="text-xl text-neutral-500">
            Inspire a meaningful college experience by championing teamwork and
            embracing diversity among ACE students.
          </p>
        </div>
        {/* Goals Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 shadow-md">
            <AcademicCapIcon className="mb-3 h-16 w-16" />
            <h3 className="text-xl font-bold text-neutral-900">
              Address Diverse Student Needs
            </h3>
            <p>
              Tackle a spectrum of needs from academic support, professional
              development, social and well-being initiatives, across all ACE
              Department programs.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 shadow-md">
            <UserGroupIcon className="mb-3 h-16 w-16" />
            <h3 className="text-xl font-bold text-neutral-900">
              Organize Inclusive Events
            </h3>
            <p>
              Plan engaging events from industry professional meet-ups, program
              tutorials, to fun game nights, providing diverse opportunities for
              socializing and skill enhancement.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 shadow-md">
            <BookOpenIcon className="mb-3 h-16 w-16" />
            <h3 className="text-xl font-bold text-neutral-900">
              Share Valuable information
            </h3>
            <p>
              Effectively spread information through savvy social media posts
              and carefully crafted newsletters. Boost event awareness,
              circulate industry insights, and add perspective to the collective
              knowledge of ACE students.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 shadow-md">
            <HeartIcon className="mb-3 h-16 w-16" />
            <h3 className="text-xl font-bold text-neutral-900">
              Nurture an Empowered Community
            </h3>
            <p>
              Fuel community growth by through executive meetings to
              strategically plan and discuss upcoming events and initiatives -
              creating an environment of collaboration and support that empowers
              ACE students on their educational journey.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
