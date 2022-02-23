import type {NextPage} from 'next'
import create from "zustand";
import React from "react";
import {PrimaryButton, TextInput} from "./components"

type User = {
    firstName: string;
    lastName: string;
    email: string;
}


type InitialState = {
    username: string;
    email: string;
    changeUsername: (text: string) => void;
    changeEmail: (text: string) => void;
    users: User[];
    addUser: (user: User) => void;
}

const useStore = create<InitialState>(set => ({
    username: "",
    changeUsername: (text: string) => set(() => ({username: text})),
    email: "",
    changeEmail: (text: string) => set(() => ({email: text})),
    users: [],
    addUser: (user: User) => set((state) => ({users: [...state.users, user]}))
}))

const Home: NextPage = () => {
    console.log(useStore());
    const { changeUsername, username, email, changeEmail, addUser } = useStore();

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
                        <TextInput placeholder="username" onChangeFunc={changeUsername} inputValue={username}/>
                        <p>U {username}</p>
                        <TextInput placeholder="email" onChangeFunc={changeEmail} inputValue={email}/>
                        <p>E {email}</p>
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
                        <PrimaryButton onClick={() => addUser({firstName: username, lastName: "Jorgensen", email: email})}>
                            Add user
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home
