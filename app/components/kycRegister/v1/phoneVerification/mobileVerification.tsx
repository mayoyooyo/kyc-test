// @ts-ignore
import { Button, Col, Form, Input, Layout, Row, Typography } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import OtpInput from 'react-otp-input'

const { Title, Text, Paragraph } = Typography
const { Header, Footer, Sider, Content } = Layout

const formItemLayout = {
  labelCol: {
    sm: { span: 6 }, //nb
    xs: { span: 24 }, //iphone x
  },
  wrapperCol: {
    sm: { span: 16 },
    xs: { span: 24 },
  },
}

export default function MobileVerification() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [otpError, setOtpError] = useState<boolean>(false)
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
          <Title level={3}>{t('singup fanwallet')}</Title>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Title level={4}>{t('mobile verification')}</Title>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 10 }}>
          <Input defaultValue={mobilephone} disabled />
        </Col>
      </Row>
      <Row justify='center' gutter={10}>
        <Col>
          <Text>{t('verify otp')}</Text>
        </Col>
        <Col>
          <Text>{t('otp send to')}</Text>
        </Col>
        <Col>
          <Text>
            {t('ref')}
            {ref}
          </Text>
        </Col>
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
              margin: '1rem 0.5rem',
              fontSize: '1rem',
              borderRadius: 4,
              border: '1px solid rgba(0,0,0,0.3)',
            }}
            numInputs={6}
          />
        </Form.Item>
      </Row>
      {otpError && (
        <Row justify='center'>
          <Text style={{ color: 'red' }}>{t('otp error')}</Text>
        </Row>
      )}
      <Row justify='center'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {t('submit')}
          </Button>
        </Form.Item>
      </Row>
      <Row justify='center'>
        <Button type='link'>{t('resend otp')}</Button>
      </Row>
    </Form>
  )
}
