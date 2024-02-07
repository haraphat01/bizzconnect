import React from 'react';
import logo from "../public/img/Bizlink_Black logo@4x.png"

const EmailTemplate = ({ firstName }) => (
  <div>
    <img src={logo} className='text-center'/>
    <h1>Hello, {firstName} 😊 !.</h1>
    <p>Thank you for joining BizzLink. We're excited to have you on board!</p>
    <p>Keep an eye out for exciting business opportunities available for sale on our marketplace.</p>
    <p>The ultimate marketplace to sell and buy a business. We're here to help you succeed and make the most of your entrepreneurial journey. </p>
    <p>Happy Bizzling!</p>

    <footer>
      
      <p>Follow us on social media:</p>
      <ul>
        <li><a href={"https://twitter.com/Bizlink_23"}>Twitter: @Bizlink_23
        </a></li>
        <li><a href={"https://www.linkedin.com/company/bizlink24/"}>Linkedln: BizzLinkOfficial</a></li>
        <li><a href={"https://instagram.com/Bizlink23"}>Instagram: @Bizlink23</a></li>
      </ul>
      <p>BizzLink Address: Abuja, Nigeria</p>
    </footer>
  </div>
);

export default EmailTemplate




