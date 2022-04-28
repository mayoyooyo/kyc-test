import { Col, Row } from 'antd'
import SettingSixPin from '~/components/kycRegister/v1/settingSixPin/SettingSixPin'

export default function PinSetting() {
  return (
    <div>
      <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <SettingSixPin />
        </Col>
      </Row>
    </div>
  )
}
