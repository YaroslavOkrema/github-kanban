import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchIssuesFromRepo } from '../../api'
import { Issue } from '../reducers/issueReducer/types'

export const fetchIssues = createAsyncThunk<
  Issue[],
  string,
  { rejectValue: string }
>('issues/fetchIssues', async (repoUrl: string, { rejectWithValue }) => {
  try {
    const issues = await fetchIssuesFromRepo(repoUrl)
    return issues
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})
