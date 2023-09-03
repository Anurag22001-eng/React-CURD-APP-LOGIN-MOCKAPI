import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo, updateUser } from '../redux/allAction';
import InputForm from '../components/InputForm';

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
  
    const userInfoData = useSelector((state) => state.user.item);
  
    useEffect(() => {
        if (userInfoData) {
          setInputField({
            name: userInfoData[0].name || '',    
            email: userInfoData[0].email || '',  
            phone: userInfoData[0].phone || '',  
          });
        }
      }, [userInfoData]);
      
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newData = {
        id:id,
        ...inputField
      }
      dispatch(updateUser(
        newData
      ))
      navigate('/')
    };
    const inputHandler = (e)=>{
        setInputField({...inputField,[e.target.name]:e.target.value})
    }
    return (
      <div>
        <h2>Edit User</h2>
        <InputForm inputHandler={inputHandler} submitButton={handleSubmit} inputField={inputField}/>
      </div>
    );
  }
  
  export default EditItemPage;
  