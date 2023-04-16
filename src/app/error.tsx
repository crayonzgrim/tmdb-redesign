'use client';

import { NextPageContext } from 'next';
import React, { useEffect } from 'react';

export default function Error({ error, reset }: any) {
  return (
    <div className="text-center mt-10">
      <h1>문제가 발생했어요...😭 </h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
