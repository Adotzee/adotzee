import { createContext, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const scienceCourses = [
    {
      category: " Nursing",
      addons: [
        {
          name: "Bsc Nursing",
          colleges: [
            "MS Ramaiah",
            "RR Institution",
            "Pes",
            "Yenepoya University",
            "Karnataka College",
            "Christian College",
            "Maurya Group Of Institutions",
            "Oxford Institutions Of Medical Science",
            "Koshys College",
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
            "Bangalore City Group of Institutins",
            "East Point Medical College",
            "Hillside College",
            "Lakshmi Devi College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "Surya College",
            "SRM Main Campus",
            "Annai Meenakshi College",
            "Indiana College(Female only)",
            "Karavali College",
            "NET College",
            "Alphonsa College",
            "Cauvery College",
            "Maurya College",
            "BGS",
            "Shri Sathya Sai Medical College",
            "JSS Academy",
            "Shree Devi",
            "RajaRajeshwari Medical College",
            "Sai College",
            "T.John College",
            "SB Group of Institutions",
            "SAhyadri College",
          ],
        },
        {
          name: "GNM - General Nursing and Midwifery",
          colleges: [
            "MS Ramaiah",
            "Yenepoya",
            "Karnataka College",
            "Christian College",
            "Koshys College",
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
            "Jes Mother Teresa College",
            "Smt.Padma G Madegowda College",
            "East Point Medical College",
            "Hillside College",
            "Krupanidhi College",
            "Lakshmi Devi College",
            "Manjushree College",
            "Shree Devi",
            "Surya College",
            "T.John College",
          ],
        },
      ],
    },
    {
      category: "Paramedical",
      addons: [
        {
          name: "Medical Imaging Technology",
          colleges: [
            "RR Institution",
            "Yenepoya",
            "Christian College",
            "MVM College",
            "Manipal University",
            "Maurya Group Of Institutions",
            "Akash College",
            "Hillside College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "SEA College",
            "SRM Main Campus",
            "Indiana College",
            "Karaval College",
            "NET College",
            "Alphonsa College",
            "Maurya College",
            "AJ Institute",
            "BGS",
            "Shree Devi",
            "Cauvery Institution",
            "Dr MV Shetty Institutions",
          ],
        },
        {
          name: "bsc Anesthesia & Operation Theatre Technology",
          colleges: [
            "Akash College",
            "East Point Medical College",
            "Hillside College",
            "Manjushree College",
            "pes",
            "RR Institition",
            "MS Ramaiah",
            "Yenepoya",
            "MVM College",
            "Sapthagiri Medical College",
            "SEA College",
            "SRM Main Campus",
            "United College",
            "Indiana College",
            "Karavali College",
            "Alphonsa College",
            "Maurya College",
            "AJ Institute",
            "BGS",
            "Cauvery Institution",
            "Shree Devi",
            "JSS College",
            "Dr MV Shetty Institutions",
          ],
        },
        {
          name: "B.Sc Medical Laboratory Technology",
          colleges: [
            "RR Institution",
            "MVM College",
            "Maurya College Of Nursing",
            "Yenepoya",
            "Pes",
            "Koshys College",
            "Akash College",
            "East Point Medical College",
            "Hillside College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "Indiana College",
            "Karavali College",
            "Alphonsa College",
            "Maurya College",
            "AJ Institute",
            "BGS",
            "Cauvery Institution",
            "Shree Devi",
            "JSS College",
            "Dr MV Shetty Institutions",
          ],
        },
        {
          name: "Nuclear Medicine Technology",
          colleges: ["Yenepoya University"],
        },
        {
          name: "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
          colleges: ["Yenepoya University", "Hillside College"],
        },
        {
          name: "bsc biotechnology",
          colleges: ["Abbs", "MS Ramaiah", "JSS College"],
        },
        {
          name: "Bachelor of Hospital Administration",
          colleges: ["Yenepoya University","MVM College"],
        },
        {
          name: "Cardio Vascular Technology",
          colleges: ["Yenepoya University", "Manipal University"],
        },
        {
          name: "Bachelor of Homeopathic Medicine & Surgery (BHMS)",
          colleges: ["Yenepoya University"],
        },
        {
          name: "B.Sc Respiratory Therapy",
          colleges: [
            "Yenepoya University",
            "Christian College",
            "MVM College",
            "Manipal University",
            "Maurya Group Of Institutions",
            "Koshys College",
            "Akash College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "Karavali College",
            "Maurya College",
            "Cauvery Institution",
            "JSS College",
          ],
        },
        {
          name: "B.Sc Renal Dialysis Technology",
          colleges: [
            "RR Institution",
            "Yenepoya University ",
            "Christian College",
            "MVM College",
            "Koshys College",
            "Akash College",
            "Hillside College",
            "Manjushree College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "Indiana College",
            "karavali College",
            "AJ Institute",
            "BGS",
            "JSS College",
            "Shree Devi",
            "RajaRajeshwari Medical College",
          ],
        },
        {
          name: "Cardiac Care Technology",
          colleges: [
            "RR Institution",
            "MS Ramaiah",
            "Christian College",
            "Akash College",
            "East Point Medical College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "United College",
            "Indiana College",
            "Karvali College",
            "Cauvery Institution",
            "JSS College",
            "RajaRajeshwari Medical College",
          ],
        },
        {
          name: "B.Sc Perfusion Technology",
          colleges: [
            "RR Institution",
            "Yenepoya University",
            "Christian College",
            "MVM College",
            "Akash College",
            "East Point Medical College",
            "Sapthagiri Medical College",
            "SRM Main Campus",
            "Indiana College",
            "AJ Institute",
            "Cauvery Institution",
            "JSS College",
            "RajaRajeshwari Medical College",
          ],
        },
        {
          name: "Bachelor in Naturopathy & Yogic Science",
          colleges: ["Yenepoya University"],
        },
        {
          name: "B.Sc Optometry",
          colleges: [
            "Yenepoya University",
            "Akash College",
            "Manjushree College",
            "SRM Main Campus",
            "United College",
            "Karavali College",
            "AJ Institute",
            "Cauvery Institution",
            "JSS College",
          ],
        },
        {
          name: "B.Sc Neuroscience",
          colleges: [
            "Yenepoya University",
            "MVM College",
            "Akash College",
            "SRM Main Campus",
            "AJ Institute",
            "Cauvery Institution",
          ],
        },
        {
          name: "B.Sc Microbiology",
          colleges: ["SRM Main Campus", "Abbs", "JSS Academy"],
        },
        {
          name: "B.Sc Radiotherapy Technology",
          colleges: [
            "Yenepoya University",
            "Akash College",
            "Maurya College",
            "AJ Institute",
          ],
        },
        {
          name: "Bachelor of Physician Associate",
          colleges: ["Yenepoya University"],
        },
        {
          name: "Emergency Trauma Care",
          colleges: [
            "RR Institution",
            "Yenepoya University",
            "East Point Medical College",
            "Indiana College",
          ],
        },
        {
          name: "B.Sc Nutrition & Dietetics",
          colleges: ["Christian College", "SRM Main Campus", "JSS College"],
        },
        {
          name: "Bachelor of Naturopathy & Yogic Sciences",
          colleges: ["MVM College"],
        },
        {
          name: "Bachelor of Public Health",
          colleges: ["MVM College"],
        },
        {
          name: "Bachelor of Physiotherapy",
          colleges: [
            "Manipal University",
            "East Point Medical College",
            "Christian College",
            "Hillside College",
            "Krupanidhi",
            "Lakshmi Devi College",
            "Pes",
            "MVM College",
            "Yenepoya University",
            "Sapthagiri Medical College",
            "S-Vyasa",
            "Indiana College",
            "NET College",
            "Cauvery Institution",
            "Brindavan",
            "JSS College",
            "Dr MV Shetty Institutions",
          ],
        },
        {
          name: "B.Sc Renal Replacement Therapy & Dialysis Technology",
          colleges: ["Manipal University", "Cauvery Institution"],
        },
        {
          name: "B.Sc Radiotherapy Technology",
          colleges: ["Manipal University"],
        },
        {
          name: "B.Sc Genetics",
          colleges: ["Abbs"],
        },
        {
          name: "bsc Emergency Medicine",
          colleges: [
            "Akash College",
            "Cauvery Institution",
            "JSS College",
            "PES",
          ],
        },
        {
          name: "Bach.Occupatational Therapy",
          colleges: [
            "East Point Medical College",
            "Yenepoya University",
            "MVM College",
            "Indiana College",
            "Maurya College",
            "AJ Institute",
            "Cauvery Institution",
            "JSS College",
          ],
        },
        {
          name: "Bsc Audiology & Speech Language Pathology",
          colleges: ["JSS College"],
        },
        {
          name: "Bsc Dialysis Therapy Technology",
          colleges: ["Pes University"],
        },
        {
          name: "Bsc Medical Rediology & Imaging Technology",
          colleges: ["Pes University"],
        },
        {
          name: "Bsc Clinical Psychology",
          colleges: ["S-Vyasa"],
        },
        {
          name: "Bsc Accident & Emergency Care Technology",
          colleges: ["SRM Main Campus", "United College"],
        },
        {
          name: "Bsc Critical Care Technology",
          colleges: ["SRM Main Campus", "AJ Institute"],
        },
        {
          name: "Bsc Medical Record Science",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "Bsc Cardiac Pulmonary Perfusion Care Technology",
          colleges: ["United College"],
        },
        {
          name: "Bsc Radiography&Imaging Technology",
          colleges: ["United College"],
        },
        {
          name: "Bsc Physician Assistant",
          colleges: ["United College", "JSS College"],
        },
        {
          name: "Bsc Environmental Studies",
          colleges: ["JSS College"],
        },
        {
          name: "Bsc Computational Biology& Bioinformatics",
          colleges: ["JSS College"],
        },
      ],
    },
    {
      category: "Engineering Courses",
      addons: [
        {
          name: "Computer Science & Engineering",
          colleges: [
            "Yenepoya University",
            "Presidency University",
            "RR Institution",
            "MS Ramaiah",
            "Akash College",
            "East Point College",
            "Jain University",
            "SEA COLLEGE",
            "S VYASA ",
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
            "Karavali College",
            "Dhanalakshmi Srinivasan College",
            "CMS College",
            "Easa College",
            "Karpagam College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Dhaanish Ahmed Institute",
            "Park College",
            "Tamilnadu College",
            "Shree Devi",
            "Brindavan",
            "T.John College",
          ],
        },
        {
          name: "Computer Science (Data Science)",
          colleges: [
            "Yenepoya University",
            "Jain University",
            "Presidency University",
            "S-VYASA",
            "SEA College",
            "Akash College",
            "East Point College",
            "SRM Main Campus",
            "T.Jhon College",
          ],
        },
        {
          name: "CSE AI",
          colleges: ["Jain University", "SRM Main Campus", "Karavali College"],
        },
        {
          name: "CSE AI & ML",
          colleges: [
            "Yenepoya University",
            "S-VYASA",
            "RR Institution",
            "Presidency University",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "East Point College",
            "Jain University",
            "SRM Main Campus",
            "Hindhusthan College",
            "CMS College",
            "Easa College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Dhaanish Ahmed Institute",
            "Park College",
            "Shree Devi",
            "Brindavan",
            "T.John College",
          ],
        },
        {
          name: "Computer Science Software Engineering",
          colleges: [
            "Yenepoya University",
            "S-VYASA",
            "Jain University",
            "RR Institution",
          ],
        },
        {
          name: "CSE Cyber Security",
          colleges: [
            "Yenepoya University",
            "Jain University",
            "Presidency University",
            "SRM Main Campus",
            "S-VYASA",
            "RR Institution",
            "Akash College",
            "Hindhusthan College",
            "Dhanalakshmi Srinivasan College",
            "Easa College",
            "Karpagam College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Dhaanish Ahmed Institute",
          ],
        },
        {
          name: "CS Engineering in Big Data",
          colleges: ["Presidency University", "SRM Main Campus"],
        },
        {
          name: "AI & Data Science Engineering",
          colleges: [
            "Presidancy University",
            "Akash College",
            "SEA COLLEGE",
            "Dhanalakshmi Srinivasan College",
            "SEA College",
            "Kumaraguru College",
            "Hindhusthan College",
            "JCT College",
            "CMS College",
            "Easa College",
            "Karpagam College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Dhaanish Ahmed Institute",
            "Park College",
            "Shree Devi",
            "Tamilnadu College",
          ],
        },
        {
          name: "CSE Internet Of Things",
          colleges: [
            "Jain University",
            "Presidency University",
            "RR Institution",
            "Brindavan",
          ],
        },
        {
          name: "IoT & Cyber Security Engineering",
          colleges: [
            "SEA College",
            "East Point College",
            "RR Institution",
            "T.Jhon College",
          ],
        },
        {
          name: "AI & Robotics Engineering",
          colleges: ["Presidency University"],
        },
        {
          name: "CSE Cloud Technology & Information Security",
          colleges: ["Jain University"],
        },
        {
          name: "CSE Cloud Technology & Mobial Application",
          colleges: ["Jain University"],
        },
        {
          name: "CSE Block Chain Technology",
          colleges: [
            "Jain University",
            "Presidency University",
            "SRM Main Campus",
          ],
        },
        {
          name: "CSE DevOps",
          colleges: ["Presidancy University"],
        },
        {
          name: "CSE Business System",
          colleges: ["Srm Main Campus", "JCT College", "Nehru Institution"],
        },
        {
          name: "CSE Cloud Computing",
          colleges: ["Srm Main Campus"],
        },
        {
          name: "CSE Gaming Technology",
          colleges: ["Srm Main Campus"],
        },
        {
          name: "Computer And Communication Engineering",
          colleges: ["Nehru Institution"],
        },
        {
          name: "Mechanical Engineering",
          colleges: [
            "Yenepoya University",
            "Jain University",
            "Presidency University",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "RR Institution",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
            "Karavali College",
            "CMS College",
            "Easa College",
            "Karpagam College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Park College",
            "Tamilnadu College",
            "Shree Devi",
            "Brindavan",
          ],
        },
        {
          name: "Mechatronics Engneering",
          colleges: [
            "Hindhusthan College",
            "Rathinam College",
            "Nehru Institution",
          ],
        },
        {
          name: "Electrical & Electronics Engineering",
          colleges: [
            "Yenepoya University",
            "RR Institution",
            "Presidency university",
            "MS Ramaiah",
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
            "Dhanalakshmi Srinivasan College",
            "Easa College",
            "Karpagam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Tamilnadu College",
          ],
        },
        {
          name: "Electronics & Communication Engineering",
          colleges: [
            "Yenepoya University",
            "RR Institution",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "East Point College",
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
            "Dhanalakshmi Srinivasan College ",
            "CMS College",
            "Easa College",
            "Karpagam College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Dhaanish Ahmed Institute",
            "Park College",
            "Shree Devi",
            "Tamilnadu College",
            "Brindavan",
            "T.Jhon College",
          ],
        },
        {
          name: "Electronics & Instrumentation Engineering",
          colleges: [
            "Kumaraguru College",
            "Hindhusthan College",
            "Tamilnadu College",
          ],
        },
        {
          name: "Civil Engineering",
          colleges: [
            "RR Institution",
            "MS Ramaiah",
            "Presidency University",
            "SEA College",
            "East Point College",
            "Jain University",
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "JCT College",
            "Dhanalakshmi Srinivasan College",
            "Karpagam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Park College",
            "Tamilnadu College",
            "Shree Devi",
            "Brindavan",
          ],
        },
        {
          name: "Civil Engneering With Computer Applications",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "Information Science & Engineering",
          colleges: [
            "Yenepoya University",
            "Presidency University",
            "MS Ramaiah",
            "SEA College",
            "Akash College",
            "East Point College",
            "Jain University",
            "SRM Main Campus",
            "Shree Devi",
            "Brindava",
          ],
        },
        {
          name: "Food Technology",
          colleges: [
            "Hindhusthan College",
            "JCT College",
            "Dhanalakshmi Srinivasan College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Shree Devi",
            "Dhaanish Ahmed Institute",
          ],
        },
        {
          name: "Information Technology",
          colleges: [
            "Hindhusthan College",
            "Easa College",
            "CMS College",
            "Karpagam College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
            "Dhaanish Ahmed Institute",
            "Tamilnadu College",
            "T.Jhon College",
          ],
        },
        {
          name: "Nano Technology",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "Aeronautical Engineering",
          colleges: [
            "Kumaraguru College",
            "Hindhusthan College",
            "Karavali College",
            "Hindusthan College",
            "Nehru Institution",
            "Shree Devi",
          ],
        },
        {
          name: "Mechatronics Engineering",
          colleges: ["Kumaraguru College"],
        },
        {
          name: "Bio Technology Engineering",
          colleges: [
            "Kumaraguru College",
            "SRM Man Campus",
            "Rathinam College",
            "Sri Shakthi Institute",
          ],
        },
        {
          name: "Bio Medical Engneering",
          colleges: [
            "SRM Main Campus",
            "Hindhusthan College",
            "Dhanalakshmi Srinivasan College",
            "Easa College",
            "Hindusthan College",
            "Sri Shakthi Institute",
            "Dhaanish Ahmed Institute",
          ],
        },
        {
          name: "BioTech& BioMedical Engneering",
          colleges: ["JCT College"],
        },
        {
          name: "Computer Science & Technology Engineering",
          colleges: ["S-VYASA", "RR Institution", "Presidency"],
        },
        {
          name: "Mathematics & Computing Engineering",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "Petroleum Engineering",
          colleges: ["Presidency University", "JCT College"],
        },
        {
          name: "Chemical Engneering",
          colleges: [
            "SRM Main Campus",
            "Hindhusthan College",
            "Hindusthan College",
          ],
        },
        {
          name: "Petrochemical Technology",
          colleges: ["JCT College"],
        },
        {
          name: "Aerospace Engineering",
          colleges: ["MS Ramaiah", "Park College"],
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
          name: "Agricultural Engineering",
          colleges: [
            "SEA College",
            "Hindhusthan College",
            "Dhanalakshmi Srinivasan College",
            "Easa College",
            "Rathinam College",
            "Nehru Institution",
            "Sri Shakthi Institute",
          ],
        },
        {
          name: "Automobile Engineering",
          colleges: [
            "Kumaraguru College",
            "SRM Main Campus",
            "Hindhusthan College",
            "Tamilnadu College",
          ],
        },
        {
          name: "B.Tech Fasion Technology",
          colleges: ["Kumaraguru College"],
        },
        {
          name: "B.Tech Textile Technology",
          colleges: ["Kumaraguru College"],
        },
        {
          name: "Robotics&Automation",
          colleges: ["Dhaanish Ahmed Institute"],
        },
        {
          name: "Environmental Engineering",
          colleges: ["Park College"],
        },
      ],
    },
    {
      category: "B.Sc Courses",
      addons: [
        {
          name: "B.Sc Physics",
          colleges: ["SRM Main Campus", "SEA College"],
        },
        {
          name: "B.Sc Maths",
          colleges: ["SEA College"],
        },
        {
          name: "B.Sc Computer Science",
          colleges: [
            "SEA College",
            "United Institutions",
            "Brindavan",
            "Jai Bharath",
          ],
        },
        {
          name: "B.Sc Computer Science Data Analytics",
          colleges: ["United College"],
        },
        {
          name: "B.Sc Computer Science AI+Data Science",
          colleges: ["AJK College"],
        },
        {
          name: "B.Sc Computer Science AI+ML",
          colleges: ["Jai Bharath"],
        },
        {
          name: "B.Sc Computer Science  AI,Data Science&Software Systems",
          colleges: ["SEA College", "Yenepoya"],
        },
        {
          name: "B.Sc Computer Science  Cybersecurity,Data Analytics & Ethical Hacking",
          colleges: ["Yenepoya University"],
        },
        {
          name: "B.Sc Computer Science  Cybersecurity ,Cloud Computing & Ethical Hacking",
          colleges: ["Jai Bharath"],
        },
        {
          name: "B.Sc Chemistry",
          colleges: ["SRM Main Campus", "SEA College"],
        },
        {
          name: "B.Sc Biochemistry",
          colleges: ["Abbs"],
        },
        {
          name: "B.Sc AI&ML",
          colleges: ["AJK College"],
        },
        {
          name: "B.Sc Information Technology",
          colleges: ["United College"],
        },
        {
          name: "B.Sc (ANI, DFM, Gaming)",
          colleges: ["Jain University"],
        },
        {
          name: "B.Sc Visual Communications",
          colleges: ["Jain University", "SRM Main Campus"],
        },

        {
          name: "B.Sc FS",
          colleges: ["Jain University"],
        },
        {
          name: "B.Sc Psychology",
          colleges: [
            "Jain University",
            "RR College",
            "SRM Main Campus",
            "SEA College",
            "Jai Bharath",
            "JSS Academy",
          ],
        },
        {
          name: "B.Sc CMBT BGBT",
          colleges: ["Jain University"],
        },
        {
          name: "B.Sc PMCS Renewable Energy",
          colleges: ["Jain University"],
        },
        {
          name: "B.Sc ID",
          colleges: ["Jain University"],
        },
        {
          name: "B.Sc Forensic Science",
          colleges: [
            "Krupanidhi",
            "RR Institution",
            "SEA College",
            "AJK College",
            "JSS Academy",
          ],
        },
        {
          name: "B.Sc Cyber Forensic Science",
          colleges: ["Jai Bharath"],
        },
        {
          name: "B.Sc Cyber Forensic,Ethical Hacking and Cyber Security",
          colleges: ["Jai Bharath"],
        },
        {
          name: "B.Sc Digital & Cyber Forensic Science",
          colleges: ["AJK College"],
        },
        {
          name: "B.Sc Physical Science",
          colleges: ["Ramaiah"],
        },
        {
          name: "B.Sc Life Science",
          colleges: ["Ramaiah", "SEA COllege"],
        },
        {
          name: "B.Sc Biotechnology",
          colleges: ["SRM Main Campus", "AJK College"],
        },
        {
          name: "B.Sc Genetics",
          colleges: ["Abbs"],
        },
        {
          name: "B.Sc Microbiology",
          colleges: ["Abbs", "SRM Main Campus"],
        },
        {
          name: "B.Sc Fashion Designing",
          colleges: [
            "SRM Main Campus",
            "Shree Devi",
            "United Institution",
            "T.John College",
          ],
        },
        {
          name: "B.Sc Physical Education and Sports",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "B.Sc Statistics",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "B.Sc Defence and Strategic Studies",
          colleges: ["SRM Main Campus"],
        },
        {
          name: "B.Sc Economics",
          colleges: ["SRM Main Campus", "SEA College"],
        },
        {
          name: "B.Sc Food Science & Nutrition",
          colleges: ["SEA College"],
        },
        {
          name: "B.Sc Clinical Nutirition & Dietics",
          colleges: ["SEA College"],
        },
        {
          name: "B.Sc Electronics With Computer Technology",
          colleges: ["Jai Bharath"],
        },
        {
          name: "B.Sc Electronics With Computer Technology in AI & ML",
          colleges: ["Jai Bharath"],
        },
        {
          name: "B.Sc Electronics With Computer Technology in Cloud Computing,Ethical Hacking and Cyber Security",
          colleges: ["Jai Bharath"],
        },
        {
          name: "B.Sc Catering Sciience & Hotel Management",
          colleges: ["AJK College"],
        },
        {
          name: "B.Sc Electronics",
          colleges: ["SEA College"],
        },
        {
          name: "B.Sc Interior Design",
          colleges: ["United Institution", "Shree Devi"],
        },

        {
          name: "B.Sc Visual Communication & Electronic Media",
          colleges: ["AJK College"],
        },
        {
          name: "B.Sc Costume Design & Fasion",
          colleges: ["AJK College"],
        },
      ],
    },
    {
      category: "BBA",
      addons: [
        {
          name: "BBA",
          colleges: [
            "Presidency University",
            "Krupanidhi",
            "Srinivas University",
            "MS Ramaiah",
            "Yenepoya University",
            "Jain University",
            "Brindavan",
            "SEA College",
            "S-Vyasa",
            "HKBK",
            "RR Institution",
            "Karnataka College",
            "Christian College",
            "MVM College",
            "Shree Devi",
            "Brindavan",
            "T.John College",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: ["Presidency University", "Jain University", "Brindavan"],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: ["Presidency University"],
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
            "East West College",
            "IZEE Business School",
            "Brindavan",
            "Presidency University",
            "RR Institution",
            "MVM College",
            "AJK College",
            "Brindavan",
            "Sambhram Institute",
          ],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya University",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "T.John College",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya University",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya University"],
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
          name: "BBA Aviation & Hospital Management",
          colleges: ["Shree Devi"],
        },
        {
          name: "BBA + HYBRID Aviation Airport Management & Hospitality MGMT",
          colleges: ["Jai Bharath"],
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
          name: "BBA + Logistics & SCM",
          colleges: ["AJK College"],
        },
        {
          name: "BBA Logistics & Suplly Chain MNGMT",
          colleges: ["Sambhram Institute", "Shree Devi"],
        },
        {
          name: "BBA Logistics,Suplly Chain MNGMT & Tourism Administration",
          colleges: ["Sambhram Institute"],
        },
       
      ],
    },
    {
      category: "B.COM",
      addons: [
        {
          name: "B.COM",
          colleges: [
            "Jain University",
            "MS Ramaiah",
            "Srinivas University",
            "East West College",
            "Brindavan",
            "Karnataka College",
            "Christian College",
            "MVM College",
          ],
        },
        {
          name: "B.COM INTERNATIONAL ACCOUNTING WITH INTEGRATED ACCA",
          colleges: ["Yenepoya University", "Srinivas University", "S-Vyasa"],
        },
        {
          name: "B.COM ACCA",
          colleges: [
            "Krupanidhi",
            "Presidency University",
            "Brindavan",
            "East West College of Management",
            "Christian College",
          ],
        },
        {
          name: "B.COM BUSINESS ANALYTICS",
          colleges: ["Presidency University"],
        },
        {
          name: "B.COM LOGISTICS",
          colleges: ["Brindavan", "Christian College"],
        },
        {
          name: "B.COM LOGISTICS & AVIATION",
          colleges: ["Brindavan", "Yenepoya University"],
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
          colleges: ["Presidency University"],
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

            "Krupanidhi",
            "Presidency University",
            "Yenepoya University",
            "Brindavan",
            "RR Institution",
            "S-Vyasa",
            "Karnataka College",
            "MVM College",
            "Akash",
            "Christ University",
            "Christian Institution",
            "East Point",
            "Harsha",
            "Hillside Institution",
            "Koshys Institution",
            "PES College",
            "Ramaiah",
            "SEA College",
            "United International",
            "SRM Main Campus",
            "JCT College",
            "Srinivas",
            "Shree Devi",
            "Cauvery Institution",
            "Sambhram Institute",
            "Jai Bharath",
            "T.John College",
          ],
        },
        {
          name: "BCA Data Science",
          colleges: ["HKBK", "Presidency University"],
        },
        {
          name: "BCA Cloud Computing",
          colleges: ["HKBK","East West College","IZEE Business School","Srinivas University", "S-Vyasa"],
        },
        {
          name: "BCA AI And ML",
          colleges: ["IZEE Business School", "Brindavan", "HKBK", "Presidency University","East West College"],
        },
        {
          name: "BCA AI",
          colleges: [
            "Jain University",
            "Krupanidhi",
            "Srinivas University",

          ],
        },
        {
          name: "BCA AI & Python",
          colleges: ["T-John", "Kripanidhi"],
        },
        {
          name: "BCA Cyber Security",
          colleges: [
                    "HKBK",
                    "S-Vyasa",
                    "Kripanidhi",
                    "Srinivas University",
                    "S-Vyasa",

          ],
        },
        {
          name: "BCA Ethical Hacking ",
          colleges: [
            "S-Vyasa",
            "Kripanidhi",
            "IZEE Business School",
          ],
        },
        {
          name: "BCA Global",
          colleges: ["IZEE Business School"],
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
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI, ML & Cloud Computing",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensics",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI, DevOps & Full Stack Development",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science, Big Data Analytics & Full Stack Development",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: [
            "Yenepoya University",
            "S-Vyasa",
          
          ],
        },
        {
          name: "BCA Data Science, AI & ML",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science & Digital Forensic",
          colleges: ["IZEE Business School"],
        },
        {
          name: "BCA Data Science, AI & Big Data Analytics",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA AI, Data Science And Software Systems",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science, Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI & DevOps",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science & Big Data Analytics",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence, Robotics & Internet Of Things",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence & Cloud Computing",
          colleges: ["Yenepoya University", "Christian College"],
        },
        {
          name: "BCA Data Science & Artificial Intelligence",
          colleges: ["Yenepoya University", "Karnataka College"],
        },
        {
          name: "BCA Cloud Computing & Cybersecurity",
          colleges: ["Yenepoya University", "Christian College"],
        },
        {
          name: "BCA IT For Healthcare",
          colleges: ["Jain University"],
        },
        {
          name: "BCA Electives With Comptia",
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
            "Presidency University",
            "Krupanidhi",
            "Srinivas University",
            "MS Ramaiah",
            "Yenepoya University",
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
            "Koshys College",
            "East Point",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: [
            "Presidency University",
            "Jain University",
            "Brindavan",
            "Abbs",
            "IZEE Business School",
            "United Business School",
          ],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: [
            "Presidency University",
            "United Business School",
            "SRM Main Campus",
          ],
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
            "East West College",
            "IZEE Business School",
            "Brindavan",
            "Presidency University",
            "RR Institution",
            "MVM College",
            "Akash College",
            "Hkbk",
            "Koshys College",
            "United Business School",
          ],
        },
        {
          name: "BBA Logistics",
          colleges: ["Hkbk", "Krupanidhi"],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya University",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "Abbs",
            "Koshys College",
            "JCT College",
          ],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya University",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya University"],
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
          colleges: ["Akash College", "IZEE Business School"],
        },
        {
          name: "BBA Aviation+Logistics&Supply Chain Management",
          colleges: ["IZEE Business School", "United Business School"],
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
            "Jain University",
            "MS Ramaiah",
            "Srinivas University",
            "East West College",
            "Brindavan",
            "Karnataka College",
            "Christian College",
            "MVM College",
          ],
        },
        {
          name: "B.COM INTERNATIONAL ACCOUNTING WITH INTEGRATED ACCA",
          colleges: ["Yenepoya University", "Srinivas University", "S-Vyasa"],
        },
        {
          name: "B.COM ACCA",
          colleges: [
            "Krupanidhi",
            "Presidency University",
            "Brindavan",
            "East West College",
            "Christian College",
          ],
        },
        {
          name: "B.COM BUSINESS ANALYTICS",
          colleges: ["Presidency University"],
        },
        {
          name: "B.COM LOGISTICS",
          colleges: ["Brindavan", "Christian College"],
        },
        {
          name: "B.COM LOGISTICS & AVIATION",
          colleges: ["Brindavan", "Yenepoya University"],
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
          colleges: ["Presidency University"],
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
          ],
        },
        {
          name: "BCA Data Science",
          colleges: ["HKBK", "Presidency University"],
        },
        {
          name: "BCA Cloud Computing",
          colleges: ["HKBK"],
        },
        {
          name: "BCA AI And ML",
          colleges: ["IZEE Business School", "Brindavan", "HKBK", "Presidency University"],
        },
        {
          name: "BCA AI",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI, ML & Robotics",
          colleges: ["East West College", "S-Vyasa"],
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
          colleges: ["East West College", "IZEE Business School"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensic",
          colleges: ["Srinivas University", "S-Vyasa"],
        },
        {
          name: "BCA Global",
          colleges: ["IZEE Business School"],
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
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI, ML & Cloud Computing",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensics",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI, DevOps & Full Stack Development",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science, Big Data Analytics & Full Stack Development",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science, AI & ML",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science & Digital Forensic",
          colleges: ["IZEE Business School"],
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
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science, Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI & DevOps",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science & Big Data Analytics",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence, Robotics & Internet Of Things",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence & Cloud Computing",
          colleges: ["Yenepoya University", "Christian College"],
        },
        {
          name: "BCA Data Science & Artificial Intelligence",
          colleges: ["Yenepoya University", "Karnataka College"],
        },
        {
          name: "BCA Cloud Computing & Cybersecurity",
          colleges: ["Yenepoya University", "Christian College"],
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
          colleges: ["SEA College"],
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
          colleges: ["Yenepoya University"],
        },
        {
          name: "BA , B.Des - Visual Effects",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BA , B.Des - Fashion Design",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BA - Sports Studies",
          colleges: ["Yenepoya University"],
        },
      ],
    },
    {
      category: "BVA",
      addons: [
        {
          name: "BVA - Product Design",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "BVA - Fashion Design",
          colleges: ["MS Ramaiah"],
        },
        {
          name: "BVA - Interaction Design",
          colleges: ["MS Ramaiah"],
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
    {
      category: "Nursing",
      addons: [
        {
          name: "GNM - General Nursing and Midwifery",
          colleges: [
            "MS Ramaiah",
            "Yenepoya",
            "Karnataka College",
            "Christian College",
            "Koshys College",
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
            "Jes Mother Teresa College",
            "Smt.Padma G Madegowda College",
            "East Point Medical College",
            "Hillside College",
            "Krupanidhi College",
            "Lakshmi Devi College",
            "Manjushree College",
            "Shree Devi",
            "Surya College",
            "T.John College",
          ],
        },
      ],
    },
  ];

  const humanitiesCourses = [
    {
      category: "BA",
      addons: [
        { name: "BA", colleges: ["KRUPANIDHI", "RAMAIAH"] },
        { name: "BA (Criminology)", colleges: ["SEA COLLEGE"] },
        {
          name: "BA (Psychology)",
          colleges: ["PRESIDENCY", "ABBS"],
        },
        { name: "BA (English)", colleges: ["SRM Main Campus"] },
        { name: "BA (History)", colleges: ["SEA COLLEGE"] },
        { name: "BA (Journalism)", colleges: ["SEA COLLEGE"] },
        { name: "BA (Animation)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Graphic Design)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Visual Effects)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Fashion Design)", colleges: ["YENEPOYA MANGLORE"] },
        { name: "BA (Sports Studies)", colleges: ["YENEPOYA MANGLORE"] },
        {
          name: "BA (Journalism and Mass Communication)",
          colleges: ["Presidency University", "SRM KTR"],
        },
        { name: "BA (Sociology)", colleges: ["ABBS"] },
        { name: "BA (Political Science)", colleges: ["ABBS", "SEA COLLEGE"] },
        {
          name: "BA CPJ (Criminology, Psychology & Journalism)",
          colleges: ["Koshys College"],
        },
        { name: "BA (Tourism)", colleges: ["SEA COLLEGE"] },
      ],
    },
    {
      category: "BSW",
      addons: [{ name: "BSW", colleges: ["SEA College", ] }],
    },
    {
      category: "BBA",
      addons: [
        {
          name: "BBA",
          colleges: [
            "Presidency University",
            "Krupanidhi",
            "Srinivas University",
            "MS Ramaiah",
            "Yenepoya University",
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
            "Koshys College",
            "East Point College",
          ],
        },
        {
          name: "BBA + Business Analytics",
          colleges: [
            "Presidency University",
            "Jain University",
            "Brindavan",
            "Abbs",
            "IZEE Business School",
            "United Business School",
          ],
        },
        {
          name: "BBA + Digital Marketing",
          colleges: [
            "Presidency University",
            "United Business School",
            "SRM Main Campus",
          ],
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
            "East West College",
            "IZEE Business School",
            "Brindavan",
            "Presidency University",
            "RR Institution",
            "MVM College",
            "Akash College",
            "Hkbk",
            "Koshys College",
            "United Business School",
            "Sambhram Institute"
          ],
        },
        {
          name: "BBA Logistics",
          colleges: ["Hkbk", "Krupanidhi"],
        },
        {
          name: "BBA + Logistics and Aviation",
          colleges: [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya University",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas University",
            "Abbs",
            "Koshys College",
            "JCT College",
          ],
        },
        {
          name: "BBA Aviation+Tourism Management",
          colleges: ["Sambhram Institute"],
        },
        {
          name: "BBA Aviatiom+Cabin Crew",
          colleges: ["Sambhram Institute"],
        },
        {
          name: "BBA + Hospital Administration",
          colleges: [
            "Srinivas University",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya University",
          ],
        },
        {
          name: "BBA + Sports Management",
          colleges: ["S-Vyasa", "Jain University"],
        },
        {
          name: "BBA Hospitality Management",
          colleges: ["Yenepoya University"],
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
          colleges: ["Akash College", "IZEE Business School"],
        },
        {
          name: "BBA Aviation+Logistics&Supply Chain Management",
          colleges: ["IZEE Business School", "United Business School","Sambhram Institute"],
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
          colleges: ["Yenepoya University", "Srinivas University", "S-Vyasa"],
        },
        {
          name: "B.COM ACCA",
          colleges: [
            "Krupanidhi",
            "Presidency University",
            "Brindavan",
            "East West College",
            "Christian College",
          ],
        },
        {
          name: "B.COM BUSINESS ANALYTICS",
          colleges: ["Presidency University"],
        },
        {
          name: "B.COM LOGISTICS",
          colleges: ["Brindavan", "Christian College"],
        },
        {
          name: "B.COM LOGISTICS & AVIATION",
          colleges: ["Brindavan", "Yenepoya University"],
        },
        {
          name: "B.COM SHIPPING & LOGISTICS MANAGEMENT",
          colleges: ["East West College"],
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
          colleges: ["Presidency University"],
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
            "Krupanidhi",
            "Presidency University",
            "Yenepoya University",
            "Brindavan",
            "RR Institution",
            "S-Vyasa",
            "Karnataka College",
            "MVM College",
            "Sambhram Institute"
          ],
        },
        {
          name: "BCA Data Science",
          colleges: ["HKBK", "Presidency University"],
        },
        {
          name: "BCA Cloud Computing",
          colleges: ["HKBK"],
        },
        {
          name: "BCA AI And ML",
          colleges: ["IZEE Business School", "Brindavan", "HKBK", "Presidency"],
        },
        {
          name: "BCA AI",
          colleges: ["Jain University"],
        },
        {
          name: "BCA AI, ML & Robotics",
          colleges: ["East West College", "S-Vyasa"],
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
          colleges: ["East West College", "IZEE Business School"],
        },
        {
          name: "BCA Cloud Computing, Cyber Security & Digital Forensic",
          colleges: ["Srinivas University", "S-Vyasa"],
        },
        {
          name: "BCA Global",
          colleges: ["IZEE Business School"],
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
          colleges: ["Yenepoya","Sambhram Institute"],
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
          colleges: ["Yenepoya University","Sambhram Institute"],
        },
        {
          name: "BCA Data Science, Big Data Analytics & Full Stack Development",
          colleges: ["Yenepoya University","Sambhram Institute"],
        },
        {
          name: "BCA AI, Robotics & IOT",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science, AI & ML",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science & Digital Forensic",
          colleges: ["IZEE Business School"],
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
          colleges: ["Sambhram Institute","S-Vyasa"],
        },
        {
          name: "BCA AI, Data Science And Software Systems",
          colleges: ["S-Vyasa"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science, Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA AI & DevOps",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Data Science & Big Data Analytics",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence, Robotics & Internet Of Things",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Cybersecurity & Ethical Hacking",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence & Machine Learning",
          colleges: ["Yenepoya University"],
        },
        {
          name: "BCA Artificial Intelligence & Cloud Computing",
          colleges: ["Yenepoya University", "Christian College"],
        },
        {
          name: "BCA Data Science & Artificial Intelligence",
          colleges: ["Yenepoya University", "Karnataka College"],
        },
        {
          name: "BCA Cloud Computing & Cybersecurity",
          colleges: ["Yenepoya University", "Christian College"],
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
      category: "Nursing",
      addons: [
        {
          name: "GNM - General Nursing and Midwifery",
          colleges: [
            "MS Ramaiah",
            "Yenepoya University",
            "Karnataka College",
            "Christian College",
            "Koshys College",
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
            "Jes Mother Teresa College",
            "Smt.Padma G Madegowda College",
            "East Point Medical College",
            "Hillside College",
            "Krupanidhi College",
            "Lakshmi Devi College",
            "Manjushree College",
            "Shree Devi",
            "Surya College",
            "T.John College",
          ],
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
      "Diploma in International Relations",
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
      "Diploma in Import & Export Management",
    ],
  };

  const collegeLocations = {
    "Presidency University": "Bengaluru",
    Krupanidhi: "Bengaluru",
    "Srinivas University": "Mangalore",
    "MS Ramaiah": "Bengaluru",
    "Yenepoya Mangalore": "Mangalore",
    "Yenepoya University":"Mangalore",
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
    "Jes Mother Teresa College": "Mysore",
    "Smt.Padma G Madegowda College": "Mysore",
    "Manipal University": "Bengaluru",
    "SRM Main Campus": "Chennai",
    "Bangalore City Group of Institutins": "Benagaluru",
    "East Point Medical College": "Benagaluru",
    "Hillside College": "Benagaluru",
    "Lakshmi Devi College": "Benagaluru",
    "Manjushree College": "Benagaluru",
    "Sapthagiri Medical College": "Benagaluru",
    "Surya College": "Benagaluru",
    "Annai Meenakshi College": "Coimbatore",
    "Indiana College(Female only)": "Mangaluru",
    "Karavali College": "Mangaluru",
    "NET College": "Mangaluru",
    "Alphonsa College": "Mysore",
    "Maurya College": "Mysore",
    "Akash College": "Benagaluru",
    "East Point College": "Benagaluru",
    "Kumaraguru College": "Chennai",
    "Hindhusthan College": "Coimbatore",
    "JCT College": "Coimbatore",
    "Dhanalakshmi Srinivasan College": "Coimbatore",
    "CMS College": "Coimbatore",
    "Easa College": "Coimbatore",
    "Karpagam College": "Coimbatore",
    "Rathinam College": "Coimbatore",
    "Nehru Institution": "Coimbatore",
    "Sri Shakthi Institute": "Coimbatore",
    "Dhaanish Ahmed Institute": "Coimbatore",
    "Park College": "Coimbatore",
    "Tamilnadu College": "Coimbatore",
    "Aj Institute": "Mangaluru",
    "BGS Medical College": "Benagaluru",
    "Brindavan College": "Benagaluru",
    "JSS College": "Benagaluru",
    "Rajarajeswari Medical College": "Benagaluru",
    "Sai Nursing College": "Benagaluru",
    "Sambhram College": "Benagaluru",
    "Shree Devi College": "Mangaluru",
    "Shre Sathya sai Medical College": "Tamil Nadu",
    "T.John College": "Benagaluru",
    "DR MV Shetty Institution": "Mangaluru",
    "SB Group of Institutions": "Benagaluru",
  };

  const dotzeeChoiceColleges = [
    "JAIN UNIVERSITY",
    "YENEPOYA University",
    "MS RAMAIAH",
    "PRESIDENCY University",
    "KRUPANIDHI",
    "SRM Main Campus",
    "Manipal University",
    "Sambhram Institute"
  ];

  const paraAdotzeeChoiceColleges = [ "Yenapoya University","BGS Appolo","MS Ramaiah","RajaRajeshwari Medical College",];

const Trending = [
  "B.Com",
  "BCA",
]

  return (
    <CourseContext.Provider
      value={{
        Trending,
        coursesData,
        scienceCourses,
        commerceCourses,
        humanitiesCourses,
        collegeLocations,
        dotzeeChoiceColleges,
        paraAdotzeeChoiceColleges,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
