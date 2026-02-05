import React from "react";
import "../assets/styles/research-publications.scss";

type JournalArticle = {
  authors: string;
  title: string;
  venue: string;
  details: string;
  doi?: string;
};

const journalArticles: JournalArticle[] = [
  {
    authors: "A. Das, R. Rai, B. Sasmal, K. G. Dhal, R. A. Khurma, and R. Saha",
    title:
      "Metaheuristic algorithms since 2020: Development, taxonomy, analysis, and applications",
    venue: "Archives of Computational Methods in Engineering",
    details: "pp. 1–69, 2025",
  },
  {
    authors: "K. G. Dhal, A. Das, T. Bharasa, B. Sasmal, and R. Saha",
    title: "A comprehensive survey on runge kutta optimizer",
    venue: "Archives of Computational Methods in Engineering",
    details: "pp. 1–40, 2025",
  },
  {
    authors: "Ramesh Saha et al.",
    title:
      "Swast khoj: An IoT-driven real-time health monitoring system prototype",
    venue: "Internet of Things",
    details: "p. 101796, 2025",
  },
  {
    authors: "S. Saif and R. Saha",
    title:
      "M-EEMH: An energy-efficient mobility aware multi-hop protocol for QoS-driven WBAN applications",
    venue: "Cluster Computing",
    details: "vol. 28, no. 10, p. 670, 2025",
  },
  {
    authors: "B. Sasmal, R. Saha et al.",
    title:
      "Artificial hummingbird algorithm: Theory, variants, analysis, applications, and performance evaluation",
    venue: "Computer Science Review",
    details: "vol. 56, p. 100727, 2025, IF: 13.3, SCIE",
    doi: "https://doi.org/10.1016/j.cosrev.2025.100727",
  },
  {
    authors: "T. Pal, R. Saha, and S. Biswas",
    title:
      "Design and implementation of a routing protocol for VANET to improve the QoS of the network",
    venue: "Journal of Network and Systems Management",
    details:
      "vol. 32, no. 3, pp. 1–31, 2024, IF: 4.1, SCIE (Corresponding Author)",
    doi: "https://doi.org/10.1007/s10922-024-09821-z",
  },
  {
    authors: "R. Saha, L. Malviya, A. Jadhav, and R. Dangi",
    title:
      "Early stage HIV diagnosis using optimized ensemble learning technique",
    venue: "Biomedical Signal Processing and Control",
    details: "vol. 89, p. 105787, 2024, IF: 4.9, SCIE",
    doi: "https://doi.org/10.1016/j.bspc.2023.105787",
  },
  {
    authors: "B. Sasmal, A. Das, K. G. Dhal, and R. Saha",
    title: "A comprehensive survey on African vulture optimization algorithm",
    venue: "Archives of Computational Methods in Engineering",
    details: "vol. 31, no. 3, pp. 1659–1700, 2024, IF: 9.9, SCIE",
    doi: "https://doi.org/10.1007/s11831-023-10034-x",
  },
  {
    authors: "B. Sasmal, A. G. Hussien, A. Das, K. G. Dhal, and R. Saha",
    title:
      "Reptile search algorithm: Theory, variants, applications, and performance evaluation",
    venue: "Archives of Computational Methods in Engineering",
    details: "vol. 31, no. 1, pp. 521–549, 2024, IF: 9.9, SCIE",
    doi: "https://doi.org/10.1007/s11831-023-09990-1",
  },
  {
    authors:
      "R. Saha, S. K. Bharadwaj, S. Saif, R. Ghosh, S. Biswas, and S. Karmakar",
    title:
      "Swast khoj: A real-time working prototype for vital healthcare monitoring system",
    venue: "Preprint",
    details: "2023",
    doi: "https://doi.org/10.21203/rs.3.rs-2890944/v2",
  },
  {
    authors: "S. Abuthahir, S. C. B. Jaganathan, and R. Saha",
    title:
      "An efficient enhanced dynamic load balancing weighted round robin algorithm for virtual machine in cloud computing",
    venue: "Journal of Algebraic Statistics",
    details: "vol. 13, no. 2, pp. 2121–2128, 2022",
  },
  {
    authors: "R. Ghosh et al.",
    title:
      "Sam 40: Dataset of 40 subject EEG recordings to monitor induced stress",
    venue: "Data in Brief",
    details: "vol. 40, p. 107772, 2022, IF: 1.0, ESCI",
    doi: "https://doi.org/10.1016/j.dib.2021.107772",
  },
  {
    authors: "S. Khanra, M. Kuila, S. Patra, R. Saha, and K. G. Dhal",
    title:
      "Survey on computational techniques for pigmented skin lesion segmentation",
    venue: "Optical Memory and Neural Networks",
    details: "vol. 31, no. 4, pp. 333–366, 2022, ESCI",
    doi: "https://doi.org/10.3103/S1060992X2204004X",
  },
  {
    authors: "T. Pal, R. Saha, and S. Biswas",
    title:
      "Sink mobility-based energy efficient routing algorithm variants in WSN",
    venue: "International Journal of Wireless Information Networks",
    details: "vol. 29, no. 3, pp. 373–392, 2022, ESCI",
    doi: "https://doi.org/10.1007/s10776-022-00557-8",
  },
  {
    authors: "S. Saif, R. Saha, and S. Biswas",
    title:
      "On development of MySignals based prototype for application in health vitals monitoring",
    venue: "Wireless Personal Communications",
    details: "vol. 122, no. 2, pp. 1599–1616, 2022, SCIE",
    doi: "https://doi.org/10.1007/s11277-021-08963-6",
  },
  {
    authors: "R. Saha, S. Biswas, S. Sarma, S. Karmakar, and P. Das",
    title:
      "Design and implementation of routing algorithm to enhance network lifetime in WBAN",
    venue: "Wireless Personal Communications",
    details: "vol. 118, pp. 961–998, 2021, SCIE",
    doi: "https://doi.org/10.1007/s11277-020-08054-y",
  },
  {
    authors: "R. Saha, S. Biswas, S. Sarmah, S. Karmakar, and P. Das",
    title:
      "A working prototype using DS18B20 temperature sensor and Arduino for health monitoring",
    venue: "SN Computer Science",
    details: "vol. 2, no. 1, p. 33, 2021, SCOPUS",
    doi: "https://doi.org/10.1007/s42979-020-00434-2",
  },
  {
    authors: "T. Das, R. Saha, and G. Saha",
    title:
      "Extracting and transforming heterogeneous data from XML files for big data",
    venue: "International Journal of Engineering and Advanced Technology",
    details: "vol. 9, no. 2, pp. 4276–4280, 2019, ESCI",
    doi: "https://10.35940/ijeat.B3438.129219",
  },
  {
    authors: "R. Saha, S. Naskar, S. Biswas, and S. Saif",
    title:
      "Performance evaluation of energy efficient routing with or without relay in medical body sensor network",
    venue: "Health and Technology",
    details: "vol. 9, no. 5, pp. 805–815, 2019, ESCI",
    doi: "https://doi.org/10.1007/s12553-019-00346-z",
  },
];

