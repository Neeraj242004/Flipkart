import axios from 'axios'
import React, { createContext, useReducer } from 'react'
export const DataProvider = createContext()
const MyStore = ({children}) => {
    let initialState ={
        productlist:[],
        userList:[],
        show:false,
        getId:"",
        user:{
            id:"",
            name:"",
            Age:"",
            email:"",
            image:"",
            Address:"",
        },
        checkForm:"Add"
    };

    const reducerFun =(state,action) =>{
        let updateState = state
        if(action.type =="products"){
            updateState = {...state,productlist:action.payload};
        }else  if(action.type =="allUser"){
            updateState = {...state,userList:action.payload};
        }else  if(action.type =="changeShowF"){
            updateState = {...state,show:action.payload};
        }else  if(action.type =="changeShowT"){
            updateState = {...state,show:action.payload};
        }else  if(action.type =="userForm"){
            updateState = {...state,user:action.payload};
        }else  if(action.type =="formCheck"){
            updateState = {...state, checkForm:action.payload};
        }else  if(action.type =="getSingleUser"){
            updateState = {...state, user:action.payload};
        }else  if(action.type =="formclear"){
            updateState = {...state, user:action.payload};
        }else  if(action.type =="changeId"){
            updateState = {...state, getId:action.payload};
        }
        return updateState
    };

    const [state,dispatch] = useReducer(reducerFun,initialState)

      const handleClose = () => dispatch({type:"changeShowF",payload:false});
      const handleShow = () => dispatch({type:"changeShowT",payload:true});

    const getProducts = async()=>{
    let res = await  axios.get("https://fakestoreapi.com/products");
    dispatch({type:"products",payload:res.data});
    }

    const getAllUsers = async()=>{
      let users = await axios ("https://690af3a01a446bb9cc248e24.mockapi.io/Flipkart/users");
      dispatch({type:"allUser",payload:users.data})
    }

    const addUser = async(user)=>{
        await axios.post(
        "https://690af3a01a446bb9cc248e24.mockapi.io/Flipkart/users",user
        );
        getAllUsers();
        
    };

     const deleteUsers = async(id)=>{
        await axios.delete(
        `https://690af3a01a446bb9cc248e24.mockapi.io/Flipkart/users/${id}`);
         getAllUsers()
       
    };
    
     const getSingleUsers = async(id)=>{
        let singleUser = await axios.get(
        `https://690af3a01a446bb9cc248e24.mockapi.io/Flipkart/users/${id}`);
         dispatch({type:"getSingleUser",payload:singleUser.data})
       
    };

     const editusers = async(id,user)=>{
         await axios.put(
        `https://690af3a01a446bb9cc248e24.mockapi.io/Flipkart/users/${id}`,user
    )
        getAllUsers();
       
    };
  return (
    <DataProvider value={{getProducts,state,dispatch,getAllUsers,handleClose,handleShow,editusers,addUser,deleteUsers,getSingleUsers}}>
        {children}
    </DataProvider>
  )
}

export default MyStore