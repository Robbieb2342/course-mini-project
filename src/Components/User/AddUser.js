import { useState } from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (e) => {
        e.preventDefault()

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if(+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }


    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' onChange={usernameChangeHandler} value={enteredUsername} type='text' />
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' onChange={ageChangeHandler} value={enteredAge} type='number' />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser