import { IssueState } from './enums'

export interface Issue {
  id: number
  title: string
  state: 'open' | 'closed'
  assignee: { login: string } | null
}

export interface Columns {
  [IssueState.TODO]: Issue[]
  [IssueState.IN_PROGRESS]: Issue[]
  [IssueState.DONE]: Issue[]
}
