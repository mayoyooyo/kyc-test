import { Col, Row } from 'antd'
import ProfileInformation from '~/components/kycRegister/v1/profileInformation/ProfileInformation'

export default function ProfileForm() {
  return (
    <div>
      <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <ProfileInformation />
        </Col>
      </Row>
    </div>
  )
}
