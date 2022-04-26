import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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

export default function SignUpWallet() {
  const { t } = useTranslation()
  const [acceptTermsCheck, setAcceptTermsCheck] = useState<boolean>(false)
  const handleFisnish = (e: any) => {
    console.log(e)
  }

  return (
    <Form
      onFinish={handleFisnish}
      {...formItemLayout}
      style={{ padding: '10px' }}
    >
      <Row justify='center'>
        <Title level={3}>{t('singup fanwallet')}</Title>
      </Row>
      <Row gutter={15} justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='mobileNumber'
            label={t('mobile number')}
            rules={[
              {
                required: true,
                message: t('please input mobile number'),
              },
            ]}
            colon={false}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15} justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='email'
            label={t('email')}
            rules={[
              {
                required: true,
                type: 'email',
                message: t('please input email'),
              },
            ]}
            colon={false}
          >
            <Input type={'email'} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15} justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='idCard'
            label={t('idcard')}
            rules={[{ required: true, message: t('please input idcard') }]}
            colon={false}
          >
            <Input maxLength={13} minLength={13} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} md={{ offset: 8 }}>
          <Form.Item name='acceptTerms' valuePropName='checked'>
            <Checkbox
              value='acceptTerms'
              onChange={() => setAcceptTermsCheck(!acceptTermsCheck)}
            >
              <Row>
                <Text>{t('agree to')}</Text>
                <Text style={{ marginInline: '5px' }}>
                  {t('term of service')}
                </Text>
                <Text>{t('and')}</Text>
                <Text style={{ marginInline: '5px' }}>
                  {t('privacy policy')}
                </Text>
              </Row>
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} md={{ offset: 8 }}>
          <Form.Item
            name='isNotAmeraca'
            valuePropName='checked'
            initialValue={false}
          >
            <Checkbox>
              <Text>{t('dont have us citizenship')}</Text>
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              disabled={!acceptTermsCheck}
            >
              {t('next')}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
