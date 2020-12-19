import React from 'react'
import {PasswordForgetForm} from './Auth/Passwordforget'
import PasswordChangeForm from './../components/PasswordForget'

export default function Accountpage() {
    return (
        <div>
            account page
            <PasswordForgetForm/>
            <PasswordChangeForm/>
        </div>
    )
}
