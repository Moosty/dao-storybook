import React from "react";

export const ButtonTwo = () => {

    return(
        <div>
            <button
                type="submit"
                className="relative inline-flex items-center ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-themeButtonBg hover:bg-themeHover focus:outline-none"
            ><svg className="mr-2" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.211 1.36361L1.74279 6.29055C1.59583 6.332 1.46503 6.41731 1.36786 6.53509C1.27069 6.65287 1.21178 6.79751 1.19901 6.94966C1.18624 7.10182 1.22021 7.25424 1.29639 7.38657C1.37257 7.5189 1.48733 7.62483 1.62532 7.69019L9.65133 11.492C9.80787 11.5661 9.93392 11.6922 10.0081 11.8487L13.8099 19.8747C13.8752 20.0127 13.9812 20.1275 14.1135 20.2037C14.2458 20.2798 14.3982 20.3138 14.5504 20.301C14.7025 20.2883 14.8472 20.2294 14.965 20.1322C15.0827 20.035 15.1681 19.9042 15.2095 19.7573L20.1364 2.28904C20.1726 2.16073 20.174 2.02509 20.1403 1.89609C20.1066 1.76709 20.0392 1.64939 19.9449 1.55512C19.8507 1.46085 19.733 1.39341 19.604 1.35975C19.475 1.32609 19.3393 1.32742 19.211 1.36361Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.8934 11.6067L14.136 7.36401" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                Submit
            </button>
        </div>

    )
}