import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'

const { Title } = Typography

export default function SignUpWallet() {
  const handleFisnish = (e: any) => {
    console.log(e)
  }
  return (
    <Form onFinish={handleFisnish}>
      <Row justify='center'>
        <Title level={3}>sign-up wallet</Title>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name='mobileNumber' label='Mobile No.'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name='email' label='Email'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name='idCard' label='id card'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name='acceptTerms' valuePropName='checked'>
            <Checkbox value='acceptTerms'>
              <div>ฉันได้อ่านและยอมรับ</div>
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item name='isNotAmeraca' valuePropName='checked'>
            <Checkbox>
              <div>ไม่มีสัญชาติเมกา</div>
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              next
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
