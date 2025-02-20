import { createContext, useContext } from "react";

const CourseContext = createContext();

export const useCourse = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const scienceCourses = [
    {
      category: "BSc Physics",
      addons: [
        {
          name: "BSc Physics (Hons)",
          colleges: ["Quantum Physics Institute", "Astro Physics University"],
        },
        {
          name: "BSc Applied Physics",
          colleges: ["Applied Sciences Academy", "Tech Physics College"],
        },
        {
          name: "BSc Nuclear Physics",
          colleges: ["Nuclear Research Institute", "Energy Physics University"],
        },
      ],
    },
    {
      category: "BSc Chemistry",
      addons: [
        {
          name: "BSc Chemistry (Hons)",
          colleges: [
            "Chemical Sciences Institute",
            "Organic Chemistry University",
          ],
        },
        {
          name: "BSc Analytical Chemistry",
          colleges: ["Analytical Research Academy", "Chemistry Tech College"],
        },
        {
          name: "BSc Industrial Chemistry",
          colleges: [
            "Industrial Chemistry Institute",
            "Applied Chemistry University",
          ],
        },
      ],
    },
    {
      category: "BSc Biology",
      addons: [
        {
          name: "BSc Biology (Hons)",
          colleges: ["Life Sciences Institute", "Bio Research University"],
        },
        {
          name: "BSc Microbiology",
          colleges: ["Microbiology Academy", "BioTech University"],
        },
        {
          name: "BSc Biotechnology",
          colleges: ["Biotech Research Institute", "Genetics University"],
        },
      ],
    },
    {
      category: "BSc Mathematics",
      addons: [
        {
          name: "BSc Mathematics (Hons)",
          colleges: ["Pure Mathematics Institute", "Advanced Math University"],
        },
        {
          name: "BSc Applied Mathematics",
          colleges: ["Applied Math Academy", "Math Tech College"],
        },
        {
          name: "BSc Statistics",
          colleges: [
            "Statistical Research Institute",
            "Data Science University",
          ],
        },
      ],
    },
    {
      category: "BSc Computer Science",
      addons: [
        {
          name: "BSc CS (AI & ML)",
          colleges: ["AI Research Institute", "Machine Learning University"],
        },
        {
          name: "BSc CS (Data Science)",
          colleges: ["Data Analytics Academy", "Big Data University"],
        },
        {
          name: "BSc CS (Cyber Security)",
          colleges: ["Cyber Security Institute", "SecureNet University"],
        },
      ],
    },
  ];
  const commerceCourses = [
    {
      "category": "BBA",
      "addons": [
        {
          "name": "BBA",
          "colleges": [
            "Acharya",
            "Presidency",
            "Krupanidhi",
            "Srinivas",
            "MS Ramiyah",
            "Yenepoya Mangalore",
            "Jain University",
            "Brindavan",
            "SEA",
            "S-Vyasa",
            "HKBK",
            "RR Institution",
            "Karnataka College",
            "Christian College",
            "MVM College"
          ]
        },
        {
          "name": "BBA + Business Analytics",
          "colleges": ["Acharya", "Presidency", "Jain University", "Brindavan"]
        },
        {
          "name": "BBA + Digital Marketing",
          "colleges": ["Acharya", "Presidency"]
        },
        {
          "name": "BBA + Logistics and Digital Marketing",
          "colleges": ["Brindavan"]
        },
        {
          "name": "BBA + Aviation",
          "colleges": [
            "Krupanidhi",
            "Srinivas",
            "Acharya",
            "East West College of Management",
            "IZEE Business School",
            "Brindavan",
            "Presidency",
            "RR Institution",
            "MVM College"
          ]
        },
        {
          "name": "BBA + Logistics and Aviation",
          "colleges": [
            "Yenepoya Bangalore",
            "Brindavan",
            "Yenepoya Mangalore",
            "Krupanidhi",
            "S-Vyasa",
            "Srinivas"
          ]
        },
        {
          "name": "BBA + Hospital Administration",
          "colleges": [
            "Srinivas",
            "Brindavan",
            "Yenepoya Bangalore",
            "Yenepoya Mangalore"
          ]
        },
        {
          "name": "BBA + Sports Management",
          "colleges": ["S-Vyasa", "Jain University"]
        },
        {
          "name": "BBA Hospitality Management",
          "colleges": ["Yenepoya Mangalore"]
        },
        {
          "name": "BBA IATA",
          "colleges": ["Christian College"]
        },
        {
          "name": "BBA Aviation Airport Management",
          "colleges": ["Karnataka College"]
        },
        {
          "name": "BBA Finance & Accounts",
          "colleges": ["Jain University"]
        },
        {
          "name": "BBA Strategic Finance/Event Management",
          "colleges": ["Jain University"]
        },
        {
          "name": "BBA Branding & Advertising",
          "colleges": ["Jain University"]
        },
        {
          "name": "BBA Global Business",
          "colleges": ["Jain University"]
        },
        {
          "name": "BBA Digital Business",
          "colleges": ["Jain University"]
        },
        {
          "name": "BBA + Operations & SCM",
          "colleges": ["Presidency"]
        },
        {
          "name": "BBA + Logistics, Supply Chain Management and Port Management",
          "colleges": ["Yenepoya Bangalore", "S-Vyasa", "Yenepoya Mangalore"]
        },
        {
          "name": "BBA + Business Management, Digital Marketing and Business Analytics",
          "colleges": ["S-Vyasa", "Krupanidhi", "Yenepoya Mangalore"]
        },
        {
          "name": "BBA + Entrepreneurship, Innovation and Business Analytics",
          "colleges": ["Yenepoya Mangalore", "S-Vyasa"]
        },
        {
          "name": "BBA + Port and Shipping Management including Logistics",
          "colleges": ["Srinivas"]
        },
        {
          "name": "BBA + Startup, Entrepreneurship & Fintech (With International Business & Business Analytics)",
          "colleges": ["Srinivas"]
        },
        {
          "name": "BBA + Entrepreneurship, Development and Small Business Management",
          "colleges": ["Krupanidhi"]
        },
        {
          "name": "BBA + Entrepreneurship & Innovation with Minor in Business in Association with Institute of Analytics, UK",
          "colleges": ["Yenepoya Bangalore", "Yenepoya Mangalore"]
        },
        {
          "name": "BBA + Aviation in Logistics & Supply Chain Management",
          "colleges": ["IZEE Business School", "RR Institution", "S-Vyasa"]
        },
        {
          "name": "BBA + Aviation in Logistics & Supply Chain Management Global",
          "colleges": ["IZEE Business School (With International Study Tour)"]
        },
        {
          "name": "BBA International Business, Digital Marketing and Business Analytics",
          "colleges": ["S-Vyasa"]
        }
      ]
    },
    {
      "category": "B.COM",
      "addons": [
        {
          "name": "B.COM",
          "colleges": [
            "Acharya",
            "JAIN UNIVERSITY",
            "MS RAMIYAH",
            "Srinivas",
            "EAST WEST COLLEGE OF MANAGEMENT",
            "BRINDAVEN",
            "KARANATAKA COLLEGE",
            "CHRISTIAN COLLEGE",
            "MVM COLLEGE"
          ]
        },
        {
          "name": "B.COM INTERNATIONAL ACCOUNTING WITH INTEGRATED ACCA",
          "colleges": [
            "YENEPOYA MNGLR",
            "SRINIVAS",
            "S-VYASA"
          ]
        },
        {
          "name": "B.COM CA",
          "colleges": [
            "EAST WEST COLLEGE OF MANAGEMENT",
            "YENEPOYA MNGLR"
          ]
        },
        {
          "name": "B.COM (CA FOUNDATION)",
          "colleges": [
            "PRESIDENCY"
          ]
        },
        {
          "name": "B.COM-CMA",
          "colleges": [
            "ACHARYA",
            "EAST WEST COLLEGE OF MANAGEMENT",
            "BRINDAVEN"
          ]
        },
        {
          "name": "B.COM (IN CORPORATE ACCOUNTING INTEGRATED WITH CMA – US)",
          "colleges": [
            "PRESIDENCY"
          ]
        },
        {
          "name": "B.COM ACCA",
          "colleges": [
            "ACHARYA",
            "KRIPANIDHI",
            "PRESIDENCY",
            "BRINDAVEN",
            "EAST WEST COLLEGE OF MANAGEMENT",
            "CHRISTIAN COLLEGE"
          ]
        },
        {
          "name": "B.COM BUSINESS ANALYTICS",
          "colleges": [
            "ACHARYA",
            "PRESIDENCY"
          ]
        },
        {
          "name": "B.COM LOGISTICS",
          "colleges": [
            "BRINDAVEN",
            "CHRISTIAN COLLEGE"
          ]
        },
        {
          "name": "B.COM LOGISTICS & AVIATION",
          "colleges": [
            "BRINDAVEN",
            "YENEPOYA MNGLR"
          ]
        },
        {
          "name": "B.COM LOGISTICS & DIGITAL MARKETING",
          "colleges": [
            "BRINDAVEN"
          ]
        },
        {
          "name": "B.COM SHIPPING & LOGISTICS MANAGEMENT",
          "colleges": [
            "EAST WEST COLLEGE OF MANAGEMENT"
          ]
        },
        {
          "name": "B.COM SAP",
          "colleges": [
            "IZEE BUSINESS SCHOOL"
          ]
        },
        {
          "name": "B.COM ACCOUNTING AND TAXATION",
          "colleges": [
            "IZEE BUSINESS SCHOOL",
            "PRESIDENCY"
          ]
        },
        {
          "name": "B.COM TALLY WITH GST",
          "colleges": [
            "IZEE BUSINESS SCHOOL"
          ]
        },
        {
          "name": "B.COM BANKING",
          "colleges": [
            "BRINDAVEN"
          ]
        },
        {
          "name": "B.COM BANKING & FINANCE",
          "colleges": [
            "PRESIDENCY"
          ]
        },
        {
          "name": "B.COM (AVIATION, LOGISTIC & SUPPLY CHAIN)",
          "colleges": [
            "RR INSTITUTION"
          ]
        },
        {
          "name": "B.Com. International Accounting & Finance with ACCA",
          "colleges": [
            "YENEPOYA MNGLR"
          ]
        },
        {
          "name": "B.Com International Management Accounting - CMA, US",
          "colleges": [
            "YENEPOYA MNGLR"
          ]
        },
        {
          "name": "B.Com International Corporate Accounting - CPA, US",
          "colleges": [
            "YENEPOYA MNGLR"
          ]
        },
        {
          "name": "B.Com. Business & Finance",
          "colleges": [
            "YENEPOYA MNGLR"
          ]
        },
        {
          "name": "B.Com Finance, Taxation & Auditing - Microsoft (Data Analytics)",
          "colleges": [
            "YENEPOYA MNGLR"
          ]
        },
        {
          "name": "B.COM SCM",
          "colleges": [
            "MVM COLLEGE"
          ]
        },
        {
          "name": "B.COM IAF WITH ACCA, CORPORATE ACCOUNTING / INVESTMENT BANKING CMA",
          "colleges": [
            "JAIN UNIVERSITY"
          ]
        },
        {
          "name": "B.COM GLOBAL PROFESSIONAL QUALIFICATION - BA / CPA / RM / LSCM / FT",
          "colleges": [
            "JAIN UNIVERSITY"
          ]
        }
      ]
    }
  ];
  const humanitiesCourses = [
    {
      category: "BA English",
      addons: [
        {
          name: "BA English (Hons)",
          colleges: ["Literature Institute", "Creative Writing University"],
        },
        {
          name: "BA English Literature",
          colleges: ["Classic Literature Academy", "Modern English University"],
        },
        {
          name: "BA Linguistics",
          colleges: [
            "Language Studies Institute",
            "Linguistics Research University",
          ],
        },
      ],
    },
    {
      category: "BA History",
      addons: [
        {
          name: "BA History (Hons)",
          colleges: ["Ancient History Institute", "World History University"],
        },
        {
          name: "BA Archaeology",
          colleges: [
            "Archaeological Research Academy",
            "Heritage Studies University",
          ],
        },
        {
          name: "BA Art History",
          colleges: ["Art History Institute", "Cultural Studies University"],
        },
      ],
    },
    {
      category: "BA Psychology",
      addons: [
        {
          name: "BA Psychology (Hons)",
          colleges: [
            "Behavioral Sciences Institute",
            "Cognitive Psychology University",
          ],
        },
        {
          name: "BA Clinical Psychology",
          colleges: ["Mental Health Academy", "Therapeutic Studies University"],
        },
        {
          name: "BA Counseling Psychology",
          colleges: ["Counseling Institute", "Human Behavior University"],
        },
      ],
    },
    {
      category: "BA Sociology",
      addons: [
        {
          name: "BA Sociology (Hons)",
          colleges: [
            "Social Sciences Institute",
            "Sociology Research University",
          ],
        },
        {
          name: "BA Anthropology",
          colleges: [
            "Cultural Anthropology Academy",
            "Human Studies University",
          ],
        },
        {
          name: "BA Social Work",
          colleges: [
            "Community Development Institute",
            "Social Welfare University",
          ],
        },
      ],
    },
    {
      category: "BA Political Science",
      addons: [
        {
          name: "BA Political Science (Hons)",
          colleges: [
            "Political Theory Institute",
            "Global Politics University",
          ],
        },
        {
          name: "BA International Relations",
          colleges: ["Diplomacy Academy", "Global Affairs University"],
        },
        {
          name: "BA Public Administration",
          colleges: ["Governance Institute", "Public Policy University"],
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
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Computer Science",
      "M.Sc Data Science",
      "MCA (Master of Computer Applications)",
      "Diploma in Medical Laboratory Technology (DMLT)",
      "Diploma in Radiology",
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
    ],

    commerce: [
      "B.Com (Bachelor of Commerce)",
      "BBA (Bachelor of Business Administration)",
      "BMS (Bachelor of Management Studies)",
      "B.Com Banking & Finance",
      "M.Com (Master of Commerce)",
      "MBA (Master of Business Administration)",
      "Diploma in Financial Accounting",
      "Diploma in Business Management",
    ],
  };
  
  return (
    <CourseContext.Provider
      value={{
        coursesData,
        scienceCourses,
        commerceCourses,
        humanitiesCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
