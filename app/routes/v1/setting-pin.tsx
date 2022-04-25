import { Col, Row } from 'antd'
import SettingSixPin from '~/components/kycRegister/v1/settingSixPin/SettingSixPin'

export default function SignUp() {
  return (
    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
      <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <SettingSixPin />
        </Col>
      </Row>
    </div>
  )
}
