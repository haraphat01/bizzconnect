import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
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
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false);
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const [form] = Form.useForm();
    const router = useRouter();


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
                console.log(result)
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
                        <Form.Item
                            name="verified"
                            label="verified"
                            hidden
                            initialValue="NO"
                        >
                            <Input />
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
                            {loading ? (

                                <div> Listing is being submitted  <Spin size="large" /></div>
                            ) : (
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>

                    </Form>
                </Col>
            </Row>
        </Layout >
    )
}
export default App;