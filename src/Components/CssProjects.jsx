import ProjectCard from "./PortfolioCard"
function CssProjects() {

    return(
        <section className="mt-4 pb-5" id='css'>
            <div>
                <div className="csslines mb-3"></div>
                <div className="row">
                    <div>
                        <h5 className="cssHead">CSS Showcase</h5>
                        <p className="css_project_sub">This section contains projects I built while honing my CSS skills.</p>
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${process.env.PUBLIC_URL}/images/css_cform.png`}
                            title='Contact Form'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/contact_form"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${process.env.PUBLIC_URL}/images/tesla.png`}
                            title='Blog Project'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/css_project2"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${process.env.PUBLIC_URL}/images/html_table.png`}
                            title='HTML Tags Table'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/css_project"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${process.env.PUBLIC_URL}/images/music.png`}
                            title='Music Site'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2=""
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${process.env.PUBLIC_URL}/images/flexbox1.png`}
                            title='Flexbox Project1'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/flexbox_project1"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${process.env.PUBLIC_URL}/images/flexbox2.png`}
                            title='Flexbox Project2'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/flexbox_project2"
                            link1={<i className="fas fa-ban"></i>} link2='Source Code' />
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${process.env.PUBLIC_URL}/images/myblog.png`}
                            title='Myblog Project'
                            text='A dynamic video background that can be paused or played with the click of a
                                button. This project highlights the integration of HTML,
                                CSS, and JavaScript to create an interactive and engaging user experience.'
                            href1={void(0)}
                            href2="https://github.com/ChukwuebukaNdeche/myblog"
                            link1 = {<i className="fas fa-ban"></i>}
                            link2='Source Code' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CssProjects