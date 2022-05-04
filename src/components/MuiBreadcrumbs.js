import React from 'react'
import { Box,Breadcrumbs,Link,Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs 
        aria-label='breadcrumb' 
        separator={<NavigateNextIcon size='small'/>}
        maxItems={2}
        itemsAfterCollapse={1}
        itemsBeforeCollapse={2}
        >
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
