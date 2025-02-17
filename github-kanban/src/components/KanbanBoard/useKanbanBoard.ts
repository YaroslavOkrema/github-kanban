import { useState, useEffect } from 'react'
import { Columns, Issue } from '../../types/types'
import { DropResult } from 'react-beautiful-dnd'
import { IssueState } from '../../types/enums'

export const useKanbanBoard = (issues: Issue[]) => {
  const [columns, setColumns] = useState<Columns>(() => {
    const savedColumns = localStorage.getItem('columnsState')
    return savedColumns
      ? JSON.parse(savedColumns)
      : {
          [IssueState.TODO]: [],
          [IssueState.IN_PROGRESS]: [],
          [IssueState.DONE]: [],
        }
  })

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) return

    const sourceColumn = source.droppableId as IssueState
    const destinationColumn = destination.droppableId as IssueState

    const newColumns = { ...columns }
    const [movedIssue] = newColumns[sourceColumn].splice(source.index, 1)
    newColumns[destinationColumn].splice(destination.index, 0, movedIssue)

    setColumns(newColumns)
  }

  useEffect(() => {
    if (issues.length > 0) {
      setColumns({
        [IssueState.TODO]: issues.filter(
          issue => issue.state === 'open' && !issue.assignee,
        ),
        [IssueState.IN_PROGRESS]: issues.filter(
          issue => issue.state === 'open' && issue.assignee,
        ),
        [IssueState.DONE]: issues.filter(issue => issue.state === 'closed'),
      })
    }
  }, [issues])

  useEffect(() => {
    localStorage.setItem('columnsState', JSON.stringify(columns))
  }, [columns])

  return {
    columns,
    setColumns,
    handleDragEnd,
  }
}
