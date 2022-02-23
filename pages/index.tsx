import type {NextPage} from 'next'
import {useStore} from "./useStore";
import create from "zustand";
import React from "react";
import { TextInput, PrimaryButton } from "./components"

const useStore = create(set => ({
    username: "",
    changeUsername: (text: string) => set(state => ({username: text})),
}))

const Home: NextPage = () => {
    const { changeUsername, username } = useStore();

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
                        <TextInput onChangeFunc={changeUsername} inputValue={username}/>
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
                        <PrimaryButton onClick={() => console.log(username)}>
                            Add todo
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home
