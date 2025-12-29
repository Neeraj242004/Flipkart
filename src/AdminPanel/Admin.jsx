import React, { useContext, useEffect } from 'react'
import { DataProvider } from '../Store/MyStore'

const Admin = () => {
  const {
    getAllUsers,
    state: { userList },
    deleteUsers,
    handleShow,
    dispatch,
    getSingleUsers
  } = useContext(DataProvider)

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleDelete = (id) => deleteUsers(id)

  const handleEdit = (id) => {
    dispatch({ type: "formCheck", payload: "Edit" })
    dispatch({ type: "changeId", payload: id })
    getSingleUsers(id)
    handleShow()
  }

  const handleRead = (id) => {
    dispatch({ type: "formCheck", payload: "Read" })
    dispatch({ type: "changeId", payload: id })
    getSingleUsers(id)
    handleShow()
  }

  return (
    <div className="container-fluid mt-3">
      <div className="table-responsive">

        <table className="table table-sm table-striped table-bordered text-center align-middle">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Age</th>
              <th className="d-none d-md-table-cell">Email</th>
              <th>Photo</th>
              <th className="d-none d-md-table-cell">Address</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {userList.map((elm, ind) => {
              const { name, Age, Address, image, email, id } = elm

              return (
                <tr key={id}>
                  <td>{ind + 1}</td>
                  <td>{name}</td>
                  <td>{Age}</td>
                  <td className="d-none d-md-table-cell text-break">
                    {email}
                  </td>
                  <td>
                    <img
                      src={image}
                      alt=""
                      className="img-fluid rounded"
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                  </td>

                  <td className="d-none d-md-table-cell text-break">
                    {Address}
                  </td>

                  <td>
                    <div className="d-flex flex-wrap gap-1 justify-content-center">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleEdit(id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleRead(id)}
                      >
                        Read
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Admin
