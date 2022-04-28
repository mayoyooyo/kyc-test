import { Col, Row } from 'antd'
import MobileVerification from '~/components/kycRegister/v1/phoneVerification/mobileVerification'

export default function Verify() {
  return (
    <div>
      <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <MobileVerification />
        </Col>
      </Row>
    </div>
  )
}
