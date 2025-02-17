import { GIT_HUB_URL } from '../../constants'

export function useRepoLinks(repoUrl: string) {
  const urlParts = repoUrl.replace(GIT_HUB_URL, '').split('/')
  const [owner, repo] = urlParts

  return {
    owner,
    repo,
  }
}
