'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) {
      return;
    } else {
      router.push(`/search/${search}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex align-center justify-center max-w-6xl mx-auto px-3 mt-6"
    >
      <input
        type="text"
        placeholder="Search keywords..."
        value={search ?? ''}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 rounded-sm placeholder-gray-500 border-amber-600 outline-amber-600 bg-transparent px-4 py-4"
      />
      <button
        type="submit"
        disabled={!search}
        className="text-amber-600 border-black disabled:text-gray-400 ml-5"
      >
        Search
      </button>
    </form>
  );
}
