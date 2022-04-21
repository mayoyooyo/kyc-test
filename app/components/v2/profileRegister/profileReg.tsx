import { Button, Checkbox, Form, Input, Radio, Select } from 'antd'
import { useState } from 'react'
import { CountryList } from '../../shared/CountryList'
import { ThaiDistricts } from '../../shared/ThaiDistricts'

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

export default function ProfileRegister() {
  const [isSameAddr, setIsSameAddr] = useState<boolean>(false)
  const handleCheckSameAddr = () => setIsSameAddr(!isSameAddr)

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
    <div>
      <Form onFinish={handleFisnish}>
        <div>profile</div>
        <div>id card address</div>
        <Form.Item name='idCardHouseNumber'>
          <Input placeholder='address number' />
        </Form.Item>
        <Form.Item name='idCardBuilding'>
          <Input placeholder='building' />
        </Form.Item>
        <Form.Item name='idCardMoo'>
          <Input placeholder='moo' />
        </Form.Item>
        <Form.Item name='idCardSoi'>
          <Input placeholder='soi' />
        </Form.Item>
        <Form.Item name='idCardRoad'>
          <Input placeholder='road' />
        </Form.Item>
        <Form.Item name='idCardDistrict'>
          <Select
            placeholder='district'
            showSearch
            notFoundContent
            options={ThaiDistricts}
          ></Select>
        </Form.Item>

        <Checkbox onClick={handleCheckSameAddr}>isSameAddr</Checkbox>

        {isSameAddr && (
          <>
            <Form.Item label='current Country' name='currentCountry'>
              <Select showSearch notFoundContent>
                {CountryList.map((c: any) => (
                  <Select key={c.alpha3}>{c.name}</Select>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name='currentHouseNumber'>
              <Input placeholder='address number' />
            </Form.Item>
            <Form.Item name='currentBuilding'>
              <Input placeholder='building' />
            </Form.Item>
            <Form.Item name='currentMoo'>
              <Input placeholder='moo' />
            </Form.Item>
            <Form.Item name='currentSoi'>
              <Input placeholder='soi' />
            </Form.Item>
            <Form.Item name='currentRoad'>
              <Input placeholder='road' />
            </Form.Item>
            <Form.Item name='currentDistrict'>
              <Select
                placeholder='district'
                showSearch
                notFoundContent
                options={ThaiDistricts}
              ></Select>
            </Form.Item>
          </>
        )}

        <div>fund</div>
        <Form.Item label='fundSource' name='fundSource'>
          <Radio.Group>
            {fundSourceList.map((s: any) => (
              <Radio key={s.key} value={s.value}>
                {s.value}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item name='career'>
          <Select placeholder='career' showSearch notFoundContent>
            <Select key='1'>mha</Select>
            <Select key='2'>moo</Select>
          </Select>
        </Form.Item>
        <Form.Item name='salary'>
          <Select placeholder='salary' notFoundContent>
            <Select key='1'>100-200</Select>
            <Select key='2'>200-300</Select>
          </Select>
        </Form.Item>

        <div>workplace</div>
        <Form.Item name='workName'>
          <Input placeholder='workName'></Input>
        </Form.Item>
        <Form.Item name='workCountry'>
          <Select placeholder='workCountry' showSearch notFoundContent>
            {CountryList.map((c: any) => (
              <Select key={c.alpha3}>{c.name}</Select>
            ))}
          </Select>
        </Form.Item>
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
    </div>
  )
}
