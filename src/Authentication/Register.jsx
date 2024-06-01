
import { FaItunesNote, FaKey, FaStickyNote } from 'react-icons/fa'
import logo from '../assets/images/register -logo.png'
import { Link } from 'react-router-dom'
import banner2 from '../assets/images/bg2.jpg'
import { useContext } from 'react'
import { AuthContext } from './Authprovider'
import { getAuth, updateProfile } from 'firebase/auth'
import app from './firebase.config'
const Register = () => {
    const auth=getAuth(app)
    const {createUser}=useContext(AuthContext)
    console.log(createUser)
    const bannerStyle = {
        backgroundImage: `url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const photo = e.target.photo.value;
        const Password = e.target.pass.value;
        
        
        createUser(Email,Password)
        .then(res=>{
            console.log(res)
            updateProfile(auth.currentUser, {
                displayName: Name, photoURL: photo
            }).then(() => {
                console.log('yes')
                console.log()
            }).catch((error) => {
                console.log('No')
            });
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='w-[96%] mx-auto min-h-[82vh] flex 
        justify-center items-center md:space-x-6 space-x-3
        flex-col-reverse md:flex-row my-8'>
            <div className='w-[210px] sp'>
                <div className='flex items-center justify-center space-x-3'>
                    <FaStickyNote className='text-xl'></FaStickyNote>
                    <h1 className='text-center text-2xl'>Note</h1>
                </div>
                <p className='text-center'>This register
                    holds the current instruction so that
                    it can be decoded and input to the
                    control and timing unit.Specifically, the instruction
                    register holds the opcode
                    which defines the type of instruction.</p>
            </div>
            <div className='rounded-md shadow-xl p-3 md:p-6' style={bannerStyle}>
                <div className='flex space-x-2 items-center justify-center'>
                    <FaKey className='text-xl'></FaKey>
                    <h1 className='text-center text-2xl font-semibold my-4'>
                        Register Here</h1>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name='name' className='w-[345px] h-[50px]
                     border-black border-2 text-[18px] rounded-md mb-3 p-1 bg-transparent' 
                     placeholder='Your Name' /> <br />
                    <input type="email" name='email' placeholder='Your Email' className='w-[345px] h-[50px]
                     border-black border-2 text-[18px] rounded-md mb-3 p-1 bg-transparent' /> <br />
                    <input type="text" name='photo' placeholder='Photo Url' className='w-[345px] h-[50px]
                     border-black border-2 text-[18px] rounded-md mb-3 p-1 bg-transparent' /> <br />
                    <input type="password" name='pass' placeholder='Password' className='w-[345px] h-[50px]
                     border-black border-2 text-[18px] rounded-md mb-4 p-1 bg-transparent' /> <br />
                    <button type='submit' className='w-full text-white bg-orange-400
                     rounded-md text-xl font-medium py-2'>Register</button>
                </form>
              <Link to={'/log'}><p className='text-center mt-4'>Already have accunt?</p></Link>
            </div>
            <div>
                <img src={logo} className='w-[285px] h-[300px] md:w-[310px] md:h-[330px]' alt="" srcset="" />
            </div>
        </div>
    )
}
export default Register
