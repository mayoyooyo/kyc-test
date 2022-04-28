import { Col, Row } from 'antd'
import SignUpWallet from '~/components/kycRegister/v1/signupWallet/SignupWallet'

export default function SignupWallet() {
  return (
    <div >
      <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <SignUpWallet />
        </Col>
      </Row>
    </div>
  )
}
