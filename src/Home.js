
import axios from 'axios'
import React,{ useState ,useEffect } from 'react'

const Home = () => {
    const [userdata ,setuserdata] = useState([])
    axios.defaults.withCredentials = true;


    const getusers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/v1/Myprofile");
       // console.log(response);
         setuserdata(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
   

    useEffect(()=>{
       getusers();
    },[])
  return (
    <div>welcome Madhan{console.log("datas",userdata)}</div>
   
  )
}

export default Home
