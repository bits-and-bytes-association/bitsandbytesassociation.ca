import { useState } from 'react';
import SearchBar from '@/components/common/ui/SearchBar';
import clsx from 'clsx';
import PageContainer from '@/components/common/layout/PageContainer';
import PageTitle from '@/components/common/layout/PageTitle';
import data from '@/data/past-leadership';

export async function getStaticProps() {
  return {
    props: {
      pastLeadership: data.toSorted((a, b) => {
        // We will compare year and term to sort the past executives. To do this, we assign a value to each term.
        const termOrder = {
          winter: 1,
          spring: 2,
          fall: 3,
        };

        // Divide the terms value by 10, so that we can add them to the years and compare them.
        const termOrderA = termOrder[a.term.toLowerCase()] / 10;
        const termOrderB = termOrder[b.term.toLowerCase()] / 10;

        // The term order is added to the year to get a total value. The higher the total value, the more recent the term.
        // E.g. Fall 2023 will have a value of 2023.3, while Winter 2023 will have a value of 2023.1
        const valueA = a.year + termOrderA;
        const valueB = b.year + termOrderB;

        return valueB - valueA;
      }),
    },
  };
}

export default function PastLeadershipPage({ pastLeadership }) {
  const [displayedMembers, setDisplayedMembers] = useState(pastLeadership);

  const onSearchChange = (event) => {
    // Filter the results based on the search bar value.
    const filteredResults = pastLeadership.reduce((acc, board) => {
      const filteredMembers = board.board.filter((member) => {
        const query = event.target.value.toLowerCase().trim();
        return member.name.toLowerCase().includes(query);
      });

      if (filteredMembers.length > 0) {
        return [...acc, { ...board, board: filteredMembers }];
      }

      return acc;
    }, []);
    setDisplayedMembers(filteredResults);
  };

  return (
    <PageContainer>
      <PageTitle title="Past Leadership" />
      <p className="mb-12">
        We acknowledge the invaluable contributions of past leadership teams who
        have guided and shaped the Bits and Bytes Association. Each name on this
        list represents dedicated individuals who played pivotal roles, leaving
        an enduring impact on our community. We are so grateful to the students
        who have been instrumental in building the Bits and Bytes Association
        into what it is today.
      </p>
      <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900 sm:mb-0">
          Members
        </h2>
        <SearchBar onChange={onSearchChange} />
      </div>
      <div className="overflow-x-auto rounded-lg border border-neutral-300 text-base shadow-md">
        <table className="w-full text-left">
          <thead className="bg-neutral-100 text-neutral-900">
            <tr className="border-b">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Year</th>
              <th className="px-6 py-4">Term</th>
            </tr>
          </thead>
          <tbody className="text-neutral-800">
            {displayedMembers.map((board, termIndex) =>
              board.board.map((member) => (
                <tr
                  className={clsx('whitespace-nowrap border-b', {
                    'bg-neutral-100': termIndex % 2 === 1,
                  })}
                  key={`${board.term}-${board.year}-${member.name}-${member.role}`}
                >
                  <td className="px-6 py-4">{member.name}</td>
                  <td className="px-6 py-4">{member.role}</td>
                  <td className="px-6 py-4">{board.year}</td>
                  <td className="px-6 py-4">{board.term}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
        {displayedMembers.length === 0 && (
          <p className="py-3 text-center italic">No results found.</p>
        )}
      </div>
    </PageContainer>
  );
}
