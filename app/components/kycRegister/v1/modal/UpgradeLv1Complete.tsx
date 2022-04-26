import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import { Button, Col, Modal, Row } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface modalProps {
  isVisible?: boolean
}
export default function UpgradLv1Complete(props: modalProps) {
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
        upgrade level 1 complete
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
          <Col>{t('upgraded to lv1')}</Col>
        </Row>
        <Row justify='center'>
          <Button>{t('upgrade to lv2')}</Button>
        </Row>
        <Row justify='center'>
          <Button type='link' onClick={handleCancel}>
            {t('do later')}
          </Button>
        </Row>
      </Modal>
    </>
  )
}
