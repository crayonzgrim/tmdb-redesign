import React from 'react';
import Card from './Card';

type ResultsProps = {
  results: Record<string, any>[];
};

export default function Results(props: ResultsProps) {
  const { results } = props;

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
}
