import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import YourPasswords from './YourPasswords';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import eye from '/icons/eye.png'
import eyecross from '/icons/eyecross.png' 

const Manager = () => {
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const ref = useRef()
    const showPassword = () => {
        if (ref.current.src.includes("icons/eye.png")) {
            passwordRef.current.type = "text"
            ref.current.src = eyecross
        }
        else {
            passwordRef.current.type = "password"
            ref.current.src = eye
        }
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            const newEntry = { ...form, id: uuidv4() }
            const updatedArray = [...passwordArray, newEntry]
            setpasswordArray(updatedArray)
            localStorage.setItem("passwords", JSON.stringify(updatedArray))
            console.log(updatedArray)
            setform({ site: "", username: "", password: "" })
            toast('Password Saved Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        else (
            toast('Error: Password not saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        )
    }


    const deletePassword = (id) => {
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            const updatedArray = passwordArray.filter(item => item.id !== id)
            setpasswordArray(updatedArray)
            localStorage.setItem("passwords", JSON.stringify(updatedArray))
            toast('Password Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    const editPassword = (id) => {
        const target = passwordArray.find(item => item.id === id)
        if (!target) return
        setform(target)
        const updatedArray = passwordArray.filter(item => item.id !== id)
        setpasswordArray(updatedArray)
        localStorage.setItem("passwords", JSON.stringify(updatedArray))
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>


            <div className="p-2 md:mycontainer min-h-[80.2vh]">
                <h1 className='text-4xl font-bold text-center'><span className="text-green-600">&lt;</span>
                    Pass
                    <span className="text-green-600">OP/&gt;</span></h1>
                <p className='text-lg text-green-900 text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' id='site' />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='username' />

                        <div className="relative flex items-center">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full pr-6 pl-1 py-1 text-start' type="password" name='password' id='password' />
                            <span className='absolute right-0 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={55} src={eyecross} alt="eye" />
                            </span>
                        </div>


                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-500 rounded-full px-8 py-2 w-fit border border-green-900'> <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover">
                    </lord-icon>
                        Save</button>
                </div>
                <YourPasswords
                    passwordArray={passwordArray}
                    deletePassword={deletePassword}
                    editPassword={editPassword}
                />

            </div>
        </>
    )
}

export default Manager