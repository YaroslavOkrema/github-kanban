import { IssuesState } from './types'

export const initialState: IssuesState = {
  repoUrl: '',
  issues: [],
  loading: false,
  error: null,
}
