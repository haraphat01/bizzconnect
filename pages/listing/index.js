// import React from 'react';
// const Listing = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <h1 className="text-6xl font-black">
//                 Hello World!
//             </h1>
//             <p className="text-2xl">
//                 {/* Get started by editing <code>pages/index.js</code> */}
//             </p>
//         </div>
//     )
// }
// export default Listing
import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
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
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+234</Option>
                <Option value="87">+233</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
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
                <Input />
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
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item
                name="Business Name"
                label="Business Name"
                tooltip="Ensure the accurate and legal name of the business"
                rules={[
                    {
                        required: true,
                        message: 'Ensure the accurate and legal name of the business',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="industry"
                label="Industry:"
                tooltip="Specify the industry or sector the business operates in"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input the industry',
                    },
                ]}
            >
                <Input />
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

                <Input />

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

                <Input />

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
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item
                name="Annual Revenue"
                label="Annual Revenue"
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
                name="Profit"
                label="Profit"
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
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
export default App;