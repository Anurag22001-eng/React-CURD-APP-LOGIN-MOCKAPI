import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo, updateUser } from '../redux/allAction';

function EditItemPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
  
    const [inputField, setInputField] = useState({
      name: '',
      email: '',
      phone: '',
    });
    useEffect(() => {
      dispatch(userInfo(id));
    }, []);
  
    // Get the user information from the Redux store
    const userInfoData = useSelector((state) => state.user.item);
  
    // Set the initial form values with user data
    useEffect(() => {
        console.log(userInfoData)
        if (userInfoData) {
          setInputField({
            name: userInfoData[0].name || '',     // Provide a default value if 'name' is undefined
            email: userInfoData[0].email || '',   // Provide a default value if 'email' is undefined
            phone: userInfoData[0].phone || '',   // Provide a default value if 'phone' is undefined
          });
        }
      }, [userInfoData]);
      
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newData = {
        id:id,
        ...inputField
      }
      console.log(newData)
      dispatch(updateUser(
        newData
      ))
      navigate('/')
    };
  
    return (
      <div>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputField.name}
              onChange={(e) => setInputField({ ...inputField, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputField.email}
              onChange={(e) => setInputField({ ...inputField, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={inputField.phone}
              onChange={(e) => setInputField({ ...inputField, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default EditItemPage;
  