import { ColumnState, IssueState } from '../../types/enums'

export const getColumnTitle = (columnId: string): string => {
  switch (columnId) {
    case IssueState.TODO:
      return ColumnState.TODO
    case IssueState.IN_PROGRESS:
      return ColumnState.IN_PROGRESS
    case IssueState.DONE:
      return ColumnState.DONE
    default:
      return 'Unknown'
  }
}