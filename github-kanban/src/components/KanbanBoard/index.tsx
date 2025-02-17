import { Row, Col } from 'react-bootstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import { useKanbanBoard } from './useKanbanBoard'
import Column from '../Columns'
import { KanbanBoardProps } from './types'
import { IssueState } from '../../types/enums'
import { FC, JSX } from 'react'

export const KanbanBoard: FC<KanbanBoardProps> = ({ issues }): JSX.Element => {
  const { columns, handleDragEnd } = useKanbanBoard(issues)

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Row className="kanban-columns">
        {Object.entries(columns).map(([columnId, issues]) => (
          <Col key={columnId} md={4}>
            <Column
              title={
                columnId === IssueState.TODO
                  ? 'To Do'
                  : columnId === IssueState.IN_PROGRESS
                    ? 'In Progress'
                    : 'Done'
              }
              columnId={columnId}
              issues={issues}
            />
          </Col>
        ))}
      </Row>
    </DragDropContext>
  )
}

export default KanbanBoard
