import {
  Button,
  Form,
  Input,
  DatePicker,
  Typography,
  Row,
  Col,
  Checkbox,
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
        <Title level={3}>{t('upgrade wallet to lv1')}</Title>
      </Row>
      <Row justify='center'>
        <Text>{t('idcard infomation')}</Text>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='firstName'
            label={t('firstname')}
            rules={[
              {
                required: true,
                message: t('please input firstname'),
              },
            ]}
            colon={false}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='lastName'
            label={t('lastname')}
            rules={[
              {
                required: true,
                message: t('please input lastname'),
              },
            ]}
            colon={false}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='birthday'
            label={t('birthday')}
            rules={[
              {
                required: true,
                message: t('please input birthday'),
              },
            ]}
            colon={false}
          >
            <DatePicker format='DD/MM/YYYY' />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='idCard'
            label={t('idcard')}
            rules={[
              {
                required: true,
                message: t('please input idcard'),
              },
            ]}
            colon={false}
          >
            <Input maxLength={13} minLength={13} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Form.Item
            name='idCardLaser'
            label={t('idcard laser')}
            rules={[
              {
                required: true,
                message: t('please input idcard laser'),
              },
            ]}
            colon={false}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ span: 24 }} md={{ span: 16, offset: 8 }}>
          <Form.Item name='acceptVerify'>
            <Checkbox>{t('accept verify identity')}</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row justify='center'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {t('next')}
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