type ConferencePaper = {
  authors: string;
  title: string;
  venue: string;
  details: string;
  doi?: string;
  url?: string;
};

const conferencePapers: ConferencePaper[] = [
  {
    authors:
      "B. Sasmal, S. Biswas, R. Saha, K. G. Dhal, A. Das, and S. Pramanik",
    title: "Groundnut leaf disease classification using deep transfer learning",
    venue:
      "6th International Conference on Recent Advances in Information Technology (RAIT)",
    details: "2025, pp. 1–6",
    doi: "https://doi.org/10.1109/RAIT65068.2025.11089082",
  },
  {
    authors: "B. Sasmal, A. Das, K. G. Dhal, R. Saha, R. Rai, and T. Bharasa",
    title:
      "Deep transfer learning with GUI for rice pests classification and preventive recommendations",
    venue: "SocProS 2025, Springer",
    details: "2025 (In Press)",
    url: "https://socpros2025.iitr.ac.in/",
  },
  {
    authors: "M. Bansal and R. Saha",
    title:
      "Machine learning-based spam detection: A CRISP-DM approach for enhanced email security",
    venue: "IEEE INDICON",
    details: "2024 (In Press)",
    url: "http://ieeeindicon.org/",
  },
  {
    authors: "M. Bansal and R. Saha",
    title:
      "Machine learning-based spam detection: A CRISP-DM approach for enhanced email security",
    venue: "2024 IEEE 21st India Council International Conference (INDICON)",
    details: "2024, pp. 1–6",
  },
  {
    authors: "S. Bhardwaj and R. Saha",
    title:
      "A comprehensive review of routing protocols in vehicular ad hoc networks (VANETs): Challenges, solutions and future directions",
    venue:
      "2024 IEEE 11th Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON)",
    details: "2024, pp. 1–6",
  },
  {
    authors: "Sonika and R. Saha",
    title:
      "A comprehensive review of routing protocols in vehicular ad hoc networks (VANETs): Challenges, solutions and future directions",
    venue: "UPCON 2024",
    details: "2024 (Accepted)",
    url: "https://upcon.srmcem.ac.in",
  },
  {
    authors: "N. M. Tawade, M. Bansal, and R. Saha",
    title:
      "Optimized transfer learning with CNNs for superior COVID-19 detection in chest X-ray imaging",
    venue:
      "2024 IEEE International Symposium on Smart Electronic Systems (iSES)",
    details: "2024, pp. 19–24",
  },
  {
    authors: "T. Das, R. Saha, and V. Deka",
    title:
      "Voting-based extreme learning machine approach for the analysis of sensor data in healthcare analytics",
    venue:
      "International Conference on Frontiers in Computing and Systems (COMSYS 2021)",
    details: "Springer, 2022, pp. 247–254",
    doi: "https://doi.org/10.1007/978-981-19-0105-8_24",
  },
  {
    authors: "T. Pal, S. Barari, R. Saha, S. Saif, and S. Biswas",
    title:
      "Design and implementation of centrality approach-based energy efficient routing in wireless sensor network",
    venue:
      "International Conference on Advanced Computing Applications (ICACA 2021)",
    details: "Springer, 2022, pp. 355–368",
    doi: "https://doi.org/10.1007/978-981-16-5207-3_30",
  },
  {
    authors: "T. Das, R. Saha, and G. Saha",
    title: "Cluster analysis using big data visualization",
    venue:
      "2nd International Conference on Information Systems & Management Science (ISMS)",
    details: "2019",
    doi: "http://dx.doi.org/10.2139/ssrn.3511435",
  },
  {
    authors: "S. Biswas, T. Bhattacharya, and R. Saha",
    title: "On fall detection using smartphone sensors",
    venue:
      "2018 International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET)",
    details: "IEEE, 2018, pp. 1–4",
    doi: "https://doi.org/10.1109/WiSPNET.2018.8538688",
  },
  {
    authors: "R. Saha and S. Biswas",
    title:
      "Analytical study on data transmission in WBAN with user mobility support",
    venue:
      "2018 International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET)",
    details: "IEEE, 2018, pp. 1–5",
    doi: "https://doi.org/10.1109/WiSPNET.2018.8538573",
  },
  {
    authors: "R. Saha, S. Biswas, and G. Pradhan",
    title:
      "A priority based routing protocol with extensive survey and comparison of related works for healthcare applications using WBAN",
    venue:
      "2017 International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET)",
    details: "IEEE, 2017, pp. 1424–1430",
    doi: "https://doi.org/10.1109/WiSPNET.2017.8299998",
  },
];

