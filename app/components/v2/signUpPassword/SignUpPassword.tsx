import { Button, Checkbox, Form, Input, Typography } from 'antd'

const { Title } = Typography
const mobileNumber = '0857799636'

export default function SignUpWalletPassword() {
  const handleFisnish = (e: any) => {
    console.log(e)
  }
  return (
    <Form onFinish={handleFisnish}>
      <Title level={2}>sign up fan wallet</Title>
      <Form.Item name='mobileNumber'>
        <Input defaultValue={mobileNumber} disabled />
      </Form.Item>
      <Form.Item name='password' label='password'>
        <Input type='password' />
      </Form.Item>
      <Form.Item name='confirmPassword' label='confirmPassword'>
        <Input type='password' />
      </Form.Item>
      <header>ตั้งรหัสผ่านอย่างปลอดภัย:</header>
      <ul>
        <li>มีความยาวอย่างน้อย 8 ตัวอักษร</li>
        <li>มีทั้งตัวเลขและตัวอักษรภาษาอังกฤษ</li>
        <li>มีตัวอักษรเล็กและใหญ่</li>
        <li>มีอักขระพิเศษ (!@#$%^*-_+=)</li>
      </ul>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          confirm password
        </Button>
      </Form.Item>
    </Form>
  )
}
