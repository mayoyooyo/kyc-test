import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import { Button, Col, Modal, Row } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface modalProps {
  isVisible?: boolean
}
export default function SignupSuccess(props: modalProps) {
  const { t } = useTranslation()
  const { isVisible = false } = props
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type='primary' onClick={showModal}>
        sign up success
      </Button>
      <Modal
        visible={isModalVisible}
        footer={null}
        maskClosable={false}
        closable={false}
      >
        <Row justify='center'>
          <CheckCircleTwoTone
            twoToneColor='#52c41a'
            style={{ fontSize: '50px' }}
          />
        </Row>
        <Row justify='center'>
          <Col>{t('signup success')}</Col>
        </Row>
        <Row justify='center'>
          <Button>{t('continue')}</Button>
        </Row>
        <Row justify='center'>
          <Button type='link' onClick={handleCancel}>
            {t('skip')}
          </Button>
        </Row>
      </Modal>
    </>
  )
}
