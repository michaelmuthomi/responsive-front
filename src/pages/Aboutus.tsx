import React from "react"
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Aboutus = ():JSX.Element => {

return(
    <>
        <div className="yellowBlock"></div>

        <Header />
        <div className="h-auto p-5 mt-10 ">
            <div className="md:w-4/6 m-auto flex md:flex-row flex-col gap-2">
                <div className="md:w-3/5 md:p-5 flex justify-center">
                    <img className="rounded-md shadow-md shadow-yellow-300" src="./aboutus_image1.webp" alt="about us"></img>
                </div>
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

                            <div className="md:w-2/5 md:p-5 flex justify-center">
                                <img className="rounded-md shadow-md shadow-yellow-300" src="./aboutus_image1.webp" alt="about us"></img>
                            </div>
                        </div>
                    </div>

                <div className="md:w-4/6 m-auto flex flex-col gap-2 mt-10">
                    <div className="w-full flex justify-center">
                        <h2 className="text-4xl font-bold text-yellow-300 bg-blue-400 md:w-[200px] w-4/5 text-center rounded-2xl p-3">Our people</h2>
                    </div>

                    <div className="flex md:flex-row flex-col w-full md:justify-between items-center mt-10 gap-[20px]">
                        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center">
                            <img className="rounded-full w-[250px] h-[250px]" src="./aboutus_image1.webp" alt="CEO" />
                            <p className="text-xl p-3 italic">CEO John Doe</p>
                        </div>
                        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center">
                            <img className="rounded-full w-[250px] h-[250px]" src="./aboutus_image1.webp" alt="CEO" />
                            <p className="text-xl p-3 italic">COO Johana Doe</p>
                        </div>
                        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center">
                            <img className="rounded-full w-[250px] h-[250px]" src="./aboutus_image1.webp" alt="CEO" />
                            <p className="text-xl p-3 italic">Medical Head Dr. Doe Lius</p>
                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col w-full justify-center mt-10 md:gap-[200px] gap-[20px] items-center">
                        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center">
                            <img className="rounded-full w-[250px] h-[250px]" src="./aboutus_image1.webp" alt="CEO" />
                            <p className="text-xl p-3 italic">Product owner <a href="https://github.com/anicmarko9">@anicmarko9</a></p>
                        </div>
                        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center">
                            <img className="rounded-full w-[250px] h-[250px]" src="./aboutus_image1.webp" alt="CEO" />
                            <p className="text-xl p-3 italic">Developer <a href="https://www.bellodev.com">@BelloDev</a></p>
                        </div>
                    </div>

                </div>
                
                
        </div>
        <Footer />

    </>
)

}

export default Aboutus