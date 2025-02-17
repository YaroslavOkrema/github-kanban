import { FC, JSX } from 'react'
import { Form, Button } from 'react-bootstrap'
import { RepoFormProps } from './types'
import { useRepoForm } from './useRepoForm'

export const RepoForm: FC<RepoFormProps> = ({ onLoad }): JSX.Element => {
  const { repoUrl, setRepoUrl } = useRepoForm()

  return (
    <Form className="d-flex mb-3">
      <Form.Control
        type="text"
        placeholder="Enter GitHub repo URL"
        value={repoUrl}
        onChange={e => setRepoUrl(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={() => onLoad(repoUrl)}
        className="ms-2"
      >
        Load
      </Button>
    </Form>
  )
}

export default RepoForm
