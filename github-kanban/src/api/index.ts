import axios from 'axios'
import { GIT_HUB_URL, GITHUB_API_URL } from '../constants'

export const fetchIssuesFromRepo = async (repoUrl: string) => {
  try {
    const urlParts = repoUrl.replace(GIT_HUB_URL, '').split('/')
    const [owner, repo] = urlParts

    const response = await axios.get(
      `${GITHUB_API_URL}${owner}/${repo}/issues`,
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to load issues')
    }
    throw new Error('Unexpected error occurred')
  }
}
