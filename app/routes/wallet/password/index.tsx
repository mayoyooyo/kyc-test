import { Col, Row } from 'antd'
import SignUpWalletPassword from '~/components/kycRegister/v1/signupPassword/SignUpPassword'

export default function SignupWallet() {
  return (
    <div>
      <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <SignUpWalletPassword />
        </Col>
      </Row>
    </div>
  )
}
