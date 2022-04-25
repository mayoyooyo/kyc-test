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
import { CountryList } from '../../shared/CountryList'
import { ThaiDistricts } from '../../shared/ThaiDistricts'

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

export default function ProfileRegister() {
  const [isSameAddr, setIsSameAddr] = useState<boolean>(false)
  const handleCheckSameAddr = () => setIsSameAddr(!isSameAddr)
  const [form] = Form.useForm()

  const handleIdCardDistrictSelect = (value: string, option: any) => {
    const params = option.key.split('-')
    form.setFieldsValue({
      idCardDistrict: params[0],
      idCardAmphoe: params[1],
      idCardProvince: params[2],
      idCardZipcode: params[3],
    })
  }
  const handleCurrentCountrySelect = (value: string, option: any) => {
    console.log(option.value)
  }
  const handleFisnish = (e: any) => {
    if (!isSameAddr) {
      e['currentCountry'] = 'Thailand'
      e['currentHouseNumber'] = e['idCardHouseNumber']
      e['currentBuilding'] = e['idCardBuilding']
      e['currentMoo'] = e['idCardMoo']
      e['currentSoi'] = e['idCardSoi']
      e['currentRoad'] = e['idCardRoad']
      e['currentDistrict'] = e['idCardDistrict']
    }
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
        <Title level={3}>profile</Title>
      </Row>
      <Row>
        <Title level={5}>id card address</Title>
      </Row>
      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardHouseNumber'>
            <Input placeholder='address number' />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardBuilding'>
            <Input placeholder='building' />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='idCardMoo'>
            <Input placeholder='moo' />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardSoi'>
            <Input placeholder='soi' />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardRoad'>
            <Input placeholder='road' />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='idCardDistrict'>
            <Select
              placeholder='district'
              showSearch
              notFoundContent
              options={ThaiDistricts}
              optionLabelProp='idCardDistrict'
              onSelect={handleIdCardDistrictSelect}
            ></Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardAmphoe'>
            <Input placeholder='amphoe' disabled />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='idCardProvince'>
            <Input placeholder='province' disabled />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Form.Item name='idCardZipcode'>
            <Input placeholder='zipcode' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Checkbox onClick={handleCheckSameAddr}>isSameAddr</Checkbox>

      {isSameAddr && (
        <>
          <Row align='bottom'>
            <Title level={3}>current addr</Title>
          </Row>

          <Row gutter={15} align='bottom'>
            <Col span={24}>
              <Text type='secondary'>current country</Text>
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
                <Input placeholder='address number' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item name='currentBuilding'>
                <Input placeholder='building' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item name='currentMoo'>
                <Input placeholder='moo' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item name='currentSoi'>
                <Input placeholder='soi' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item name='currentRoad'>
                <Input placeholder='road' />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item name='currentDistrict'>
                <Select
                  placeholder='district'
                  showSearch
                  notFoundContent
                  options={ThaiDistricts}
                ></Select>
              </Form.Item>
            </Col>
          </Row>
        </>
      )}

      <Title level={5}>fund</Title>
      <Form.Item label='fundSource' name='fundSource' labelCol={{ span: 24 }}>
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
            <Select placeholder='career' showSearch notFoundContent>
              <Select.Option key='mha'>mha</Select.Option>
              <Select.Option key='moo'>moo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='salary'>
            <Select placeholder='salary' notFoundContent>
              <Select.Option key='100'>100-200</Select.Option>
              <Select.Option key='200'>200-300</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Title level={5}>workplace</Title>
      <Row gutter={15} align='bottom'>
        <Col xs={{ span: 24 }} md={{ span: 12, offset: 12 }}>
          <Text type='secondary'>workplace country</Text>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item name='workName'>
            <Input placeholder='workName'></Input>
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
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
        <Select
          placeholder='workDistrict'
          showSearch
          notFoundContent
          options={ThaiDistricts}
        ></Select>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
