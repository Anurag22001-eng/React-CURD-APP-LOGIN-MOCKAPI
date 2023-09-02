import React from 'react'
import { Link } from 'react-router-dom'
function UserList({data,handleDelete}) {
    console.log(data)
  return (
    <>{
        data?.map((item)=>(
            <tr key={item.id}>
            <th scope="row">1</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td><Link to={`/editItem/${item.id}`}><button className='btn btn-primary'>Edit</button></Link></td>
            <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button></td>
            </tr>
        ))
    }</>
  )
}

export default UserList