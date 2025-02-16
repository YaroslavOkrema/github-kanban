import React, { useState } from 'react'
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setRepoUrl } from './store/reducers/issueReducer/issuesSlice'
import { AppDispatch, RootState } from './store/store'
import { fetchIssues } from './store/thunks/fetchIssuesThunk'
import { Issue } from './store/reducers/issueReducer/types'

const App: React.FC = () => {
  const [repoUrl, setRepoUrlInput] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const { issues, loading, error } = useSelector(
    (state: RootState) => state.issues,
  )

  const handleLoad = () => {
    if (!repoUrl.trim()) return
    dispatch(setRepoUrl(repoUrl))
    dispatch(fetchIssues(repoUrl))
  }

  return (
    <Container className="mt-4">
      <h2>GitHub Issues Kanban</h2>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Enter GitHub repo URL"
          value={repoUrl}
          onChange={e => setRepoUrlInput(e.target.value)}
        />
        <Button variant="primary" onClick={handleLoad} className="ms-2">
          Load
        </Button>
      </Form>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <ul>
        {issues.map((issue: Issue) => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul>
    </Container>
  )
}

export default App
