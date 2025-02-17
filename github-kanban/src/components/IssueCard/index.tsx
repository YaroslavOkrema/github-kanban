import { Draggable } from 'react-beautiful-dnd'
import { IssueCardProps } from './types'
import { FC, JSX } from 'react'

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
          {issue.title}
        </li>
      )}
    </Draggable>
  )
}

export default IssueCard
