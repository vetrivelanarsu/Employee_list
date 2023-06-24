
import './Navbar.css'


export default function Navbar(){



 return(
    <div className='outerborder'>
     <div className='leftcontent'>
        <h1>ABOUT</h1>
        <h1>CONTACT</h1>
        <h1>BLOG</h1>
     </div>
     <div className='rightcontent'>
        <button><h1>SIGNIN</h1></button>
        <button><h1>SIGNUP</h1></button>
     </div>
    </div>
 )

}