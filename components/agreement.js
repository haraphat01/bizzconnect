import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Agreement" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ol className="list-decimal list-inside">
                    <li className="mb-2">Accurate Information: I acknowledge that all information provided in the listing, including financial details, business history, and any supporting documents, is accurate to the best of my knowledge.</li>
                    <li className="mb-2">Verification of Information: I understand that it is my responsibility as a user to verify the accuracy of the information provided by the counterparty (buyer/seller) on Bizzlink.</li>
                    <li className="mb-2">Third-Party Services: Bizzlink may provide links or facilitate connections with third-party services. I acknowledge that Bizzlink is not responsible for the terms, conditions, or actions of these third-party services.</li>
                    <li className="mb-2">Transaction Security: While Bizzlink employs security measures, I understand that the platform cannot guarantee the complete security of information and transactions. It is recommended to exercise due diligence during the sales process.</li>
                    <li className="mb-2">Dispute Resolution: In the event of disputes between the buyer and seller, I agree to work towards an amicable resolution. Bizzlink will strive to mediate, but users ultimately bear responsibility for dispute resolution.</li>
                    <li className="mb-2">Financial Transactions: I acknowledge that financial transactions on the Bizzlink platform are at my own risk. Users are encouraged to use secure and reputable payment methods to minimize risks.</li>
                    <li className="mb-2">Post-Sale Responsibilities: Once a sale is completed, users agree that Bizzlink is not liable for any issues that may arise post-transaction. Users are encouraged to seek legal advice and ensure all necessary agreements are in place.</li>
                    <li className="mb-2">User Accountability: Users are solely responsible for their actions on the Bizzlink platform, including the accuracy of information, compliance with laws and regulations, and adherence to these terms and conditions.</li>
                </ol>
            </Modal>
        </>
    );
};
export default App;