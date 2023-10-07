import React ,{useState,useEffect}from 'react'
import {storage} from '../firebase-config'
import {ref,uploadBytes,getDownloadURL,listAll} from 'firebase/storage'
import 'uuid';
import { v4} from 'uuid';

//const uuid = uuidv4();
function Upload() {
    const [imagesUpload,setImagesUpload] = useState('')
    const [imagelist,setImagelist] = useState([]);
    const imagelistref = ref(storage, "images/")

    const uploadImg=()=> {
       if (imagesUpload == null) {
        return;
       }
        else{
          const imageRef = ref(storage, `images/${imagesUpload.name+v4()}`)
        uploadBytes(imageRef,imagesUpload).then((snapshot) => {
          alert("image upload")
         /* getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
       
          })*/})
        }
    }
    useEffect(()=>{
      listAll(imagelistref).then((response)=> {
        response.items.forEach((item)=> {
          getDownloadURL(item).then((url)=>{
            setImagelist((prev)=> [...prev,url])
          })
        })
      })
    },[])
  return (
    <>
    <div>
        <input type="file" onChange={(e)=>setImagesUpload(e.target.files[0])}/>
        <button onClick={uploadImg}>Upload it</button>
        {imagelist.map((url) => {
          return <img src={url} alt="img" />
        })}
    </div>
    </>
  )
}

export default Upload;