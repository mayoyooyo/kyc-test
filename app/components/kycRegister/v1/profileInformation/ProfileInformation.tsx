import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Typography,
} from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CountryList } from '~/components/shared/CountryList'

const { Title, Text, Paragraph } = Typography

const fundSourceList = [
  {
    key: '1',
    value: 'งานบริษัท / ราชการ / รัฐวิสาหกิจ',
  },
  {
    key: '2',
    value: 'อาชีพอิสระ',
  },
  {
    key: '3',
    value: 'เจ้าของกิจการ',
  },
  {
    key: '4',
    value: 'นักเทรด / นักลงทุนอิสระ',
  },
  {
    key: '5',
    value: 'นักเรียน / นักศึกษา',
  },
  {
    key: '6',
    value: 'ว่างงาน / เกษียณ / พ่อบ้าน / แม่บ้าน',
  },
]

const formItemLayout = {
  labelCol: {
    xs: { span: 24 }, //iphone x
  },
  wrapperCol: {
    xs: { span: 24 },
  },
}

export default function ProfileInformation() {
  const { t } = useTranslation()

  const [isDiffAddr, setIsDiffAddr] = useState<boolean>(false)
  const handleCheckDiffAddr = () => setIsDiffAddr(!isDiffAddr)
  const [form] = Form.useForm()

  const handleCurrentCountrySelect = (value: string, option: any) => {
    console.log(option.value)
  }
  const handleFisnish = (e: any) => {
    console.log(e)
  }

  return (
    <Form
      onFinish={handleFisnish}
      form={form}
      {...formItemLayout}
      style={{ padding: '10px' }}
      className='profile-form '
    >
      <Row justify='center'>
        <Title level={3}>{t('personal profile')}</Title>
      </Row>
      <Row>
        <Title level={5}>{t('idcard address')}</Title>
      </Row>
      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardHouseNumber'>
            <Input placeholder={t('address number')} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardBuilding'>
            <Input placeholder={t('building')} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='idCardMoo'>
            <Input placeholder={t('moo')} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardSoi'>
            <Input placeholder={t('soi')} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardRoad'>
            <Input placeholder={t('road')} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='idCardDistrict'>
            <Input placeholder={t('address')} />
          </Form.Item>
        </Col>
      </Row>

      <Checkbox onClick={handleCheckDiffAddr}>
        {t('different address')}
      </Checkbox>

      {isDiffAddr && (
        <>
          <Row align='bottom'>
            <Title level={5}>{t('convenient contact address')}</Title>
          </Row>

          <Row gutter={15} align='bottom'>
            <Col span={24}>
              <Text type='secondary'>{t('current country')}</Text>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item name='currentCountry'>
                <Select
                  showSearch
                  notFoundContent
                  onSelect={handleCurrentCountrySelect}
                  filterOption={(input: any, option: any) =>
                    option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                      0 ||
                    option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                      0 ||
                    option.id.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {CountryList.map((c: any) => (
                    <Select.Option
                      key={`${c.alpha2}-currentCountry`}
                      value={c.enName}
                      id={c.name}
                    >
                      {c.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item name='currentHouseNumber'>
                <Input placeholder={t('address_number')} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item name='currentBuilding'>
                <Input placeholder={t('building')} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item name='currentMoo'>
                <Input placeholder={t('moo')} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item name='currentSoi'>
                <Input placeholder={t('soi')} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item name='currentRoad'>
                <Input placeholder={t('road')} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item name='currentDistrict'>
                <Input placeholder={t('address')} />
              </Form.Item>
            </Col>
          </Row>
        </>
      )}

      <Title level={5}>{t('fund source choice')}</Title>
      <Form.Item name='fundSource'>
        <Radio.Group style={{ width: '100%' }}>
          <Row>
            {fundSourceList.map((s: any) => (
              <Col key={s.key} xs={{ span: 24 }} md={{ span: 8 }}>
                <Radio key={s.key} value={s.value}>
                  {s.value}
                </Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='career'>
            <Select placeholder={t('career')} showSearch notFoundContent>
              <Select.Option key='mha'>mha</Select.Option>
              <Select.Option key='moo'>moo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='salary'>
            <Select placeholder={t('salary')} notFoundContent>
              <Select.Option key='100'>100-200</Select.Option>
              <Select.Option key='200'>200-300</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Title level={5}>{t('workplace')}</Title>
      <Text>{t('workplace description')}</Text>
      <Row gutter={15} align='bottom'>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='workName'>
            <Input placeholder={t('workplace name')}></Input>
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Text type='secondary'>{t('workplace country')}</Text>
          <Form.Item name='workCountry'>
            <Select
              showSearch
              notFoundContent
              onSelect={handleCurrentCountrySelect}
              filterOption={(input: any, option: any) =>
                option.key.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                option.id.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {CountryList.map((c: any) => (
                <Select.Option
                  key={`${c.alpha2}-workCountry`}
                  value={c.enName}
                  id={c.name}
                >
                  {c.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name='workDistrict'>
        <Input placeholder={t('address')} />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          {t('submit')}
        </Button>
      </Form.Item>
    </Form>
  )
}
