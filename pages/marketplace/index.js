"use client"
import { useEffect, useState } from "react";
import { Card, Spin } from 'antd';
import Link from 'next/link';
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";

import useSWR from 'swr'
import { atom, useAtom } from 'jotai';

export const listingResponseFromAtom = atom([""]);

const { Meta } = Card;


const Home = () => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { data: session, status } = useSession();
    // const [listings] = useAtom(listingResponseFromAtom);
    const router = useRouter();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: listings, error, isLoading } = useSWR('/api/listingApi', fetcher)
 
    const filteredListings = listings && listings.filter((listing) => {
        return (
            (listing.data?.industry?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
            (listing.data?.category?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
            (listing.data?.["Business Description"]?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
            (listing.data?.["Monthly Revenue"]?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
            (listing.data?.["Monthly Profit"]?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
            (listing.data?.["Asking Price"]?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
        );
    });



    useEffect(() => {
       
        if (status === "authenticated") {
            // User is authenticated, allow access to the marketplace
        } else if (status === "loading") {
            // Session is being fetched
        } else {
            // User is not authenticated, redirect to login page
            alert("log in to view the marketplace")
            router.push("/");

        }
    }, [status, router,listings]);



    return (
        <Layout>
            <div >
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <input
                        type="text"
                        placeholder="Search to filter the listings available ....."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                        style={{ outline: 'none' }}

                        className="w-1/2 p-2 border-2 border-blue-500 "
                    />
                </div>
                {status === "authenticated" && (
                    <div>
                        {isLoading ? ( // Conditionally render loading icon
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Spin size="large" />
                            </div>
                        ) : (
                            <div className="flex flex-wrap justify-center">

                                {filteredListings.map((listing) => (

                                    <div key={listing._id} className="p-5">
                                        <Link href={`/marketplace/${listing._id}`}>

                                            <Card hoverable style={{ width: 270 }}
                                                className="hover:bg-primary mt-2"
                                            >
                                                <p className=" mb-2"><strong>Industry:</strong> {listing.data?.industry}</p>
                                                <p className=" mb-2"><strong>Category:</strong> {listing.data?.category}</p>
                                                <p className=" mb-2"><strong>Business Description:</strong> {listing.data?.["Business Description"]}</p>
                                                <p className=" mb-2"><strong>Monthly Revenue:</strong> {listing.data?.["Monthly Revenue"]}</p>
                                                <p className=" mb-2"><strong>Monthly Profit:</strong> {listing.data?.["Monthly Profit"]}</p>
                                                <p className=" mb-2"><strong>Asking Price:</strong> {listing.data?.["Asking Price"]}</p>
                                            </Card>

                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Layout>
    );
};

// Export the Home component
export default Home;
