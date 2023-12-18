import PageContainer from '@/components/layout/PageContainer';
import PageTitle from '@/components/PageTitle';

// Icons
import {
  HeartIcon,
  BookOpenIcon,
  AcademicCapIcon,
  EyeIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function OurStoryPage() {
  return (
    <PageContainer>
      <PageTitle title="Our Story" />
      <p>
        Fueled by a shared passion for learning, the Bits and Bytes Association
        (BBA) has emerged as a vibrant community dedicated to enhancing
        communication within the Red River College Applied Computer Education
        (ACE) department. Our journey began in 2015, guided by a collective
        ambition to elevate the educational experience across ACE programs.
      </p>
      <p className="mb-12">
        From its modest start, the BBA has evolved into a lively community of
        over 150 members, establishing itself not only among current students
        and staff but also resonating with alumni and industry professionals.
        Join us in shaping the narrative of educational excellence and be a part
        of our continuing growth and impact!
      </p>

      {/* Mission and Vision cards */}
      <section
        id="mission-and-vision"
        className="mb-32 flex justify-center gap-32"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="max-w-sm grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
            <RocketLaunchIcon className="mb-5 h-16 w-16" />
            <div className="mb-1 text-xl font-bold">Mission</div>
            <p>
              Cultivate a thriving community through meaningful communication,
              connecting ACE Department students, staff, and alumni.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="max-w-sm grow rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
            <EyeIcon className="mb-5 h-16 w-16" />
            <div className="mb-1 text-xl font-bold">Vision</div>
            <p>
              Establish a distinguished RRC Polytech tech community, uniting
              students, alumni, and staff with a dedication to high-quality
              education and enduring relationships within the ACE Department.
            </p>
          </div>
        </div>
      </section>
      {/* Goals */}
      <section id="goals" className="mb-20 flex flex-col">
        <div className="mb-12 text-center">
          <div className="cursor-default text-4xl font-black text-neutral-900">
            Goals
          </div>
          <p className="text-xl text-neutral-500">
            Inspire a meaningful college experience by championing teamwork and
            embracing diversity among ACE students.
          </p>
        </div>
        {/* Goals Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
            <AcademicCapIcon className="mb-3 h-16 w-16" />
            <div className="mb-1 text-xl font-bold">
              Address Diverse Student Needs
            </div>
            <p>
              Tackle a spectrum of needs from academic support, professional
              development, social and well-being initiatives, across all ACE
              Department programs.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
            <SparklesIcon className="mb-3 h-16 w-16" />
            <div className="mb-1 text-xl font-bold">
              Organize Inclusive Events
            </div>
            <p>
              Plan engaging events from industry professional meet-ups, program
              tutorials, to fun game nights, providing diverse opportunities for
              socializing and skill enhancement.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
            <BookOpenIcon className="mb-3 h-16 w-16" />
            <div className="mb-1 text-xl font-bold">
              Share Valuable information
            </div>
            <p>
              Effectively spread information through savvy social media posts
              and carefully crafted newsletters. Boost event awareness,
              circulate industry insights, and add perspective to the collective
              knowledge of ACE students.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 text-base text-neutral-900 shadow-md">
            <HeartIcon className="mb-3 h-16 w-16" />
            <div className="mb-1 text-xl font-bold">
              Nurture an Empowered Community
            </div>
            <p>
              Fuel community growth by through executive meetings to
              strategically plan and discuss upcoming events and initiatives -
              creating an environment of collaboration and support that empowers
              ACE students on their educational journey.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
