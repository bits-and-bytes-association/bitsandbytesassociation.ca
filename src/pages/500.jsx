import PageContainer from '@/components/layout/PageContainer';
import PageTitle from '@/components/PageTitle';

export default function Error500Page() {
  return (
    <PageContainer>
      <PageTitle title="500" />
      <p className="mb-12">Sorry, an internal server error occurred.</p>
    </PageContainer>
  );
}
