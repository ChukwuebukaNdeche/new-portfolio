import React, { useRef } from "react"
import ReactProject from "./ReactProjects"
import JsProjects from "./JsProjects"
import CssProjects from "./CssProjects"
function Portfolio() {
    const containerRef = useRef(null);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section && containerRef.current) {
            containerRef.current.scrollTo({
                top: section.offsetTop - containerRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="portfolioPage" ref={containerRef} style={{ overflowY: "auto", maxHeight: "100vh" }}>
            <div className="scroll">
                    <button className="projectScroll" onClick={() => scrollToSection("react")}>REACT</button>
                    <button className="projectScroll" onClick={() => scrollToSection("js")}>JS</button>
                    <button className="projectScroll" onClick={() => scrollToSection("css")}>CSS</button>
                </div>
            <div className="text-center mb-5">
                <h1 className="fw-bold pt-5 pb-4 portfolioHeader">MY<span className="colortext"> PORTFOLIO</span></h1>
                <i className="fa fa-briefcase briefCase colortext"></i>
                <div className="l1"></div>
                <div className="l2"></div>
                
            </div>

            <div id="react">
                <ReactProject />
            </div>
            <div id="js">
                <JsProjects />
            </div>
            <div id="css">
                <CssProjects />
            </div>
        </div>
    )
}
export default Portfolio