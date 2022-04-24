import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import { useState } from 'react'

const { Title, Text, Paragraph } = Typography

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

export default function SignUpWallet() {
  const [acceptTermsCheck, setAcceptTermsCheck] = useState<boolean>(false)
  const handleFisnish = (e: any) => {
    console.log(e)
    console.log(acceptTermsCheck)
  }
  return (
    <Form
      onFinish={handleFisnish}
      {...formItemLayout}
      style={{ padding: '10px' }}
    >
      <Row justify='center'>
        <Title level={3}>sign-up wallet</Title>
      </Row>
      <Row gutter={15} justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='mobileNumber'
            label='Mobile'
            rules={[
              {
                required: true,
                message: 'please input Mobile number ',
              },
            ]}
            colon={false}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15} justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='email'
            label='Email'
            rules={[
              { required: true, type: 'email', message: 'please input Email ' },
            ]}
            colon={false}
          >
            <Input type={'email'} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15} justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='idCard'
            label='id card'
            rules={[{ required: true, message: 'please input idCard ' }]}
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
              <Text>ฉันได้อ่านและยอมรับ</Text>
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
              <Text>ไม่มีสัญชาติเมกา</Text>
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
              next
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
