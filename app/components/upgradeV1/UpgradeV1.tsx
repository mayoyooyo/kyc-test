//@ts-ignore
import Form from '@rjsf/antd'
import type { JSONSchema7 } from 'json-schema'

const Schema: JSONSchema7 = {
  type: 'object',
  required: ['firstName', 'lastName', 'birthday', 'cardId', 'laserCardId'],
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    birthday: {
      type: 'string',
      format: 'date',
    },
    cardId: {
      type: 'string',
    },
    laserCardId: {
      type: 'string',
    },
  },
}

const uiSchema: any = {
  firstName: {
    'ui:title': 'ชื่อ',
    'ui:placeholder': 'ภาษาไทยไม่ต้องมีคำนำหน้า',
  },
  lastName: {
    'ui:title': 'นามสกุล',
    'ui:placeholder': 'ภาษาไทย',
  },
  birthday: {
    'ui:title': 'วันเกิด',
  },
  cardId: {
    'ui:title': 'เลขบัตรประชาชน',
  },
  laserCardId: {
    'ui:title': 'เลข laser หลังบัตรประชาชน',
  },
}

export default function UpgradeV1() {
  return (
    <div>
      <div>Upgrade Fan wallet - to LV1</div>
      <div>ข้อมูลบัตรประชาชน</div>
      <Form schema={Schema} uiSchema={uiSchema} showErrorList={false} />
    </div>
  )
}
