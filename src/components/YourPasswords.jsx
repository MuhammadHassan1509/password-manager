import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const YourPasswords = ({ passwordArray, deletePassword, editPassword }) => {

    const copyText = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="passwords">
                <h2 className="font-bold text-2xl py-4">Your Passwords</h2>

                {passwordArray.length === 0 && <div>No Passwords to show</div>}

                {passwordArray.length !== 0 && (
                    // 👇 wrap table inside a scrollable div
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full rounded-md mb-10 text-sm sm:text-base">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="py-2 px-2 sm:px-4">Site</th>
                                    <th className="py-2 px-2 sm:px-4">Username</th>
                                    <th className="py-2 px-2 sm:px-4">Password</th>
                                    <th className="py-2 px-2 sm:px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100">
                                {passwordArray.map((item, index) => (
                                    <tr key={index}>
                                        {/* Site */}
                                        <td className="py-2 border border-white text-center">
                                            <div className="flex justify-center items-center">
                                                <a href={item.site} target="_blank" rel="noreferrer" className="break-all">
                                                    {item.site}
                                                </a>
                                                <div
                                                    className="lordIconCopy size-7 cursor-pointer"
                                                    onClick={() => copyText(item.site)}
                                                >
                                                    <lord-icon
                                                        style={{ width: "18px", height: "18px", paddingTop: "3px", paddingLeft: "3px" }}
                                                        src="https://cdn.lordicon.com/xuoapdes.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Username */}
                                        <td className="py-2 border border-white text-center">
                                            <div className="flex justify-center items-center">
                                                {item.username}
                                                <div
                                                    className="lordIconCopy size-7 cursor-pointer"
                                                    onClick={() => copyText(item.username)}
                                                >
                                                    <lord-icon
                                                        style={{ width: "18px", height: "18px", paddingTop: "3px", paddingLeft: "3px" }}
                                                        src="https://cdn.lordicon.com/xuoapdes.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Password */}
                                        <td className="py-2 border border-white text-center">
                                            <div className="flex justify-center items-center">
                                                {item.password}
                                                <div
                                                    className="lordIconCopy size-7 cursor-pointer"
                                                    onClick={() => copyText(item.password)}
                                                >
                                                    <lord-icon
                                                        style={{ width: "18px", height: "18px", paddingTop: "3px", paddingLeft: "3px" }}
                                                        src="https://cdn.lordicon.com/xuoapdes.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td className="py-2 border border-white text-center">
                                            <span
                                                className="cursor-pointer mx-1"
                                                onClick={() => editPassword(item.id)}
                                            >
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/vwzukuhn.json"
                                                    trigger="hover"
                                                    style={{ width: "20px", height: "20px" }}
                                                ></lord-icon>
                                            </span>
                                            <span
                                                className="cursor-pointer mx-1"
                                                onClick={() => deletePassword(item.id)}
                                            >
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/xyfswyxf.json"
                                                    trigger="hover"
                                                    style={{ width: "20px", height: "20px" }}
                                                ></lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}

export default YourPasswords;
