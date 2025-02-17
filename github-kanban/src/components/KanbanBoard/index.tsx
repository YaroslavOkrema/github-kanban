import { Col, Container, Row } from 'react-bootstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import { useKanbanBoard } from './useKanbanBoard'
import Column from '../Columns'
import { KanbanBoardProps } from './types'
import { FC, JSX } from 'react'
import { getColumnTitle } from './helpers'

export const KanbanBoard: FC<KanbanBoardProps> = ({ issues }): JSX.Element => {
  const { columns, handleDragEnd } = useKanbanBoard(issues)

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container>
        <Row className="kanban-columns">
          {Object.entries(columns).map(([columnId, issues]) => (
            <Col key={columnId} md={4} className="mb-4">
              <Column
                title={getColumnTitle(columnId)}
                columnId={columnId}
                issues={issues}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </DragDropContext>
  )
}

export default KanbanBoard
