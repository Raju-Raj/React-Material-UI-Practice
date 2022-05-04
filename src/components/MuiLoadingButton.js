import React from 'react'
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Save } from '@mui/icons-material'

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>

      <LoadingButton variant='outlined'>
          Submit
      </LoadingButton>
      <LoadingButton loading variant='outlined'>
          Submit
      </LoadingButton>

      <LoadingButton variant='outlined' loadingIndicator='Loading...'>
          FetchData
      </LoadingButton>
      <LoadingButton loading variant='outlined' loadingIndicator='Loading...'>
          FetchData
      </LoadingButton>

      <LoadingButton variant='outlined' loadingPosition='start' startIcon={<Save/>}>
          Save
      </LoadingButton>
      <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<Save/>}>
          Save
      </LoadingButton>

    </Stack>
  )
}

export default MuiLoadingButton
