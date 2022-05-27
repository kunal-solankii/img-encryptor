import { useEffect, useState } from 'react';
import { ImagePicker } from 'react-file-picker';
import { Encryptor } from './Encryptor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function FileUpload() {

    var imgdata = null;
    const [key, setKey] = useState('');
    const [isReadyToEncrypt,setIsReadyToEncrypt]=useState(false);
    const [isKeySet,setIsKey] = useState(false);

    useEffect(()=>
    {
        if(isKeySet)
        {
            console.log('key set')
            
        }
    })
    
    //To set the image
    function assignImg(base64) {
        // setImg(base64)
        imgdata = base64;

        if (imgdata) {
            toast.success('Image Uploaded Successfully ', { autoClose: 1000, position: toast.POSITION.TOP_CENTER })
            console.log('img uploaded')
        }
    }
    //To set the secret key
    function handleChange(event) {
        setKey(event.target.value)
        console.log(key)
    }

    function sendDataToEncrypt() {
        
       setIsKey(true);
       console.log('sending image and key to encrypt');
       if(key)
        toEncrypt();
        
    }

    function toEncrypt()
    {
        setIsReadyToEncrypt(true)
        
    }
    return (
        isReadyToEncrypt ?
        <Encryptor img={imgdata} skey={key}/>:
        <section id="fileupload">
            <div className="bg-white">
                <div className="flex justify-center my-2 bg-gray-100 py-48 border-solid border-2 rounded-lg border-gray-300">
                    <div>
                        <ImagePicker
                            extensions={['jpg', 'jpeg', 'png']}
                            dims={{ minWidth: 100, maxWidth: 2000, minHeight: 100, maxHeight: 2000 }}
                            onChange={base64 => (assignImg(base64)
                            )}
                            onError={errMsg => (console.log(errMsg))}

                        >
                            <button name="fileupload"

                                className="bg-indigo-700 
                                        text-white p-2 py-4
                                        rounded-full text-gray-200
                                        font-semi-bold  pl-10 pr-10 border-0
                                        hover:bg-indigo-500 ">
                                Click to Upload
                            </button>

                        </ImagePicker>
                    </div>
                </div>
                <div className='flex justify-center p-10'>
                    <input type="text"
                        name='secretkey'
                        placeholder='Please Enter a text which will be used as a Key'
                        className='lg:w-96 p-5 rounded-full hover:border-indigo-500 hover:border-4 border-2 border-indigo-400 focus:outline-indigo-200 outline-indigo-500'
                        onChange={handleChange}
                    ></input>
                    <button name="sendtoencrypt"
                        type='submit'
                        onClick={sendDataToEncrypt}
                        className="bg-indigo-700 
                                    text-white p-2 py-4
                                    rounded-full text-gray-200
                                    font-semi-bold  pl-10 pr-10 border-0
                                    hover:bg-indigo-500 ">
                        Submit
                    </button>
                </div>
                
            </div>
            <ToastContainer />





        </section>
    )
}

export default FileUpload;