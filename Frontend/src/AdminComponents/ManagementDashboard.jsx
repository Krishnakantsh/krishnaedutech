import { Button, ButtonGroup, colors, Grid2 } from "@mui/material";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import RedeemIcon from "@mui/icons-material/Redeem";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import RecentStudentCard from "./StudentManage/RecentStudentCard";

const activeData = [
  {
    key: 1,
    name: "YTD Earning",
    count: "$ 212.52",
    icon: <AccountBalanceWalletIcon />,
    bgcolor: "rgba(182, 184, 232, 0.484)",
    percent: 2.2,
    color: "rgba(57, 44, 105, 0.626)",
  },
  {
    key: 2,
    name: "Total Students",
    count: 263,
    icon: <PeopleAltIcon />,
    bgcolor: "rgba(170, 194, 230, 0.626)",
    percent: 6,
    color: "rgb(23,141,241)",
  },
  {
    key: 3,
    name: "Total Tuitor",
    count: 21,
    icon: <RecentActorsIcon />,
    bgcolor: "rgba(230, 219, 170, 0.626)",
    percent: 4,
    color: "rgba(241, 179, 7, 0.626)",
  },
  {
    key: 4,
    name: "Total Course",
    count: 21,
    icon: <RedeemIcon />,
    bgcolor: "rgba(230, 170, 170, 0.626)",
    percent: 5,
    color: "rgb(255,0,0)",
  },
];

const chartData = [
  { month: "Jan", earnings: 4000, students: 240 },
  { month: "Feb", earnings: 3000, students: 200 },
  { month: "Mar", earnings: 5000, students: 300 },
  { month: "Apr", earnings: 4500, students: 270 },
  { month: "May", earnings: 8000, students: 320 },
];


function ManagementDashboard() {
  return (
    <div className=" flex w-full  h-fit min-h-[85vh] flex-col items-center justify-start ">
      <div
        className="
       grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5
      "
      >
        {activeData?.map((data) => (
          <div
            key={data.key}
            className="flex  items-center justify-between p-5 h-fit shadow-xl w-full rounded-sm  bg-white py-10"
            style={{ boxShadow: "0 0 5px rgba(0,0,0,0.3)" }}
          >
            <div className=" flex items-center justify-center rounded-md">
              <div
                className="flex items-center justify-center h-12 w-12 rounded-sm"
                style={{
                  backgroundColor: `${data.bgcolor}`,
                  color: `${data.color}`,
                }}
              >
                {data.icon}
              </div>
            </div>
            <div className=" flex flex-col  items-start justify-start">
              <h1 className=" text-2xl font-bold ">{data.count}</h1>
              <p className=" opacity-60 text-sm">{data.name}</p>
            </div>
            <div className="flex items-end justify-end h-12">
              <p>
                {data.percent <= 4 ? (
                  <TrendingDownIcon sx={{ color: "red" }} />
                ) : (
                  <TrendingUpIcon sx={{ color: "green" }} />
                )}{" "}
                <span>{data.percent} %</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-[2fr_1fr] w-full gap-10 mt-5 h-fit">
        <div className=" flex flex-col items-center justify-between gap-10 h--fit shadow-lg  w-full bg-white rounded-md p-5">
          <div className=" flex items-center justify-between w-full border-b-2 border-b-black pb-2"  >
            <h1 className=" font-semibold text-xl"  >Earning Report</h1>
            <div >
                <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>1D</Button>
                <Button>1W</Button>
                <Button>1M</Button>
                <Button>3M</Button>
                <Button>6M</Button>
                <Button>1Y</Button>
                </ButtonGroup>
            </div>
          </div>
   
          <div className="w-full h-full p-4 bg-white ">
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" label={{ value: "Earnings ($)", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Students", angle: -90, position: "insideRight" }} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="right" dataKey="students" fill="#8884d8" barSize={30} />
          <Line yAxisId="left" dataKey="earnings" stroke="#ff7300" strokeWidth={2} dot={{ r: 5 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
      
        </div>
       <RecentStudentCard  width={350} />
      </div>
    </div>
  );
}

export default ManagementDashboard;
