export interface Issue {
  id: number
  title: string
  state: 'open' | 'closed'
  assignee: { login: string } | null
}

export interface IssuesState {
  repoUrl: string
  issues: Issue[]
  loading: boolean
  error: string | null
}
