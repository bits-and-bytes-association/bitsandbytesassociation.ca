import { useState } from 'react';
import Image from 'next/image';
import SearchBar from '@/components/common/ui/SearchBar';
import PageContainer from '@/components/common/layout/PageContainer';
import PageTitle from '@/components/common/layout/PageTitle';
import data from '@/data/newsletters';

export async function getStaticProps() {
  return {
    props: {
      newsletters: data
        .map((issue) => ({
          ...issue,
          contributors: issue.contributors.toSorted((a, b) => {
            const aLastName = a.split(' ').pop();
            const bLastName = b.split(' ').pop();
            if (aLastName < bLastName) return -1;
            if (aLastName > bLastName) return 1;
            return 0;
          }),
        }))
        .toSorted((a, b) => new Date(b.publishDate) - new Date(a.publishDate)),
    },
  };
}

export default function NewslettersPage({ newsletters }) {
  const [displayedIssues, setDisplayedIssues] = useState(newsletters);

  const onSearchChange = (event) => {
    const filteredResults = newsletters.filter((issue) => {
      const query = event.target.value.toLowerCase().trim();
      return issue.topics.some((topic) => topic.toLowerCase().includes(query));
    });
    setDisplayedIssues(filteredResults);
  };

  return (
    <PageContainer>
      <div className="mb-20 flex gap-16">
        <div className="basis-1/2">
          <PageTitle title="Newsletters" />
          <p>
            Calling all ACE students, from writers to graphic designers—The
            Binary Bulletin is your canvas. Whether you're passionate about
            crafting compelling tech-related articles or creating visually
            stunning designs, we invite you to contribute your unique skills to
            our newsletter. As we've laid the groundwork, your unique insights
            and interests are the building blocks of this evolving platform.
            Join the newsletter team to shape The Binary Bulletin into a dynamic
            space for our community. Reach out and be part of this collaborative
            journey!
          </p>
        </div>
        <div className="basis-1/2">
          <div className="rounded-lg border border-neutral-800 bg-neutral-800 text-base text-white shadow-md shadow-neutral-800">
            <div className="border-b border-b-neutral-700 pt-5 pb-3 text-center text-3xl font-bold">
              Latest Issue
            </div>
            <div className="flex flex-row p-8">
              <a href={newsletters[0].pdfSrc}>
                <Image
                  className="rounded-lg transition hover:brightness-75"
                  width={700}
                  height={900}
                  alt="Newsletter Front Page"
                  src={newsletters[0].thumbSrc}
                />
              </a>
              <div className="flex flex-col gap-6 pl-8">
                <div>
                  <div className="text-lg font-bold">Topics</div>
                  <ul className="whitespace-nowrap">
                    {newsletters[0].topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold">Contributors</div>{' '}
                  <ul className="whitespace-nowrap">
                    {newsletters[0].contributors.map((contributor, index) => (
                      <li key={index}>{contributor}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-bold">Published</div>
                  <div>
                    {new Date(newsletters[0].publishDate).toLocaleString(
                      'default',
                      {
                        month: 'long',
                        year: 'numeric',
                      },
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 sm:mb-0">
          Archive
        </h2>
        <SearchBar onChange={onSearchChange} />
      </div>
      <div className="overflow-x-auto rounded-lg border border-neutral-300 text-base shadow-md">
        <table className="w-full text-left">
          <thead className="bg-neutral-100 text-neutral-900">
            <tr className="border-b">
              <th className="px-6 py-4">Published</th>
              <th className="px-6 py-4">Topics</th>
              <th className="px-6 py-4">Contributors</th>
            </tr>
          </thead>
          <tbody className="text-neutral-800">
            {displayedIssues.map((issue, index) => (
              <tr
                className="whitespace-nowrap border-b even:bg-neutral-100  "
                key={issue.publishDate}
              >
                <td className="px-6 py-4">
                  {new Date(issue.publishDate).toLocaleString('default', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </td>
                <td className="px-6 py-4">
                  <a
                    className="text-brand-700 hover:underline"
                    href={issue.pdfSrc}
                    target="_blank"
                  >
                    {issue.topics.join(', ')}
                  </a>
                </td>
                <td className="px-6 py-4">{issue.contributors.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {displayedIssues.length === 0 && (
          <p className="py-3 text-center italic">No results found.</p>
        )}
      </div>
    </PageContainer>
  );
}
