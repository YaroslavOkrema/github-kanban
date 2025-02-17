import { Droppable } from 'react-beautiful-dnd'
import IssueCard from '../IssueCard'
import { ColumnProps } from './types'
import { FC, JSX } from 'react'
import './column.css'

export const Column: FC<ColumnProps> = ({
  title,
  columnId,
  issues,
}): JSX.Element => {
  return (
    <div className="kanban-column">
      <h3>{title}</h3>
      <Droppable droppableId={columnId}>
        {provided => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="list-unstyled"
          >
            {issues.map((issue, index) => (
              <IssueCard key={issue.id} issue={issue} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  )
}

export default Column
