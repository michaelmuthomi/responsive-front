import React from "react"
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProfilePics from "../components/AboutUs/ProfilePics"

const AboutUs = ():JSX.Element => {

return(
    <>
        <div className="yellowBlock"></div>

        <Header />
        <div className="h-auto p-5 mt-10 ">
            <div className="md:w-4/6 m-auto flex md:flex-row flex-col gap-2">
                <figure className="md:w-3/5 md:p-5 flex justify-center">
                    <img className="rounded-md shadow-md shadow-yellow-300" src="./aboutus_image1.webp" alt="about us"></img>
                </figure>
                <div className="md:w-2/5 md:p-5 ">
                    <div className="w-full flex justify-center">
                        <h2 className="text-4xl font-bold text-yellow-300 bg-blue-400 md:w-[200px] w-4/5 text-center rounded-2xl p-3">About us</h2>
                        </div>
                    <p className="text-xl text-justify"><span className="font-bold text-4xl text-blue-400">L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam aspernatur expedita facilis consectetur beatae.</p>
                    <p className="mt-5 text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam aspernatur expedita facilis consectetur beatae.</p>
                </div>
            </div>

            <div className="h-auto md:p-5 md:mt-10 mt-3 ">
                        <div className="md:w-4/6 m-auto flex md:flex-row flex-col gap-2">
                            
                            <div className="md:w-3/5 md:p-5">
                                <div className="w-full flex justify-center">
                                    <h2 className="text-4xl font-bold text-yellow-300 bg-blue-400 md:w-[300px] w-4/5 text-center rounded-2xl p-3">Changing lives</h2>
                                </div>
                                <p className="text-xl text-justify"><span className="font-bold text-4xl text-pink-400">L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam aspernatur expedita facilis consectetur beatae.</p>
                                <p className="mt-5 text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam aspernatur expedita facilis consectetur beatae.</p>
                            </div>

                            <figure className="md:w-2/5 md:p-5 flex justify-center">
                                <img className="rounded-md shadow-md shadow-yellow-300" src="./aboutus_image1.webp" alt="about us"></img>
                            </figure>
                        </div>
                    </div>

                <div className="md:w-4/6 m-auto flex flex-col gap-2 mt-10">
                    <div className="w-full flex justify-center">
                        <h2 className="text-4xl font-bold text-yellow-300 bg-blue-400 md:w-[200px] w-4/5 text-center rounded-2xl p-3">Our people</h2>
                    </div>

                    <div className="flex md:flex-row flex-col w-full md:justify-between items-center mt-10 gap-[20px]">
                        
                        <ProfilePics 
                            positionAndName={"CEO John Doe"}
                            imgSrc={"./aboutus_image1.webp"} 
                            href={""}
                            nickName={""}
                        />
                        <ProfilePics 
                            positionAndName={"COO Johana Doe"}
                            imgSrc={"./aboutus_image1.webp"} 
                            href={""}
                            nickName={""}
                        />
                        <ProfilePics 
                            positionAndName={"Medical Head Dr. Doeliuos"}
                            imgSrc={"./aboutus_image1.webp"} 
                            href={""}
                            nickName={""}
                        />

                      
                    </div>

                    <div className="flex md:flex-row flex-col w-full justify-center mt-10 md:gap-[200px] gap-[20px] items-center">
                        <ProfilePics
                            positionAndName={"Product Owner"}
                            imgSrc={"./aboutus_image1.webp"}
                            href={"https://github.com/anicmarko9"}
                            nickName={"@anicmarko9"}
                        />

                        <ProfilePics
                            positionAndName={"Developer"}
                            imgSrc={"./aboutus_image1.webp"}
                            href={"https://www.bellodev.com"}
                            nickName={"@BelloDev"}
                        />
                    </div>

                </div>
                
                
        </div>
        <Footer />

    </>
)

}

export default AboutUs