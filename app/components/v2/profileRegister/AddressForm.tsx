import { Form, Input, Select } from 'antd'
import { CountryList } from '../../shared/CountryList'
import { ThaiDistricts } from '../../shared/ThaiDistricts'

interface AddressFormProps {
  noCurrentCountry?: boolean
}

export default function AddressForm(props: AddressFormProps) {
  const { noCurrentCountry } = props

  return (
    <>
      {!noCurrentCountry && (
        <Form.Item
          label='currentCountry'
          name='current country'
          rules={[
            { required: true, message: 'Please input your current country' },
          ]}
        >
          <Select showSearch notFoundContent>
            {CountryList.map((c: any) => (
              <Select key={c.alpha3}>{c.name}</Select>
            ))}
          </Select>
        </Form.Item>
      )}
      <Form.Item
        name='address number'
        rules={[
          { required: true, message: 'Please input your address number' },
        ]}
      >
        <Input placeholder='houseNumber' />
      </Form.Item>
      <Form.Item name='building'>
        <Input placeholder='building' />
      </Form.Item>
      <Form.Item name='moo'>
        <Input placeholder='moo' />
      </Form.Item>
      <Form.Item name='soi'>
        <Input placeholder='soi' />
      </Form.Item>
      <Form.Item name='road'>
        <Input placeholder='road' />
      </Form.Item>
      <Form.Item
        name='district'
        rules={[{ required: true, message: 'Please input your district' }]}
      >
        <Select
          placeholder='district'
          showSearch
          notFoundContent
          options={ThaiDistricts}
        ></Select>
      </Form.Item>
    </>
  )
}
