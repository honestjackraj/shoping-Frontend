import axios from "axios";
import React, {  useState ,useEffect} from "react";
import "../component/Category.css"


import {Link}from "react-router-dom"
import Footer from "./Footer";
import Navigation from "./Navigation";
import StripeCheckout from "react-stripe-checkout";




function Category() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/auth/allCategory")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

   
  // const getdata = async () => {
  //   const response = await axios({
  //     method: "get",
  //     url: "http://localhost:5000/auth/allCategory",
  //   });
  //   setData(response.data);

  // };
  // getdata();
  // console.log(data);

  const buy = (token)=>{
    console.log(token);
  }


    return (
        <>
        <Navigation/>

<div className="category-all">
        <div className="category-container">
        <div className="category-row">
        
          {data.map((item) => {
            return (
                <>
                <div>
                {/* <Link to={`/Details/${item._id}`}>
                <div className="category-image-sz">
                    <img  src={item.image} alt="image"/>
                    </div>
                    <button  className="category-Bnt">
                     QUICK VIEW


                    </button>
                    </Link> */}

<div className="category-image-sz">
                    <img  src={item.image} alt="image"/>
                    </div>

                    <StripeCheckout 
                         name="WELCOME AGAIN"
                         token={buy}
                         stripeKey="pk_test_51LzhraSJY7LJMYKPippgJnk6WaafDvHj8swzOVNwosxxFS0Zwr3XY4VJJogwCpIEmpqnnOLziV3uJXij86kdKrEb00hH92lJ5U"
                         />
                  
                    <p className="category-image-NM">{item.name}</p>

                
                    <h4 className="category-image-prz" >{item.price}</h4>
                  
                    

                </div>
                </>
            );
          })}
         </div>
         </div>
         </div>

         <Footer/>





        </>
    )
}

export default  Category

