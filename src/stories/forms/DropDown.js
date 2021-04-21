import React from "react";

export const DropDown = () => {

    return (<div className="sm:col-span-3 my-4 ">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Type of Voting
            </label>
            <div className="mt-1">
                <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                    <option>One man One vote</option>
                    <option>Quadratic Voting</option>
                    <option>New Member Voting</option>
                </select>
            </div>
        </div>
    )
}