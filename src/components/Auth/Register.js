import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {FirebaseContext} from '../Firebase';
const SignUpPage = () => (
    <div>
        <h1>Signup</h1>
        <SignUpForm/>
    </div>
);

const INITIAL_STATE ={
    username : '',
    email: '',
    passwordone: '',
    passwordtwo: '',
    error:null,
}
class SignUpForm extends Component{
    constructor(props)
    {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {username,email,passwordone} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email,passwordone)
            .then(authUser => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({error});
            });

            event.preventDefault();
    };

    onChange = event => {
            this.setState({[event.target.name]: event.target.value});
    }

    render(){
        const {
            username,
            email,
            passwordone,
            passwordtwo,
            error,
        } = this.state;

        const isInvalid = passwordone !== passwordtwo ||
                          passwordone === '' ||
                          email === '' ||
                          username === '';
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    name='username'
                    value={username}
                    onChange = {this.onChange}
                    type='text'
                    placeholder='FULL NAME'
                    />
                <input
                    name='email'
                    value={email}
                    onChange = {this.onChange}
                    type='text'
                    placeholder='email address'
                    />
                <input
                    name='passwordone'
                    value={passwordone}
                    onChange = {this.onChange}
                    type='password'
                    placeholder='password'
                    />    
                <input
                    name='passwordtwo'
                    value={passwordtwo}
                    onChange = {this.onChange}
                    type='password'
                    placeholder='CONFIRM PASSWORD'
                    />
                    <button disabled={isInvalid} type='submit'>sign up</button>
                    {error && <p>>{error.message}</p>}
            </form>
        )
    }
}

const SignUpLink = () => (
    <p>
        Dont have an account? <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
    </p>
);

export default SignUpPage;
export {SignUpForm,SignUpLink};