import React from 'react'
import { Link } from 'react-router-dom'
function UserList({data,handleDelete,accessToken}) {

  return (
    <>{
        data?.map((item)=>(
            <tr key={item.id}>
            <th scope="row">1</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            {
                accessToken?(
                    <>
                    <td><Link to={`/editItem/${item.id}`}><button className='btn btn-primary'>Edit</button></Link></td>
                    <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button></td>
                    </>
                ):(
                    <>
                    <td><button className='btn btn-primary' onClick={()=>alert('You have to log in to use this')}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={()=>alert('You have to log in to use this')}>Delete</button></td>
                    </>
                )
            }
           </tr>
        ))
    }</>
  )
}

export default UserList