import { useState } from 'react';
import { ImagePicker } from 'react-file-picker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function FileUpload() {

    const [img, setImg] = useState(null);

    function assignImg(base64) {
        setImg(base64)
        img ?
            toast.success('Image Uploaded Successfully ', { autoClose: 3000, position: toast.POSITION.BOTTOM_CENTER })
            : console.log('img not uploaded')

    }

    return (
        <section id="fileupload">
            <div className="bg-white">
                <div className="flex justify-center my-2 bg-gray-100 py-48 border-solid border-2 rounded-lg border-gray-300">
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
                    <div className='absolute bottom-1/4'>
                        {img ? <input type="text"
                            placeholder='Please Enter a text which will be used as a Key'
                            className='lg:w-96 p-5 rounded-full hover:border-indigo-500 hover:border-4 border-0 focus:outline-none'
                        >

                        </input> : null}

                    </div>

                </div>

            </div>
            <ToastContainer />





        </section>
    )
}

export default FileUpload;