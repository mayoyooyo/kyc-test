import { Button, Checkbox, Form, Input } from 'antd'
export default function SignUpWallet() {
  const handleFisnish = (e: any) => {
    console.log(e)
  }
  return (
    <Form onFinish={handleFisnish}>
      <div>sign-up wallet</div>
      <Form.Item name='mobileNumber' label='Mobile No.'>
        <Input />
      </Form.Item>
      <Form.Item name='email' label='Email'>
        <Input />
      </Form.Item>
      <Form.Item name='idCard' label='id card'>
        <Input />
      </Form.Item>
      <Form.Item name='acceptTerms'>
        <Checkbox>
          <div>ฉันได้อ่านและยอมรับ</div>
        </Checkbox>
      </Form.Item>
      <Form.Item name='isNotAmeraca'>
        <Checkbox>
          <div>ไม่มีสัญชาติเมกา</div>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          next
        </Button>
      </Form.Item>
    </Form>
  )
}
