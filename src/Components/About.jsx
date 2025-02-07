
function About() {
    const skills = [
        { name: "HTML", level: 100 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 75 },
        { name: "Bootstrap", level: 95 },
        { name: "Responsive Web Design", level: 85 },
    ];

    return (
        <div className='aboutPage'>

            <div className="text-center">
                <h1 className="fw-bold pt-4 pb-4 aboutHeader">ABOUT <span className="colortext">ME</span></h1>
                <i className="fa fa-address-card addressCard colortext"></i>
                <div className="l1"></div>
                <div className="l2"></div>
            </div>

            <div className='about-profile_img_cont'>
                <img src="../public/images/100kb.jpg" alt="profile-img" className='aboutprofileImg' />
            </div>

            <div className="row mt-4 mediaRow firstrow">
                <div className="mb-3"><i className="fa fa-info-circle "></i><span className="ms-2 fw-bold font">PERSONAL INFO</span></div>
                <div className="col-12">
                    <p className="paragraph">
                        <strong>Hi, I’m Emmanuel Chukwuebuka Ndeche 👋</strong><br />
                        I’m a dedicated and creative <strong>Frontend Web Developer</strong> and <strong>UI/UX
                            Designer </strong>with a strong foundation in building user-focused, visually engaging
                        websites and applications. With expertise in <strong>HTML</strong>,
                        <strong> CSS</strong>, <strong>JavaScript</strong>, <strong>Bootstrap</strong>, and <strong>React</strong>.
                        I specialize in crafting digital solutions that are not only functional but also
                        aesthetically pleasing.
                    </p>
                </div>
            </div>

            <div className="row mt-4 mediaRow">
                <div className="mb-2"><i className="fa fa-graduation-cap"></i><span className="ms-2 fw-bold font">EDUCATION</span></div>
                <div className="col-12">
                    <p className="paragraph">
                        I graduated in <strong>2024</strong> from <strong>Nnamdi Azikiwe University</strong> with a
                        degree in <strong>Computer Science</strong>. During my academic journey, I developed a solid
                        foundation in programming and design principles, and further refined my skills during my
                        industrial training at <strong>Digitanotion System</strong>, the leading tech
                        firm in Awka. There, I gained experience delivering real-world tech solutions and
                        collaborating with a professional team.
                        I am deeply interested in
                        <strong> cybersecurity</strong> and aspire to become a leader in the field while building my
                        own tech company in the future.
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="mb-2 miniHeader"><i className="fa fa-laptop-code"></i><span className="ms-2 fw-bold font">MY SKILLS</span></div>
                {skills.map((skill, index) => (
                    <div key={index} className="col-md-6 mb-3">
                        <p className="mb-1 paragraph">{skill.name}</p>
                        <div className="progress" style={{ height: "10px" }}>
                            <div className="progress-bar ty" style={{ width: `${skill.level}%`, backgroundColor: "orange" }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row mt-4">
                <div className="mb-2 miniHeader"><i className="fa fa-briefcase"></i><span className="ms-2 fw-bold font">EXPERIENCE</span></div>
                <div className="col-md-6 paragraph">
                    <p>During my time at Digitanotion System, I:</p>
                    <ul>
                        <li>Worked on creating responsive websites for clients.</li>
                        <li>Collaborated on user interface designs for improved user experiences.</li>
                        <li>Assisted in developing innovative web solutions to meet business needs.</li>
                    </ul>
                </div>
                <div className="col-md-6 paragraph">
                    <p>I’ve built numerous personal projects to sharpen my skills, including:</p>
                    <ul>
                        <li>A Blackjack Game</li>
                        <li>An Image Slider</li>
                        <li>A Color Flipper</li>
                        <li>A Modal Project</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-4">
                <div className="mb-2 miniHeader"><i className="fa fa-bullseye"></i><span className="ms-2 fw-bold font">MY MISSION</span></div>
                <div className="col-12">
                    <p className="paragraph">
                        I aim to create impactful digital experiences that help businesses and individuals
                        bring their ideas to life. Whether it’s designing a user-friendly website or building
                        a complex application, I’m driven by innovation and excellence.
                    </p>
                </div>
            </div>
            <hr className="my-5"/>

            <div className="row py-4">
                <div className="col-md-4 mt-5 text-center">
                    <i className="fa fa-briefcase plus0"></i>
                    <h1 className="plus">3+</h1>
                    <p className="plus2">YEARS EXPERIENCE</p>
                </div>
                <div className="col-md-4 mt-5 text-center">
                    <i className="fa fa-code plus0"></i>
                    <h1 className="plus">50+</h1>
                    <p className="plus2">PROJECTS</p>
                </div>
                <div className="col-md-4 mt-5  text-center">
                    <i className="fa fa-thumbs-up plus0"></i>
                    <h1 className="plus">90%</h1>
                    <p className="plus2">CLIENT SATISFACTION</p>
                </div>
            </div>

        </div>
    )
}
export default About