import { useState } from 'react'

export function useRepoForm() {
  const [repoUrl, setRepoUrl] = useState('')

  return {
    repoUrl,
    setRepoUrl,
  }
}
