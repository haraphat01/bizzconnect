"use client"

import { useEffect, useState } from "react";
import { Card, Spin } from 'antd';
import Link from 'next/link';
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";

const { Meta } = Card;


const Home = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { data: session, status } = useSession();
    const router = useRouter();

    const filteredListings = listings.filter((listing) => {
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
            } finally {
                setLoading(false); // Set loading to false when data fetching is complete
            }
        };

        fetchData();
    }, []);
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
    }, [status, router]);

    // Render the marketplace content here

    return (
        <Layout>
            <div>
            <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {status === "authenticated" && (
                    <div>
                        {loading ? ( // Conditionally render loading icon
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Spin size="large" />
                            </div>
                        ) : (
                            <div className="flex flex-wrap justify-center">
                                
                                {filteredListings.map((listing) => (

                                    <div key={listing._id} className="p-5">
                                        {console.log(listing._id)}
                                        <Link href={`/details/${listing._id}`}>

                                            <Card hoverable style={{ width: 240 }}>
                                                <p><strong>Industry:</strong> {listing.data?.industry}</p>
                                                <p><strong>Category:</strong> {listing.data?.category}</p>
                                                <p><strong>Business Description:</strong> {listing.data?.["Business Description"]}</p>
                                                <p><strong>Monthly Revenue:</strong> {listing.data?.["Monthly Revenue"]}</p>
                                                <p><strong>Monthly Profit:</strong> {listing.data?.["Monthly Profit"]}</p>
                                                <p><strong>Asking Price:</strong> {listing.data?.["Asking Price"]}</p>
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
