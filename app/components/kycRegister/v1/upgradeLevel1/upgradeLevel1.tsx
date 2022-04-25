import { Button, Form, Input, DatePicker, Typography, Row, Col } from 'antd'
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

export default function UpgradeLevel1() {
  const { t } = useTranslation()
  const handleFisnish = (e: any) => {
    console.log(e)
  }

  return (
    <Form
      name='upgradeForm'
      onFinish={handleFisnish}
      {...formItemLayout}
      style={{ padding: '10px' }}
    >
      <Row justify='center'>
        <Title level={3}>{t('upgrade_to_level_1_title')}</Title>
      </Row>
      <Row justify='center'>
        <Text>{t('idcard_infomation')}</Text>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='firstName'
            label={t('first_name')}
            rules={[
              {
                required: true,
                message: 'please input your first name ',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='lastName'
            label={t('last_name')}
            rules={[
              {
                required: true,
                message: 'please input your last name ',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='birthday'
            label={t('birthday')}
            rules={[
              {
                required: true,
                message: 'please input your birthday ',
              },
            ]}
          >
            <DatePicker format='DD/MM/YYYY' />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='idCard'
            label={t('id_card')}
            rules={[
              {
                required: true,
                message: 'please input your id card ',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='idCardLaser'
            label={t('laser_id_card')}
            rules={[
              {
                required: true,
                message: 'please input your laser id card ',
              },
            ]}
          >
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
