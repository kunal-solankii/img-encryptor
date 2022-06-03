import { toast, ToastContainer } from "react-toastify";
import aes from 'crypto-js/aes';
import Base64 from 'crypto-js/enc-base64';
import { useCallback, useEffect, useState } from "react";
var CryptoJS = require("crypto-js");
export const Encryptor = (props) => {


    const [base64,setBase64] = useState(null);

    useEffect(()=>{
        console.log('UseEffect Called')
    },[base64])
    function encdec() {
        //console.log('Base 64 data'+props.imgdata)
        //console.log('..')
        var inputString = props.imgdata;
        var iv = CryptoJS.enc.Base64.parse("1234567812345678");
        console.log(iv)
        var key = CryptoJS.enc.Base64.parse("1234567890123456123456");
        console.log(key)
        console.log(inputString)
        //var words=CryptoJS.enc.Base64.parse(inputString);
       // console.log(words)
        var encrypted = CryptoJS.AES.encrypt(inputString,key,{
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,})
        console.log('Encrypted text : ' + encrypted)
        var decrypted = CryptoJS.AES.decrypt(encrypted,key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,})
        console.log('Decrypted : ' + decrypted)
        //var localbase64 = CryptoJS.enc.Base64.parse(decrypted);
       // var localbase64 //= CryptoJS.enc.Base64.parse(decrypted);
        
        var finalDecryptedValue = atob(CryptoJS.enc.Base64.stringify(decrypted));
        console.log(finalDecryptedValue)
        
        setBase64(finalDecryptedValue)
        //console.log('Base64 String : '+base64)
        
    }



    // var words = CryptoJS.enc.Base64.parse(props.imgdata);
    // console.log('base64.parse used : '+words)
    // var base64 = CryptoJS.enc.Base64.stringify(words);
    // console.log('base64.stringify : '+base64)
    //var encrypted = CryptoJS.AES.encrypt(props.imgdata, props.skey);
    //console.log(encrypted.toString());
    //U2FsdGVkX1/Xep3w7ImX5eI4x8jqTyQh86Ay+nJsXwo=

    // var bytes = CryptoJS.AES.decrypt('U2FsdGVkX1/Xep3w7ImX5eI4x8jqTyQh86Ay+nJsXwo=', props.skey);
    //var decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    //console.log('Decrypted text '+decrypted);



    return (

        <div >



            <div className="flex justify-center text-3xl leading-relaxed p-12">

                <h1>Please Wait Encryption in Progress :

                    <br />Please save your Secret Key :  {props.skey}</h1>

                 

            </div>
            <button className=" bg-indigo-500" onClick={encdec}>Show Encrypted </button>
            {  base64? <img src={base64}/>
 
            :null}
            <ToastContainer />
        </div>
    )
}