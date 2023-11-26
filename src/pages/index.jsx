import Image from 'next/image';
import Button from '@/components/common/ui/Button';
import InstagramWidget from '@/components/home/InstagramWidget';

export async function getStaticProps() {
  if (!process.env.BEHOLD_URL) return { props: { instaFeed: [] } };

  const response = await fetch(process.env.BEHOLD_URL);
  const instaFeed = await response.json();

  return {
    props: { instaFeed },
    // behold.so limits us to 1,200 requests a month. Re-generate at most once per hour to be safe.
    revalidate: 3600,
  };
}

export default function Home({ instaFeed }) {
  return (
    <>
      {/* Hero section */}
      <section id="hero">
        <div className="relative overflow-hidden md:h-[38rem]">
          <Image
            className="z-0 object-cover"
            src="/images/tech-table.jpg"
            alt=""
            fill
            priority
          />
          <div className="relative z-10 h-full bg-[#51aaff]/80">
            <div className="container mx-auto flex h-full items-center text-light-font">
              <div className="flex flex-col gap-4 p-8 md:flex-row">
                <div className="basis-2/5">
                  <h1 className="cursor-default whitespace-nowrap text-5xl font-black">
                    Join the Group!
                  </h1>
                  <Button
                    className="mt-8"
                    variant="dark"
                    size="lg"
                    padding="0.4em 1.25em"
                    href="https://discord.gg/RXySZQE"
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
                <div className="basis-3/5">
                  <p className="text-xl">
                    The Bits and Bytes Association (BBA) was created to improve
                    communication between students and staff to enhance the
                    quality of education for Introduction to Business
                    Information Technology (IBIT), Business Information
                    Technology (BIT), Business Technology Management (BTM) and
                    Information Security (IS) programs offered at Red River
                    College through the Applied Computer Education (ACE)
                    department. Since its inception in 2015, BBA has grown to
                    over 100 members today and continues to climb steadily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section id="about-us" className="bg-dark py-8 text-light-font md:py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-x-20 gap-y-8 md:flex-row">
            <div className="flex basis-2/5 flex-col justify-between gap-y-4 md:order-last md:px-0">
              <h1 className="cursor-default text-5xl font-black">About Us</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pellentesque est id leo fermentum, et gravida odio hendrerit. Ut
                accumsan nunc ligula, facilisis hendrerit elit lobortis quis.
                Vivamus dignissim, nisi et ultrices volutpat, nulla purus
                dignissim sapien, eget lobortis sapien nunc ut elit.
              </p>
              <div>
                <Button href="#" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="basis-3/5">
              <div className="aspect-w-16 aspect-h-9">
                <img src="https://placehold.co/1600x900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram section */}
      <section id="instagram">
        <div className="container mx-auto px-8">
          <InstagramWidget
            title="Follow us on Instagram"
            instagramHandle="rrcbba"
            feed={instaFeed}
          />
        </div>
      </section>
    </>
  );
}
