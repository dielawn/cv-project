import { capFirstLetter } from "../utils"

export const CreateForm = ({category, inputs, updateInfo }) => {
    return (
        <div>
            {inputs.map((input) => (
                <div key={input}>
                    <label htmlFor={`${input}Input`}>{capFirstLetter(input)}</label>
                    <input 
                        id={`${input}Input`} 
                        name={`${input}Input`} 
                        placeholder={capFirstLetter(input)} 
                        type="text" 
                        onChange={(e) => updateInfo(category, input, e.target.value)} />
                </div>
            ))}
        </div>
    )
}