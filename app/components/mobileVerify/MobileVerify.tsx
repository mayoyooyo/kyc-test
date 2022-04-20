// @ts-ignore
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import OtpInput from 'react-otp-input'

export default function MobileVerify() {
  const mobilephone = '0859977636'
  const ref = 'xxxx'

  const handleChange = (code: string) => {
    console.log(code)
  }

  return (
    <div>
      <div>Signup - Fan Wallet</div>
      <div>Mobile No. verification</div>
      <Input placeholder='Basic usage' defaultValue={mobilephone} disabled />
      <div>
        <span>Verify OTP</span>
        <span>We have sent OTP code to your mobile no.</span>
        <span>ref: {ref}</span>
      </div>
      <Form>
        <OtpInput
          isInputNum={true}
          shouldAutoFocus={true}
          onChange={handleChange}
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
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button type='link'>resend OTP</Button>
    </div>
  )
}
