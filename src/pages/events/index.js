import Head from 'next/head';
import GoogleCalendarEmbed from '@/components/GoogleCalendarEmbed';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-6 pb-16">
      <Head>
        <title>Events</title>
      </Head>
      <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="mb-4 text-2xl font-semibold sm:mb-0">Events</h1>
      </div>
      <div className="max-w-3xl">
        <GoogleCalendarEmbed src="Yml0c2J5dGVzYXNzb2NpYXRpb25AZ21haWwuY29t" />
      </div>
    </div>
  );
}
