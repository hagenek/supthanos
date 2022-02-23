import type {NextPage} from 'next'
import React, {useReducer} from "react";
import {TextInput, PrimaryButton} from "./components"
import {type} from "os";

type User = {
    firstName: string;
    lastName: string;
}

interface initialState {
    counter: number;
    users: User[];
    username: string;
    email: string;
}

const ReducerExample: NextPage = () => {

    const initialState = {
        counter: 0,
        users: [],
        username: "",
        email: ""
    };

    function reducer(state, action) {
        let newState;
        switch (action.type) {
            case 'increase':
                newState = {counter: state.counter + 1};
                break;
            case 'decrease':
                newState = {counter: state.counter - 1};
                break;
            case 'addUser':
                newState = {...state, users: state.users.push(action.payload)}
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
        console.log("New state is:", state)
        return newState;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (text: string, typeOfAction: string) => {
        dispatch({
            type: typeOfAction,
            payload: text
        })
    }

    const dummyAddUserAction = {
        type: 'addUser',
        payload: {
            firstName: "Georg",
            lastName: "Ekeberg",
            email: "dontspammepls@gmail.com"
        }
    }

    const action = {
        type: 'increase'
    };


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
                        <TextInput onChangeFunc={(text) => handleInputChange(text, "updateUsername")}
                                   inputValue={state.username}/>
                    </div>
                    <div className="md:w-2/3">
                        <TextInput onChangeFunc={(text) => handleInputChange(text, "updateEmail")}
                                   inputValue={state.username}/>
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
                        <PrimaryButton onClick={() => dispatch(dummyAddUserAction)}>
                            Add todo
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReducerExample
