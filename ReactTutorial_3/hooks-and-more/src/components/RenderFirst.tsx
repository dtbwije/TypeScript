import React from 'react';

const { useState, useEffect } = React;
function FirstRender() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    function loadData() {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setData([1, 2, 3, 4, 5]);
        }, 3000);
    }

  useEffect(loadData, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
    </>
  );
}
export default FirstRender;