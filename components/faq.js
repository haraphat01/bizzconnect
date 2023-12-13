import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is Bizlink?",
    answer: "Bizlink is an online platform designed to facilitate the seamless sale of businesses. We connect business owners who are looking to sell their ventures with qualified buyers seeking profitable opportunities, creating a bridge between them.",
  },
  {
    question: "Who is the target audience for Bizlink?",
    answer: "Our target audience consists of business owners who are ready to transition out of their current ventures and buyers who are eager to acquire successful businesses. These individuals are typically seeking new opportunities for growth, expansion, or entry into specific industries. They value efficiency, reliability, and a trusted platform that simplifies the complex process of buying or selling a business.",
  },
  {
    question: "What industries does Bizlink operate within?",
    answer:
      "Bizlink operates within various industries, catering to business owners and buyers across different sectors. Our platform is adaptable and can accommodate businesses from a wide range of industries, including but not limited to retail, hospitality, technology, manufacturing, and services.",
  },
  {
    question: "How does Bizlink ensure the security of transactions?",
    answer:
      "At Bizlink, we prioritize the security of transactions. We implement robust security measures, including encryption and secure data storage, to protect the confidentiality of information shared on our platform. We also verify the identity and qualifications of buyers to maintain a trusted environment.",
  },
  {
    question: " What is the process for selling a business on Bizlink?",
    answer:
      "To sell your business on Bizlink, you can start by filling out the form on our platform. Then, provide detailed information about your business, including financials, industry, location, and any other relevant details. We  will connect you with qualified buyers who are interested in your business. ",
  },
  {
    question: " What is the process for buying a business on Bizlink?",
    answer:
      "To buy a business on Bizlink, you can start by filling out the form on our platform to receive emails of listed businesses on Bizlink. Show your interest by telling us a business you would like to acquire, and we'd connect you to the seller.",
  },
  {
    question: "Can Bizlink assist with legal and financial aspects of business transactions?",
    answer:
      "While Bizlink provides a platform for connecting buyers and sellers, we do not directly provide legal or financial services. However, we can recommend trusted professionals or service providers who specialize in legal and financial aspects of business transactions, ensuring a smooth process for all parties involved.",
  }
];

export default Faq;