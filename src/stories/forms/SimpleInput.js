import { ExclamationCircleIcon } from '@heroicons/react/solid'

export const SimpleInput = (props) => {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    placeholder="you@example.com"
                    defaultValue="adamwathan"
                    aria-invalid="true"
                    aria-describedby="email-error"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
            </div>
            <p className="mt-2 text-sm text-red-600" id="email-error">
                {props.errorMessage}
            </p>
        </div>
    )
}
