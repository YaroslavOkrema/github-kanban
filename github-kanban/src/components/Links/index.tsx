import { FC, JSX } from 'react'
import { Button } from 'react-bootstrap'
import { RepoLinksProps } from './types'
import { GIT_HUB_URL } from '../../constants'
import { useRepoLinks } from './useRepoLinks'

const RepoLinks: FC<RepoLinksProps> = ({ repoUrl }): JSX.Element => {
  const {owner, repo} = useRepoLinks(repoUrl)

  return (
    <div className="mt-3">
      <Button variant="link" href={`${GIT_HUB_URL}${owner}`} target="_blank">
        Visit {owner}'s Profile
      </Button>
      <Button variant="link" href={`${GIT_HUB_URL}${owner}/${repo}`} target="_blank">
        Visit {repo} Repository
      </Button>
    </div>
  )
}

export default RepoLinks
