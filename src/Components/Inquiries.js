import React from 'react'
import '../CSS/Inquiries.css'
export const Inquiries = () => {
  const myComponentStyle = {  
    fontSize: "20px",
 }  
  return (
    <div className="px-20 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-x-2 gap-y-10">
          <div>
            <button className="bg-b text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <i className="fas fa-download" style={myComponentStyle}></i>
            </button>
            <p className="mt-2 text-sm text-t font-bold">Export XLSX</p>
          </div>
          <div>
            <button className="bg-pu text-white font-bold py-4 px-4 rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]">
              <i className="fas fa-info-circle" style={myComponentStyle}></i>
            </button>
            <p className="mt-2 text-sm text-t font-bold">New Inquiry</p>
          </div>
        </div>
      </div>
  )
}
