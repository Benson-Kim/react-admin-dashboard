import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom";
import { useState } from 'react';
import './users.css'
import { userRows } from '../../user-data'

export default function Users() {

  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    {
      field: "id", headerName: "ID", width: 60
    },
    {
      field: "user", headerName: "User", width: 200, renderCell: (params) => {
        return (
          <div className="user">
            <img src={params.row.avatar} alt="" className="userimg" />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: "email", headerName: "Email", width: 200
    },
    {
      field: "status", headerName: "Status", width: 100
    },
    {
      field: "transaction", headerName: "Transaction Volume", width: 200
    },
    {
      field: "action", headerName: "Action", width: 180, renderCell: (params) => {
        return (
          <>
            <Link to ={"user/"+params.row.id}>
            <button className="edit-user">
              Edit
              </button>
            </Link>
            <button className="del-user" onClick={()=>handleDelete(params.row.id)}>
              Delete
            </button>
          </>
        )
      }
    },
  ];

  return (
    <div className='home'>

      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
     
    </div>
  )
}
