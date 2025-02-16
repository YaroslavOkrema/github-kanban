import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchIssues } from '../../thunks/fetchIssuesThunk'
import { initialState } from './constants'
import { Issue } from './types'

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setRepoUrl(state, action: PayloadAction<string>) {
      state.repoUrl = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchIssues.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchIssues.fulfilled,
        (state, action: PayloadAction<Issue[]>) => {
          state.loading = false
          state.issues = action.payload
        },
      )
      .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setRepoUrl } = issuesSlice.actions
export default issuesSlice.reducer
