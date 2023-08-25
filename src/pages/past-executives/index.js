import { useEffect, useState } from 'react';
import Head from 'next/head';
import pastExecutives from '@/data/past-executives.json';
import SearchBar from '@/components/past-executives/SearchBar';

export default function PastExecutivesPage() {
  const [allMembers, setAllMembers] = useState([pastExecutives]);
  const [displayedMembers, setDisplayedMembers] = useState(pastExecutives);

  // Sorts past executives to show the most recent first.
  const sortPastExecutives = (pastExecutives) => {
    let sortedPastExecutives = pastExecutives.toSorted((a, b) => {
      // We will compare year and term to sort the past executives. To do this, we assign a value to each term.
      const termOrder = {
        winter: 1,
        spring: 2,
        summer: 3,
        fall: 4,
      };

      // Divide the terms value by 10, so that we can add them to the years and compare them.
      const termOrderA = termOrder[a.term.toLowerCase()] / 10;
      const termOrderB = termOrder[b.term.toLowerCase()] / 10;

      // The term order is added to the year to get a total value. The higher the total value, the more recent the term.
      // E.g. Fall 2023 will have a value of 2023.4, while Winter 2023 will have a value of 2023.1
      const valueA = a.year + termOrderA;
      const valueB = b.year + termOrderB;

      return valueB - valueA;
    });

    return sortedPastExecutives;
  };

  // Formats past executives data into an array of flat objects for easier table data handling.
  const flattenPastExecutives = (pastExecutives) => {
    let flattenedPastExecutives = [];

    for (let term of pastExecutives) {
      for (let boardMember of term.board) {
        flattenedPastExecutives.push({
          name: boardMember.name,
          role: boardMember.role,
          term: term.term,
          year: term.year,
        });
      }
    }

    return flattenedPastExecutives;
  };

  const onChangeSearchBar = (event) => {
    // Filter the results based on the search bar value.
    const filteredResults = allMembers.filter((member) => {
      const query = event.target.value.toLowerCase().trim();

      return (
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.year.toString().includes(query)
      );
    });

    setDisplayedMembers(filteredResults);
  };

  useEffect(() => {
    const flattenedPastExecutives = flattenPastExecutives(pastExecutives);
    const sortedPastExecutives = sortPastExecutives(flattenedPastExecutives);
    setAllMembers(sortedPastExecutives);
    setDisplayedMembers(sortedPastExecutives);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Past Executives</title>
      </Head>
      <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="mb-4 text-2xl font-semibold sm:mb-0">Past Executives</h1>
        <SearchBar onChange={onChangeSearchBar} />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-slate-400">
              <th>Name</th>
              <th>Role</th>
              <th>Year</th>
              <th>Term</th>
            </tr>
          </thead>
          <tbody>
            {displayedMembers.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.year}</td>
                <td>{member.term}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {displayedMembers.length === 0 && (
          <p className="py-3 text-center italic">No results found.</p>
        )}
      </div>
    </div>
  );
}
