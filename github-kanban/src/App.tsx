import { Container, Spinner, Alert } from 'react-bootstrap'
import KanbanBoard from './components/KanbanBoard'
import RepoForm from './components/RepoForm'
import { JSX } from 'react'
import { useApp } from './useApp'

const App = (): JSX.Element => {
  const { handleLoad, loading, error, issues } = useApp()

  return (
    <Container className="mt-4">
      <h2>GitHub Issues Kanban</h2>
      <RepoForm onLoad={handleLoad} />
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <KanbanBoard issues={issues} />
    </Container>
  )
}

export default App
