import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title, Text, Paragraph } = Typography
const mobileNumber = '0857799636'

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

export default function SignUpWalletPassword() {
  const { t } = useTranslation()
  const handleFisnish = (e: any) => {
    console.log(e)
  }

  return (
    <Form
      onFinish={handleFisnish}
      {...formItemLayout}
      style={{ padding: '10px' }}
    >
      <Row justify='center' gutter={10}>
        <Title level={3}>{t('singup_fanwallet_title')}</Title>
      </Row>
      <Row justify='center'>
        <Col>
          <Text>{t('your_password_for')}</Text>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Text>{mobileNumber}</Text>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='password'
            label={t('password')}
            rules={[
              {
                required: true,
                message: t('password_blank'),
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: t('invalid_password_pattern'),
              },
            ]}
            hasFeedback
            colon={false}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='confirmPassword'
            label={t('confirm_password')}
            rules={[
              {
                required: true,
                message: t('confirm_your_password'),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error(t('password_dont_match')))
                },
              }),
            ]}
            colon={false}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Text>{t('password_pattern_title')}</Text>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <ul>
            <li>{t('password_pattern_text_1')}</li>
            <li>{t('password_pattern_text_2')}</li>
            <li>{t('password_pattern_text_3')}</li>
            <li>{t('password_pattern_text_4')}</li>
          </ul>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              {t('confirm_password')}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
