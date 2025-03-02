import ProjectCardVideo from "./PortfolioCardVideo"
import ProjectCard from "./PortfolioCard" 

function ReactProject() {

    return (
        <section className="mt-4 pb-5" id='react'>
            <div className="">
                <div className="row">
                    <div>
                        <h5 className="reactHead">React Showcase</h5>
                        <p className="react_sub_head">This section contains projects I built using React.</p>
                    </div>

                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051042686?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Random Joke generator'
                            text='A fun and engaging React-based Random Joke Generator that fetches and displays a new joke every 
                            time the button is clicked. This project utilizes an external API to retrieve jokes and showcases 
                            dynamic content updates. Its an excellent demonstration of working with APIs, handling asynchronous 
                            data, and creating an interactive user experience.'
                            href1="https://chukwuebukandeche.github.io/quote-generator/"
                            href2="https://github.com/ChukwuebukaNdeche/quote-generator"
                            link1='View Live' link2='Source Code' />

                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051046852?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Ip Address Finder'
                            text='A React-based IP Address Finder app that provides information about a users 
                            IP address. The app fetches data from an API to display the users IP address, location, and other 
                            relevant details. Additionally, it retrieves the users longitude and latitude coordinates to display their
                            location on an interactive map.'
                            href1="https://chukwuebukandeche.github.io/ip-address-finder/"
                            href2="https://github.com/ChukwuebukaNdeche/ip-address-finder"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051044529?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Domain name Checker'
                            text='A React-based Domain Name Generator app that helps users generates domain names 
                            effortlessly. Users can input a keyword or phrase, and the app generates multiple domain name suggestions. 
                            Each generated name is clickable, redirecting users to a domain name platform where they can check the 
                            availability of the domain. '
                            href1="https://chukwuebukandeche.github.io/check_domain_name/"
                            href2="https://github.com/ChukwuebukaNdeche/check_domain_name"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051041547?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Todo List'
                            text='A dynamic React-based Todo List app that enables users to manage their tasks. Users can 
                            add new tasks, delete existing ones, and reorder tasks within the list. The app ensures an 
                            organized experience for users looking to track and prioritize their daily activities. This project demonstrates my 
                            skills in handling dynamic lists, managing state in React, and providing an intuitive task management experience.'
                            href1="https://chukwuebukandeche.github.io/my-todo/"
                            href2="https://github.com/ChukwuebukaNdeche/my-todo"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCard
                            img={`${import.meta.env.BASE_URL}/images/porfolio.png`}
                            title='First Portfolio'
                            text='A Porfolio website built using react and bootstrap, making it responsive 
                            and adjust to all screen sizes.'
                            href1="https://chukwuebukandeche.github.io/portfolio-app/"
                            href2={void(0)}
                            link1='View Live' link2={<i className="fas fa-ban"></i>} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051050035?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Password Stength Checker'
                            text='A robust React-based Password Strength Checker app that ensures users create strong and secure 
                            passwords. The app evaluates the strength of a password entered by the user based on specific criteria: 
                            it must include at least one number, one symbol, one uppercase letter, and one lowercase letter. The app 
                            provides immediate feedback, helping users enhance their password security.'
                            href1="https://chukwuebukandeche.github.io/check-password-strength/"
                            href2="https://github.com/ChukwuebukaNdeche/check-password-strength"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051044566?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Form Project'
                            text='A React-based User Input Form that captures and displays user input upon 
                            submission. The app allows users to enter information into a form, which is then displayed on the screen 
                            after clicking the submit button. Additionally, users can reset the form and clear the input fields with 
                            the reset button. This project demonstrates basic form handling, event management, and state manipulation 
                            in React.'
                            href1="https://chukwuebukandeche.github.io/form-project/"
                            href2="https://github.com/ChukwuebukaNdeche/form-project"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051042654?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Count App'
                            text='A simple and interactive React-based Counter App that allows users to increment, decrement, or 
                            reset a counter value. This project demonstrates state management in React and showcases dynamic UI 
                            updates based on user interactions. The intuitive design ensures seamless functionality, making it a 
                            great example of handling user events and updating the application state in real-time.'
                            href1="https://chukwuebukandeche.github.io/count_app/"
                            href2="https://github.com/ChukwuebukaNdeche/count_app"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1051040763?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='Digital Clock'
                            text='A sleek and functional digital clock built with React that displays the current time in real-time. 
                            The clock updates every second, offering an accurate and responsive display of the time in a user-friendly 
                            format. This project showcases my ability to work with state management and time-related functionality in 
                            React.'
                            href1="https://chukwuebukandeche.github.io/my-clock/"
                            href2="https://github.com/ChukwuebukaNdeche/my-clock"
                            link1='View Live' link2='Source Code' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <ProjectCardVideo
                            vid="https://player.vimeo.com/video/1050518542?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;&loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
                            title='About App'
                            text='A React-based About Page that dynamically displays content based on user interaction. 
                            The page includes three buttons, each associated with different content, which is displayed when the 
                            respective button is clicked. This project demonstrates my skills in handling user events, conditionally 
                            rendering components, and creating smooth, user-friendly experiences.'
                            href1="https://chukwuebukandeche.github.io/about-project/"
                            href2="https://github.com/ChukwuebukaNdeche/about-project"
                            link1='View Live' link2='Source Code' />
                    </div>

                </div>


            </div>
        </section >
    )
}
export default ReactProject