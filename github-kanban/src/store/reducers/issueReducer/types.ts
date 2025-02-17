export type Issue = {
  id: number
  title: string
  state: 'open' | 'closed'
  assignee: { login: string } | null
}

export type IssuesState = {
  repoUrl: string
  issues: Issue[]
  loading: boolean
  error: string | null
}
