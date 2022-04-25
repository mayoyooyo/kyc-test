// @ts-ignore
import { Button, Col, Form, Input, Layout, Row, Typography } from 'antd'
import { useState } from 'react'
import OtpInput from 'react-otp-input'

const { Title, Text, Paragraph } = Typography
const { Header, Footer, Sider, Content } = Layout

const formItemLayout = {
  labelCol: {
    lg: { span: 4 }, //nb
    xs: { span: 24 }, //iphone x
  },
  wrapperCol: {
    lg: { span: 16 },
    xs: { span: 24 },
  },
}

export default function MobileVerify() {
  const [value, setValue] = useState('')
  const mobilephone = '0859977636'
  const ref = 'xxxx'

  const handleChange = (code: string) => {
    setValue(code)
    console.log(code)
  }
  const handleFisnish = (e: any) => {
    console.log(e)
  }

  return (
    <Form
      {...formItemLayout}
      onFinish={handleFisnish}
      style={{ padding: '10px' }}
    >
      <Row justify='center'>
        <Col>
          <Title level={3}>Signup - Fan Wallet</Title>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Title level={4}>Mobile No. verification</Title>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Input defaultValue={mobilephone} disabled />
        </Col>
      </Row>
      <Row justify='center'>
        <Text>
          <Text>Verify OTP</Text>
          <Text>We have sent OTP code to your mobile no.</Text>
          <Text>ref: {ref}</Text>
        </Text>
      </Row>

      <Row justify='center'>
        <Form.Item name='otp'>
          <OtpInput
            isInputNum={true}
            shouldAutoFocus={true}
            onChange={handleChange}
            value={value}
            inputStyle={{
              width: '3rem',
              height: '3rem',
              margin: '0 1rem',
              fontSize: '2rem',
              borderRadius: 4,
              border: '1px solid rgba(0,0,0,0.3)',
            }}
            numInputs={6}
          />
        </Form.Item>
      </Row>
      <Row justify='center'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Row>
      <Row justify='center'>
        <Button type='link'>resend OTP</Button>
      </Row>
    </Form>
  )
}
