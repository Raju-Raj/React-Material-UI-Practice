import React from 'react'
import { Tooltip,IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

const MuiTooltip = () => {
  return (
    <div>
      <Tooltip title="Delete">
          <IconButton>
              <Delete/>
          </IconButton>
      </Tooltip>

      {/* 12 placement-options right top-right so on */}

      <Tooltip title="Delete" placement='right' arrow enterDelay={500} leaveDelay={300}>
          <IconButton>
              <Delete/>
          </IconButton>
      </Tooltip>
    </div>
  )
}

export default MuiTooltip
