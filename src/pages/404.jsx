import PageContainer from '@/components/layout/PageContainer';
import PageTitle from '@/components/PageTitle';

export default function Error404Page() {
  return (
    <PageContainer>
      <PageTitle title="404" />
      <p className="mb-12">Sorry, this page could not be found.</p>
    </PageContainer>
  );
}
