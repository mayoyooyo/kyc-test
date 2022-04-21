import { Button, Form, Input, DatePicker } from 'antd'
import { useState } from 'react'

export default function UpgradeLevel1() {
  const [idCardValue, setIdCardValue] = useState<string>('')

  const handleFisnish = (e: any) => {
    console.log(e)
  }

  function formatIdCard(value: string) {
    return '10'
  }

  const handleInput = (e: any) => {
    const formattedIdCard = formatIdCard(e.target.value)
    setIdCardValue(formattedIdCard)
    console.log(idCardValue)
  }

  return (
    <Form name='upgradeForm' onFinish={handleFisnish}>
      <div>Upgrade fan wallet - to lv 1</div>
      <Form.Item name='firstName' label='firstName'>
        <Input />
      </Form.Item>
      <Form.Item name='lastName' label='lastName'>
        <Input />
      </Form.Item>
      <Form.Item name='birthday' label='birthday'>
        <DatePicker format='DD/MM/YYYY' />
      </Form.Item>
      <Form.Item name='idCard' label='idCard number'>
        <Input onChange={(e) => handleInput(e)} value={idCardValue} />
      </Form.Item>
      <Form.Item name='idCardLaser' label='idCard laser number'>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
