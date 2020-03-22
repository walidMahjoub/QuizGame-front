import React, { useEffect, useCallback } from 'react';

const Hello = ({ x }) => {
  const fetchY = useCallback(() => {
    const y = x + 1;
    return y;
  }, [x]);

  useEffect(() => {
    fetchY();
  }, [fetchY]);

  return <div>Hello</div>;
};

export default Hello;
