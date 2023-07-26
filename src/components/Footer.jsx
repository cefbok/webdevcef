import { FaGithub, FaFacebook, FaLinkedin  } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='pt-20 pb-5'>
                <div className="relative flex items-center justify-center 
                mx-auto gap-2 opacity-80">
                    <a href="https://github.com/cefbok" 
                    target="_blank" rel="noopener noreferrer"><FaGithub size={32}/></a>
                    <br />
                    <a href="https://www.facebook.com/bokaroids"
                    target="_blank" rel="noopener noreferrer"><FaFacebook size={32}/></a>
                    <br />
                    <a href="https://www.linkedin.com/in/cefrin-paanod-18b852266/"
                    target="_blank" rel="noopener noreferrer"><FaLinkedin size={32}/></a>
                </div>
                <div className="relative flex items-center justify-center">
                    <p className=' text-sm mt-2 opacity-60'>
                    &copy; {new Date().getFullYear()} Cefrin Paanod. All rights reserved.
                    </p>
                </div>
            </div> 
        </footer> 
    )
}

export default Footer;