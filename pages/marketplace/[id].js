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
            <div className="col-span-1">
              <p ><span className="font-semibold">Asking Price: </span>{details.data["Asking Price"]}</p>
              <p ><span className="font-semibold">Legal Structure:</span> {details.data["Legal Structure"]}</p>
              <p><span className="font-semibold">Monthly Profit:</span> {details.data["Monthly Profit"]}</p>
              <p><span className="font-semibold">Monthly Revenue:</span> {details.data["Monthly Revenue"]}</p>
              <p><span className="font-semibold">Total Profit:</span> {details.data["Monthly Profit"]}</p>
              <p><span className="font-semibold">Total Revenue:</span> {details.data["Total Revenue"]}</p>

              <p className="font-semibold">Category: {details.data["category"]}</p>
            </div>
            <div className="col-span-1">
              <p><span className="font-semibold">Email: </span>{details.data["email"]}</p>
              <p ><span className="font-semibold">Gender: </span>{details.data["gender"]}</p>
              <p ><span className="font-semibold">Industry: </span>{details.data["industry"]}</p>
              <p ><span className="font-semibold">Phone: </span>{details.data["phone"]}</p>
              <p><span className="font-semibold">Verified:</span> {details.data["verified"]}</p>
              <p><span className="font-semibold">Address:</span> {details.data["Your Address"]}</p>


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
