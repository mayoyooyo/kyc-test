import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'

const { Title, Text, Paragraph } = Typography
const mobileNumber = '0857799636'

const formItemLayout = {
  labelCol: {
    lg: { span: 8 }, //nb
    xs: { span: 24 }, //iphone x
  },
  wrapperCol: {
    lg: { span: 16 },
    xs: { span: 24 },
  },
}

export default function SignUpWalletPassword() {
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
        <Title level={3}>sign up fan wallet</Title>
      </Row>
      <Row justify='center'>
        <Col>
          <Text>your password for </Text>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Text>{mobileNumber}</Text>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item
            name='password'
            label='password'
            rules={[
              {
                required: true,
                message: 'please input password ',
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: `Password Pattern`,
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
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Form.Item
            name='confirmPassword'
            label='confirmPassword'
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  )
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
          <Text>ตั้งรหัสผ่านอย่างปลอดภัย:</Text>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <ul>
            <li>มีความยาวอย่างน้อย 8 ตัวอักษร</li>
            <li>มีทั้งตัวเลขและตัวอักษรภาษาอังกฤษ</li>
            <li>มีตัวอักษรเล็กและใหญ่</li>
            <li>มีอักขระพิเศษ (!@#$%^*-_+=)</li>
          </ul>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              confirm password
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
