import type {NextPage} from 'next'
import React, {useReducer} from "react";
import {TextInput, PrimaryButton} from "./components"

type User = {
    firstName: string;
    lastName: string;
    email: string;
}

interface ReducerExampleState {
    counter: number;
    users: any[];
    username: string;
    email: string;
}

const ReducerExample: NextPage = () => {

    const initialState: ReducerExampleState = {
        counter: 0,
        users: [{firstName: "Kalle", lastName: "Kanin"}],
        username: "",
        email: ""
    }

    type Action =
        | { type: 'increase' }
        | { type: 'decrease' }
        | { type: 'addUser', payload: User }
        | { type: 'updateUsername', payload: string }
        | { type: 'updateEmail', payload: string }

    function reducer(state: ReducerExampleState, action: Action): ReducerExampleState {
        console.log(state)
        let newState = state;
        switch (action.type) {
            case 'increase':
                newState = {...state, counter: state.counter + 1};
                break;
            case 'decrease':
                newState = {...state, counter: state.counter - 1};
                break;
            case 'addUser':
                newState = {...state, users: [...state.users, action.payload]}
                break;
            case 'updateUsername':
                newState = {...state, username: action.payload};
                break;
            case 'updateEmail':
                newState = {...state, email: action.payload};
                break;
            default:
                console.log("Something went wrong", action, state)
                break;
        }
        return newState;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (text: string, typeOfAction: any) => {
        dispatch({
            type: typeOfAction,
            payload: text
        })
    }

    const dummyAddUserAction = (firstName: string, lastName: string) => {
        return {
            type: 'addUser',
            payload: {
                firstName,
                lastName,
                email: "dontspammepls@gmail.com"
            }
        }
    }

    return (
        <div className="container mx-auto mt-4">
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               form="inline-full-name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <TextInput placeholder="username" onChangeFunc={(text) => handleInputChange(text, "updateUsername")}
                                   inputValue={state.username}/>
                        <p>Username: {state.username}</p>
                    </div>
                    <div className="md:w-2/3">
                        <TextInput placeholder="email" onChangeFunc={(text) => handleInputChange(text, "updateEmail")}
                                   inputValue={state.email}/>
                        <p>Email: {state.email}</p>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox"/>
                        <span className="text-sm">
              Important?
            </span>
                    </label>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <div>COUNT: {state.counter}</div>
                        <PrimaryButton onClick={() => dispatch(dummyAddUserAction(state.username, state.email))}>
                            Add user
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReducerExample
