import React from "react";
import { useState } from "react";
import { Card, Carousel } from 'antd';
const { Meta } = Card;
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import userTwoImg from "../public/img/user2.jpg";

const products = [
    {
        name: "Product 1",
        picture: userTwoImg,
        price: "$1000",
        location: "New York",
        revenue: "$5000",
        amount: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Product 2",
        picture: userTwoImg,
        price: "$1500",
        location: "San Francisco",
        revenue: "$7000",
        amount: 8,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Product 2",
        picture: userTwoImg,
        price: "$1500",
        location: "San Francisco",
        revenue: "$7000",
        amount: 8,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  
];
export const Products = () => {

    return (
        <div className="flex flex-wrap justify-center">
            
            {products.map((product, index) => (
                <div key={index} className=" lg:w-1/4 md:w-1/2 sm:w-full">
                    <div className="">

                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
    );
};

export default Products;






