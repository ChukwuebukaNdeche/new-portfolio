
function Contacts() {

    return (
        <div className="contactPage">
            <div className="text-center mb-5">
                <h1 className="fw-bold pt-4 pb-4 contactHeader">CONTACT <span className="colortext">ME</span></h1>
                <i className="fa fa-address-book addressBook colortext"></i>
                <div className="l1"></div>
                <div className="l2"></div>
            </div>

            <div className="row mt-4">

                <div className="col-md-5 mb-5">
                    <p className="mb-3 subHead">Feel free to reach out for collaborations, project inquiries, or a contract</p>
                    <div className="leftContact-bg">
                        <div className="mt-2">
                            <div className="mb-3">
                                <strong>Email:</strong><br />
                                <a className="contactLink"
                                    href="mailto:emmanuelndeche@gmail.com" target="_blank" rel="noopener noreferrer">emmanuelndeche@gmail.com
                                </a>
                            </div>

                            <div className="mb-3">
                                <strong>Phone Number: </strong><br />
                                <a className="contactLink"
                                    href="tel:+2438087332264" target="_blank" rel="noopener noreferrer">+234 808 733 2264
                                </a>
                            </div>

                            <div className="mb-3">
                                <p><strong>Location:</strong><br /> Awka, Anambra state. Nigeria</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h5><strong>Social Media Links</strong></h5>
                            <div className="mb-3">
                                <a className="contactLink" href="https://www.linkedin.com/in/chukwuebuka-ndeche-aa3867291/" target="_blank" rel="noopener noreferrer">
                                    <div className="about_icons mb-2"><i className="fab fa-linkedin"></i><span
                                        className="ms-2 fw-bold">LinkedIn</span></div>
                                </a>
                            </div>
                            <div className="mb-3">
                                <a className="contactLink" href="https://github.com/ChukwuebukaNdeche" target="_blank" rel="noopener noreferrer">
                                    <div className="about_icons mb-2"><i className="fab fa-github"></i><span
                                        className="ms-2 fw-bold">GitHub</span></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="right_contact">
                        <h5 className="mb-3">Contact form</h5>
                        <form action="https://formspree.io/f/xnnqwnjq" method="post" className="contact_form">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your full name"
                                    className="form-control" required
                                    onInvalid={(e) => e.target.setCustomValidity('Please enter your name')}
                                    onInput={(e) => e.target.setCustomValidity('')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email"
                                    className="form-control" required
                                    onInvalid={(e) => e.target.setCustomValidity('Please enter a valid email address')}
                                    onInput={(e) => e.target.setCustomValidity('')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" id="message" rows="4" placeholder="Write your message"
                                    className="form-control" required
                                    onInvalid={(e) => e.target.setCustomValidity('Message cannot be empty')}
                                    onInput={(e) => e.target.setCustomValidity('')}></textarea>
                            </div>
                            <button type="submit" className="contactBtn">Send Message</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contacts