type BookChapter = {
  authors: string;
  title: string;
  book: string;
  publisher: string;
  year: number;
  pages: string;
  doi?: string;
};

const bookChapters: BookChapter[] = [
  {
    authors: "T. Das, P. P. Kalita, R. Saha, and N. Das",
    title:
      "On body vitals monitoring for disease prediction: A systematic survey",
    book: "Internet of Things Based Smart Healthcare: Intelligent and Secure Solutions Applying Machine Learning Techniques",
    publisher: "Springer",
    year: 2022,
    pages: "177–195",
    doi: "https://doi.org/10.1007/978-981-19-1408-9_8",
  },
  {
    authors: "T. Pal, R. Saha, S. Sen, S. Saif, and S. Biswas",
    title: "Architecture for smart healthcare: Cloud versus edge",
    book: "Internet of Things Based Smart Healthcare: Intelligent and Secure Solutions Applying Machine Learning Techniques",
    publisher: "Springer",
    year: 2022,
    pages: "23–48",
    doi: "https://doi.org/10.1007/978-981-19-1408-9_2",
  },
  {
    authors: "S. Saif, P. Bhattacharjee, K. Karmakar, R. Saha, and S. Biswas",
    title:
      "IoT-based secure health care: Challenges, requirements and case study",
    book: "Internet of Things Based Smart Healthcare: Intelligent and Secure Solutions Applying Machine Learning Techniques",
    publisher: "Springer",
    year: 2022,
    pages: "327–350",
    doi: "https://doi.org/10.1007/978-981-19-1408-9_15",
  },
  {
    authors: "R. Saha, S. Sen, J. Saha, A. Nandy, S. Biswas, and C. Chowdhury",
    title:
      "Ontology-based intelligent decision support systems: A systematic approach",
    book: "Web Semantics",
    publisher: "Elsevier",
    year: 2021,
    pages: "177–193",
    doi: "https://doi.org/10.1016/B978-0-12-822468-7.00005-5",
  },
];

