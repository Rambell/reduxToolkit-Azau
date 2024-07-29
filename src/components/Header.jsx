import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
    /* useSelector recibe el estado global y del estado
    solo se llama user (lo que se necesita) que se 
    trae desde userSlice (name: user)*/
    const user = useSelector ((state) => state.user) 

  return (
    <header>
        <h1>Redux toolkit ejemplo</h1>
        <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Username: {user.username}</li>
        </ul>
    </header>
  )
}
