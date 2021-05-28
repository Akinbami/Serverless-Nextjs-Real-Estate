import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../components/Layout'

export default function FAQS() {
  return (
    <Layout>
      <div className="landing-jumboton">
        <p className="about-jumbotron-text mx-auto">Frequently Asked Questions</p>
      </div>
      

      <div className="faq-section">
          <div className="faq-section-inner mx-auto">
              <p className="faq-header">1. Room booking</p>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">How do I book?</span>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex justify-content-start">
                                <p className="faq-bullet-2">A.</p>
                                <p className="faq-answer px-3"><b>All utilities</b> – electric, gas and water – are included in the rent on a ‘fair usage allowance’ with hot water available 24-hours per day.<br /><br />

                                    <b>Heaters</b> are controlled individually by the tenants in their rooms.<br /><br />

                                    <b>High-speed internet and Wi-Fi</b> throughout the building, including bedrooms and ethernet cable connection in bedrooms<br /><br />

                                    <b>Exclusive access</b> to all social spaces in your accommodation</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">Who is eligible to book with The Pod Living?</span>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">What is the booking process?</span>
                    
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">Can I choose who I share a room with?</span>
                    
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
          </div>
        
          <div className="faq-section-inner mx-auto">
              <p className="faq-header">2. Room Viewings</p>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">Can I view the rooms virtually?</span>
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex justify-content-start">
                                <p className="faq-bullet-2">A.</p>
                                <p className="faq-answer px-3"><b>All utilities</b> – electric, gas and water – are included in the rent on a ‘fair usage allowance’ with hot water available 24-hours per day.<br /><br />

                                    <b>Heaters</b> are controlled individually by the tenants in their rooms.<br /><br />

                                    <b>High-speed internet and Wi-Fi</b> throughout the building, including bedrooms and ethernet cable connection in bedrooms<br /><br />

                                    <b>Exclusive access</b> to all social spaces in your accommodation</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">When is your show apartment open?</span>
                    </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                
            </div>
          </div>
        
          <div className="faq-section-inner mx-auto">
              <p className="faq-header">3. Rent Payments</p>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">How much is the Advanced License Fee?</span>
                    </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex justify-content-start">
                                <p className="faq-bullet-2">A.</p>
                                <p className="faq-answer px-3"><b>All utilities</b> – electric, gas and water – are included in the rent on a ‘fair usage allowance’ with hot water available 24-hours per day.<br /><br />

                                    <b>Heaters</b> are controlled individually by the tenants in their rooms.<br /><br />

                                    <b>High-speed internet and Wi-Fi</b> throughout the building, including bedrooms and ethernet cable connection in bedrooms<br /><br />

                                    <b>Exclusive access</b> to all social spaces in your accommodation</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">What is your cancellation policy?</span>
                    </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">Do I have to pay a damage deposit?</span>
                    
                    </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                
            </div>
          </div>
        
          <div className="faq-section-inner mx-auto">
              <p className="faq-header">34. What’s Included</p>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEleven">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">What bills do I have to pay?</span>
                    </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex justify-content-start">
                                <p className="faq-bullet-2">A.</p>
                                <p className="faq-answer px-3"><b>All utilities</b> – electric, gas and water – are included in the rent on a ‘fair usage allowance’ with hot water available 24-hours per day.<br /><br />

                                    <b>Heaters</b> are controlled individually by the tenants in their rooms.<br /><br />

                                    <b>High-speed internet and Wi-Fi</b> throughout the building, including bedrooms and ethernet cable connection in bedrooms<br /><br />

                                    <b>Exclusive access</b> to all social spaces in your accommodation</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">Is bedding included?</span>
                    </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                    <span className="faq-bullet-1">Q.</span><span className="faq-question px-2">Is there WiFi?</span>
                    
                    </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                
            </div>
          </div>
        
          
      </div>

      
    </Layout>
  )
}
