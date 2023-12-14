import { useEffect, useState } from 'react';
import pastExecutives from '@/data/past-executives.json';
import SearchBar from '@/components/common/ui/SearchBar';
import Page from '@/components/common/layout/Page';
import clsx from 'clsx';

export default function PastLeadershipPage() {
  const [allMembers, setAllMembers] = useState([pastExecutives]);
  const [displayedMembers, setDisplayedMembers] = useState(pastExecutives);

  // Sorts past executives to show the most recent first.
  const sortPastExecutives = (pastExecutives) => {
    return pastExecutives.toSorted((a, b) => {
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
    });
  };

  const onSearchChange = (event) => {
    // Filter the results based on the search bar value.
    const filteredResults = allMembers.reduce((acc, board) => {
      const filteredMembers = board.board.filter((member) => {
        const query = event.target.value.toLowerCase().trim();
        return (
          member.name.toLowerCase().includes(query) ||
          member.role.toLowerCase().includes(query)
        );
      });

      if (filteredMembers.length > 0) {
        return [...acc, { ...board, board: filteredMembers }];
      }

      return acc;
    }, []);
    setDisplayedMembers(filteredResults);
  };

  useEffect(() => {
    const sortedPastExecutives = sortPastExecutives(pastExecutives);
    setAllMembers(sortedPastExecutives);
    setDisplayedMembers(pastExecutives);
  }, []);

  return (
    <Page
      title="Past Leadership"
      description="We acknowledge the invaluable contributions of past leadership teams who have guided and shaped the Bits and Bytes Association. Each name on this list represents dedicated individuals who played pivotal roles, leaving an enduring impact on our community. We are so grateful to the students who have been instrumental in building the Bits and Bytes Association into what it is today."
    >
      <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="mb-4 text-2xl font-semibold sm:mb-0">Members</h1>
        <SearchBar onChange={onSearchChange} />
      </div>
      <div className="overflow-x-auto rounded-lg border border-neutral-300 shadow-md">
        <table className="w-full text-left">
          <thead className="bg-neutral-100">
            <tr className="border-b text-neutral-900">
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
    </Page>
  );
}
