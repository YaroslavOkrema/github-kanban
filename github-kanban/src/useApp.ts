import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { setRepoUrl } from './store/reducers/issueReducer/issuesSlice'
import { fetchIssues } from './store/thunks/fetchIssuesThunk'

export function useApp() {
  const dispatch = useDispatch<AppDispatch>()
  const { issues, loading, error, repoUrl } = useSelector(
    (state: RootState) => state.issues,
  )

  const handleLoad = (repoUrl: string) => {
    if (!repoUrl.trim()) return
    dispatch(setRepoUrl(repoUrl))
    dispatch(fetchIssues(repoUrl))
  }

  return {
    issues,
    loading,
    error,
    repoUrl,
    handleLoad,
  }
}
