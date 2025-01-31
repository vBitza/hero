import * as React from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

export default function HeroesTable() {
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [page, setPage] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const header = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'superPower',
      headerName: 'Superpower',
      flex: 1,
    },
    {
      field: 'humilityScore',
      headerName: 'Humility Score',
      flex: 1,
    },
  ]

  const loadData = async () => {
    setIsLoading(true);
    axios.get('http://localhost:2000/superheroes').then(({ data }) => {
      setRows(data);
      setIsLoading(false);
      setTotal(data.length)
    })
  }

  React.useEffect(async () => {
    await loadData();
  }, [rowsPerPage, page]);

  const handlePageChange = (data) => {
    setPage(data.page);
    setRowsPerPage(data.pageSize)
  }

  return (<div style={{
    height: '90vh', width: '100%',
  }}>
    <DataGrid
      rows={rows}
      columns={header}
      getRowId={(item) => item._id}
      // autoPageSize
      initialState={{
        pagination: {
          paginationModel: { page: page, pageSize: rowsPerPage },
        },
      }}
      pageSizeOptions={[25, 50, 100]}
      paginationMode={"client"}
      rowCount={total}
      onPaginationModelChange={(data) => handlePageChange(data)}
      checkboxSelection
      loading={isLoading}
    />
  </div>);
}
