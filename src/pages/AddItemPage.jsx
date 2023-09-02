import {useEffect, useState} from 'react'
import InputForm from '../components/InputForm'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import {addUser, deleteUser} from '../redux/allAction'
import { useNavigate } from 'react-router-dom';


function AddItemPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const [inputField,setInputField] = useState({
        name:'',
        email:'',
        phone:''
    })
    useEffect(()=>{
        console.log('callback changes',inputField)
    },[inputField])
    const inputHandler = (e)=>{
        setInputField({...inputField,[e.target.name]:e.target.value})
    }
    const submitButton = async (e)=>{
        e.preventDefault();
        Object.assign(inputField,{id:shortid.generate()})
        dispatch(addUser(inputField)) 
        navigate('/')
    }
  return (
    <InputForm inputHandler={inputHandler} submitButton={submitButton} />
  )
}

export default AddItemPage