import React, { useState } from "react";
function ProjectCardVideo({ vid, title, text, href1, href2, link1, link2 }) {

    const [isLoading, setIsLoading] = useState(true);

    const handleVideoLoad = () => {
        setIsLoading(false); // Hide the spinner when the video is ready
    }
    return (
        <div className="card  mt-3 ">

            {isLoading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <div
                className={isLoading ? "d-none" : "card-img-top"}
                style={{ display: isLoading ? "none" : "block" }}
            ></div>

            <iframe className="card-img-top embed-responsive-item"
                src={vid}
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                onLoad={handleVideoLoad} // Detect when the iframe has loaded
                title="Untitled">
                Your browser does not support iframes, or the video cannot be loaded.
            </iframe>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={href1} className="view_btn project_btn" target="_blank" rel="noopener noreferrer">{link1}</a>
                <a href={href2} className="code_btn project_btn" target="_blank" rel="noopener noreferrer">{link2}</a>
            </div>
        </div>
    )
}
export default ProjectCardVideo
