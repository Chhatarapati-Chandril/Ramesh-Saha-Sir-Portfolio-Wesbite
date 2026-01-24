import React from "react";
import Healthcare from '../assets/images/Healthcare.jpg';
import Military from '../assets/images/Military.jpg';
import Parkisons from '../assets/images/Parkisons.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Sponsored Research Projects</h1>

            <div className="projects-grid">

                {/* Project 1 */}
                <div className="project">
                    <img
                        src={Healthcare}
                        className="zoom"
                        alt="Patient-in-Transit Healthcare"
                        width="100%"
                    />
                    <h2>
                        A Framework for Patient-in-Transit Healthcare
                    </h2>
                    <p>
                        AICTE-funded research project focused on ensuring seamless health
                        data transmission for patients during transit using IoT-enabled
                        healthcare systems. Role: <strong>Principal Investigator (PI)</strong>.
                        <br />
                        <br />
                        Funded by NPIU-MHRD, Govt. of India (₹14.95 Lakhs).
                    </p>
                </div>

                {/* Project 2 */}
                <div className="project">
                    <img
                        src={Military}
                        className="zoom"
                        alt="Soldier Health Monitoring"
                        width="100%"
                    />
                    <h2>
                        Seamless Health Monitoring of Soldiers Using ML
                    </h2>
                    <p>
                        Sponsored research project aimed at real-time monitoring and
                        analysis of soldiers’ health parameters using machine learning
                        techniques. Role: <strong>Co-Principal Investigator (Co-PI)</strong>.
                        <br />
                        <br />
                        Funded by NPIU-MHRD, Govt. of India (₹11.08 Lakhs).
                    </p>
                </div>

                {/* Project 3 */}
                <div className="project">
                    <img
                        src={Parkisons}
                        className="zoom"
                        alt="Parkinson Disease Classification"
                        width="100%"
                    />
                    <h2>
                        Classification & Identification of Parkinson’s Disease
                    </h2>
                    <p>
                        AICTE-sponsored healthcare analytics project focused on early
                        classification and identification of Parkinson’s Disease patients
                        for accurate treatment planning. Role:
                        <strong> Co-Principal Investigator (Co-PI)</strong>.
                        <br />
                        <br />
                        Funded by NPIU-MHRD, Govt. of India (₹5.33 Lakhs).
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
