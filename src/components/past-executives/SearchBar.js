import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ onChange }) {
  return (
    <div className="relative w-full sm:w-96">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
        <MagnifyingGlassIcon
          className="ml-2 h-6 w-6 pl-1.5 text-slate-400"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="text-md w-full rounded-sm border border-slate-300 bg-slate-100 p-2 pl-10"
        onChange={onChange}
      />
    </div>
  );
}
