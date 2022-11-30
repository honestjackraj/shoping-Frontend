import React from 'react'
// import { Link } from "react-router-dom";
import "../container/Shiping.css"
import Footer from "../component/Footer";


function Shiping() {
    return (

        <>

            <div><img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/6735920220620195549.jpg?format=webp&w=1440&dpr=1.0" class="shiping-image" alt="..." /></div>

            <div>
                <div class="container shiping-form-full">
                    <div class="row">
                        <div class="col-6">
                            <h5 className='ship-left-ci'>Contact information</h5>
                            <input type="email" placeholder="Email or mobile phone number" class="ship-form-EMPN" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            <div class="form-check ship-check1">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                    Email me with news and offers
                                </label>
                            </div>
                            <h5 className='ship-left-ci'>Shipping address</h5>
                            <div class="mb-3">
                                <select id="disabledSelect" class="ship-form-EMPN">
                                    <option>Country/region</option>
                                </select>
                            </div>

                            <div className='ship-doble-bn'>
                                <div class="section colm colm6">
                                    <div className='ship-form-name'>
                                        <input type="firstname" placeholder="FIRST NAME" class="ship-form-firstname" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {""} <input type="lastname" placeholder="LAST NAME" class="ship-form-lastname" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                </div>

                                <div class="section colm colm6">

                                </div>
                            </div>

                            <div>
                                <input type="Address" placeholder="ADDRESS" class="ship-form-Address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <br />
                            </div>
                            <div className='ship-CSP'>
                                <input type="city" placeholder="CITY" class="ship-form-city" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div class="mb-3">
                                    <select id="disabledSelect" class="ship-form-state">
                                        <option>STATE</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="pincode" placeholder="PINCODE" class="ship-form-pincode" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    <input type="phone" placeholder="PHONE" class="ship-form-phone" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>

                            <div class="form-check ship-check1">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                    Save this information for next time
                                </label>
                            </div>

                            <button className='ship-form-okbtn'>Continue to shipping</button>



                        </div>





                        <div class="col-6">.col-6
                        
                        
                        </div>
                    </div>
                </div>
            </div>


  


            <div className='shiping-footer'>
                <Footer />
            </div>



        </>

    )
}

export default Shiping
