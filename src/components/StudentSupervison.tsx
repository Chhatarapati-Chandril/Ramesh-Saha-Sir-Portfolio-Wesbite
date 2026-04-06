import React from "react";
import "../assets/styles/academic-student.scss";

function StudentSupervison() {
  return (
    <div id="student-supervison" className="section-container">
      <h2>Student Supervision</h2>

      <p>
        The following students have successfully completed their B.Tech projects
        under the guidance of Dr. Ramesh Saha, Department of Information Technology.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Title of the Project</th>
              <th>Name of the Student</th>
              <th>Roll Number</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Seamless data transmission through wireless body area networks for e-healthcare systems</td>
              <td>Sourabh Das<br/>Bhabesh Kalita</td>
              <td>170103026<br/>170103036</td>
              <td>Aug 2021</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Automated car parking system using IoT</td>
              <td>Manalisha Talukdar<br/>Reekha Gogoi</td>
              <td>180402001<br/>180402003</td>
              <td>Aug 2021</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Library Management System</td>
              <td>Abhishek Deka<br/>Koushik Deka</td>
              <td>170102032<br/>170102013</td>
              <td>Aug 2021</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Study and implement indoor mobility solution for healthcare environment</td>
              <td>Mrigakshi Chetia<br/>Mrinmoyee Chetia</td>
              <td>160102033<br/>160103042</td>
              <td>June 2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentSupervison;