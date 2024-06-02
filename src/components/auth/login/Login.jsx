import Input from "../../ui/input/Input";
import logo from '../../../assets/img/ALogo.jpg';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../../../slice/auth";
import AuthService from "../../../service/auth";
import ValidationError from "../../validation-error/Validation-error";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth)
  const navigate = useNavigate()
   const loginHandler = async (e) =>{
    e.preventDefault()
    dispatch(signUserStart())
    const user = {email,password}
    try{
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')
    }catch(error){
      dispatch(signUserFailure(error.response.data.errors))
    }
   }
  return (
    <div className="text-center mt-5">
    <main className="form-signin w-25 m-auto">
    <form>
       <img className="mb-2 m-auto" src={logo} alt="" width="150" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>
        <ValidationError/>
         <Input label={'Email adress'} state={email} setState={setEmail}/>
         <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>
        <button className="btn btn-primary w-100 py-2 mt-2" type="submit" disabled={isLoading} onClick={loginHandler}>
          {isLoading ? 'Loading..' : 'Login'}
        </button>
    </form>
    </main>
</div>
  )
}

export default Login