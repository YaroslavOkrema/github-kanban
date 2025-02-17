import { Draggable } from 'react-beautiful-dnd'
import { IssueCardProps } from './types'
import { FC, JSX } from 'react'
import { Card } from 'react-bootstrap'

export const IssueCard: FC<IssueCardProps> = ({
  issue,
  index,
}): JSX.Element => {
  return (
    <Draggable draggableId={String(issue.id)} index={index}>
      {provided => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="kanban-card mb-3"
        >
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>{issue.title}</Card.Title>
            </Card.Body>
          </Card>
        </li>
      )}
    </Draggable>
  )
}

export default IssueCard
