import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeEmail } from '../redux/userSlice'

export const Email = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email)

    const handleChangue = (e) =>{
        dispatch(changeEmail(e.target.value))
    }

    return (
        <div>
            <input 
                type="email" 
                value={email} 
                placeholder='Email' 
                onChange={handleChangue} 
            />
        </div>
    )
}
