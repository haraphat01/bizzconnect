"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Spin, Button } from 'antd';
import Layout from '../../components/Layout';
import useSWR from 'swr';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: details, error, isLoading } = useSWR(`/api/listingApi?id=${id}`, fetcher)
 

  return (

    <Layout>
      {details ? (

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-2 text-indigo-500">Business Name: {details.data["Business Name"]}</h2>
              <p className="text-gray-500">Business Description: {details.data["Business Description"]}</p>
            </div>
            <div className="col-span-1 mb-5">
              <p ><span className="font-semibold mb-2">Asking Price: </span>{details.data["Asking Price"]}</p>
              <p ><span className="font-semibold mb-2">Legal Structure:</span> {details.data["Legal Structure"]}</p>
              <p><span className="font-semibold mb-2">Monthly Profit:</span> {details.data["Monthly Profit"]}</p>
              <p><span className="font-semibold mb-2">Monthly Revenue:</span> {details.data["Monthly Revenue"]}</p>
              <p><span className="font-semibold mb-2">Total Profit:</span> {details.data["Monthly Profit"]}</p>
              <p><span className="font-semibold mb-2">Total Revenue:</span> {details.data["Total Revenue"]}</p>
              <p><span className="font-semibold mb-2">Number of Employees:</span> {details.data["Number of Employees"]}</p>

              <p className="font-semibold">Category: {details.data["category"]}</p>
            </div>
            <div className="col-span-1 mb-5">
              <p><span className="font-semibold mb-2">Reason for selling: </span>{details.data["Reason for selling"]}</p>
              <p ><span className="font-semibold mb-2">Gender: </span>{details.data["gender"]}</p>
              <p ><span className="font-semibold mb-2">Industry: </span>{details.data["industry"]}</p>
              <p ><span className="font-semibold mb-2">Phone: </span>{details.data["phone"]}</p>
              <p><span className="font-semibold mb-2">Verified:</span> {details.data["verified"]}</p>
              <p><span className="font-semibold mb-2">Address:</span> {details.data["Your Address"]}</p>
              <p><span className="font-semibold mb-2">Years in operation:</span> {details.data["Years in operation"]}</p>
            </div>
            <Button onClick={() => router.push('/marketplace')}>Go Back</Button>
          </div>

        </div>) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Spin size="large" />
        </div>
      )}



    </Layout>


  );
};

export default DetailsPage;
