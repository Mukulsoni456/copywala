import React from 'react'

export default function Loginv1() {
  return (
    <div>
                        <form className='login_form'>
                    <p> Name: <input type="text" id="userName" name="userName"></input></p>
                    <p> Password: <input type="password" id="password" name="password"></input></p>
                    <button type='submit'> login</button>
                </form>
    </div>
  )
}
