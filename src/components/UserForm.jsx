import { useState } from "react"
import { useNavigate } from "react-router-dom";


const UserForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const handleFormData = (e) => {
        e.preventDefault();
        navigate("/user-form/acknowledgment");

        const stringifyFormData = JSON.stringify({ name, email, phoneNumber });
        localStorage.setItem("FormData", stringifyFormData);
    }
    const handleInvalid = (e) => {
        const inputElement = e.target;
        inputElement.setCustomValidity(`Invalid! ${e.target.name}, Please enter a valid ${e.target.name}`)
    }

    const handlePhoneNumber = (e) => {
        const inputValue = e.target.value
        if (/^\d*$/.test(inputValue)) {
            setPhoneNumber(inputValue);
        }
    }
    const handleInput = (e)=> {
        const inputElement = e.target;
        inputElement.setCustomValidity("")
    }

    return (
        <div className=''>
            <form onSubmit={handleFormData}>
                <div className=''>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' name="name" required onChange={(e) => setName(e.target.value)} onInvalid={handleInvalid} value={name} onInput={handleInput}/>
                </div>
                <div className=''>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' name="email" required onChange={(e) => setEmail(e.target.value)} onInvalid={handleInvalid} value={email} onInput={handleInput}/>
                </div>
                <div className=''>
                    <label htmlFor="phoneNumber">Phone No: </label>
                    <input type="text" id='phoneNumber' name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} required onInvalid={handleInvalid} minLength="10" maxLength="10" onInput={handleInput} />
                </div>
                <div >
                    <input className='px-5 py-2 rounded-full border border-solid	bg-violet-500 hover:bg-violet-400 active:bg-violet-600 font-semibold text-white shadow-md cursor-pointer' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default UserForm