import React from 'react'
import Button from '../button/Button'
import './Box.css'

export default function Box() {
    return (
        <>
        <h1 className='h1tag'>Buttons</h1>
        <div className='container'>
            <div className='box_container'>
                <Button  title={"Add User"} bgColor={' rgb(72, 149, 239)'}/>
                <Button  title={"Fetch User"} bgColor={'rgb(0, 75, 35)'}/>
                <Button  title={"Update User"} bgColor={' rgb(255, 190, 11)'}/>
                <Button  title={"Delete User"} bgColor={' rgb(208, 0, 0)'}/>
            </div>
            <div className='box_container'>
                <Button  title={"Login"} bgColor={' rgb(137, 194, 217)'}/>
                <Button  title={"Sign Up"} bgColor={'rgb(60, 9, 108)'}/>
                <Button  title={"Sign In"} bgColor={'rgb(173, 181, 189)'}/>
                <Button  title={"Sign Out"} bgColor={'rgb(0, 0, 0)'}/>
            </div>
        </div>
        </>
    )
}
