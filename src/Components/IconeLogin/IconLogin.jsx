
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const IconLogin = () => {
    const {googleSignin,githubSignIn} =useAuth()
    const handleGoogleSignin=(media)=>{

        media()
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err=>{
            console.log(err)
      
        })
    }
    
    return (
        <div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <button  onClick={()=>handleGoogleSignin(googleSignin)}  className="flex w-full py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <FcGoogle className="text-2xl"></FcGoogle>
                                                Google
                                            </button>
                                        </li>
                                        <li>
                                           
                                            <button onClick={()=>handleGoogleSignin(githubSignIn)}  className="flex w-full py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <FaGithub className="text-2xl"></FaGithub>
                                                GitHub
                                            </button>
                                        </li>
                                        <li>
                                            <button className="flex w-full py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <FaSquareFacebook className="text-2xl text-blue-500"></FaSquareFacebook>
                                                Facebook
                                            </button>
                                               
                                            
                                        </li>
                                        <li>
                                            <Link to={'/login'} className="flex py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <MdOutlineAlternateEmail className="text-2xl text-red-700"></MdOutlineAlternateEmail>
                                                Email
                                            </Link>
                                        </li>
                                    </ul>
        </div>
    );
};

export default IconLogin;