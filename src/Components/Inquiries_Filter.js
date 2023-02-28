import React from 'react'

export const Inquiries_Filter = () => {
    const myStyle={
        fontSize: "20px",
    }
    return (
        <div>
            <div className="px-12 py-4 flex">
                <div
                    className="shadow-lg text-md bg-white border-2 border-gray-100 grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full">
                    <div className="flex justify-between w-full">
                        <div className="px-4 pt-3  text-slate-900 text-left ml-2">Filter</div>
                        <div className="px-6 pt-3  text-right">
                            <button data-toggle="collapse" data-target="#demo">
                                <i className="fas fa-angle-down" style={myStyle}></i>
                            </button>
                        </div>
                    </div>
                    <div className="collapse in" id="demo">
                        <div className="shadow-lg px-4 py-6 text-md bg-b grid gap-x-3 gap-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <div className="mb-6">
                                <label htmlFor="large-input"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Member Name</label>
                                <input type="text" id="large-input"
                                    className="block p-4 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="large-input"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Member Phone</label>
                                <input type="text" id="large-input"
                                    className="block p-4 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="large-input"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Member Email</label>
                                <input type="text" id="large-input"
                                    className="block p-4 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="large-input"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Assigned Employee</label>
                                <input type="text" id="large-input"
                                    className="block p-4 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Please Select Employee"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="large-input"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Deal Stages</label>
                                <input type="text" id="large-input"
                                    className="block p-4 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Please Select Deal Stage"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="large-input"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">From Date</label>
                                <input type="text" id="large-input"
                                    className="block p-4 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="dd/mm/yyyy"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="large-input"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">To Date</label>
                                <input type="text" id="large-input"
                                    className="block p-4 w-full text-gray-900 bg-gray-50  border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="dd/mm/yyyy"/>
                            </div>
                            <div className="">
                                <button style={{width: "100px"}}
                                    className="px-3 py-4 float-right mt-10 bg-o border  border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                                    <p className="text-md text-white  font-bold ">SEARCH</p>
                                </button>


                                <button style={{width: "90px"}}
                                    className="px-3 py-4 float-right mt-10 mr-3 bg-pu border border-gray-300 text-white font-bold rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                                    <p className="text-md text-white font-bold ">RESET</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
