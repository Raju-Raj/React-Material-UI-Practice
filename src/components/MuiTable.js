import React from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material'

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aria-label='simple-table' stickyHeader>
          <TableHead>
              <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell align='center'>Email</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {
                  tableData.map((row)=>(
                      <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.first_name}</TableCell>
                          <TableCell>{row.last_name}</TableCell>
                          <TableCell align='center'>{row.email}</TableCell>
                      </TableRow>
                  ))
              }
          </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTable

const tableData=[{
    "id": 1,
    "first_name": "Nerita",
    "last_name": "Erdes",
    "email": "nerdes0@ameblo.jp",
    "gender": "Female",
    "ip_address": "198.152.172.52"
  }, {
    "id": 2,
    "first_name": "Kassi",
    "last_name": "Cuerdale",
    "email": "kcuerdale1@com.com",
    "gender": "Female",
    "ip_address": "122.78.32.24"
  }, {
    "id": 3,
    "first_name": "Brit",
    "last_name": "Skudder",
    "email": "bskudder2@toplist.cz",
    "gender": "Female",
    "ip_address": "198.58.200.36"
  }, {
    "id": 4,
    "first_name": "Windham",
    "last_name": "Kernaghan",
    "email": "wkernaghan3@smugmug.com",
    "gender": "Male",
    "ip_address": "87.101.141.104"
  }, {
    "id": 5,
    "first_name": "Lay",
    "last_name": "Divisek",
    "email": "ldivisek4@noaa.gov",
    "gender": "Male",
    "ip_address": "255.81.14.53"
  }, {
    "id": 6,
    "first_name": "Salmon",
    "last_name": "Vannini",
    "email": "svannini5@chron.com",
    "gender": "Male",
    "ip_address": "20.184.21.61"
  }, {
    "id": 7,
    "first_name": "Donny",
    "last_name": "Myerscough",
    "email": "dmyerscough6@usda.gov",
    "gender": "Female",
    "ip_address": "218.23.101.173"
  }, {
    "id": 8,
    "first_name": "Melinde",
    "last_name": "Wattam",
    "email": "mwattam7@technorati.com",
    "gender": "Female",
    "ip_address": "129.13.0.167"
  }, {
    "id": 9,
    "first_name": "Ivonne",
    "last_name": "Blowers",
    "email": "iblowers8@yellowpages.com",
    "gender": "Female",
    "ip_address": "136.218.148.246"
  }, {
    "id": 10,
    "first_name": "Norah",
    "last_name": "Postgate",
    "email": "npostgate9@usgs.gov",
    "gender": "Female",
    "ip_address": "100.115.199.231"
  }]
