import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleFormData = (e) => {
        e.preventDefault();
        navigate("/user-form/acknowledgment");

        const stringifyFormData = JSON.stringify({ name, email, phoneNumber, query });
        localStorage.setItem("FormData", stringifyFormData);
    }

    const handleInvalid = (e) => {
        const inputElement = e.target;
        inputElement.setCustomValidity(`Invalid! ${e.target.name}, Please enter a valid ${e.target.name}`);
    }

    const handlePhoneNumber = (e) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
            setPhoneNumber(inputValue);
        }
    }

    const handleInput = (e) => {
        const inputElement = e.target;
        inputElement.setCustomValidity("");
    }

    return (
        <form onSubmit={handleFormData} className="w-full min-w-[300px]  max-w-[400px] h-4/5 min-h-[200px] max-h-auto mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Form</h2>
            
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    onChange={(e) => setName(e.target.value)} 
                    onInvalid={handleInvalid} 
                    value={name} 
                    onInput={handleInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder="Enter your name"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    onChange={(e) => setEmail(e.target.value)} 
                    onInvalid={handleInvalid} 
                    value={email} 
                    onInput={handleInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder="name@example.com"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone No</label>
                <input 
                    type="text" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    value={phoneNumber} 
                    onChange={handlePhoneNumber} 
                    required 
                    onInvalid={handleInvalid} 
                    minLength="10" 
                    maxLength="10" 
                    onInput={handleInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder="Enter phone number"
                />
            </div>

            {/* Query Field */}
            <div className="mb-5">
                <label htmlFor="query" className="block mb-2 text-sm font-medium text-gray-900">Query</label>
                <textarea 
                    id="query" 
                    name="query" 
                    required 
                    onChange={(e) => setQuery(e.target.value)} 
                    value={query} 
                    onInvalid={handleInvalid} 
                    onInput={handleInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder="Enter your query"
                />
            </div>

            <button 
                type="submit" 
                className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </form>
    );
}

export default UserForm;
