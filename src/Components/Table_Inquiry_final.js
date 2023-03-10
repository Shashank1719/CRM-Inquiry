import React from 'react'

export const Table_Inquiry_final = () => {
    return (
        <div
            className="shadow-lg px-4 py-4 text-md bg-white overflow-hidden overflow-x-auto sm:-mx-6 lg:-mx-8 inline-block min-w-full sm:px-6 lg:px-8">

            <table className="min-w-full">
                <thead className="bg-white border-b-2">
                    <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            No.
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            User Name
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Phone
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            E-Mail Address
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Inquiry Date
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Inquiry Type
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Assigned Employee
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Deal Stage
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100 border-x-2">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            TEST TEST
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            1234567891
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            test@ttttt.com
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            <p>2019-08-01</p> 11:43 am
                            </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Walk in
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p>Ahmed</p> Motiwala
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap ">

                                    POS/PAYMENTS
                                </td>
                                <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                                    <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-expand"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-pen"></i>
                                        </button>



                                    </div>
                                </td>

                            </tr>
                            <tr className="bg-white border-x-2">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                    JOHN DOE
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    9874563210
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    john@doe.com
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p>2019-07-19 </p> 01:05 pm
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Walk in
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Ajay Boble
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap ">
                                    <p>INQUIRY </p> MANAGEMENT
                                </td>

                                <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                                    <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-expand"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-pen"></i>
                                        </button>



                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-x-2">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p> SANDEEP </p>
                                    <p>KUMAR </p>
                                    JASSAL JASSAL
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    9815502203
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    livelifemore@gmail.com
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p>2019-05-09 </p> 11:17 am
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Walk in
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p>Ahmed </p>Motiwala
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap ">
                                    POS/PAYMENTS
                                </td>

                                <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                                    <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-expand"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-pen"></i>
                                        </button>



                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-x-2">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p> SHERLOCK </p>HOLMS
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    9696969696
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    sherlock@mail.com
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p>2019-01-25</p> 08:54 am
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Walk in
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p>Ahmed </p> Motiwala
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p> QUALIFIED FOR </p>FOLLOW UPS
                                </td>

                                <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                                    <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-expand"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-pen"></i>
                                        </button>



                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-x-2">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    TEST TEST
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    9898989898
                                </td>
                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                    test@mail.com
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p> 2018-12-28 </p> 06:47 pm
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Walk in
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Adan Brown
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    GYM VISIT
                                </td>

                                <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                                    <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-expand"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-pen"></i>
                                        </button>



                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-x-2">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    SANA KHAN
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    9876543212
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    sanakhan@gmail.com
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    <p> 2018-11-19</p>09:59 am
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Walk in
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Adan Brown
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    POS/PAYMENTS
                                </td>
                                <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                                    <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-expand"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-pen"></i>
                                        </button>



                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-x-2">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    YUG PATEL
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    7878449918
                                </td>
                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                    yugtest@gmail.com
                                </td>
                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                    <p>2018-11-05 </p> 09:35 am
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Walk in
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    Deepika Jalan
                                </td>
                                <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                                    POS/PAYMENTS
                                </td>
                                <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                                    <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-user"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-expand"></i>
                                        </button>
                                        <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                            <i className="fas fa-pen"></i>
                                        </button>



                                    </div>
                                </td>
                    </tr>
                    <tr className="bg-white border-2 ">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            PURVI PATEL
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            9408625019
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            purvi.kintu@gmail.com
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            <p>2018-11-03 </p>03:38 pm
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            Walk in
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            <p>Kaustubh</p> Thakor
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                            <p>QUALIFIED FOR</p> FOLLOW UPS
                        </td>
                    <td className="text-sm text-green-500  px-6 py-4 whitespace-nowrap ">
                        <div className="grid  grid-cols-2  gap-x-2 gap-y-2 ">

                            <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                <i className="fas fa-user"></i>
                            </button>
                            <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                <i className="fas fa-expand"></i>
                            </button>
                            <button className="bg-o text-white font-bold px-1 py-1 rounded-tl rounded-bl rounded-br rounded-tr">
                                <i className="fas fa-pen"></i>
                            </button>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
        </div >
  )
}
