export type UserModel = {
  id: string
  email: string
  users: UserItem[]
}

export type UserItem = {
  id: string
  username: string
  avatarUrl: string
  address: string
  electricityAccount: string
  gasAccount: string
  electricityHistory: HistoryItem[]
  waterHistory: HistoryItem[]
  gasHistory: HistoryItem[]
}

export interface HistoryItem {
  record: Record
  date: Date
}

export interface Record {
  day: string
  night: string
}

export type RecordHistoryType = 'electricityHistory' | 'waterHistory' | 'gasHistory'

export type AccountType = 'electricityAccount' | 'gasAccount'
