import { callHmiBackend } from './core'

export interface SaveMembershipInfoParams {
  OperationType: 'INSERT' | 'UPDATE'
}

export type YesNo = 'YES' | 'NO'
export type PaymentMode = 'ONLINE' | 'CASH' | 'COMPLIMENTARY' | 'BULK'
export type PaymentStatus = 'PAID' | 'PENDING' | 'FAILED'

/** This operation can be insert, or an update, in which
 * case you must provide the row key provided when you performed the insert
 */
export type SaveMemberShipParams = (
  | {
    OperationType: 'INSERT'
  }
  | {
    OperationType: 'UPDATE'
    RowKey: string
  }
) &
  Partial<SaveMembershipInfoData>

export interface SaveMembershipInfoData {
  BillID: string,
  DOB: string,
  ApprovalDate: string
  ProductType: string
  ExpiryDate: string
  RedemptionDate: string
  ContactEmail: string
  ContactID: string
  ContactName: string
  ContactOwner: string
  ContactPhoneNumber: string
  ContactType: string
  EmailSent: YesNo
  PDPACheck: YesNo
  MarketingConsentCheck: YesNo
  HospitalEntity: string
  PatientNRIC: string
  PatientName: string
  PaymentMode: PaymentMode
  PaymentCode: string
  PaymentStatus: PaymentStatus
  ProductCode: string
  PaymentAmount: string
  Source: string,
  systemid: string,
}

export interface SaveMembershipInfoResponse {
  RowKey: string
}

export function saveMembershipInfo(
  params: SaveMemberShipParams,
): Promise<SaveMembershipInfoResponse> {
  return callHmiBackend('saveMembershipInfo', 'post', params)
}
