import { createContext, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const scienceCourses = [
    {
      category: "B.Sc Nursing",
      addons: [
        {
          name: "General Nursing",
          colleges: [
            "MS Ramaiah",
            "RR Institution",
            "Pes",
            "Yenepoya",
            "Acharya",
            "Karnataka College",
            "Christian College",
            "Maurya Group Of Institutions",
            "Oxford Institutions Of Medical Science",
            "Koshys",
            "JSS College",
            "Adichunchanagiri College",
            "BGS Apollo",
            "Cauvery College",
            "Gopala Gawda College",
            "Vikram College",
            "St.Joseph College",
            "Vidya Vikas College",
            "St.Alphonsa College",
            "Sigma College",
            "Heritage City College",
            "Suyog College",
            "Vishwa Bharathi College",
            "Mother Teresa College",
            "Smt.Padma G Madegowda College",
          ],
        },
        {
          name: "GNM - General Nursing and Midwifery",
          colleges: [
            "MS Ramaiah",
            "Yenepoya",
            "Acharya",
            "Karnataka College",
            "Christian College",
            "Koshys",
          ],
        },
      ],
    },
    {
      category: "Paramedical",
      addons: [
        {
          name: "Imaging Technology",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "Acharya",
            "Christian College",
            "MVM College",
            "Manipal University",
            "Maurya Group Of Institutions",
          ],
        },
        {
          name: "Nuclear Medicine Technology",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "Optometry",
          colleges: [],
        },
        {
          name: "Bachelor of Hospital Administration",
          colleges: [
            "Yenepoya",
            "Acharya",
            "MVM College",
          ],
        },
        {
          name: "Cardio Vascular Technology",
          colleges: [
            "Yenepoya",
            "Manipal University",
          ],
        },
        {
          name: "Bachelor of Homeopathic Medicine & Surgery (BHMS)",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "B.Sc Respiratory Therapy",
          colleges: [
            "Yenepoya",
            "Acharya",
            "Christian College",
            "MVM College",
            "Manipal University",
            "Maurya Group Of Institutions",
            "Koshys",
          ],
        },
        {
          name: "B.Sc Renal Dialysis Technology",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "Acharya",
            "Christian College",
            "MVM College",
            "Koshys",
          ],
        },
        {
          name: "B.Sc Intensive Care Technology and Medical Instrumentation",
          colleges: [],
        },
        {
          name: "Cardiac Care Technology",
          colleges: [
            "RR Institution",
            "MS Ramiyah",
            "Christian College",
          ],
        },
        {
          name: "B.Sc Perfusion Technology",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "Christian College",
            "MVM College",
          ],
        },
        {
          name: "Bachelor in Naturopathy & Yogic Science",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "B.Sc Optometry",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "B.Sc Neuroscience",
          colleges: [
            "Yenepoya",
            "MVM College",
          ],
        },
        {
          name: "B.Sc Emergency Medicine",
          colleges: [],
        },
        {
          name: "B.Sc Medical Laboratory Technology",
          colleges: [
            "RR Institution",
            "MVM College",
            "Maurya College Of Nursing",
            "Acharya",
            "Yenepoya",
            "Pes",
            "Koshys",
          ],
        },
        {
          name: "B.Sc Radiotherapy Technology",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "Bachelor of Physician Associate",
          colleges: [
            "Yenepoya",
          ],
        },
        {
          name: "Emergency Trauma Care",
          colleges: [
            "RR Institution",
            "Yenepoya",
          ],
        },
        {
          name: "B.Sc Nutrition & Dietetics",
          colleges: [
            "Christian College",
          ],
        },
        {
          name: "Bachelor of Naturopathy & Yogic Sciences",
          colleges: [
            "MVM College",
          ],
        },
        {
          name: "Bachelor of Public Health",
          colleges: [
            "MVM College",
          ],
        },
        {
          name: "Bachelor of Physiotherapy",
          colleges: [
            "Manipal University",
          ],
        },
        {
          name: "B.Sc Renal Replacement Therapy & Dialysis Technology",
          colleges: [
            "Manipal University",
          ],
        },
        {
          name: "B.Sc Radiotherapy Technology",
          colleges: [
            "Manipal University",
          ],
        },
      ],
    },
    {
      category: "Engineering Courses",
      addons: [
        {
          name: "Computer Science & Engineering",
          colleges: ["Yenepoya", "Acharya", "RR Institution", "MS Ramaiah"],
        },
        {
          name: "Computer Science (Data Science)",
          colleges: ["Yenepoya", "Acharya", "S-VYASA", "SEA College"],
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          colleges: [
            "Yenepoya",
            "Acharya",
            "S-VYASA",
            "RR Institution",
            "Presidency",
            "MS Ramaiah",
            "SEA College",
          ],
        },
        {
          name: "Mechanical Engineering",
          colleges: [
            "Yenepoya",
            "Jain University",
            "Acharya",
            "Presidency",
            "MS Ramaiah",
            "SEA College",
          ],
        },
        {
          name: "Electrical & Electronics Engineering",
          colleges: ["Yenepoya", "RR Institution", "Presidency", "MS Ramaiah"],
        },
        {
          name: "Electronics & Communication Engineering",
          colleges: [
            "Yenepoya",
            "Acharya",
            "RR Institution",
            "MS Ramaiah",
            "SEA College",
          ],
        },
        {
          name: "Civil Engineering",
          colleges: [
            "Acharya",
            "RR Institution",
            "MS Ramaiah",
            "Presidency",
            "SEA College",
          ],
        },
        {
          name: "Information Science & Engineering",
          colleges: [
            "Yenepoya",
            "Acharya",
            "Presidency",
            "MS Ramaiah",
            "SEA College",
          ],
        },
        {
          name: "Aeronautical Engineering",
          colleges: ["Acharya"],
        },
        {
          name: "Mechatronics Engineering",
          colleges: ["Acharya"],
        },
        {
          name: "Bio Technology Engineering",
          colleges: ["Acharya"],
        },
        {
          name: "Electric Vehicle Technology",
          colleges: ["Acharya"],
        },
        {
          name: "Computer Science & Technology Engineering",
          colleges: ["S-VYASA", "RR Institution", "Presidency"],
        },
        {
          name: "Computer Science (Software Engineering)",
          colleges: ["S-VYASA"],
        },
        {
          name: "Computer Science and Engineering (Cyber Security)",
          colleges: ["S-VYASA", "RR Institution"],
        },
        {
          name: "Mathematics & Computing Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "CS Engineering in Big Data",
          colleges: ["Presidency"],
        },
        {
          name: "Petroleum Engineering",
          colleges: ["Presidency"],
        },
        {
          name: "Aerospace Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "Automotive Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "Robotics Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "AI & Data Science Engineering",
          colleges: ["SEA College"],
        },
        {
          name: "IoT & Cyber Security Engineering",
          colleges: ["SEA College"],
        },
        {
          name: "Agricultural Engineering",
          colleges: ["SEA College"],
        },
        {
          name: "AI & Robotics Engineering",
          colleges: ["Acharya"],
        },
      ],
    },
    {
      category: "B.Sc Courses",
      addons: [
        {
          name: "B.Sc Physics",
          colleges: [
            "Acharya",
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Physics (Data Science)",
          colleges: [
            "Acharya"
          ],
        },
        {
          name: "B.Sc Maths",
          colleges: ["Acharya","Mathematics"],
        },
        {
          name: "B.Sc Maths (Data Science)",
          colleges: ["Acharya"],
        },
        {
          name: "B.Sc Computer Science",
          colleges: ["Acharya"],
        },
        {
          name: "B.Sc Computer Science (Data Science)",
          colleges: [
            "Acharya"
          ],
        },
        {
          name: "B.Sc Artificial Intelligence, DS & Software Systems",
          colleges: [
            "Acharya"
          ],
        },
        {
          name: "B.Sc (ANI, DFM, Gaming)",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc Visual Communications",
          colleges: [
            "Jain University",
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc FS",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc Psychology",
          colleges: [
            "Jain University",
            "RR College",
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc CMBT BGBT",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc PMCS Renewable Energy",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc ID",
          colleges: [
            "Jain University"
          ],
        },
        {
          name: "B.Sc Forensic Science",
          colleges: [
            "Krupanidhi",
            "RR College"
          ],
        },
        {
          name: "B.Sc Physical Science",
          colleges: [
            "Ramaiah"
          ],
        },
        {
          name: "B.Sc Life Science",
          colleges: [
            "Ramaiah"
          ],
        },
        {
          name: "B.Sc Biotechnology",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Chemistry",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Fashion Designing",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Physical Education and Sports",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Statistics",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Defence and Strategic Studies",
          colleges: [
            "SRM Main Campus"
          ],
        },
        {
          name: "B.Sc Economics",
          colleges: [
            "SRM Main Campus"
          ],
        },
      ],
    },
    {
      category: "BBA",
      addons: [
        {
          name: "BBA",
          colleges: [
            "Acharya",
            "Presidency",
            "Krupanidhi",
            "Srinivas University",
            "MS Ramaiah",
            "Yenepoya",
            "Jain University",
            "Brindavan",
            "SEA College",
            "S-Vyasa",
            "HKBK",
            "RR Institution",
            "Karnataka College",
            "Christian College",
            "MVM College",
            "Abbs",
            "Akash College",
            "Harsha Institutions",
            "Hillside Institutions",
            "Koshys College",                                                                                                                                                                                                                                              "East Point",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: ["Acharya", "Presidency", "Jain University", "Brindavan","Abbs","IZEE Business School","United Business School"],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: ["Acharya", "Presidency","United Business School","SRM Main Campus"],
        },
        {
          name: "BBA + Logistics and Digital Marketing",
          colleges: ["Brindavan"],
        },
        {
          name: "BBA + Aviation",
          colleges: [
            "Krupanidhi",
            "Srinivas University",
            "Acharya",
            "East West College of Management",
            "IZEE Business School",
            "Brindavan",
            "Presidency",
            "RR Institution",
            "MVM College",
            "Akash College",
            "Hkbk",
            "Koshys College",
            "United Business School"
          ],
        },
        {
          name: "BBA Logistics",
          colleges: ["Hkbk","Krupanidhi"],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "Abbs",
            "Koshys College",                                                                 "JCT College",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya"],
        },
        {
          name: "BBA IATA",
          colleges: ["Christian College"],
        },
        {
          name: "BBA Aviation Airport Management",
          colleges: ["Karnataka College"],
        },
        {
          name: "BBA Finance & Accounts",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Strategic Finance, Event Management",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Branding & Advertising",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Global Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Digital Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Logistics & Supply Chain Management",
          colleges: ["Akash College","IZEE Business School"],
        },
        {
          name: "BBA Aviation+Logistics&Supply Chain Management",
          colleges: ["IZEE Business School","United Business School"],
        },
        {
          name: "BBA Supply chain management",
          colleges: ["Hkbk"],
        },
        {
          name: "BBA Digital&Social media Marketing",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA Entrepreneurship",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA HR Analytics",
          colleges: ["United Business School"],
        },
        {
          name: "BBA Business Administration",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "BBA Retail Management",
          colleges: ["United Coimbatore"],
        },
  
      ],
    },
    {
      category: "B.COM",
      addons: [
        {
          name: "B.COM",
          colleges: [
            "Acharya",
            "Jain University",
            "MS Ramaiah",
            "Srinivas University",
            "East West College of Management",
            "Brindavan",
            "Karnataka College",
            "Christian College",
            "MVM College",
          ],
        },
        {
          name: "B.COM INTERNATIONAL ACCOUNTING WITH INTEGRATED ACCA",
          colleges: ["Yenepoya", "Srinivas University", "S-Vyasa"],
        },
        {
          name: "B.COM ACCA",
          colleges: [
            "Acharya",
            "Krupanidhi",
            "Presidency",
            "Brindavan",
            "East West College of Management",
            "Christian College",
          ],
        },
        {
          name: "B.COM BUSINESS ANALYTICS",
          colleges: ["Acharya", "Presidency"],
        },
        {
          name: "B.COM LOGISTICS",
          colleges: ["Brindavan", "Christian College"],
        },
        {
          name: "B.COM LOGISTICS & AVIATION",
          colleges: ["Brindavan", "Yenepoya"],
        },
        {
          name: "B.COM SHIPPING & LOGISTICS MANAGEMENT",
          colleges: ["East West College of Management"],
        },
        {
          name: "B.COM SAP",
          colleges: ["IZEE Business School"],
        },
        {
          name: "B.COM BANKING",
          colleges: ["Brindavan"],
        },
        {
          name: "B.COM BANKING & FINANCE",
          colleges: ["Presidency"],
        },
        {
          name: "B.COM (AVIATION, LOGISTIC & SUPPLY CHAIN)",
          colleges: ["RR Institution"],
        },
        {
          name: "B.COM IAF WITH ACCA, CORPORATE ACCOUNTING , INVESTMENT BANKING CMA",
          colleges: ["Jain University"],
        },
        {
          name: "B.COM GLOBAL PROFESSIONAL QUALIFICATION - BA , CPA , RM , LSCM , FT",
          colleges: ["Jain University"],
        },
      ],
    },
    {
      category: "BCA",
      addons: [
        {
          name: "BCA",
          colleges: [
            "Acharya",
            "Krupanidhi",
            "Presidency",
            "Yenepoya",
            "Brindavan",
            "RR Institution",
            "S-Vyasa",
            "Karnataka College",
            "MVM College",
          ],
        },
        {
          name: "BCA Data Science",
          colleges: ["Acharya", "HKBK", "Presidency"],
        },
        {
          name: "BCA Cloud Computing",
          colleges: ["Acharya", "HKBK"],
        },
        {
          name: "BCA AI And ML",
          colleges: ["Izee", "Brindavan", "HKBK", "Presidency"],
        },
        {
          name: "BCA AI",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI, ML & Robotics",
          colleges: ["East West", "S-Vyasa"],
        },
        {
          name: "BCA Artificial Intelligence & Python",
          colleges: ["T-John", "Kripanidhi"],
        },
        {
          name: "BCA Cyber Security",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Cloud Computing & Ethical Hacking",
          colleges: ["East West", "Izee"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensic",
          colleges: ["Srinivas University", "S-Vyasa"],
        },
        {
          name: "BCA Global",
          colleges: ["Izee"],
        },
        {
          name: "BCA Robotics, AI And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cloud Computing, Ethical Hacking & Cyber Security",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan"],
        },
        {
          name: "BCA AI, Cloud Computing & DevOps",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan"],
        },
        {
          name: "BCA AI, ML, Robotics & IOT",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Metaverse, Blockchain Technology And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Robotics",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Big Data Analytics",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA Cybersecurity And Ethical Hacking",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA AWS Cloud Practitioner",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA Data Analytics",
          colleges: ["HKBK", "Jain University"],
        },
        {
          name: "BCA Cloud Computing & Digital Marketing",
          colleges: ["RR Institution", "Christian College"],
        },
        {
          name: "BCA AI, ML & Full Stack Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Cyber Security And Block Chain Technique",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Data Analytics, Data Science & Advanced Python Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA AWS Cloud, Artificial Intelligence & Data Analytics",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Digital Marketing With Cloud Computing",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Robotic Automation, Artificial Intelligence & Deep Learning",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cybersecurity, Ethical Hacking & Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, ML & Cloud Computing",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, DevOps & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, Big Data Analytics & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, AI & ML",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science & Digital Forensic",
          colleges: ["Izee"],
        },
        {
          name: "BCA Cyber Security, Ethical Hacking & Digital Forensic",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Data Science, AI & Big Data Analytics",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Data Science And Software Systems",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI & DevOps",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science & Big Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence, Robotics & Internet Of Things",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Cloud Computing",
          colleges: ["Yenepoya", "Christian College"],
        },
        {
          name: "BCA Data Science & Artificial Intelligence",
          colleges: ["Yenepoya", "Karnataka College"],
        },
        {
          name: "BCA Cloud Computing & Cybersecurity",
          colleges: ["Yenepoya", "Christian College"],
        },
        {
          name: "BCA IT For Healthcare",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI With Futurense",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Electives With Comptia",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Specialization (CT & IS, MA & CT, MA & IS With Comptia)",
          colleges: ["Jain University"],
        },
      ],
    },
  ];

  const commerceCourses = [
    {
      category: "BBA",
      addons: [
        {
          name: "BBA",
          colleges: [
            "Acharya",
            "Presidency",
            "Krupanidhi",
            "Srinivas University",
            "MS Ramaiah",
            "Yenepoya",
            "Jain University",
            "Brindavan",
            "SEA College",
            "S-Vyasa",
            "HKBK",
            "RR Institution",
            "Karnataka College",
            "Christian College",
            "MVM College",
            "Abbs",
            "Akash College",
            "Harsha Institutions",
            "Hillside Institutions",
            "Koshys College",                                                                                                                                                                                                                                              "East Point",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: ["Acharya", "Presidency", "Jain University", "Brindavan","Abbs","IZEE Business School","United Business School"],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: ["Acharya", "Presidency","United Business School","SRM Main Campus"],
        },
        {
          name: "BBA + Logistics and Digital Marketing",
          colleges: ["Brindavan"],
        },
        {
          name: "BBA + Aviation",
          colleges: [
            "Krupanidhi",
            "Srinivas University",
            "Acharya",
            "East West College of Management",
            "IZEE Business School",
            "Brindavan",
            "Presidency",
            "RR Institution",
            "MVM College",
            "Akash College",
            "Hkbk",
            "Koshys College",
            "United Business School"
          ],
        },
        {
          name: "BBA Logistics",
          colleges: ["Hkbk","Krupanidhi"],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "Abbs",
            "Koshys College",                                                                 "JCT College",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya"],
        },
        {
          name: "BBA IATA",
          colleges: ["Christian College"],
        },
        {
          name: "BBA Aviation Airport Management",
          colleges: ["Karnataka College"],
        },
        {
          name: "BBA Finance & Accounts",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Strategic Finance, Event Management",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Branding & Advertising",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Global Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Digital Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Logistics & Supply Chain Management",
          colleges: ["Akash College","IZEE Business School"],
        },
        {
          name: "BBA Aviation+Logistics&Supply Chain Management",
          colleges: ["IZEE Business School","United Business School"],
        },
        {
          name: "BBA Supply chain management",
          colleges: ["Hkbk"],
        },
        {
          name: "BBA Digital&Social media Marketing",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA Entrepreneurship",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA HR Analytics",
          colleges: ["United Business School"],
        },
        {
          name: "BBA Business Administration",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "BBA Retail Management",
          colleges: ["United Coimbatore"],
        },
  
      ],
    },
    {
      category: "B.COM",
      addons: [
        {
          name: "B.COM",
          colleges: [
            "Acharya",
            "Jain University",
            "MS Ramaiah",
            "Srinivas University",
            "East West College of Management",
            "Brindavan",
            "Karnataka College",
            "Christian College",
            "MVM College",
          ],
        },
        {
          name: "B.COM INTERNATIONAL ACCOUNTING WITH INTEGRATED ACCA",
          colleges: ["Yenepoya", "Srinivas University", "S-Vyasa"],
        },
        {
          name: "B.COM ACCA",
          colleges: [
            "Acharya",
            "Krupanidhi",
            "Presidency",
            "Brindavan",
            "East West College of Management",
            "Christian College",
          ],
        },
        {
          name: "B.COM BUSINESS ANALYTICS",
          colleges: ["Acharya", "Presidency"],
        },
        {
          name: "B.COM LOGISTICS",
          colleges: ["Brindavan", "Christian College"],
        },
        {
          name: "B.COM LOGISTICS & AVIATION",
          colleges: ["Brindavan", "Yenepoya"],
        },
        {
          name: "B.COM SHIPPING & LOGISTICS MANAGEMENT",
          colleges: ["East West College of Management"],
        },
        {
          name: "B.COM SAP",
          colleges: ["IZEE Business School"],
        },
        {
          name: "B.COM BANKING",
          colleges: ["Brindavan"],
        },
        {
          name: "B.COM BANKING & FINANCE",
          colleges: ["Presidency"],
        },
        {
          name: "B.COM (AVIATION, LOGISTIC & SUPPLY CHAIN)",
          colleges: ["RR Institution"],
        },
        {
          name: "B.COM IAF WITH ACCA, CORPORATE ACCOUNTING , INVESTMENT BANKING CMA",
          colleges: ["Jain University"],
        },
        {
          name: "B.COM GLOBAL PROFESSIONAL QUALIFICATION - BA , CPA , RM , LSCM , FT",
          colleges: ["Jain University"],
        },
      ],
    },
    {
      category: "BCA",
      addons: [
        {
          name: "BCA",
          colleges: [
            "Acharya",
            "Krupanidhi",
            "Presidency",
            "Yenepoya",
            "Brindavan",
            "RR Institution",
            "S-Vyasa",
            "Karnataka College",
            "MVM College",
          ],
        },
        {
          name: "BCA Data Science",
          colleges: ["Acharya", "HKBK", "Presidency"],
        },
        {
          name: "BCA Cloud Computing",
          colleges: ["Acharya", "HKBK"],
        },
        {
          name: "BCA AI And ML",
          colleges: ["Izee", "Brindavan", "HKBK", "Presidency"],
        },
        {
          name: "BCA AI",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI, ML & Robotics",
          colleges: ["East West", "S-Vyasa"],
        },
        {
          name: "BCA Artificial Intelligence & Python",
          colleges: ["T-John", "Kripanidhi"],
        },
        {
          name: "BCA Cyber Security",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Cloud Computing & Ethical Hacking",
          colleges: ["East West", "Izee"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensic",
          colleges: ["Srinivas University", "S-Vyasa"],
        },
        {
          name: "BCA Global",
          colleges: ["Izee"],
        },
        {
          name: "BCA Robotics, AI And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cloud Computing, Ethical Hacking & Cyber Security",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan"],
        },
        {
          name: "BCA AI, Cloud Computing & DevOps",
          colleges: ["Srinivas University", "S-Vyasa", "Brindavan"],
        },
        {
          name: "BCA AI, ML, Robotics & IOT",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Metaverse, Blockchain Technology And Virtual Reality",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Robotics",
          colleges: ["HKBK"],
        },
        {
          name: "BCA Big Data Analytics",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA Cybersecurity And Ethical Hacking",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA AWS Cloud Practitioner",
          colleges: ["Kripanidhi"],
        },
        {
          name: "BCA Data Analytics",
          colleges: ["HKBK", "Jain University"],
        },
        {
          name: "BCA Cloud Computing & Digital Marketing",
          colleges: ["RR Institution", "Christian College"],
        },
        {
          name: "BCA AI, ML & Full Stack Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Cyber Security And Block Chain Technique",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Data Analytics, Data Science & Advanced Python Development",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA AWS Cloud, Artificial Intelligence & Data Analytics",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Digital Marketing With Cloud Computing",
          colleges: ["RR Institution"],
        },
        {
          name: "BCA Robotic Automation, Artificial Intelligence & Deep Learning",
          colleges: ["Srinivas University"],
        },
        {
          name: "BCA Cybersecurity, Ethical Hacking & Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, ML & Cloud Computing",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, DevOps & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, Big Data Analytics & Full Stack Development",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, AI & ML",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science & Digital Forensic",
          colleges: ["Izee"],
        },
        {
          name: "BCA Cyber Security, Ethical Hacking & Digital Forensic",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Data Science, AI & Big Data Analytics",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Data Science And Software Systems",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science, Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA AI & DevOps",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Data Science & Big Data Analytics",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence, Robotics & Internet Of Things",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya"],
        },
        {
          name: "BCA Artificial Intelligence & Cloud Computing",
          colleges: ["Yenepoya", "Christian College"],
        },
        {
          name: "BCA Data Science & Artificial Intelligence",
          colleges: ["Yenepoya", "Karnataka College"],
        },
        {
          name: "BCA Cloud Computing & Cybersecurity",
          colleges: ["Yenepoya", "Christian College"],
        },
        {
          name: "BCA IT For Healthcare",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI With Futurense",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Electives With Comptia",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Specialization (CT & IS, MA & CT, MA & IS With Comptia)",
          colleges: ["Jain University"],
        },
      ],
    },
    {
      category: "BA",
      addons: [
        {
          name: "BA - Criminology",
          colleges: ["Acharya", "SEA College"],
        },
        {
          name: "BA - Journalism & Mass Communication",
          colleges: ["Srinivas University", "Presidency"],
        },
        {
          name: "BA - Economics",
          colleges: ["SEA College", "Jain University"],
        },
        {
          name: "BA - Psychology",
          colleges: ["SEA College", "Presidency"],
        },
        {
          name: "BA - History",
          colleges: ["SEA College"],
        },
        {
          name: "BA - Political Science",
          colleges: ["SEA College"],
        },
        {
          name: "BA , B.Des - Animation",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA , B.Des - Graphic Design",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA , B.Des - Visual Effects",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA , B.Des - Fashion Design",
          colleges: ["Yenepoya"],
        },
        {
          name: "BA - Sports Studies",
          colleges: ["Yenepoya"],
        },
      ],
    },
    {
      category: "BVA",
      addons: [
        {
          name: "BVA",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Game Art and Animation",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Graphics and Communication Design",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Product Design",
          colleges: ["Acharya", "MS Ramaiah"],
        },
        {
          name: "BVA - Interior and Spatial Design",
          colleges: ["Acharya"],
        },
        {
          name: "BVA - Fashion Design",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "BVA - Interaction Design",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "BVA - Fashion and Apparel Design",
          colleges: ["Acharya"],
        },
      ],
    },

    {
      category: "BHM (Bachelor of Hotel Management)",
      addons: [
        {
          name: "BHM (Bachelor of Hotel Management)",
          colleges: ["MVM College"],
        },
      ],
    },
    {
      category: "Bachelors in Audiology & Speech Language Pathology",
      addons: [
        {
          name: "Bachelor in Audiology & Speech Language Pathology",
          colleges: ["Manipal University"],
        },
      ],
    },
    {
      category: "BMS",
      addons: [
        {
          name: "BMS - FS,THM,Aviation,IF",
          colleges: ["Jain University"],
        },
        {
          name: "BMS - Healthcare Management",
          colleges: ["Jain University"],
        },
      ],
    },
    {
      category: "B.Sc",
      addons: [
        {
          name: "B.Sc (Animation, DFM, Gaming)",
          colleges: ["Jain University"],
        },
        {
          name: "B.Sc Visual Communications",
          colleges: ["Jain University"],
        },
      ],
    },
  ];

  const humanitiesCourses = [
    {
      category: "BA",
      addons: [
        { name: "BA", colleges: ["KRUPANIDHI", "RAMAIAH"] },
        { name: "BA (Criminology)", colleges: ["ACHARYA", "SEA COLLEGE"] },
        { name: "BA (Psychology)", colleges: ["ACHARYA", "PRESIDENCY", "ABBS"] },
        { name: "BA (English)", colleges: ["ACHARYA", "SRM KTR"] },
        { name: "BA (History)", colleges: ["SEA COLLEGE"] },
        { name: "BA (Journalism)", colleges: ["ACHARYA", "SEA COLLEGE"] },
        { name: "BA (Animation)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Graphic Design)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Visual Effects)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Fashion Design)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Sports Studies)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Journalism and Mass Communication)", colleges: ["PRESIDENCY UNIVERSITY", "SRM KTR"] },
        { name: "BA (Sociology)", colleges: ["ABBS"] },
        { name: "BA (Political Science)", colleges: ["ABBS", "SEA COLLEGE"] },
        { name: "BA CPJ (Criminology, Psychology & Journalism)", colleges: ["KOSHYS"] },
        { name: "BA (Tourism)", colleges: ["SEA COLLEGE"] }
      ]
    },
    {
      category:"BSW",
      addons: [
        {name:"BSW", colleges:["SEA College", "ACHARYA"]}
      ]
    },
    {
      category: "BBA",
      addons: [
        {
          name: "BBA",
          colleges: [
            "Acharya",
            "Presidency",
            "Krupanidhi",
            "Srinivas University",
            "MS Ramaiah",
            "Yenepoya",
            "Jain University",
            "Brindavan",
            "SEA College",
            "S-Vyasa",
            "HKBK",
            "RR Institution",
            "Karnataka College",
            "Christian College",
            "MVM College",
            "Abbs",
            "Akash College",
            "Harsha Institutions",
            "Hillside Institutions",
            "Koshys College",                                                                                                                                                                                                                                              "East Point",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: ["Acharya", "Presidency", "Jain University", "Brindavan","Abbs","IZEE Business School","United Business School"],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: ["Acharya", "Presidency","United Business School","SRM Main Campus"],
        },
        {
          name: "BBA + Logistics and Digital Marketing",
          colleges: ["Brindavan"],
        },
        {
          name: "BBA + Aviation",
          colleges: [
            "Krupanidhi",
            "Srinivas University",
            "Acharya",
            "East West College of Management",
            "IZEE Business School",
            "Brindavan",
            "Presidency",
            "RR Institution",
            "MVM College",
            "Akash College",
            "Hkbk",
            "Koshys College",
            "United Business School"
          ],
        },
        {
          name: "BBA Logistics",
          colleges: ["Hkbk","Krupanidhi"],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "Abbs",
            "Koshys College",                                                                 "JCT College",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya"],
        },
        {
          name: "BBA IATA",
          colleges: ["Christian College"],
        },
        {
          name: "BBA Aviation Airport Management",
          colleges: ["Karnataka College"],
        },
        {
          name: "BBA Finance & Accounts",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Strategic Finance, Event Management",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Branding & Advertising",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Global Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Digital Business",
          colleges: ["Jain University"],
        },
        {
          name: "BBA Logistics & Supply Chain Management",
          colleges: ["Akash College","IZEE Business School"],
        },
        {
          name: "BBA Aviation+Logistics&Supply Chain Management",
          colleges: ["IZEE Business School","United Business School"],
        },
        {
          name: "BBA Supply chain management",
          colleges: ["Hkbk"],
        },
        {
          name: "BBA Digital&Social media Marketing",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA Entrepreneurship",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BBA HR Analytics",
          colleges: ["United Business School"],
        },
        {
          name: "BBA Business Administration",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "BBA Retail Management",
          colleges: ["United Coimbatore"],
        },
  
      ],
    },
  ];
  const coursesData = {
    science: [
      "B.Sc Physics",
      "B.Sc Chemistry",
      "B.Sc Mathematics",
      "B.Sc Biology",
      "B.Sc Computer Science",
      "B.Sc Biotechnology",
      "BCA (Bachelor of Computer Applications)",
      "B.Sc Nursing",
      "B.Sc Data Science",
      "B.Sc Radiotherapy Technology",
      "B.Sc Emergency Medicine",
      "B.Sc Medical Laboratory Technology",
      "B.Sc Optometry",
      "B.Sc Neuroscience",
      "B.Sc Perfusion Technology",
      "B.Sc Respiratory Therapy",
      "B.Sc Renal Dialysis Technology",
      "B.Sc Intensive Care Technology and Medical Instrumentation",
      "B.Sc Nutrition & Dietetics",
      "B.Sc Nuclear Medicine Technology",
      "B.Sc Cardiovascular Technology",
      "B.Sc Renal Replacement Therapy & Dialysis Technology",
      "B.Sc Radiotherapy Technology",
      "B.Sc Emergency Trauma Care",
      "B.Sc Physician Associate",
      "Bachelor in Naturopathy & Yogic Science",
      "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
      "Bachelor of Homeopathic Medicine & Surgery (BHMS)",
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Computer Science",
      "M.Sc Data Science",
      "MCA (Master of Computer Applications)",
      "Diploma in Medical Laboratory Technology (DMLT)",
      "Diploma in Radiology",
      "Diploma in Nuclear Medicine Technology",
      "Diploma in Cardio Vascular Technology",
      "Diploma in Imaging Technology",
      "Diploma in Hospital Administration",
      "Diploma in Emergency Trauma Care",
      "Diploma in Dietetics & Nutrition",
    ],
    

    humanities: [
      "B.A History",
      "B.A Political Science",
      "B.A Psychology",
      "B.A Sociology",
      "B.A English Literature",
      "B.A Economics",
      "M.A History",
      "M.A Political Science",
      "M.A Sociology",
      "M.A English Literature",
      "Diploma in Journalism",
      "Diploma in Psychology",
      "B.A Journalism & Mass Communication",
      "B.A Criminology",
      "B.A Art History",
      "B.A Public Administration",
      "B.A Anthropology",
      "B.A Linguistics",
      "B.A International Relations",
      "B.A Social Work",
      "B.A Counseling Psychology",
      "M.A Counseling Psychology",
      "M.A Economics",
      "Diploma in Public Administration",
      "Diploma in International Relations"
    ],
    

    commerce: [
      "B.Com (Bachelor of Commerce)",
      "BBA (Bachelor of Business Administration)",
      "BMS (Bachelor of Management Studies)",
      "B.Com Banking & Finance",
      "B.Com International Accounting",
      "B.Com Logistics",
      "B.Com Shipping & Logistics Management",
      "B.Com Accounting and Finance",
      "B.Com E-Commerce",
      "B.Com Investment Banking",
      "B.Com Marketing Management",
      "BBA General",
      "BBA Aviation",
      "BBA Logistics and Supply Chain Management",
      "BBA Business Analytics",
      "BBA Finance",
      "BBA Human Resource Management",
      "BBA Marketing",
      "BBA Digital Marketing",
      "BBA Tourism & Travel Management",
      "BMS Financial Services",
      "BMS Tourism & Hospitality Management",
      "BMS Aviation Management",
      "BMS International Business",
      "BMS Event Management",
      "BMS Marketing Management",
      "M.Com (Master of Commerce)",
      "M.Com General",
      "M.Com Accounting and Finance",
      "M.Com Banking and Insurance",
      "M.Com Taxation",
      "M.Com International Business",
      "M.Com Business Analytics",
      "MBA (Master of Business Administration)",
      "MBA General",
      "MBA Marketing Management",
      "MBA Finance Management",
      "MBA Human Resource Management",
      "MBA Operations Management",
      "MBA International Business",
      "MBA Supply Chain Management",
      "MBA Digital Marketing",
      "MBA Event Management",
      "Diploma in Financial Accounting",
      "Diploma in Business Management",
      "Diploma in Banking & Finance",
      "Diploma in Taxation",
      "Diploma in Marketing Management",
      "Diploma in Entrepreneurship",
      "Diploma in Import & Export Management"
    ],
    
  };

  const collegeLocations = {
    Acharya: "Bengaluru",
    ACHARYA: "Bengaluru",
    Presidency: "Bengaluru",
    Krupanidhi: "Bengaluru",
    "Srinivas University": "Mangalore",
    "MS Ramaiah": "Bengaluru",
    Yenepoya: "Mangalore",
    "Jain University": "Bengaluru",
    Brindavan: "Bengaluru",
    "SEA College": "Bengaluru",
    "S-VYASA": "Bengaluru",
    "S-Vyasa": "Bengaluru",
    HKBK: "Bengaluru",
    "RR Institution": "Bengaluru",
    "Karnataka College": "Bengaluru",
    "Christian College": "Bengaluru",
    "MVM College": "Bengaluru",
    "Yenepoya Bangalore": "Bengaluru",
    "East West College of Management": "Bengaluru",
    "IZEE Business School": "Bengaluru",
    "Maurya Group Of Institutions": "Mysore",
    Pes: "Bengaluru",
    "Oxford Institutions Of Medical Science": "Benagaluru",
    Koshys: "Bengaluru",
    "JSS College": "Mysore",
    "Adichunchanagiri College": "Mysore",
    "BGS Apollo": "Mysore",
    "Cauvery College": "Mysore",
    "Gopala Gawda College": "Mysore",
    "Vikram College": "Mysore",
    "St.Joseph College": "Mysore",
    "Vidya Vikas College": "Mysore",
    "St.Alphonsa College": "Mysore",
    "Sigma College": "Mysore",
    "Heritage City College": "Mysore",
    "Suyog College": "Mysore",
    "Vishwa Bharathi College": "Mysore",
    "Mother Teresa College": "Mysore",
    "Smt.Padma G Madegowda College": "Mysore",
    "Manipal University": "Bengaluru",
    "SRM Main Campus": "Chennai"
  };

  const dotzeeChoiceColleges = [
    "JAIN UNIVERSITY",
    "YENEPOYA",
    "MS RAMAIAH",
    "ACHARYA",
    "PRESIDENCY",
    "KRUPANIDHI",
    "SRM Main Campus",
    "Manipal University"
  ];

  return (
    <CourseContext.Provider
      value={{
        coursesData,
        scienceCourses,
        commerceCourses,
        humanitiesCourses,
        collegeLocations,
        dotzeeChoiceColleges,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
