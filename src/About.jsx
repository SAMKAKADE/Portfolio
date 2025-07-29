import styles from "./About.module.css";
import img1 from "./images/MainSection1.png";
import { SiApplemusic } from "react-icons/si";
import { MdOutlineTravelExplore, MdOutlineSportsCricket } from "react-icons/md";
import { RiMovieAiFill } from "react-icons/ri";

function About() {
    return (
        <section
            id="about"
            className={`container-fluid py-5 ${styles.aboutSection}`}
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="700"
        >
            <article className={`row ${styles.About}`}>
                {/* Image Section */}
                <div className={`col-12 col-md-6 col-lg-5 ${styles.Main1}`}>
                    <img
                        src={img1}
                        className="img-fluid rounded"
                        alt="About Samarth"
                        loading="lazy"
                    />
                </div>

                {/* Content Section */}
                <div className={`col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ${styles.content}`}>
                    <p className={`text-center fw-bold fs-5 ${styles.introText}`}>MY INTRO</p>
                    <h2 className={`fw-bold mb-3 text-center ${styles.whiteText}`}>About Me</h2>
                    <p className={styles.whiteText}>
                        Hi, I'm Samarth Kakade, a BE Engineering graduate and passionate Full Stack Developer.
                        I specialize in building responsive, scalable web applications using modern technologies.
                        I enjoy turning complex problems into elegant solutions and constantly strive to improve my skills.
                    </p>

                    <address className={`mt-4 ${styles.whiteText}`}>
                        <p><strong>Name:</strong> <span className={styles.textHighlight}>Mr. Kakade Samarth Ramesh</span></p>
                        <p><strong>Date of Birth:</strong> <span className={styles.textHighlight}>July 07, 2004</span></p>
                        <p><strong>Address:</strong> <span className={styles.textHighlight}>Pune, Maharashtra</span></p>
                        <p><strong>Zip code:</strong> <span className={styles.textHighlight}>413709</span></p>
                        <p><strong>Email:</strong> <span className={styles.textHighlight}>samarthkakade11@gmail.com</span></p>
                        <p><strong>Phone:</strong> <span className={styles.textHighlight}>+91-8767715551</span></p>
                    </address>

                    {/* Hobbies */}
                    <section className={`d-flex justify-content-between mt-4 ${styles.iconGroup}`}>
                        <div className="text-center">
                            <SiApplemusic />
                            <p className="m-0">Music</p>
                        </div>
                        <div className="text-center">
                            <MdOutlineTravelExplore />
                            <p className="m-0">Travel</p>
                        </div>
                        <div className="text-center">
                            <RiMovieAiFill />
                            <p className="m-0">Movie</p>
                        </div>
                        <div className="text-center">
                            <MdOutlineSportsCricket />
                            <p className="m-0">Sports</p>
                        </div>
                    </section>
                </div>
            </article>
        </section>
    );
}

export default About;
