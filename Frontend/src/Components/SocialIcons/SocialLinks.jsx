import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialMeta = [
  {
    icon: FacebookRoundedIcon,
    link: "https://www.facebook.com/krishnakant.sharma.357622/",
    color: "rgb(255,255,255)",
  },
  {
    icon: InstagramIcon,
    link: "k",
    color: "rgb(0,255,0)",
  },
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/krishna-kant-sharma-developer92",
    color: "rgb(255,0,0)",
  },
  {
    icon: GitHubIcon,
    link: "https://github.com/Krishnakantsh",
    color: "rgb(255,255,23)",
  },
];

function SocialLinks({ size }) {
  return (
    <div className='flex flex-col justify-between items-center lg:items-start  gap-5 w-full h-fit'  >
      <h4 className=" font-semibold text-amber-500 text-xl">Find us on </h4>
      <div className="flex w-fit gap-5 justify-between items-center socialIcons">
        {socialMeta.map((e) => (
          <div key={e.link}
            className="flex justify-center items-center bg-[rgb(32,32,32)]  rounded-full "
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            <a href={e.link}>
              {" "}
              {React.createElement(e.icon, {
                sx: { fontSize: `${size * 0.6}px`, color: `${e.color}` },
              })}{" "}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
