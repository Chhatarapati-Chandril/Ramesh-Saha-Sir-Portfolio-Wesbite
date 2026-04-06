import React from "react";

function StudentSupervison() {
  return (
    <div id="student-supervison" style={{ padding: "80px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Student Supervision
      </h2>

      <p style={{ maxWidth: "900px", margin: "0 auto 30px", textAlign: "center" }}>
        The following students have successfully completed their B.Tech projects
        under the guidance of Dr. Ramesh Saha, Department of Information Technology.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Sl. No</th>
              <th style={thStyle}>Title of the Project</th>
              <th style={thStyle}>Name of the Student</th>
              <th style={thStyle}>Roll Number</th>
              <th style={thStyle}>Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tdStyle}>1</td>
              <td style={tdStyle}>
                Seamless data transmission through wireless body area networks for e-healthcare systems
              </td>
              <td style={tdStyle}>Sourabh Das<br/>Bhabesh Kalita</td>
              <td style={tdStyle}>170103026<br/>170103036</td>
              <td style={tdStyle}>Aug 2021</td>
            </tr>

            <tr>
              <td style={tdStyle}>2</td>
              <td style={tdStyle}>Automated car parking system using IoT</td>
              <td style={tdStyle}>Manalisha Talukdar<br/>Reekha Gogoi</td>
              <td style={tdStyle}>180402001<br/>180402003</td>
              <td style={tdStyle}>Aug 2021</td>
            </tr>

            <tr>
              <td style={tdStyle}>3</td>
              <td style={tdStyle}>Library Management System</td>
              <td style={tdStyle}>Abhishek Deka<br/>Koushik Deka</td>
              <td style={tdStyle}>170102032<br/>170102013</td>
              <td style={tdStyle}>Aug 2021</td>
            </tr>

            <tr>
              <td style={tdStyle}>4</td>
              <td style={tdStyle}>
                Study and implement indoor mobility solution for healthcare environment
              </td>
              <td style={tdStyle}>Mrigakshi Chetia<br/>Mrinmoyee Chetia</td>
              <td style={tdStyle}>160102033<br/>160103042</td>
              <td style={tdStyle}>June 2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  background: "#f5f5f5",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

export default StudentSupervison;