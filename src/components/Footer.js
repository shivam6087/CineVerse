import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">CineVerse</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm  dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/"  rel="noreferrer" className="mr-4 hover:underline md:mr-6 "><InstagramIcon sx={{ color:  "#ff6c33" }} /></a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/shivam-modanwal-55217b208/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6"><LinkedInIcon color="primary"/></a>
              </li>
              <li>
                  <a href="/"  rel="noreferrer" className="mr-4 hover:underline md:mr-6"><TwitterIcon color="primary"/></a>
              </li>
              <li>
                  <a href="/"  rel="noreferrer" className="mr-4 hover:underline md:mr-6"><YouTubeIcon sx={{color:' #FF0000'}}/></a>
              </li>
              <li>
                  <a href="/"  rel="noreferrer" className="hover:underline"><GitHubIcon /></a>
              </li>
              
          </ul>
      </footer>
  )
}
