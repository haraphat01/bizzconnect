"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; // Update variable name to 'id'
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/listingApi?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!details) {
    return <div>Loading....</div>;
  }

  console.log("details", details);
  return (
    <div>
      <h1>{details["Business Name"]}</h1>
      <p>Email: {details.email}</p>
      <p>Phone: {details.phone}</p>
      <p>Category: {details.category}</p>
      <p>Industry: {details.industry}</p>
      {/* Render other fields as needed */}
    </div>
  );
};

export default DetailsPage;
