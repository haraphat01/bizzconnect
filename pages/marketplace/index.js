"use client"
import Layout from "../../components/Layout"
import { useEffect, useState } from "react";
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
   



const Home = () => { 
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/listingApi', {
              method: 'GET',
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
    
            const data = await response.json();
            setListings(data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
      }, [])
console.log(listings)
    return (
        <Layout>
           <div className="flex flex-wrap justify-center ">

{listings.map((listing, index) => (
    <div key={index} className=" lg:w-1/4 md:w-1/2 sm:w-full">
        <div className="">

            <Card
                hoverable
                style={{ width: 240 }}

            >
                <p><strong>Industry:</strong> {listing.data?.industry}</p>
                <p><strong>Category:</strong> {listing.data?.category}</p>
                <p><strong>Business Description:</strong> {listing.data?.["Business Description"]}</p>
                <p><strong>Monthly Revenue:</strong> {listing.data?.["Monthly Revenue"]}</p>
                <p><strong>Monthly Profit:</strong> {listing.data?.["Monthly Profit"]}</p>
                <p><strong>Asking Price:</strong> {listing.data?.["Asking Price"]}</p>
            </Card>
        </div>
    </div>
))}

</div>
        </Layout>
    )
}
export default Home


