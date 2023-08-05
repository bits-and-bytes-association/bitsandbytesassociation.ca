import Button from '@/components/Button';
import Image from 'next/image';
import HeadingBBAStyle from '@/components/HeadingBBAStyle';

export default function Style() {
  return (
    <>
      {/* Placeholder element */}
      <div className="container mx-auto px-6 pt-10">
        {/* Sample buttons */}
        <p className="my-3 text-3xl font-bold">Buttons</p>
        <h5 className="mb-2 text-lg">
          <b>Variant &quot;primary&quot;</b> - Simple link buttons with default
          parameters.
        </h5>
        <div className="mb-5 flex items-start">
          <Button href="#" size="sm" className="mr-4">
            Learn More
          </Button>
          <Button href="#" className="mr-4">
            Learn More
          </Button>
          <Button href="#" size="lg">
            Learn More
          </Button>
        </div>

        <h5 className="mb-2 text-lg">
          <b>Variant &quot;primary-outline&quot;</b> - Buttons with outline.
        </h5>
        <div className="mb-5 flex items-start">
          <Button variant="primary-outline" size="sm" className="mr-4">
            Learn More
          </Button>
          <Button variant="primary-outline" className="mr-4">
            Learn More
          </Button>
          <Button variant="primary-outline" size="lg" className="mr-4">
            Learn More
          </Button>
        </div>

        <h5 className="mb-2 text-lg">
          <b>Variant &quot;dark&quot;</b> - Sample non-link button with custom
          padding and onClick function
        </h5>
        <div className="mb-5">
          <Button
            variant="dark"
            padding="0.5em 4em"
            onClick={() => alert('Test')}
          >
            Learn More
          </Button>
        </div>

        <h5 className="mb-2 text-lg">
          <b>Variant &quot;dark&quot;</b> - Sample large button with image
        </h5>
        <div className="mb-10">
          <Button
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

        {/* Color palette */}
        <p className="my-4 text-3xl font-bold">Color palette</p>
        <p className="my-2 text-xl font-bold">CSS variables</p>
        <div className="flex">
          <div
            className="mb-10 mr-10 flex flex-col"
            style={{
              height: '20em',
              width: '20em',
              color: 'var(--light-font-color)',
            }}
          >
            <div
              style={{ background: 'var(--primary-color)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color
            </div>
            <div
              style={{
                background: 'var(--primary-hover-color)',
              }}
              className="flex grow items-center justify-center"
            >
              --primary-hover-color
            </div>
            <div
              style={{
                background: 'var(--light-color)',
                color: 'var(--dark-font-color)',
              }}
              className="flex grow items-center justify-center"
            >
              --light-color
            </div>
            <div
              style={{ background: 'var(--dark-color)' }}
              className="flex grow items-center justify-center"
            >
              --dark-color
            </div>
            <div
              style={{ background: 'var(--dark-hover-color)' }}
              className="flex grow items-center justify-center"
            >
              --dark-hover-color
            </div>
          </div>

          <div
            className="mb-10 mr-10 flex flex-col"
            style={{
              height: '20em',
              width: '20em',
              color: 'var(--light-font-color)',
            }}
          >
            <div
              style={{ background: 'var(--primary-color-900)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-900
            </div>
            <div
              style={{ background: 'var(--primary-color-800)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-800
            </div>
            <div
              style={{ background: 'var(--primary-color-700)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-700
            </div>
            <div
              style={{ background: 'var(--primary-color-600)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-600
            </div>
            <div
              style={{ background: 'var(--primary-color-500)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-500 (brand)
            </div>
            <div
              style={{ background: 'var(--primary-color-400)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-400
            </div>
            <div
              style={{ background: 'var(--primary-color-300)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-300
            </div>
            <div
              style={{ background: 'var(--primary-color-200)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-200
            </div>
            <div
              style={{ background: 'var(--primary-color-100)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-100
            </div>
            <div
              style={{ background: 'var(--primary-color-50)' }}
              className="flex grow items-center justify-center"
            >
              --primary-color-50
            </div>
          </div>

          <div>
            <div
              className="flex flex-col items-center justify-center"
              style={{
                height: '10em',
                width: '20em',
                background: 'var(--dark-color)',
              }}
            >
              <p
                className="text-2xl"
                style={{ color: 'var(--light-font-color)' }}
              >
                --light-font-color
              </p>
              <p
                className="text-2xl"
                style={{ color: 'var(--light-font-hover-color)' }}
              >
                --light-font-hover-color
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center"
              style={{
                height: '10em',
                width: '20em',
                background: 'var(--light-color)',
              }}
            >
              <p
                className="text-2xl"
                style={{ color: 'var(--dark-font-color)' }}
              >
                --dark-font-color
              </p>
              <p
                className="text-2xl"
                style={{ color: 'var(--dark-font-hover-color)' }}
              >
                --dark-font-hover-color
              </p>
            </div>
          </div>
        </div>

        <p className="my-2 text-xl font-bold">Tailwind classes</p>
        <div className="flex">
          <div
            className="mb-10 mr-10 flex flex-col text-light-font"
            style={{
              height: '20em',
              width: '20em',
            }}
          >
            <div className="flex grow items-center justify-center bg-primary">
              bg-primary
            </div>
            <div className="flex grow items-center justify-center bg-primary-hover">
              bg-primary-hover
            </div>
            <div className="flex grow items-center justify-center bg-light text-dark">
              bg-light
            </div>
            <div className="flex grow items-center justify-center bg-dark">
              bg-dark
            </div>
            <div className="flex grow items-center justify-center bg-dark-hover">
              bg-dark-hover
            </div>
          </div>

          <div
            className="mb-10 mr-10 flex flex-col text-light-font"
            style={{
              height: '20em',
              width: '20em',
            }}
          >
            <div className="flex grow items-center justify-center bg-primary-900">
              bg-primary-900
            </div>
            <div className="flex grow items-center justify-center bg-primary-800">
              bg-primary-800
            </div>
            <div className="flex grow items-center justify-center bg-primary-700">
              bg-primary-700
            </div>
            <div className="flex grow items-center justify-center bg-primary-600">
              bg-primary-600
            </div>
            <div className="flex grow items-center justify-center bg-primary-500">
              bg-primary-500 (brand)
            </div>
            <div className="flex grow items-center justify-center bg-primary-400">
              bg-primary-400
            </div>
            <div className="flex grow items-center justify-center bg-primary-300">
              bg-primary-300
            </div>
            <div className="flex grow items-center justify-center bg-primary-200">
              bg-primary-200
            </div>
            <div className="flex grow items-center justify-center bg-primary-100">
              bg-primary-100
            </div>
            <div className="flex grow items-center justify-center bg-primary-50">
              bg-primary-50
            </div>
          </div>

          <div>
            <div
              className="flex flex-col items-center justify-center bg-dark"
              style={{
                height: '10em',
                width: '20em',
              }}
            >
              <p className="text-2xl text-light-font">text-light-font</p>
              <p className="text-2xl text-light-font-hover">
                text-light-font-hover
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-light"
              style={{
                height: '10em',
                width: '20em',
              }}
            >
              <p className="text-2xl text-dark">text-dark-font</p>
              <p className="text-2xl text-dark-font-hover">
                text-dark-font-hover
              </p>
            </div>
          </div>
        </div>

        {/* Sample Heading component */}
        <div className="my-10">
          <HeadingBBAStyle>Follow us on Instagram</HeadingBBAStyle>
          <HeadingBBAStyle
            className="text-[2.5rem] font-bold text-primary"
            inverted={true}
          >
            @rrcbba
          </HeadingBBAStyle>
        </div>
      </div>
    </>
  );
}
