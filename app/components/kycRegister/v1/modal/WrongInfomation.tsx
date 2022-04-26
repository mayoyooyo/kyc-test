import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import { Button, Col, Modal, Row } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface modalProps {
  isVisible?: boolean
}
export default function WrongInfomation(props: modalProps) {
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
        wrong infomation
      </Button>
      <Modal
        visible={isModalVisible}
        footer={null}
        maskClosable={false}
        closable={false}
      >
        <Row justify='center'>
          <Col>{t('wrong infomation')}</Col>
        </Row>
        <Row justify='center'>
          <Button onClick={handleOk}>{t('ok')}</Button>
        </Row>
      </Modal>
    </>
  )
}
