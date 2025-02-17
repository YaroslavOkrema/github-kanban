import axios from 'axios'

export const fetchIssuesFromRepo = async (repoUrl: string) => {
  try {
    const urlParts = repoUrl.replace('https://github.com/', '').split('/')
    const [owner, repo] = urlParts

    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to load issues')
    }
    throw new Error('Unexpected error occurred')
  }
}
