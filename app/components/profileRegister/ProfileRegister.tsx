// @ts-ignore
import Form from '@rjsf/antd'
import { useEffect, useState } from 'react'
import type { JSONSchema7 } from 'json-schema'

const schema: JSONSchema7 = {
  title: 'ข้อมูลส่วนตัวผู้สมัคร',
  type: 'object',
  properties: {
    cardIdAddr: {
      type: 'object',
      title: 'ที่อยู่ตามบัตรประชาชน',
      required: ['houseNo', 'building', 'villageNo', 'lane', 'road', 'address'],
      properties: {
        houseNo: {
          type: 'string',
          title: 'บ้านเลขที่',
        },
        building: {
          type: 'string',
          title: 'อาคาร',
        },
        villageNo: {
          type: 'string',
          title: 'หมู่ที่/ชื่อหมู่บ้าน',
        },
        lane: {
          type: 'string',
          title: 'ซอย',
        },
        road: {
          type: 'string',
          title: 'ถนน',
        },
        address: {
          type: 'string',
          title: 'ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์',
        },
        isAddrDif: {
          title: 'ที่อยู่ปัจจุบันแตกต่างจากที่อยู่ตามบัตรประชาชน',
          type: 'boolean',
          default: false,
        },
      },
    },
    fund: {
      type: 'object',
      title: '',
      required: ['source', 'career', 'salary'],
      properties: {
        source: {
          type: 'string',
          title: 'โปรดเลือกแหล่งที่มาของเงินทุนของคุณ',
          enum: [
            'งานบริษัท / ราชการ / รัฐวิสาหกิจ',
            'อาชีพอิสระ',
            'เจ้าของกิจการ',
            'นักเทรด / นักลงทุนอิสระ',
            'นักเรียน / นักศึกษา',
            'ว่างงาน / เกษียณ / พ่อบ้าน / แม่บ้าน',
          ],
        },
        career: {
          type: 'string',
          title: 'อาชีพ',
          enum: ['นักศึกษา', 'ข้าราชการ'],
        },
        salary: {
          type: 'string',
          title: 'ช่วงของรายได้ (รายเดือน)',
          enum: ['0-100 บาท', '100-300 บาท'],
        },
      },
    },
    workAddr: {
      type: 'object',
      title: 'ที่อยู่ที่ทำงาน',
      description: '',
      required: ['Name', 'Location', 'address'],
      properties: {
        Name: {
          type: 'string',
          title: 'ชื่อสถานที่ทำงาน',
        },
        Location: {
          type: 'string',
          title: 'ที่อยู่ที่ทำงาน (ประเทศ)',
          enum: ['thailand', 'england'],
        },
        address: {
          type: 'string',
          title: 'ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์',
        },
      },
    },
  },
  if: {
    properties: {
      cardIdAddr: {
        properties: {
          isAddrDif: {
            const: true,
          },
        },
      },
    },
  },
  then: {
    properties: {
      currentAddr: {
        type: 'object',
        title: 'ที่อยู่ที่สะดวกในการติดต่อ',
        required: [
          'houseNo',
          'building',
          'villageNo',
          'lane',
          'road',
          'address',
        ],
        properties: {
          currentCountry: {
            type: 'string',
            title: 'ประเทศที่อยู่อาศัย',
          },
          houseNo: {
            type: 'string',
            title: 'บ้านเลขที่',
          },
          building: {
            title: 'อาคาร',
            type: 'string',
          },
          villageNo: {
            title: 'หมู่ที่/ชื่อหมู่บ้าน',
            type: 'string',
          },
          lane: {
            title: 'ซอย',
            type: 'string',
          },
          road: {
            title: 'ถนน',
            type: 'string',
          },
          address: {
            title: 'ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์',
            type: 'string',
          },
        },
      },
    },
  },
}

const uiSchema: any = {
  'ui:order': ['cardIdAddr', 'currentAddr', 'fund', 'workAddr'],
  cardIdAddr: {
    houseNo: {
      'ui:placeholder': 'บ้านเลขที่',
      'ui:options': {
        label: false,
      },
    },
    building: {
      'ui:placeholder': 'อาคาร',
      'ui:options': {
        label: false,
      },
    },
    villageNo: {
      'ui:placeholder': 'หมู่ที่/ชื่อหมู่บ้าน',
      'ui:options': {
        label: false,
      },
    },
    lane: {
      'ui:placeholder': 'ซอย',
      'ui:options': {
        label: false,
      },
    },
    road: {
      'ui:placeholder': 'ถนน',
      'ui:options': {
        label: false,
      },
    },
    address: {
      'ui:placeholder': 'ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์',
      'ui:options': {
        label: false,
      },
    },
  },
  currentAddr: {
    currentCountry: {
      'ui:autocomplete': 'true',
    },
    houseNo: {
      'ui:placeholder': 'บ้านเลขที่',
      'ui:options': {
        label: false,
      },
    },
    building: {
      'ui:placeholder': 'อาคาร',
      'ui:options': {
        label: false,
      },
    },
    villageNo: {
      'ui:placeholder': 'หมู่ที่/ชื่อหมู่บ้าน',
      'ui:options': {
        label: false,
      },
    },
    lane: {
      'ui:placeholder': 'ซอย',
      'ui:options': {
        label: false,
      },
    },
    road: {
      'ui:placeholder': 'ถนน',
      'ui:options': {
        label: false,
      },
    },
    address: {
      'ui:placeholder': 'ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์',
      'ui:options': {
        label: false,
      },
    },
  },
  fund: {
    'ui:options': {
      label: false,
    },
    source: {
      'ui:widget': 'radio',
      'ui:title': 'โปรดเลือกแหล่งที่มาของเงินทุนของคุณ',
    },
    career: {
      'ui:placeholder': 'อาชีพ',
      'ui:options': {
        label: false,
      },
    },
    salary: {
      'ui:placeholder': 'ช่วงของรายได้ (รายเดือน)',
      'ui:options': {
        label: false,
      },
    },
  },
  workAddr: {
    'ui:description':
      '*หากที่อยู่ที่ทำงานเป็นที่อยู่เดียวกันกับที่อยู่ที่สะดวกในการติดต่อ โปรดระบุให้เหมือนกัน',
    Name: {
      'ui:placeholder': 'ชื่อสถานที่ทำงาน',
      'ui:options': {
        label: false,
      },
    },
    Location: {
      'ui:placeholder': 'ที่อยู่ที่ทำงาน (ประเทศ)',
      'ui:options': {
        label: false,
      },
    },
    address: {
      'ui:placeholder': 'ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์',
      'ui:options': {
        label: false,
      },
    },
  },
}

export default function ProfileRegisterJson() {
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleSubmit = (e: any) => {
    setFormData(e.formData)
  }
  return (
    <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        showErrorList={false}
        onSubmit={(e: any) => handleSubmit(e)}
      />
    </div>
  )
}
