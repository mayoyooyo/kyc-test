import { Col, Row } from 'antd'
import UpgradeLevel1 from '~/components/kycRegister/v1/upgradeLevel1/upgradeLevel1'

export default function UpgradeLV1() {
  return (
    <div>
      <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <UpgradeLevel1 />
        </Col>
      </Row>
    </div>
  )
}
