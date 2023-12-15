import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Alert } from 'antd';
import {
    AutoComplete,
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select,
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
const App = () => {
    const [alert, setAlert] = useState(false)
    const [form] = Form.useForm();
    const onFinish = async () => {
        const formValues = form.getFieldsValue();
        const apiUrl = '/api/listingApi';
        console.log('Received values of form: ', apiUrl);
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formValues }),
            });

            if (response.ok) {
                setAlert(true);
                const result = await response.json();
                console.log(result);
                return <Alert message="Success Text" type="success" />;
            } else {
                console.error('Failed to send data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
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
            <div className="flex justify-center items-center h-screen">            <Form
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
                    <Input placeholder="input the sector uour business belongs to" />
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
                    <Input.TextArea showCount maxLength={100} placeholder="short description of your biz/product" />
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

                <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                    <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item
                                name="captcha"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the captcha you got!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Button>Get captcha</Button>
                        </Col>
                    </Row>
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
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    
                    <Button type="primary" htmlType="submit">
                        submit
                    </Button>
                </Form.Item>
            </Form>
            </div>

        </Layout>
    )
}
export default App;