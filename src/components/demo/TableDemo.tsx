import { Box, Table } from '@veracity/vui'

const columns = [
  {
    field: 'name',
    isSortable: true,
    title: 'Name'
  },
  {
    field: 'age',
    isSortable: true,
    title: 'Age'
  },
  {
    field: 'country',
    isSortable: true,
    title: 'Country'
  }
]

const rows = [
  {
    age: 52,
    country: 'United States of America',
    id: 'aa006a28-6301-442d-8f9e-4016b9672e32',
    name: 'Betsy Elis'
  },
  {
    age: 41,
    country: 'Portugal',
    id: '5c407452-9fdc-4399-a2cd-2f5c4bcfd462',
    name: 'Spense Beedle'
  },
  {
    age: 37,
    country: 'Norway',
    id: '8b3c9793-e780-4c9d-a224-143a30dacabe',
    name: 'Danny Evison'
  },
  {
    age: 18,
    country: 'Poland',
    id: 'f30efa39-3e3e-48cf-a836-0bfa99f4a95f',
    name: 'Estrella Heber'
  },
  {
    age: 29,
    country: 'Norway',
    id: '76faf4f3-15a4-40b0-a3b0-0b1820ea0fab',
    name: 'Celka Southcoat'
  },
  {
    age: 43,
    country: 'South Korea',
    id: 'e8f39e78-a588-475a-89ba-2d8a9418374f',
    name: 'Kalli Heyburn'
  }
]

export const TableDemo = () => (
  <Box my={3}>
    <Table columns={columns} rows={rows} size="sm" variant="striped" />
  </Box>
)
