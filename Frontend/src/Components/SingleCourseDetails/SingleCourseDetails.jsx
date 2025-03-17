import React from 'react'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';
import AllCourseCard from '../OurCourse/AllCourseCard';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


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
    key:5,
    url:"https://i.pinimg.com/474x/59/d0/4a/59d04a9cd824598357571c02244098b4.jpg",
  },
  {
    key:6,
    url:"https://i.pinimg.com/736x/a0/e6/91/a0e6913a3473cc42c7f0212b65399d46.jpg",
  },
]

const stats = [
  { stars: 5, percent: 63 },
  { stars: 4, percent: 10 },
  { stars: 3, percent: 6 },
  { stars: 2, percent: 12 },
  { stars: 1, percent: 9 },
];


const reviews = [
  {
    name: "Emily Selman",
    rating: 5,
    text: "This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.",
  },
  {
    name: "Hector Gibbons",
    rating: 5,
    text: "Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!",
  },
  {
    name: "Mark Edwards",
    rating: 4,
    text: "I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.",
  },
];

function SingleCourseDetails() {
  return (
    <div  className='flex flex-col items-center justify-start w-full h-fit  pt-18 ' >
      <div className=' flex  items-center justify-start w-full h-fit p-2 gap-5  ' >
      
      <div className=' flex flex-col items-center justify-start w-1/2 h-[50vw] p-2 gap-5 '  >
        <div className=' flex  items-center justify-center w-full h-1/2  rounded-2xl border-0 shadow-xl '  >
           <img src="https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg" alt="" className='w-full h-full object-cover object-fit rounded-2xl'   />
        </div>
        <div className=' flex flex-col  items-center justify-between w-full h-1/2 border-1  p-2  rounded-2xl' style={{ border:"2px solid rgb(199,201,202)", background:"rgb(240,240,240)"  }}   >
            <h1 className=' font-semibold text-center text-3xl text-red-500' >Our learner are placed at</h1>
            <div className=' flex flex-wrap  items-center justify-between w-full h-full  p-6 rounded-2xl'  >
            {
              companyData.map((data)=>
                <div key={data.key}  className=' flex items-center justify-center w-50 h-25  rounded-2xl shadow-md shadow-black ' style={{ backgroundColor:"rgb(255,255,255)"  }} >
                  <img src={data.url} alt="companyImage" className='w-full h-auto  object-cover object-center rounded-2xl' />
                </div>
              )
            }
               
            </div>
        </div>
      </div>


      <div className=' flex flex-col items-start justify-start w-1/2 h-[50vw]  p-2 gap-15'  >
        <div className=' flex flex-col items-start justify-start w-full h-fit gap-6' >
            <h1 className=' font-bold text-5xl text-blue-500' >Java Full Stack Course </h1>
            
            <p className=' font-semibold text-xl w-1/2 flex justify-between items-center' > <span className='w-2/5 text-left' >Actual Price</span> <span>:</span>   <span className=' line-through opacity-60'>₹ 2999</span> </p>
            <p className=' font-semibold text-xl w-1/2 flex justify-between items-center' > <span    className='w-2/5 text-left' >Discount</span> <span>:</span>   <span className=' text-green-600' >20% Off</span> </p>
            <p className=' font-semibold text-xl w-1/2 flex justify-between items-center' > <span className='w-2/5 text-left'  > Price</span> <span>:</span>   <span>₹ 2350</span> </p>
        </div>
        <div className=' flex flex-col items-start justify-start w-full h-fit gap-5 text-xl'  >
          <h1 className=' font-semibold text-4xl text-blue-400' >Course Highlights </h1>
            <div className='flex  w-fit h-auto gap-5 mt-5' >
              <div><WifiTetheringIcon/></div>
              <div className=' h-fit w-fit'  >
                <p>LIVE Classes on Weekends</p>
              </div>
            </div>
            <div  className='flex  w-fit h-auto gap-5 '>
              <div><PlayCircleOutlineIcon/></div>
              <div>
                <p>160+ Hrs on-demand video</p>
              </div>
            </div>
            <div className='flex  w-fit h-auto gap-5 '  >
              <div><CodeIcon/>  </div>
              <div>
                <p>4 Major Projects</p>
              </div>
            </div>
            <div className='flex  w-fit h-auto gap-5 ' >
              <div> <DirectionsRunIcon/>  </div>
              <div>
                <p>4 Months Course Duration</p>
              </div>
            </div>
            <div className='flex  w-fit h-auto gap-5 ' > 
              <div><AccessTimeIcon/>  </div>
              <div>
                <p>2 Years Access</p>
              </div>
            </div>
        </div>
        <div className=' flex w-full ' >
          <Button variant=' contained' sx={{ background:"green", width:"100%", height:"3.5vw", fontSize:"1.5vw", fontWeight:"500", color:"rgb(255,255,255)" }}   > Purchase & Start Learning</Button>

        </div>
      </div>
      </div>
        
      <div className="w-full text-left mx-auto mt-10 px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">Student Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Review Stats */}
        <div>
          <p className="text-lg font-semibold">4 out of 5 stars</p>
          <p className="text-gray-600">Based on 1,624 reviews</p>
          <div className="mt-4 space-y-2">
            {stats.map((stat) => (
              <div key={stat.stars} className="flex items-center space-x-2">
                <span className="w-12">{stat.stars} ★</span>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${stat.percent}%` }}
                  ></div>
                </div>
                <span className="w-10 text-sm text-gray-600">{stat.percent}%</span>
              </div>
            ))}
          </div>
          <form action="">
          <textarea class="shadow appearance-none border mt-10 border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="reviews" type="text" placeholder="Write something ...." rows={6} />

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Submit review
          </button>
          </form>
          
        </div>

        {/* Right - Recent Reviews */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Recent Reviews</h3>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="p-4 border rounded-lg shadow">
                <p className="font-medium">{review.name}</p>
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarOutlineIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



      <div className='flex flex-col items-center justify-start w-full h-fit  pt-15 gap-15' >
        <h1 className=' font-bold text-green-700 text-6xl'  >Our other beneficial course </h1>
        <div className='flex flex-wrap items-center justify-center w-full h-fit  gap-10' >
           {
            [1,1,1,1,1,1,1,1].map((key)=>
               <AllCourseCard/>
            )
           }
        </div>
      </div>
    </div>
  )
}

export default SingleCourseDetails