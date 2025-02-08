import React, { useState } from "react"
import About from "../Components/About"
import Portfolio from "../Components/Portfolio"
import Contacts from "../Components/Contacts"


function Home() {
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isShowAboutContent, setIsShowAboutContent] = useState(false);//State to delay about  content
    const [isShowPortfolioContent, setIsShowPortfolioContent] = useState(false);//State to delay portfolio  content
    const [isShowContactContent, setIsShowContactContent] = useState(false);//State to delay contact  content



    function openAbout() {
        if (!isAboutOpen) {
            setIsAboutOpen(true);
            // Delay the display of the About content after 0.5 seconds
            setTimeout(() => {
                setIsShowAboutContent(true);
            }, 500); // 0.5 seconds delay to show content
            console.log("Open About triggered");
        }
    }
    function closeAboutPage() {//Close about page
        //event.stopPropagation();
        console.log("Close About triggered");
        setIsAboutOpen(false);
        setIsShowAboutContent(false); // Hide the content immediately when closed
    }

    function openPortfolio() {
        if (!isPortfolioOpen) {
            setIsPortfolioOpen(true);
            // Delay the display of the About content after 0.5 seconds
            setTimeout(() => {
                setIsShowPortfolioContent(true);
            }, 500); // 0.5 seconds delay to show content
            console.log("Open About triggered");
        }
    }
    function closePortfolioPage() {//Close about page
        //event.stopPropagation();
        console.log("Close About triggered");
        setIsPortfolioOpen(false);
        setIsShowPortfolioContent(false); // Hide the content immediately when closed
    }


    function openContact() {
        if (!isContactOpen) {
            setIsContactOpen(true);
            // Delay the display of the Contact content after 0.5 seconds
            setTimeout(() => {
                setIsShowContactContent(true);
            }, 500); // 0.5 seconds delay to show content
            console.log("Open About triggered");
        }
    }
    function closeContactPage() {//Close about page
        //event.stopPropagation();
        console.log("Close About triggered");
        setIsContactOpen(false);
        setIsShowContactContent(false); // Hide the content immediately when closed
    }



    return (<>
        <div className="page">
            <div className='profile_img_cont'>
                <img src={`${import.meta.env.BASE_URL}/images/100kb.jpg`} alt="profile-img" className='profileImg' />
            </div>
            <div className='right_content'>
                {/*************** Intro section ****************/}
                <div className='sections section1 intro'>
                    <div className="text-white text-center name">
                        <p className="fw-bold">HI THERE, I'M</p>
                        <h2 className="myName"><b>EMMANUEL NDECHE</b></h2>
                        <h4 className="typing">FRONTEND DEVELOPER</h4>
                    </div>
                </div>

                {/*************** About section ****************/}
                <div onClick={openAbout} className={`sections section2 ${isAboutOpen ? 'openSection' : ''}`} >
                    <div className="sectionH">
                        <h2 className={`nav ${isAboutOpen ? 'hide-content' : ''}`}>
                            <b>ABOUT <span className="colortext">ME</span></b>
                        </h2>
                    </div>
                    {isAboutOpen && (
                        <div className={`about-content ${isShowAboutContent ? 'show' : ''}`}>
                            <i className="fa fa-times close-aboutIcon " onClick={closeAboutPage}></i>
                            <About />
                        </div>
                    )}
                </div>

                {/*************** Portfolio section ****************/}
                <div onClick={openPortfolio} className={`sections section3 ${isPortfolioOpen ? 'openSection' : ''}`}>
                    <div className="sectionH">
                        <h2 className={`nav ${isPortfolioOpen ? 'hide-content' : ''}`}>
                            <b>MY <span className="colortext">PORTFOLIO</span></b>
                        </h2>
                    </div>
                    {isPortfolioOpen && (
                        <div className={`portfolio-content ${isShowPortfolioContent ? 'show' : ''}`}>
                            <i className="fa fa-times close-portfolioIcon " onClick={closePortfolioPage}></i>
                            <Portfolio />
                        </div>
                    )}
                </div>

                {/*************** Contact section ****************/}
                <div onClick={openContact} className={`sections section4 ${isContactOpen ? 'openSection' : 'null'}`}>
                    <div className="sectionH">
                        <h2 className={`nav ${isContactOpen ? 'hide-content' : ''}`}>
                            <b>CONTACT <span className="colortext">ME</span></b>
                        </h2>
                    </div>
                    {isContactOpen && (
                        <div className={`contact-content ${isShowContactContent ? 'show' : ''}`}>
                            <i className="fa fa-times close-contactIcon " onClick={closeContactPage}></i>
                            <Contacts />
                        </div>
                    )}
                </div>


            </div>
        </div>
    </>)
}
export default Home
