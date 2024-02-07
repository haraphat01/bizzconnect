import React from 'react';
import { Button, Modal } from 'antd';
import { MailOutlined  } from '@ant-design/icons';
import { useState} from 'react';

const WelcomeMessage = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="Welcome to Bizzlink" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className="">Click on the blue <MailOutlined /> icon on your screen to send us a mail if you see a business you want to buy.</p>
            </Modal>
        </>
    );
};
export default WelcomeMessage;
