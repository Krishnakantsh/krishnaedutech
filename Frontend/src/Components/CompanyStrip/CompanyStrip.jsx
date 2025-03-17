import React from 'react'

const companyData = [
  {
    key:1,
    url:"https://i.pinimg.com/474x/de/6f/1a/de6f1aa513ed30178a43c043567a417b.jpg",
  },
  {
    key:2,
    url:"https://i.pinimg.com/474x/87/86/45/878645d72068089487aca9e4779a48f1.jpg",
  },
  {
    key:3,
    url:"https://i.pinimg.com/474x/47/d2/0d/47d20dce3476aca54c861a9af3897b66.jpg",
  },
  {
    key:4,
    url:"https://i.pinimg.com/474x/07/b8/5c/07b85c624d4b1506ad3767ea6a6572df.jpg",
  },
  {
    key:6,
    url:"https://i.pinimg.com/474x/59/d0/4a/59d04a9cd824598357571c02244098b4.jpg",
  },
  {
    key:7,
    url:"https://i.pinimg.com/736x/a0/e6/91/a0e6913a3473cc42c7f0212b65399d46.jpg",
  },
  {
    key:8,
    url:"https://i.pinimg.com/736x/d6/db/e3/d6dbe3a3cdf7f13a8077583a34f82138.jpg",
  },

]

function CompanyStrip() {
  return (
    <div className=' flex w-[100vw]  items-center justify  overflow-scroll p-4 ' style={{ 
backgroundColor: "linear-gradient(90deg, #A9F1DF  0%, #FFBBBB 100%) "  }}>
        <div className=' flex w-fit  gap-8 ' >
            {
              companyData.map((data)=>
                <div key={data.key}  className=' flex items-center justify-center w-50 h-25  rounded-2xl shadow-md shadow-black ' style={{ backgroundColor:"rgb(255,255,255)"  }} >
                  <img src={data.url} alt="companyImage" className='w-full h-auto  object-cover object-center rounded-2xl' />
                </div>
              )
            }
        </div>
    </div>
  )
}

export default CompanyStrip