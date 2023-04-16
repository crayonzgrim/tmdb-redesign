import React from 'react';

type ResultsProps = {
  results: Record<string, any>[];
};

export default function Results(props: ResultsProps) {
  const { results, ...others } = props;

  return (
    <div {...others}>
      {results.map((result) => {
        return <div key={result.id}>{result.original_title}</div>;
      })}
    </div>
  );
}
