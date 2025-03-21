import React, { useState } from "react";
import { Link } from "react-router-dom";

const Reg = ({ setSubmit }) => {
    let [state, setState] = useState({ sname: "", sgrade: "" });
    let [error, setError] = useState({});
    let handle = (element) => {
        let k1 = element.target.name;
        let v1 = element.target.value;
        setState({ ...state, [k1]: v1 });
        setError({});
    };

    let validate = () => {
        let obj = {};
        let isvalid = true;
        if (!state.sname) {
            ;
            obj.sname = "Please enter the name"
            isvalid = false;
        }
        if (!state.sgrade) {
            obj.sgrade = "Please enter the grade";
            isvalid = false;
        }
        setError(obj);
        return isvalid;
    };

    let getit = (element) => {
        element.preventDefault();
        if (validate()) {
            setSubmit({ sname: state.sname, sgrade: state.sgrade });
            setState({ sname: "", sgrade: "" });
        }
    };

    return (
        <div className="con ">
            <div className="grid grid-cols-1 absolute bg-green-300 p-4 rounded-xl">

                <div>
                    <form style={{fontFamily:'cursive'}} onSubmit={getit} className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                        <div className="mb-6">
                            <label htmlFor="stname" className="block text-xl font-semibold text-gray-800">NAME</label>
                            <p className="text-red-500 text-sm">{error.sname}</p>
                            <input
                                type="text"
                                name="sname"
                                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black transition duration-300 ease-in-out"
                                id="stname"
                                value={state.sname}
                                onChange={handle}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="stgrade" className="block text-xl font-semibold text-gray-800">GRADE</label>
                            <p className="text-red-500 text-sm">{error.sgrade}</p>
                            <input
                                type="text"
                                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black transition duration-300 ease-in-out"
                                name="sgrade"
                                id="stgrade"
                                value={state.sgrade}
                                onChange={handle}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:shadow-xl transition duration-200"
                        >
                            Submit
                        </button>
                    </form>


                  <button className="hover:bg-red-800 hover:text-white bg-green-400 p-4 text-black font-bold rounded-xl mt-4 ms-15">  <Link to="/studentlist" className="btn btn-success mt-3">SHOW STUDENT DETAILS</Link></button>
                </div>
            </div>



        </div>
    );
};

export default Reg;