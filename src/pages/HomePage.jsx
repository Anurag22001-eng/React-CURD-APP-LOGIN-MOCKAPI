import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserList from '../components/UserList'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/allAction'

function HomePage({accessToken}) {
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.user.items
    })
    const handleDelete = (id)=>{
        dispatch(deleteUser(id))
    }
  return (
    <>
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">HandleEdit</th>
      <th scope="col">HandleDelete</th>
    </tr>
  </thead>
  <tbody>
        <UserList accessToken={accessToken} data={data} handleDelete={handleDelete}/>       
    
  </tbody>
</table>
    </>
  )
}

export default HomePage