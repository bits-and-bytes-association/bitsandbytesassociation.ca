import PageContainer from '@/components/layout/PageContainer';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import Image from 'next/image';
import AdornedHeading from '@/components/AdornedHeading';

export default function Style() {
  return (
    <>
      <PageContainer>
        <PageTitle title="Design System" />
        {/* Buttons */}
        <div className="my-3 text-3xl font-bold text-black">Buttons</div>
        <div className="mb-2 text-lg text-black">
          <b>Variant &quot;primary&quot;</b>
        </div>
        <div className="mb-5 flex items-start">
          <Button href="#" size="md" className="mr-4">
            Learn More
          </Button>
          <Button href="#" size="lg">
            Learn More
          </Button>
        </div>

        <div className="mb-2 text-lg text-black">
          <b>Variant &quot;outline&quot;</b>
        </div>
        <div className="mb-5 flex items-start">
          <Button href="#" variant="outline" size="md" className="mr-4">
            Learn More
          </Button>
          <Button href="#" variant="outline" size="lg" className="mr-4">
            Learn More
          </Button>
        </div>

        <div className="mb-2 text-lg text-black">
          <b>Variant &quot;secondary&quot;</b>
        </div>
        <div className="mb-5 flex items-start">
          <Button variant="secondary" href="#" className="mr-4">
            Learn More
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="!px-[1.25em] !py-[0.4em]"
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

        {/* Color palette */}
        <div className="my-4 text-3xl font-bold text-black">Color palette</div>
        <div className="flex">
          <div
            className="mb-10 mr-10 flex flex-col text-white"
            style={{
              height: '20em',
              width: '20em',
            }}
          >
            <div className="flex grow items-center justify-center bg-brand-900">
              brand-900
            </div>
            <div className="flex grow items-center justify-center bg-brand-800">
              brand-800
            </div>
            <div className="flex grow items-center justify-center bg-brand-700">
              brand-700
            </div>
            <div className="flex grow items-center justify-center bg-brand-600">
              brand-600
            </div>
            <div className="flex grow items-center justify-center bg-brand-500">
              brand-500 (primary)
            </div>
            <div className="flex grow items-center justify-center bg-brand-400">
              brand-400
            </div>
            <div className="flex grow items-center justify-center bg-brand-300">
              brand-300
            </div>
            <div className="flex grow items-center justify-center bg-brand-200">
              brand-200
            </div>
            <div className="flex grow items-center justify-center bg-brand-100">
              brand-100
            </div>
            <div className="flex grow items-center justify-center bg-brand-50">
              brand-50
            </div>
          </div>
        </div>

        {/* Sample Heading component */}
        <div className="my-10">
          <AdornedHeading>Follow us on Instagram</AdornedHeading>
          <AdornedHeading
            className="text-[2.5rem] font-bold text-brand"
            inverted={true}
          >
            @rrcbba
          </AdornedHeading>
        </div>
      </PageContainer>
    </>
  );
}
