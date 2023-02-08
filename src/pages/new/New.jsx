import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useState } from 'react'

const New = ({inputs, title}) => {

    const [file, setFile] = useState('')

    // Check image upload state at the console
    console.log(file)

    return(
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src={file ? URL.createObjectURL(file) : 
                                "https://www.clipartkey.com/mpngs/m/215-2151133_avatar-png-avatar-movie-png.png" }
                            alt="" 
                        />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image upload: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input 
                                    type="file" 
                                    id="file" 
                                    onChange={e=>setFile(e.target.files[0])}
                                    style={{display:"none"}} />
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label htmlFor="">{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default New

