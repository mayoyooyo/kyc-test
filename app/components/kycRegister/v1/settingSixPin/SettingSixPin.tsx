import { Form, Row, Typography } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import OtpInput from 'react-otp-input'

const { Title, Text, Paragraph } = Typography

const formItemLayout = {
  labelCol: {
    lg: { span: 6 }, //nb
    xs: { span: 24 }, //iphone x
  },
  wrapperCol: {
    lg: { span: 16 },
    xs: { span: 24 },
  },
}

export default function SettingSixPin() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

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
        <Title level={5}>{t('setting_six_pin')}</Title>
      </Row>
      <Row justify='center'>
        <Form.Item name='pin'>
          <OtpInput
            isInputNum={true}
            shouldAutoFocus={true}
            onChange={handleChange}
            value={value}
            inputStyle={{
              width: '3rem',
              height: '3rem',
              margin: '1rem 0.5rem',
              fontSize: '1rem',
              borderRadius: 4,
              border: '1px solid rgba(0,0,0,0.3)',
            }}
            numInputs={6}
          />
        </Form.Item>
      </Row>
    </Form>
  )
}
