import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ onChange }) {
  return (
    <div className="relative w-full sm:w-96">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
        <MagnifyingGlassIcon
          className="ml-2 h-6 w-6 pl-1.5"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="text-md w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2 pl-10 text-neutral-900 shadow focus:outline-none focus:outline-offset-2 focus-visible:outline-neutral-300"
        onChange={onChange}
      />
    </div>
  );
}