type Book = {
  authors: string;
  title: string;
  publisher: string;
  year: number;
  isbn: string;
  url?: string;
};

const books: Book[] = [
  {
    authors: "R. Saha and S. C. B. Jaganathan (Eds.)",
    title:
      "Study on Rough Set Theory for Finding Minimal Reduct of Large Decision System",
    publisher: "LAP LAMBERT Academic Publishing, London, United Kingdom",
    year: 2022,
    isbn: "978-620-5-49779-1",
    url: "https://www.morebooks.shop/shop-ui/shop/product/978-620-5-49779-1",
  },
];

type UnderReviewPaper = {
  authors: string;
  title: string;
  venueType: "Journal" | "Conference";
  status: string;
  url?: string;
};

const underReviewPapers: UnderReviewPaper[] = [
  {
    authors: "R. S. et al.",
    title:
      "Metaheuristic algorithms since 2020: Development, taxonomy, analysis, and applications",
    venueType: "Journal",
    status: "Under Review",
    url: "https://link.springer.com/journal/11831",
  },
  {
    authors: "R. S. et al.",
    title:
      "Runge kutta optimizer: Theory, variants, analysis, applications, and performance evaluation",
    venueType: "Journal",
    status: "Under Review",
    url: "https://link.springer.com/journal/12530",
  },
  {
    authors: "M. Bansal, V. Kousik, and R. Saha",
    title: "Masked pretraining vision transformers for dysarthria detection",
    venueType: "Conference",
    status: "Under Review",
    url: "https://iconnect.nvsonline.in/",
  },
  {
    authors: "S. Mondal, P. Das, S. Saif, and R. Saha",
    title:
      "WBAN-MLRAD: Machine learning enabled robust attack detection in WBAN assisted health monitoring systems",
    venueType: "Journal",
    status: "Under Review",
    url: "https://link.springer.com/journal/11276",
  },
  {
    authors: "R. Saha, M. Bansal, and M. Tenja",
    title: "A mobile solution for women’s safety: The Atmasuraksha application",
    venueType: "Conference",
    status: "Under Review",
    url: "https://2025.ieeeicassp.org/",
  },
  {
    authors: "R. Saha, S. Bharali, T. P. Nath, K. Gopal Dhal, and B. Suparna",
    title:
      "A systematic review on IoT application in healthcare: Emerging trends, challenges and open research issues",
    venueType: "Journal",
    status: "Under Review",
    url: "https://www.sciencedirect.com/journal/franklin-open",
  },
  {
    authors: "R. Saha, M. L. Devi, and G. H. Sai",
    title:
      "Optimised ensemble learning technique for early-stage mental health prediction",
    venueType: "Journal",
    status: "Under Review",
    url: "https://www.sciencedirect.com/journal/informationsystems",
  },
  {
    authors: "R. Saha and K. G. Dhal",
    title:
      "WOA in IoT: A systematic review of variants, applications and development trends",
    venueType: "Journal",
    status: "Under Review",
    url: "https://link.springer.com/journal/12065",
  },
  {
    authors: "R. Saha and K. G. Gopal",
    title:
      "HHO-based IoT optimization: A systematic review of variants, applications, and innovations",
    venueType: "Journal",
    status: "Under Review",
    url: "https://link.springer.com/journal/10586",
  },
  {
    authors: "R. Saha and S. Saif",
    title:
      "Advancing disease prediction through ensemble learning: A systematic review",
    venueType: "Journal",
    status: "Under Review",
    url: "https://www.sciencedirect.com/journal/computers-in-biologyand-medicine",
  },
  {
    authors: "R. Saha et al.",
    title:
      "Swast khoj: An IoT-driven real-time health monitoring system prototype",
    venueType: "Journal",
    status: "Under Review",
    url: "https://www.sciencedirect.com/journal/internet-of-things",
  },
  {
    authors: "S. Sohail and R. Saha",
    title:
      "M-EEMH: An energy-efficient mobility aware multi-hop protocol for QoS-driven WBAN applications",
    venueType: "Journal",
    status: "Accepted / In Press",
    url: "https://link.springer.com/journal/10586",
  },
];

