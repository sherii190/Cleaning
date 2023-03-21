import React, {useEffect,useState} from 'react'
const Showdata = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3500/data").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })

    },[])
  return (
    <div>
      <div
    className="breadcrumb-area shadow dark bg-cover text-center text-light"
    style={{ backgroundImage: "url(assets/img/banner/20.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h1>Show All Data</h1>
          
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Showdata
