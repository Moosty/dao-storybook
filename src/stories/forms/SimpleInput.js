import { ExclamationCircleIcon } from '@heroicons/react/solid'
import {Typography} from "../Typography";
import React from "react";

export const SimpleInput = ({label, errorMessage, name, id, placeholder, defaultValue, invalidTrueFalse}) => {
    return (
        <div>
                <Typography htmlFor={id} className="block text-sm font-medium text-gray-700" type="caption" Element="label">
                    {label}
                </Typography>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type="text"
                    name={name}
                    id={id}
                    className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
            </div>
            <p className="mt-2 text-sm text-red-600" id={`error-${id}`}>
                {errorMessage}
            </p>
        </div>
    )
}