export default function ResearchPapers() {
  return (
    <div
      className="main-container research-publications"
      id="research-publications"
    >
      <div className="container">
        <h1 className="research-title">Research Publications</h1>

        <section className="research-section">
          <h2>Journal Articles</h2>
          <ol>
            {journalArticles.map((item, index) => (
              <li key={index}>
                <strong>{item.authors}</strong>, “{item.title},”{" "}
                <em>{item.venue}</em>, {item.details}
                {item.doi && (
                  <>
                    {" "}
                    —{" "}
                    <a href={item.doi} target="_blank" rel="noreferrer">
                      DOI
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>

          <h2>Conference Proceedings</h2>
          <ol>
            {conferencePapers.map((item, index) => (
              <li key={index}>
                <strong>{item.authors}</strong>, “{item.title},”{" "}
                <em>{item.venue}</em>, {item.details}
                {item.doi && (
                  <>
                    {" "}
                    —{" "}
                    <a href={item.doi} target="_blank" rel="noreferrer">
                      DOI
                    </a>
                  </>
                )}
                {item.url && (
                  <>
                    {" "}
                    —{" "}
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
          {/* Book Chapters */}
          <h2>Book Chapters</h2>
          <ol>
            {bookChapters.map((item, index) => (
              <li key={index}>
                <strong>{item.authors}</strong>, “{item.title},” in{" "}
                <em>{item.book}</em>, {item.publisher}, {item.year}, pp.{" "}
                {item.pages}
                {item.doi && (
                  <>
                    {" "}
                    —{" "}
                    <a href={item.doi} target="_blank" rel="noreferrer">
                      DOI
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>

          {/* Books */}
          <h2>Books</h2>
          <ol>
            {books.map((item, index) => (
              <li key={index}>
                <strong>{item.authors}</strong>, <em>{item.title}</em>,{" "}
                {item.publisher}, {item.year}, ISBN: {item.isbn}
                {item.url && (
                  <>
                    {" "}
                    —{" "}
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
          {/* Communicated / Under Review Papers */}
          <h2>Communicated Papers / Under Review</h2>
          <ol>
            {underReviewPapers.map((item, index) => (
              <li key={index}>
                <strong>{item.authors}</strong>, “{item.title},”{" "}
                {item.venueType}, <em>{item.status}</em>
                {item.url && (
                  <>
                    {" "}
                    —{" "}
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
