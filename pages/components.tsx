type TextInputProps = {
        onChangeFunc: (arg0: string) => void;
        inputValue: string;
        placeholder: string;
    }

export const PrimaryButton = ({onClick, children}) => {
    return (
    <button
        onClick={onClick}
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button">
        {children}
    </button>
    )
}

export const TextInput: React.FC<TextInputProps> = ({ onChangeFunc, inputValue, ...rest}) => {
    const inputClassText = "bg-gray-200 appearance-none border-2 border-gray-200 " +
        "rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none " +
        "focus:bg-white focus:border-purple-500"

    return (
        <input onChange={(e) => onChangeFunc(e.target.value)}
                {...rest}
               className={inputClassText}
               id="inline-full-name"
               type="text"
               value={inputValue}/>
    )
}
