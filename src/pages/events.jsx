import PageContainer from '@/components/common/layout/PageContainer';
import PageTitle from '@/components/common/layout/PageTitle';
import GoogleCalendarEmbed from '@/components/events/GoogleCalendarEmbed';

export default function EventsPage() {
  return (
    <PageContainer>
      <PageTitle title="Events" />
      <p className="mb-12">
        Connect with the ACE community in person at our upcoming events. Explore
        industry professional meet-ups, game nights, and more on our calendar.
        For details, head over to our Discord channel where we post our event
        announcements. Join us to create and be a part of memorable moments
        within our academic journey!
      </p>
      <div className="max-w-3xl rounded-lg border border-[#bcc8f3] bg-[#e3e9ff] p-5 shadow-md">
        <GoogleCalendarEmbed src="Yml0c2J5dGVzYXNzb2NpYXRpb25AZ21haWwuY29t" />
      </div>
    </PageContainer>
  );
}
