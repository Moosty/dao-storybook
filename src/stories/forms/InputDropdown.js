import React from "react";

export const InputDropdown = (props) => {

    return (
        <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1">
                <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                    <option>DAO - Lisk Community Squad</option>
                    <option>DAO - The Moosty Team</option>
                    <option>DAO - LCU Community</option>
                    <option>DAO - The DAO Team</option>
                </select>
            </div>
        </div>
    )
}