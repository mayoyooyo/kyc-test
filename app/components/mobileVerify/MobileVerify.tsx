// @ts-ignore
import { Button, Form, Input, Layout, Row, Typography } from 'antd'
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

  return (
    <Content>
      <Row justify='center'>
        <Title level={3}>Signup - Fan Wallet</Title>
      </Row>
      <Row justify='center'>
        <Title level={4}>Mobile No. verification</Title>
      </Row>
      <Row justify='center'>
        <Input defaultValue={mobilephone} disabled />
      </Row>
      <Row justify='center'>
        <div>
          <span>Verify OTP</span>
          <span>We have sent OTP code to your mobile no.</span>
          <span>ref: {ref}</span>
        </div>
      </Row>

      <Form>
        <Row justify='center'>
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
        </Row>
        <Row justify='center'>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
      <Row justify='center'>
        <Button type='link'>resend OTP</Button>
      </Row>
    </Content>
  )
}
