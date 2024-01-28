import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Agreement from "../../components/agreement"
import {
    Alert, Spin,
    AutoComplete,
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select, Typography
} from 'antd';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const { Title } = Typography;
const App = () => {
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [form] = Form.useForm();
    const router = useRouter();
    const [agreementChecked, setAgreementChecked] = useState(false);


    const onFinish = async () => {
        setLoading(true);
        const formValues = form.getFieldsValue();
        const apiUrl = '/api/listingApi';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formValues }),
            });

            if (response.ok) {
                const result = await response.json();
                setAlert(true);
                form.resetFields();
                router.push('/');

            } else {
                console.error('Failed to send data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onAgreementChange = (e) => {
        setAgreementChecked(e.target.checked); // Update state when checkbox is checked
    };

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));


    return (
        <Layout>
            <Title level={2} style={{ fontFamily: 'Arial', fontSize: '24px', textAlign: 'center' }}>Business Listing Form</Title>

            {alert && <Alert message="Your listing was submitted successfully" type="success" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 auto" }} />}

            <Row justify="center">
                <Col xs={24} sm={16} md={12} lg={8}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{

                            prefix: '+234   ',
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        scrollToFirstError
                        className="w-full max-w-md"
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input placeholder="enter your valid email address" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="your contact number"
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="Business Name"
                            label="Business Name"
                            placeholder="name"
                            tooltip="Ensure the accurate and legal name of the business"
                            rules={[
                                {
                                    required: true,
                                    message: 'Ensure the accurate and legal name of the business',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="ensure the accurate and legal name of the business" />
                        </Form.Item>
                        <Form.Item
                            name="category"
                            label="Category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a category!',
                                },
                            ]}
                        >
                            <Select placeholder="select your listing category">
                                <Option value="physical">Physical Business</Option>
                                <Option value="online">Online Business</Option>
                                <Option value="software">SaaS</Option>
                                <Option value="idea">Product Idea</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="industry"
                            label="Industry:"
                            tooltip="Specify the industry or sector the business operates in"
                            rules={[
                                {
                                    type: 'industry',
                                    message: 'input the sector uour business belongs to',
                                },
                                {
                                    required: true,
                                    message: 'Please input the industry',
                                },
                            ]}
                        >
                            <Input placeholder="input the sector your business belongs to" />
                        </Form.Item>
                        <Form.Item
                            name="Your Address"
                            label="Your Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address',
                                },
                            ]}
                        >

                            <Input placeholder="what's your address?" />

                        </Form.Item>

                        <Form.Item
                            name="Business Address"
                            label="Business Address"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input website!',
                                },
                            ]}
                        >

                            <Input placeholder="your business address" />

                        </Form.Item>

                        <Form.Item
                            name="website"
                            label="Website"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input website!',
                                },
                            ]}
                        >
                            <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                                <Input />
                            </AutoComplete>
                        </Form.Item>

                        <Form.Item
                            name="Business Description"
                            label="Business Description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Intro',
                                },
                            ]}
                        >
                            <Input.TextArea showCount maxLength={500} placeholder="short description of your biz/product" />
                        </Form.Item>

                        <Form.Item
                            name="Monthly Revenue"
                            label="Monthly Revenue"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input website!',
                                },
                            ]}
                        >

                            <Input placeholder="what's your monthly revenue?" />


                        </Form.Item>
                        <Form.Item
                            name="Monthly Profit"
                            label="Monthly Profit"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input profit!',
                                },
                            ]}
                        >

                            <Input placeholder="what's your monthly profit?" />

                        </Form.Item>
                        <Form.Item
                            name="Total Revenue"
                            label="Total Revenue"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input website!',
                                },
                            ]}
                        >

                            <Input placeholder="what's your monthly revenue?" />


                        </Form.Item>
                        <Form.Item
                            name="Total Profit"
                            label="Total Profit"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input profit!',
                                },
                            ]}
                        >

                            <Input placeholder="what's your monthly profit?" />

                        </Form.Item>
                        <Form.Item
                            name="Asking Price"
                            label="Asking Price"
                            required="true"
                            rules={[
                                {
                                    required: false,
                                    message: 'input your asking price',
                                },
                            ]}
                        >

                            <Input placeholder="How much do you intend to sell?" />

                        </Form.Item>
                        <Form.Item
                            name="Reason for selling"
                            label="Reason for selling"
                            rules={[
                                {
                                    required: true,

                                },
                            ]}
                        >
                            <Input.TextArea showCount maxLength={500} placeholder="Tell us why you're selling your biz/product" />
                        </Form.Item>
                        <Form.Item
                            name="Years in operation"
                            label="Years in operation"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input website!',
                                },
                            ]}
                        >

                            <Input />

                        </Form.Item>
                        <Form.Item
                            name="Number of Employees"
                            label="Number of Employees"
                            rules={[
                                {
                                    required: false,
                                    message: 'Indicate the current number of employees',
                                },
                            ]}
                        >

                            <Input />

                        </Form.Item>
                        <Form.Item
                            name="Legal Structure"
                            label="Legal Structure"
                            rules={[
                                {
                                    required: true,
                                    message: 'Specify the legal structure of the business',
                                },
                            ]}
                        >
                            <Select placeholder="select your listing category">
                                <Option value="physical">Sole Proprietorship</Option>
                                <Option value="online">Partnership</Option>
                                <Option value="software">Limited Liability Company (LLC)</Option>
                                <Option value="idea">Corporation</Option>
                                <Option value="idea">Nonprofit Corporation</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Licenses and Permits"
                            label="Licenses and Permits"
                            tooltip="Outline any licenses or permits required for the operation of the business."
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input website!',
                                },
                            ]}
                        >

                            <Input />

                        </Form.Item>
                        <Form.Item
                            name="Social Media"
                            label="Social Media"

                        >

                            <Input placeholder="Enter your social media handle" />

                        </Form.Item>


                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender!',
                                },
                            ]}
                        >
                            <Select placeholder="select your gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="verified"
                            label="verified"
                            hidden
                            initialValue="NO"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox onChange={onAgreementChange}>
                                I have read the agreement
                                {agreementChecked && <Agreement />}
                            </Checkbox>
                         
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            {loading ? (

                                <div> Your listing is being submitted  <Spin size="large" /></div>
                            ) : (
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            )}
                        </Form.Item>


                    </Form>
                </Col>
            </Row>
        </Layout >
    )
}
export default App;