import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { Card, Carousel,Alert, Button } from 'antd';
import { useSession } from "next-auth/react"

const { Meta } = Card;
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import userTwoImg from "../public/img/user2.jpg";
import Link from "next/link";

const products = [
    {
        name: "Product 1",
        price: "$1000",
        location: "New York",
        revenue: "$5000",
        amount: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Product 2",
        price: "$1500",
        location: "San Francisco",
        revenue: "$7000",
        amount: 8,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Product 2",
        price: "$1500",
        location: "San Francisco",
        revenue: "$7000",
        amount: 8,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },


];
export const Products = () => {
    const { status, data: session } = useSession();
    const router = useRouter();
    const handleExploreMarketplace = () => {
        if (status !== "authenticated") {
            alert("Please log in to explore the marketplace");
        } else {
            router.push("/marketplace");
        }
    };
    return (
        <div >
            <div className="flex flex-wrap justify-center ">

                {products.map((product, index) => (
                    <div key={index} className=" p-5">
                        <div className="">

                            <Card
                                hoverable
                                style={{ width: 240 }}

                            >
                                <p><strong>Price:</strong> {product.price}</p>
                                <p><strong>Location:</strong> {product.location}</p>
                                <p><strong>Revenue:</strong> {product.revenue}</p>
                                <p><strong>Amount:</strong>  {product.amount}</p>
                                <p><strong>Description:</strong>  {product.description}</p>
                            </Card>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center mt-4">
                <Button className="m-5" style={{ height: "50px" }} onClick={handleExploreMarketplace}>
                    Explore marketplace
                </Button>
            </div>
        </div>
    );
};

export default Products;






