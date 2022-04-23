import { Button, Form, Input, DatePicker, Typography, Row, Col } from 'antd'
import { useState } from 'react'

const { Title } = Typography

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
      <Row justify='center'>
        <Title>Upgrade fan wallet - to lv 1</Title>
      </Row>
      <Row>
        <Col span='24'>
          <Form.Item name='firstName' label='firstName'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span='24'>
          <Form.Item name='lastName' label='lastName'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span='24'>
          <Form.Item name='birthday' label='birthday'>
            <DatePicker format='DD/MM/YYYY' />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span='24'>
          <Form.Item name='idCard' label='idCard number'>
            <Input onChange={(e) => handleInput(e)} value={idCardValue} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span='24'>
          <Form.Item name='idCardLaser' label='idCard laser number'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            next
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
