import React, { useState } from "react";

const QueryResult: React.FC<{ children: HTMLElement }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return <div>QueryResult</div>;
};

export default QueryResult;
