function ProjectCard({img, title, text, href1, href2, link1, link2}) {

    return(
        <div className="card mt-3">
                        <img src={img} className="card-img-top" alt="Project-Image" loading="lazy"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                            <a href={href1} className="view_btn project_btn" target="_blank" rel="noopener noreferrer">{link1}</a>
                            <a href={href2} className="code_btn project_btn" target="_blank" rel="noopener noreferrer">{link2}</a>
                        </div>
                    </div>
    )
}
export default ProjectCard