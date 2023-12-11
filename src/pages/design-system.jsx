import Button from '@/components/common/ui/Button';
import Image from 'next/image';
import HeadingBBAStyle from '@/components/common/ui/HeadingBBAStyle';

export default function Style() {
  return (
    <>
      {/* Placeholder element */}
      <div className="container mx-auto px-6 pt-10">
        {/* Sample buttons */}
        <p className="my-3 text-3xl font-bold">Buttons</p>
        <h5 className="mb-2 text-lg">
          <b>Variant &quot;primary&quot;</b>
        </h5>
        <div className="mb-5 flex items-start">
          <Button href="#" size="md" className="mr-4">
            Learn More
          </Button>
          <Button href="#" size="lg">
            Learn More
          </Button>
        </div>

        <h5 className="mb-2 text-lg">
          <b>Variant &quot;outline&quot;</b>
        </h5>
        <div className="mb-5 flex items-start">
          <Button href="#" variant="outline" size="md" className="mr-4">
            Learn More
          </Button>
          <Button href="#" variant="outline" size="lg" className="mr-4">
            Learn More
          </Button>
        </div>

        <h5 className="mb-2 text-lg">
          <b>Variant &quot;secondary&quot;</b>
        </h5>
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
        <p className="my-4 text-3xl font-bold">Color palette</p>
        <div className="flex">
          <div
            className="text-light-font mb-10 mr-10 flex flex-col"
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
          <HeadingBBAStyle>Follow us on Instagram</HeadingBBAStyle>
          <HeadingBBAStyle
            className="text-[2.5rem] font-bold text-brand"
            inverted={true}
          >
            @rrcbba
          </HeadingBBAStyle>
        </div>
      </div>
    </>
  );
}
