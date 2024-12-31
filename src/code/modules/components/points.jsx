import React, { useEffect, useState } from 'react';

const FetchPointsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          points {
            department
            point
            image
          }
        }
      `;

      try {
        const response = await fetch('https://ap-south-1.cdn.hygraph.com/content/cm5c8fq6d012r07uvhu1pnu6z/master', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        setData(result.data.points);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Points Data</h2>
      
        {data.map((point, index) => (
          <span key={index}>
            <strong>{point.department}</strong>: {point.point}
            <img src={point.image} alt={point.department} style={{ width: '100px' }} />
            </span>
        ))}
      
    </div>
  );
};

export default FetchPointsData;
