import { Form, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import OtpInput from 'react-otp-input'

const { Title, Text, Paragraph } = Typography

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

export default function SettingSixPin() {
  const { t } = useTranslation()
  const [form] = Form.useForm()

  const [password, setPassword] = useState('')
  const [comfirmState, setConfirmState] = useState(false)
  const [errMatch, setErrMatch] = useState(false)

  const handleChange = (code: string) => {
    if (code.length == 6 && !comfirmState) {
      setPassword(code)
      setConfirmState(true)
      form.resetFields(['pin'])
    }
    if (code.length == 6 && comfirmState) {
      if (code != password) {
        form.resetFields(['pin'])
        setErrMatch(true)
        console.log('password !match')
      }
      if (code == password) {
        form.resetFields(['pin'])
        console.log('password match')
      }
      setConfirmState(false)
    }
  }

  return (
    <Form {...formItemLayout} style={{ padding: '10px' }} form={form}>
      <Row justify='center'>
        <Title level={5}>
          {comfirmState ? t('confirm') : t('setting')}
          {t('setting six pin')}
        </Title>
      </Row>
      <Row justify='center'>
        <Form.Item name='pin'>
          <OtpInput
            isInputNum={true}
            shouldAutoFocus={true}
            onChange={handleChange}
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
      <Row justify='center'>
        {errMatch ? <Text>{t('password dont match')}</Text> : <></>}
      </Row>
    </Form>
  )
}
