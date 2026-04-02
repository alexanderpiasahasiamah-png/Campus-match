/* UniPredict Ghana — db.js
University database: 39 universities, 600+ programs.
Also contains aiAdvice per-university career guidance.
*/

const aiAdvice = {
UG: “UG (University of Ghana) is Ghana’s flagship university. Results shown are filtered for your SHS track — Science students get access to Medicine, Engineering, and Computing; Arts students get Law, Social Sciences, and Humanities. Aggregate = best 3 of 4 cores + 3 electives.”,
KNUST: “KNUST uses a UNIQUE aggregate formula: English + Core Maths + Integrated Science (Social Studies is excluded) + 3 electives. Engineering programs need Science or Technical Studies. Business and Humanities are open to Arts and Business students.”,
UCC: “UCC is strong in Education, Health Sciences, and Business. Law at UCC is highly competitive. Science students access health programs; Arts students access law and humanities. Aggregate = best 3 of 4 cores + 3 electives.”,
UPSA: “UPSA specialises in business and professional programs. Most programs are open to Business, Arts, and Science students. Law requires strong English. Aggregate = best 3 of 4 cores + 3 electives.”,
UDS: “UDS in Tamale covers health, agriculture, and social sciences. Medicine and Nursing require Science background. Social sciences and business programs are open to Arts and Business students.”,
UHAS: “UHAS in Ho is a specialised health university. Most clinical programs require Science background. Non-science students can access Public Health and some Allied Health routes.”,
UEW: “UEW trains Ghana’s teachers. Programs are matched to your subject track. ICT Education needs Science or Technical background.”,
UMaT: “UMaT in Tarkwa focuses on mining and technology. Engineering and Petroleum programs need Science or Technical background. Management and Computing programs are accessible to Business students too.”,
UENR: “UENR in Sunyani has open entry for most programs. Agriculture programs suit Agriculture/Science students; Business programs suit all tracks.”,
ASHESI: “Ashesi uses holistic admission. Engineering requires Elective Maths and Physics. CS and Business are open to students from various tracks with strong profiles.”,
ATU: “Accra Technical University (ATU) offers BTech and HND programs. Most programs are open to Science, Technical, and Business students. Engineering programs need Technical or Science background.”,
KTU: “Kumasi Technical University (KTU) offers BTech and HND programs across Engineering, Business, Computing, and Creative Arts. Technical and Science students have the widest access.”,
GCTU: “Ghana Communication Technology University focuses on ICT, Engineering, Communication, and Business. Computing programs are open to Science and Technical students. Business programs suit all tracks.”,
GIMPA: “GIMPA (Ghana Institute of Management and Public Administration) specialises in management, law, and public administration. Business and Arts students are most suited.”,
RMU: “Regional Maritime University focuses on nautical science, marine engineering, and maritime management. Science and Technical students access engineering programs; Business students access logistics.”,
NURSING: “Public Nursing Training Colleges require a Science or Home Economics background for most programs. Diploma programs like RGN, RM, and RMN are highly sought-after.”,
COE: “Colleges of Education (Teacher Training) train primary and JHS teachers. All SHS tracks are accepted depending on your teaching subject specialism.”,
CKTEDAM: “C.K. Tedam University in Navrongo covers Science, Agriculture, Health, Business, and Social Sciences. Multiple tracks accepted depending on program.”,
SD_DOMBO: “SD Dombo University (UBIDS) in Wa focuses on business and integrated development studies. Business, Arts, and Science students are all welcome.”,
KOFORIDUA: “Koforidua Technical University offers BTech and HND programs in Computing, Engineering, Business, Health, and Construction. Wide track eligibility.”,
HTU: “Ho Technical University (HTU) offers BTech and HND programs. Engineering needs Technical or Science background; Business programs accept most tracks.”,
STU: “Sunyani Technical University (STU) covers Engineering, Business, Computing, and Agriculture programs via BTech and HND routes.”,
TTU: “Tamale Technical University (TTU) serves northern Ghana with Engineering, Business, Computing, Agriculture, and Fashion programs via BTech and HND.”,
CAPE_TECH: “Cape Coast Technical University (CCTU) offers BTech and HND programs in Engineering, Business, Computing, Fashion, and Interior Design.”,
AAMUSTED: “AAMUSTED (formerly ATTI/GTTI) focuses on teacher education for technical and vocational subjects. Ideal for Technical Studies, Home Economics, Business, and Agriculture students who want to teach.”,
GIJ: “The University of Media Arts and Communication (formerly GIJ) specialises in Journalism, Communication Studies, Public Relations, Film, and Media Technology. Most tracks accepted.”,
CENTRAL: “Central University is a private Christian university offering Business, Computing, Law, Theology, and Social Sciences programs. Business and Arts students are most suited.”,
VVU: “Valley View University is a Seventh-day Adventist institution offering Health Sciences, Business, Computing, Agriculture, and Theology. Science students access Pharmacy and Nursing.”,
ALL_NATIONS: “All Nations University in Koforidua is strong in Engineering, Computing, and Business. Science and Technical students access engineering programs.”,
PENT: “Pentecost University offers Business, Computing, Theology, Development Studies, and Communication programs. Most tracks are accepted for business and arts programs.”,
PRESBY: “Presbyterian University offers Business, Computing, Theology, and Social Science programs. Business and Arts students are most suited.”,
METHODIST: “Methodist University offers Business, Computing, Theology, and Communication programs. Business and Arts students are most suited.”,
CATHOLIC: “Catholic University of Ghana offers Business, Computing, Development Studies, Nursing, and Theology. Science students access Nursing; Business/Arts access other programs.”,
WISCONSIN: “Wisconsin International University College offers Business, Computing, Communication, and Public Administration programs. Business and Arts students are most suited.”,
KAAF: “KAAF University College offers Business, Computing, Health Sciences, and Communication programs. Science students access health programs; Business/Arts access others.”,
RADFORD: “Radford University College offers Business, Computing, Communication, and Law programs. Business and Arts students are most suited.”,
CSU: “Christian Service University College (CSUC) offers Business, Nursing, Theology, Development Studies, and Computing programs.”,
GBUC: “Ghana Baptist University College (GBUC) offers Business, Computing, Health Sciences, Theology, and Communication programs.”,
ACAD_CITY: “Academic City University College is a leading private university focused on Technology, Business, Law, and Communication. Science students access Engineering and CS programs.”,
default: “Results are filtered to show only programs available for your SHS track. Aggregate = best 3 out of 4 core subjects + all 3 elective subjects. Lower aggregate = better. Programs marked ‘Borderline’ mean you’re within 3 aggregate points of the cutoff.”
};

// ─── REAL UNIVERSITY DATABASE ───
const universityDB = {
“UG”: {
“name”: “University of Ghana”,
“short”: “UG”,
“programs”: [
{
“name”: “BSc Agricultural Engineering”,
“cutoff”: 15,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Biomedical Engineering”,
“cutoff”: 6,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Computer Engineering”,
“cutoff”: 7,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Food Process Engineering”,
“cutoff”: 12,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Materials Science & Engineering”,
“cutoff”: 13,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Biological Sciences”,
“cutoff”: 14,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Psychology”,
“cutoff”: 15,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “Doctor of Veterinary Medicine”,
“cutoff”: 14,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Actuarial Science”,
“cutoff”: 11,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 7,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 10,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Earth Science”,
“cutoff”: 15,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Mathematical Sciences”,
“cutoff”: 15,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “BSc Agriculture Science”,
“cutoff”: 22,
“college”: “College of Basic & Applied Sciences”
},
{
“name”: “Bachelor of Medicine and Surgery (MBChB)”,
“cutoff”: 8,
“college”: “College of Health Sciences”
},
{
“name”: “Bachelor of Dental Surgery”,
“cutoff”: 10,
“college”: “College of Health Sciences”
},
{
“name”: “Doctor of Pharmacy”,
“cutoff”: 10,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Nursing”,
“cutoff”: 15,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Midwifery”,
“cutoff”: 15,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Medical Laboratory Sciences”,
“cutoff”: 12,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Physiotherapy”,
“cutoff”: 14,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Dietetics”,
“cutoff”: 14,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Diagnostic Radiography”,
“cutoff”: 13,
“college”: “College of Health Sciences”
},
{
“name”: “Bachelor of Public Health”,
“cutoff”: 9,
“college”: “College of Health Sciences”
},
{
“name”: “Bachelor of Laws (LLB)”,
“cutoff”: 7,
“college”: “College of Humanities”
},
{
“name”: “BSc Administration”,
“cutoff”: 9,
“college”: “College of Humanities”
},
{
“name”: “Bachelor of Arts (General Arts)”,
“cutoff”: 16,
“college”: “College of Humanities”
},
{
“name”: “Bachelor of Fine Arts”,
“cutoff”: 20,
“college”: “College of Humanities”
},
{
“name”: “Bachelor of Music”,
“cutoff”: 20,
“college”: “College of Humanities”
},
{
“name”: “BEd Computer Science”,
“cutoff”: 9,
“college”: “College of Education”
},
{
“name”: “BEd ICT”,
“cutoff”: 12,
“college”: “College of Education”
},
{
“name”: “BEd Mathematics”,
“cutoff”: 24,
“college”: “College of Education”
},
{
“name”: “BEd Science (Physics/Chemistry/Biology)”,
“cutoff”: 24,
“college”: “College of Education”
},
{
“name”: “BEd English”,
“cutoff”: 24,
“college”: “College of Education”
},
{
“name”: “BEd Social Studies”,
“cutoff”: 24,
“college”: “College of Education”
},
{
“name”: “BEd Consumer Sciences”,
“cutoff”: 20,
“college”: “College of Education”
}
]
},
“KNUST”: {
“name”: “Kwame Nkrumah University of Science and Technology”,
“short”: “KNUST”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 6,
“college”: “College of Science”
},
{
“name”: “BSc Actuarial Science”,
“cutoff”: 6,
“college”: “College of Science”
},
{
“name”: “BSc Statistics”,
“cutoff”: 6,
“college”: “College of Science”
},
{
“name”: “BSc Mathematics”,
“cutoff”: 15,
“college”: “College of Science”
},
{
“name”: “BSc Chemistry”,
“cutoff”: 15,
“college”: “College of Science”
},
{
“name”: “BSc Physics”,
“cutoff”: 16,
“college”: “College of Science”
},
{
“name”: “BSc Meteorology and Climate Science”,
“cutoff”: 7,
“college”: “College of Science”
},
{
“name”: “Doctor of Optometry”,
“cutoff”: 9,
“college”: “College of Science”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 9,
“college”: “College of Science”
},
{
“name”: “BSc Biochemistry”,
“cutoff”: 9,
“college”: “College of Science”
},
{
“name”: “BSc Biological Science”,
“cutoff”: 10,
“college”: “College of Science”
},
{
“name”: “BSc Food Science and Technology”,
“cutoff”: 9,
“college”: “College of Science”
},
{
“name”: “BSc Environmental Sciences”,
“cutoff”: 9,
“college”: “College of Science”
},
{
“name”: “BSc Dietetics”,
“cutoff”: 10,
“college”: “College of Science”
},
{
“name”: “BSc Human Nutrition”,
“cutoff”: 10,
“college”: “College of Science”
},
{
“name”: “BSc Computer Engineering”,
“cutoff”: 6,
“college”: “College of Engineering”
},
{
“name”: “BSc Electrical/Electronic Engineering”,
“cutoff”: 6,
“college”: “College of Engineering”
},
{
“name”: “BSc Aerospace Engineering”,
“cutoff”: 7,
“college”: “College of Engineering”
},
{
“name”: “BSc Chemical Engineering”,
“cutoff”: 8,
“college”: “College of Engineering”
},
{
“name”: “BSc Civil Engineering”,
“cutoff”: 7,
“college”: “College of Engineering”
},
{
“name”: “BSc Geological Engineering”,
“cutoff”: 8,
“college”: “College of Engineering”
},
{
“name”: “BSc Agricultural Engineering”,
“cutoff”: 9,
“college”: “College of Engineering”
},
{
“name”: “BSc Automobile Engineering”,
“cutoff”: 9,
“college”: “College of Engineering”
},
{
“name”: “BSc Geomatic Engineering”,
“cutoff”: 9,
“college”: “College of Engineering”
},
{
“name”: “BSc Biomedical Engineering”,
“cutoff”: 9,
“college”: “College of Engineering”
},
{
“name”: “BSc Materials Engineering”,
“cutoff”: 11,
“college”: “College of Engineering”
},
{
“name”: “BSc Telecommunication Engineering”,
“cutoff”: 12,
“college”: “College of Engineering”
},
{
“name”: “BSc Marine Engineering”,
“cutoff”: 12,
“college”: “College of Engineering”
},
{
“name”: “BSc Metallurgical Engineering”,
“cutoff”: 15,
“college”: “College of Engineering”
},
{
“name”: “BSc Industrial Engineering”,
“cutoff”: 16,
“college”: “College of Engineering”
},
{
“name”: “BSc Petrochemical Engineering”,
“cutoff”: 7,
“college”: “College of Engineering”
},
{
“name”: “BSc Petroleum Engineering”,
“cutoff”: 6,
“college”: “College of Engineering”
},
{
“name”: “BSc Mechanical Engineering”,
“cutoff”: 6,
“college”: “College of Engineering”
},
{
“name”: “BSc Human Biology (Medicine)”,
“cutoff”: 6,
“college”: “College of Health Sciences”
},
{
“name”: “Bachelor of Dental Surgery (BDS)”,
“cutoff”: 6,
“college”: “College of Health Sciences”
},
{
“name”: “Pharm D (Doctor of Pharmacy)”,
“cutoff”: 6,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Medical Laboratory Science”,
“cutoff”: 7,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Medical Imaging”,
“cutoff”: 7,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Nursing”,
“cutoff”: 12,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Physiotherapy and Sports Science”,
“cutoff”: 12,
“college”: “College of Health Sciences”
},
{
“name”: “BSc Midwifery”,
“cutoff”: 13,
“college”: “College of Health Sciences”
},
{
“name”: “Doctor of Veterinary Medicine”,
“cutoff”: 10,
“college”: “College of Health Sciences”
},
{
“name”: “BA French and Francophone Studies”,
“cutoff”: 14,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “Bachelor of Public Administration”,
“cutoff”: 6,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA Geography and Rural Development”,
“cutoff”: 7,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA History”,
“cutoff”: 7,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA Media and Communication Studies”,
“cutoff”: 7,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BSc Business Administration (Logistics & Supply Chain)”,
“cutoff”: 7,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BSc Hospitality and Tourism Management”,
“cutoff”: 8,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA Linguistics”,
“cutoff”: 8,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BSc Business Administration (HRM/Management)”,
“cutoff”: 9,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BSc Business Administration (Marketing)”,
“cutoff”: 9,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “LLB Law”,
“cutoff”: 10,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA Akan Language and Culture”,
“cutoff”: 10,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BSc Business Administration (Accounting/Finance)”,
“cutoff”: 11,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA Political Studies”,
“cutoff”: 12,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA Economics”,
“cutoff”: 13,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BA Sociology”,
“cutoff”: 13,
“college”: “College of Humanities & Social Sciences”
},
{
“name”: “BSc Architecture”,
“cutoff”: 12,
“college”: “College of Art and Built Environment”
},
{
“name”: “BSc Construction Technology and Management”,
“cutoff”: 12,
“college”: “College of Art and Built Environment”
},
{
“name”: “BSc Quantity Surveying and Construction Economics”,
“cutoff”: 12,
“college”: “College of Art and Built Environment”
},
{
“name”: “BSc Development Planning”,
“cutoff”: 13,
“college”: “College of Art and Built Environment”
},
{
“name”: “BSc Land Economy”,
“cutoff”: 13,
“college”: “College of Art and Built Environment”
},
{
“name”: “BSc Real Estate”,
“cutoff”: 13,
“college”: “College of Art and Built Environment”
},
{
“name”: “BFA Fine Art and Curatorial Practice”,
“cutoff”: 15,
“college”: “College of Art and Built Environment”
},
{
“name”: “BA Communication Design (Graphic Design)”,
“cutoff”: 15,
“college”: “College of Art and Built Environment”
},
{
“name”: “BSc Agribusiness Management”,
“cutoff”: 15,
“college”: “College of Agriculture and Natural Resources”
},
{
“name”: “BSc Landscape Design and Management”,
“cutoff”: 17,
“college”: “College of Agriculture and Natural Resources”
},
{
“name”: “BSc Agricultural Biotechnology”,
“cutoff”: 17,
“college”: “College of Agriculture and Natural Resources”
},
{
“name”: “BSc Natural Resources Management”,
“cutoff”: 18,
“college”: “College of Agriculture and Natural Resources”
},
{
“name”: “BSc Agriculture”,
“cutoff”: 20,
“college”: “College of Agriculture and Natural Resources”
},
{
“name”: “BSc Aquaculture and Water Resources Management”,
“cutoff”: 20,
“college”: “College of Agriculture and Natural Resources”
},
{
“name”: “BSc Forest Resources Technology”,
“cutoff”: 24,
“college”: “College of Agriculture and Natural Resources”
}
]
},
“UCC”: {
“name”: “University of Cape Coast”,
“short”: “UCC”,
“programs”: [
{
“name”: “LL.B. Law”,
“cutoff”: 9,
“college”: “College of Humanities and Legal Studies”
},
{
“name”: “BSc Medical Laboratory Technology”,
“cutoff”: 12,
“college”: “College of Health and Allied Sciences”
},
{
“name”: “BSc Diagnostic Medical Sonography”,
“cutoff”: 12,
“college”: “College of Health and Allied Sciences”
},
{
“name”: “BSc Diagnostic Imaging Technology”,
“cutoff”: 12,
“college”: “College of Health and Allied Sciences”
},
{
“name”: “BSc Nursing”,
“cutoff”: 11,
“college”: “College of Health and Allied Sciences”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 15,
“college”: “College of Science and Technology”,
“cutoff_female”: 17
},
{
“name”: “BSc Computer Science”,
“cutoff”: 15,
“college”: “College of Science and Technology”,
“cutoff_female”: 17
},
{
“name”: “BCom Accounting”,
“cutoff”: 17,
“college”: “College of Business and Economics”
},
{
“name”: “BCom Finance”,
“cutoff”: 20,
“college”: “College of Business and Economics”
},
{
“name”: “BCom Human Resource Management”,
“cutoff”: 20,
“college”: “College of Business and Economics”
},
{
“name”: “BSc Chemical Engineering”,
“cutoff”: 20,
“college”: “College of Science and Technology”
},
{
“name”: “B.Ed Home Economics (Food and Nutrition)”,
“cutoff”: 12,
“college”: “College of Education”
},
{
“name”: “B.Ed Mathematics”,
“cutoff”: 18,
“college”: “College of Education”
},
{
“name”: “B.Ed Construction Technology Education”,
“cutoff”: 18,
“college”: “College of Education”
},
{
“name”: “B.Ed Science”,
“cutoff”: 20,
“college”: “College of Education”
},
{
“name”: “B.Ed Information Technology”,
“cutoff”: 20,
“college”: “College of Education”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 22,
“college”: “College of Humanities and Legal Studies”
},
{
“name”: “B.Ed Accounting”,
“cutoff”: 23,
“college”: “College of Education”
},
{
“name”: “BSc Biochemistry”,
“cutoff”: 18,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Biomedical Sciences”,
“cutoff”: 18,
“college”: “College of Health and Allied Sciences”
},
{
“name”: “BSc Mathematics and Statistics”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Molecular Biology and Biotechnology”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Forensic Science”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Laboratory Technology”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Chemistry”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Physics”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Engineering Physics”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Actuarial Science”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Mathematics”,
“cutoff”: 24,
“college”: “College of Science and Technology”
},
{
“name”: “BA Population and Health”,
“cutoff”: 27,
“college”: “College of Humanities and Legal Studies”
},
{
“name”: “BA Anthropology”,
“cutoff”: 28,
“college”: “College of Humanities and Legal Studies”
},
{
“name”: “BA Linguistics”,
“cutoff”: 29,
“college”: “College of Humanities and Legal Studies”
},
{
“name”: “BCom Marketing”,
“cutoff”: 24,
“college”: “College of Business and Economics”
},
{
“name”: “BCom Management”,
“cutoff”: 24,
“college”: “College of Business and Economics”
},
{
“name”: “BSc Agriculture”,
“cutoff”: 30,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Agribusiness”,
“cutoff”: 30,
“college”: “College of Science and Technology”
},
{
“name”: “BSc Psychology”,
“cutoff”: 30,
“college”: “College of Science and Technology”
},
{
“name”: “BA Social Sciences”,
“cutoff”: 31,
“college”: “College of Humanities and Legal Studies”
},
{
“name”: “BA African Studies”,
“cutoff”: 33,
“college”: “College of Humanities and Legal Studies”
}
]
},
“UPSA”: {
“name”: “University of Professional Studies, Accra”,
“short”: “UPSA”,
“programs”: [
{
“name”: “BSc Actuarial Science”,
“cutoff”: 18,
“college”: “School of Applied Mathematics & Statistics”
},
{
“name”: “BSc Business Economics”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Data Science and Analytics”,
“cutoff”: 24,
“college”: “School of Computing”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting and Finance”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Computing”
},
{
“name”: “Bachelor of Laws (LLB)”,
“cutoff”: 18,
“college”: “School of Law”
},
{
“name”: “Bachelor of Business Administration”,
“cutoff”: 30,
“college”: “School of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 30,
“college”: “School of Business”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 30,
“college”: “School of Communication”
},
{
“name”: “BSc Logistics and Transport Management”,
“cutoff”: 30,
“college”: “School of Business”
},
{
“name”: “BA Public Relations Management”,
“cutoff”: 30,
“college”: “School of Communication”
},
{
“name”: “BSc Real Estate Management and Finance”,
“cutoff”: 24,
“college”: “School of Business”
}
]
},
“UDS”: {
“name”: “University for Development Studies”,
“short”: “UDS”,
“programs”: [
{
“name”: “MBChB (Medicine)”,
“cutoff”: 9,
“college”: “School of Medicine”
},
{
“name”: “Doctor of Pharmacy (Regular)”,
“cutoff”: 12,
“college”: “School of Pharmacy”
},
{
“name”: “Doctor of Pharmacy (Fee Paying)”,
“cutoff”: 18,
“college”: “School of Pharmacy”
},
{
“name”: “BSc Nursing (Science background)”,
“cutoff”: 9,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “BSc Nursing (Non-science background)”,
“cutoff”: 7,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “BSc Midwifery (Science background)”,
“cutoff”: 9,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “BSc Midwifery (Non-science background)”,
“cutoff”: 7,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “Doctor of Medical Laboratory Sciences”,
“cutoff”: 12,
“college”: “School of Allied Health Sciences”
},
{
“name”: “BSc Medical Imaging Technology”,
“cutoff”: 11,
“college”: “School of Allied Health Sciences”
},
{
“name”: “BSc Dietetics”,
“cutoff”: 16,
“college”: “School of Allied Health Sciences”
},
{
“name”: “BSc Health Information Management”,
“cutoff”: 18,
“college”: “School of Public Health”
},
{
“name”: “BSc Community Nutrition”,
“cutoff”: 18,
“college”: “School of Allied Health Sciences”
}
]
},
“UHAS”: {
“name”: “University of Health and Allied Sciences”,
“short”: “UHAS”,
“programs”: [
{
“name”: “Bachelor of Medicine/Surgery (MBChB)”,
“cutoff”: 8,
“college”: “School of Medicine”
},
{
“name”: “Bachelor of Dental Surgery”,
“cutoff”: 8,
“college”: “School of Medicine”
},
{
“name”: “Doctor of Pharmacy”,
“cutoff”: 8,
“college”: “School of Pharmacy”
},
{
“name”: “Bachelor of Physician Assistantship”,
“cutoff”: 9,
“college”: “School of Medicine”
},
{
“name”: “Bachelor of Nursing (non-science)”,
“cutoff”: 8,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “Bachelor of Nursing (science)”,
“cutoff”: 10,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “Bachelor of Midwifery (non-science)”,
“cutoff”: 8,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “Bachelor of Midwifery (science)”,
“cutoff”: 10,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “Bachelor of Medical Laboratory”,
“cutoff”: 12,
“college”: “School of Allied Health Sciences”
},
{
“name”: “Bachelor of Dietetics”,
“cutoff”: 14,
“college”: “School of Allied Health Sciences”
},
{
“name”: “Bachelor of Diagnostic Imaging (Radiography)”,
“cutoff”: 14,
“college”: “School of Allied Health Sciences”
},
{
“name”: “Bachelor of Public Health (Disease Control)”,
“cutoff”: 15,
“college”: “School of Public Health”
},
{
“name”: “Bachelor of Physiotherapy”,
“cutoff”: 16,
“college”: “School of Allied Health Sciences”
},
{
“name”: “Bachelor of Speech, Language and Hearing Sciences”,
“cutoff”: 16,
“college”: “School of Allied Health Sciences”
},
{
“name”: “Bachelor of Public Health (Nutrition)”,
“cutoff”: 15,
“college”: “School of Public Health”
},
{
“name”: “Bachelor of Public Health (Health Information)”,
“cutoff”: 17,
“college”: “School of Public Health”
},
{
“name”: “Bachelor of Public Health (Health Promotion)”,
“cutoff”: 17,
“college”: “School of Public Health”
},
{
“name”: “Orthotics & Prosthetics”,
“cutoff”: 17,
“college”: “School of Allied Health Sciences”
},
{
“name”: “Bachelor of Medical Biochemistry and Molecular Biology”,
“cutoff”: 18,
“college”: “School of Basic and Biomedical Sciences”
},
{
“name”: “Bachelor of Sports and Exercise Medical Sciences”,
“cutoff”: 22,
“college”: “School of Sports and Exercise Medicine”
},
{
“name”: “Bachelor of Public Health Nursing (non-science)”,
“cutoff”: 10,
“college”: “School of Nursing and Midwifery”
},
{
“name”: “Bachelor of Public Health Nursing (science)”,
“cutoff”: 12,
“college”: “School of Nursing and Midwifery”
}
]
},
“UEW”: {
“name”: “University of Education, Winneba”,
“short”: “UEW”,
“programs”: [
{
“name”: “BSc ICT Education”,
“cutoff”: 22,
“college”: “Faculty of Science Education”
},
{
“name”: “BSc Health Administration and Education”,
“cutoff”: 24,
“college”: “Faculty of Health and Physical Education”
},
{
“name”: “BA English Education”,
“cutoff”: 25,
“college”: “Faculty of Languages Education”
},
{
“name”: “BA Graphic Design”,
“cutoff”: 25,
“college”: “Faculty of Art Education”
},
{
“name”: “BSc Accounting Education”,
“cutoff”: 35,
“college”: “Faculty of Business Education”
},
{
“name”: “BA Political Science Education”,
“cutoff”: 17,
“college”: “Faculty of Social Studies”
},
{
“name”: “BA Social Studies Education”,
“cutoff”: 36,
“college”: “Faculty of Social Studies”
},
{
“name”: “BA Art Education”,
“cutoff”: 36,
“college”: “Faculty of Art Education”
},
{
“name”: “BA Arabic Education”,
“cutoff”: 36,
“college”: “Faculty of Languages Education”
},
{
“name”: “BA French Education”,
“cutoff”: 36,
“college”: “Faculty of Languages Education”
},
{
“name”: “BA Ewe Education”,
“cutoff”: 36,
“college”: “Faculty of Languages Education”
},
{
“name”: “BA Ga and Dangme Education”,
“cutoff”: 36,
“college”: “Faculty of Languages Education”
},
{
“name”: “BA Fante, Nzema and Twi Education”,
“cutoff”: 36,
“college”: “Faculty of Languages Education”
},
{
“name”: “BA Theatre Arts”,
“cutoff”: 36,
“college”: “Faculty of Art Education”
},
{
“name”: “BSc Secretarial Education”,
“cutoff”: 36,
“college”: “Faculty of Business Education”
},
{
“name”: “BSc Management Education”,
“cutoff”: 36,
“college”: “Faculty of Business Education”
},
{
“name”: “BEd Basic Education”,
“cutoff”: 36,
“college”: “Faculty of Education Studies”
}
]
},
“UMaT”: {
“name”: “University of Mines and Technology”,
“short”: “UMaT”,
“programs”: [
{
“name”: “BSc Mining Engineering”,
“cutoff”: 24,
“college”: “Faculty of Mining and Minerals Technology”
},
{
“name”: “BSc Minerals Engineering”,
“cutoff”: 24,
“college”: “Faculty of Mining and Minerals Technology”
},
{
“name”: “BSc Geomatic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Geosciences and Environmental Studies”
},
{
“name”: “BSc Geological Engineering”,
“cutoff”: 24,
“college”: “Faculty of Geosciences and Environmental Studies”
},
{
“name”: “BSc Environmental and Safety Engineering”,
“cutoff”: 24,
“college”: “Faculty of Geosciences and Environmental Studies”
},
{
“name”: “BSc Land Administration and Information Systems”,
“cutoff”: 28,
“college”: “Faculty of Geosciences and Environmental Studies”
},
{
“name”: “BSc Spatial Planning”,
“cutoff”: 28,
“college”: “Faculty of Geosciences and Environmental Studies”
},
{
“name”: “BSc Petroleum Engineering (Fee Paying)”,
“cutoff”: 36,
“college”: “School of Petroleum Studies”
},
{
“name”: “BSc Natural Gas Engineering”,
“cutoff”: 24,
“college”: “School of Petroleum Studies”
},
{
“name”: “BSc Petroleum Geosciences and Engineering”,
“cutoff”: 24,
“college”: “School of Petroleum Studies”
},
{
“name”: “BSc Chemical Engineering”,
“cutoff”: 24,
“college”: “School of Petroleum Studies”
},
{
“name”: “BSc Mechanical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BSc Electrical and Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BSc Renewable Energy Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BSc Computer Science and Engineering”,
“cutoff”: 24,
“college”: “Faculty of Computing and Mathematical Sciences”
},
{
“name”: “BSc Mathematics”,
“cutoff”: 24,
“college”: “Faculty of Computing and Mathematical Sciences”
},
{
“name”: “BSc Statistical Data Science”,
“cutoff”: 24,
“college”: “Faculty of Computing and Mathematical Sciences”
},
{
“name”: “BSc Cyber Security”,
“cutoff”: 24,
“college”: “Faculty of Computing and Mathematical Sciences”
},
{
“name”: “BSc Information Systems and Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing and Mathematical Sciences”
},
{
“name”: “BSc Logistics and Transport Management”,
“cutoff”: 28,
“college”: “Faculty of Integrated Management Science”
},
{
“name”: “BSc Economics and Industrial Organization”,
“cutoff”: 28,
“college”: “Faculty of Integrated Management Science”
}
]
},
“UENR”: {
“name”: “University of Energy and Natural Resources”,
“short”: “UENR”,
“programs”: [
{
“name”: “BSc Fire, Safety & Disaster Management”,
“cutoff”: 36,
“college”: “School of Natural Resources”
},
{
“name”: “BSc Hospitality Management”,
“cutoff”: 36,
“college”: “School of Natural Resources”
},
{
“name”: “BSc Natural Resources Management”,
“cutoff”: 36,
“college”: “School of Natural Resources”
},
{
“name”: “BSc Resource Enterprise and Entrepreneurship”,
“cutoff”: 36,
“college”: “School of Arts and Social Sciences”
},
{
“name”: “BSc Economics”,
“cutoff”: 36,
“college”: “School of Arts and Social Sciences”
},
{
“name”: “BSc Planning and Sustainability”,
“cutoff”: 36,
“college”: “School of Geosciences”
},
{
“name”: “BSc Climate Change and Sustainable Development”,
“cutoff”: 36,
“college”: “School of Geosciences”
},
{
“name”: “BSc Agriculture”,
“cutoff”: 36,
“college”: “School of Agriculture and Technology”
},
{
“name”: “BSc Agribusiness”,
“cutoff”: 36,
“college”: “School of Agriculture and Technology”
},
{
“name”: “BSc Agricultural and Resource Economics”,
“cutoff”: 36,
“college”: “School of Agriculture and Technology”
}
]
},
“ASHESI”: {
“name”: “Ashesi University”,
“short”: “ASHESI”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 18,
“college”: “School of Computer Science & Information Systems”,
“notes”: “Holistic review \u2014 essays & profile required”
},
{
“name”: “BSc Management Information Systems”,
“cutoff”: 18,
“college”: “School of Computer Science & Information Systems”,
“notes”: “Holistic review”
},
{
“name”: “BSc Computer Engineering”,
“cutoff”: 18,
“college”: “School of Engineering”,
“notes”: “Elective Mathematics & Physics required”
},
{
“name”: “BSc Electrical/Electronic Engineering”,
“cutoff”: 18,
“college”: “School of Engineering”,
“notes”: “Elective Mathematics & Physics required”
},
{
“name”: “BSc Mechanical Engineering”,
“cutoff”: 18,
“college”: “School of Engineering”,
“notes”: “Elective Mathematics & Physics required”
},
{
“name”: “BSc Mechatronics Engineering”,
“cutoff”: 18,
“college”: “School of Engineering”,
“notes”: “Elective Mathematics & Physics required”
},
{
“name”: “BSc Business Administration”,
“cutoff”: 24,
“college”: “School of Economics & Business”,
“notes”: “Holistic review”
},
{
“name”: “BSc Economics”,
“cutoff”: 24,
“college”: “School of Economics & Business”,
“notes”: “Holistic review”
},
{
“name”: “LLB Law with Public Policy”,
“cutoff”: 24,
“college”: “School of Law, Humanities & Social Sciences”,
“notes”: “Holistic review”
}
]
}
,
“ATU”: {
“name”: “Accra Technical University”,
“short”: “ATU”,
“programs”: [
{
“name”: “BTech Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Applied Informatics”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Applied Statistics”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Cyber Security”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Medical Laboratory Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Medical Imaging Technology”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Science Laboratory Technology”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Electrical and Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechanical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Civil Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Automotive Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Biomedical Equipment Technology”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Water and Sanitation Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Accounting and Finance Analytics”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Logistics and Transport Management”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Public Relations with Digital Communication”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Fashion Design and Textiles”,
“cutoff”: 24,
“college”: “Faculty of Applied Arts”
},
{
“name”: “BTech Multimedia Communication”,
“cutoff”: 24,
“college”: “Faculty of Applied Arts”
},
{
“name”: “BTech Facilities Management”,
“cutoff”: 24,
“college”: “Faculty of Built Environment”
},
{
“name”: “BTech Interior Design and Technology”,
“cutoff”: 24,
“college”: “Faculty of Built Environment”
},
{
“name”: “HND Accountancy”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Marketing”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Computer Science”,
“cutoff”: 36,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “HND Electrical and Electronic Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
},
{
“name”: “HND Mechanical Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
},
{
“name”: “HND Civil Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
},
{
“name”: “HND Building Technology”,
“cutoff”: 36,
“college”: “Faculty of Built Environment”
}
]
},
“KTU”: {
“name”: “Kumasi Technical University”,
“short”: “KTU”,
“programs”: [
{
“name”: “BTech Computer Technology”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Data Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Applied Statistics”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Food Technology”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Laboratory Technology”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Library and Information Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Electrical/Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Chemical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Civil Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechanical Engineering (Automotive)”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechanical Engineering (Manufacturing)”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Oil and Gas Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Agricultural Mechanization Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Accounting with Computing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Banking Technology and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Hospitality Management”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Agribusiness with Entrepreneurship”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Procurement and Supply Chain Management”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Fashion Design and Modeling”,
“cutoff”: 24,
“college”: “Faculty of Creative Arts”
},
{
“name”: “BTech Interior Design Technology”,
“cutoff”: 24,
“college”: “Faculty of Creative Arts”
},
{
“name”: “BTech Building Technology”,
“cutoff”: 24,
“college”: “Faculty of Built Environment”
},
{
“name”: “BTech Estate Management”,
“cutoff”: 24,
“college”: “Faculty of Built Environment”
},
{
“name”: “BTech Health Statistics”,
“cutoff”: 24,
“college”: “Faculty of Health Sciences”
},
{
“name”: “BTech Pharmaceutical Sciences”,
“cutoff”: 24,
“college”: “Faculty of Health Sciences”
},
{
“name”: “HND Accounting with Computing”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Marketing”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Computer Science”,
“cutoff”: 36,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “HND Electrical/Electronic Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
},
{
“name”: “HND Civil Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
}
]
},
“GCTU”: {
“name”: “Ghana Communication Technology University”,
“short”: “GCTU”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “School of Computing & Information Systems”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Computing & Information Systems”
},
{
“name”: “BSc Cyber Security”,
“cutoff”: 24,
“college”: “School of Computing & Information Systems”
},
{
“name”: “BSc Software Engineering”,
“cutoff”: 24,
“college”: “School of Computing & Information Systems”
},
{
“name”: “BSc Data Science and Analytics”,
“cutoff”: 24,
“college”: “School of Computing & Information Systems”
},
{
“name”: “BSc Artificial Intelligence”,
“cutoff”: 24,
“college”: “School of Computing & Information Systems”
},
{
“name”: “BSc Electrical and Electronic Engineering”,
“cutoff”: 24,
“college”: “School of Engineering”
},
{
“name”: “BSc Telecommunication Engineering”,
“cutoff”: 24,
“college”: “School of Engineering”
},
{
“name”: “BSc Biomedical Engineering”,
“cutoff”: 24,
“college”: “School of Engineering”
},
{
“name”: “BSc Business Administration”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Logistics and Supply Chain Management”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Communication Studies”,
“cutoff”: 28,
“college”: “School of Communication”
},
{
“name”: “BSc Journalism and Media Studies”,
“cutoff”: 28,
“college”: “School of Communication”
}
]
},
“HTU”: {
“name”: “Ho Technical University”,
“short”: “HTU”,
“programs”: [
{
“name”: “BTech Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Electrical/Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechanical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Civil Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Hospitality and Tourism Management”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Fashion Design and Textiles”,
“cutoff”: 24,
“college”: “Faculty of Applied Arts”
},
{
“name”: “BTech Construction Technology”,
“cutoff”: 24,
“college”: “Faculty of Built Environment”
},
{
“name”: “HND Accounting”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Marketing”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Computer Science”,
“cutoff”: 36,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “HND Electrical/Electronic Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
},
{
“name”: “HND Civil Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
}
]
},
“STU”: {
“name”: “Sunyani Technical University”,
“short”: “STU”,
“programs”: [
{
“name”: “BTech Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Electrical/Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechanical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Civil Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Agriculture Business”,
“cutoff”: 24,
“college”: “Faculty of Agriculture”
},
{
“name”: “BTech Fashion Design”,
“cutoff”: 24,
“college”: “Faculty of Applied Arts”
},
{
“name”: “HND Accountancy”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Computer Science”,
“cutoff”: 36,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “HND Electrical/Electronic Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
}
]
},
“TTU”: {
“name”: “Tamale Technical University”,
“short”: “TTU”,
“programs”: [
{
“name”: “BTech Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Electrical/Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechanical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Civil Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Logistics and Supply Chain”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Fashion Design”,
“cutoff”: 24,
“college”: “Faculty of Applied Arts”
},
{
“name”: “BTech Agriculture Technology”,
“cutoff”: 24,
“college”: “Faculty of Agriculture”
},
{
“name”: “HND Accountancy”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Computer Science”,
“cutoff”: 36,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “HND Electrical/Electronic Engineering”,
“cutoff”: 36,
“college”: “Faculty of Engineering”
}
]
},
“AAMUSTED”: {
“name”: “Akenten Appiah-Menka University of Skills Training & Entrepreneurial Development”,
“short”: “AAMUSTED”,
“programs”: [
{
“name”: “BSc ICT Education”,
“cutoff”: 24,
“college”: “Faculty of Science Education”
},
{
“name”: “BSc Mathematics Education”,
“cutoff”: 24,
“college”: “Faculty of Science Education”
},
{
“name”: “BSc Technical Education (Electrical)”,
“cutoff”: 24,
“college”: “Faculty of Technical Education”
},
{
“name”: “BSc Technical Education (Mechanical)”,
“cutoff”: 24,
“college”: “Faculty of Technical Education”
},
{
“name”: “BSc Technical Education (Civil)”,
“cutoff”: 24,
“college”: “Faculty of Technical Education”
},
{
“name”: “BSc Business Education (Accounting)”,
“cutoff”: 28,
“college”: “Faculty of Business Education”
},
{
“name”: “BSc Business Education (Marketing)”,
“cutoff”: 28,
“college”: “Faculty of Business Education”
},
{
“name”: “BSc Home Economics Education”,
“cutoff”: 28,
“college”: “Faculty of Vocational Education”
},
{
“name”: “BSc Fashion and Textiles Education”,
“cutoff”: 28,
“college”: “Faculty of Vocational Education”
},
{
“name”: “BSc Agriculture Education”,
“cutoff”: 28,
“college”: “Faculty of Agriculture Education”
},
{
“name”: “BA Social Studies Education”,
“cutoff”: 30,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BA English Language Education”,
“cutoff”: 30,
“college”: “Faculty of Languages”
},
{
“name”: “BEd Basic Education”,
“cutoff”: 32,
“college”: “Faculty of Education”
}
]
},
“CAPE_TECH”: {
“name”: “Cape Coast Technical University”,
“short”: “CCTU”,
“programs”: [
{
“name”: “BTech Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Sciences”
},
{
“name”: “BTech Electrical/Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechanical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Civil Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BTech Fashion Design and Textiles”,
“cutoff”: 24,
“college”: “Faculty of Applied Arts”
},
{
“name”: “BTech Interior Design”,
“cutoff”: 24,
“college”: “Faculty of Applied Arts”
},
{
“name”: “BTech Building Technology”,
“cutoff”: 24,
“college”: “Faculty of Built Environment”
},
{
“name”: “HND Accountancy”,
“cutoff”: 36,
“college”: “Faculty of Business”
},
{
“name”: “HND Computer Science”,
“cutoff”: 36,
“college”: “Faculty of Applied Sciences”
}
]
},
“KOFORIDUA”: {
“name”: “Koforidua Technical University”,
“short”: “KTechU”,
“programs”: [
{
“name”: “BTech Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Science and Technology”
},
{
“name”: “BTech Artificial Intelligence and Robotics”,
“cutoff”: 24,
“college”: “Faculty of Applied Science and Technology”
},
{
“name”: “BTech Actuarial Science”,
“cutoff”: 24,
“college”: “Faculty of Applied Science and Technology”
},
{
“name”: “BTech Statistics”,
“cutoff”: 24,
“college”: “Faculty of Applied Science and Technology”
},
{
“name”: “BTech Graphic Design”,
“cutoff”: 24,
“college”: “Faculty of Applied Science and Technology”
},
{
“name”: “BTech Hospitality and Tourism Management”,
“cutoff”: 24,
“college”: “Faculty of Applied Science and Technology”
},
{
“name”: “BTech Fashion Design and Textiles”,
“cutoff”: 24,
“college”: “Faculty of Applied Science and Technology”
},
{
“name”: “BTech Construction Technology & Management”,
“cutoff”: 24,
“college”: “Faculty of Built & Natural Environment”
},
{
“name”: “BTech Real Estates Management”,
“cutoff”: 24,
“college”: “Faculty of Built & Natural Environment”
},
{
“name”: “BTech Environmental Management & Technology”,
“cutoff”: 24,
“college”: “Faculty of Built & Natural Environment”
},
{
“name”: “BTech Integrated Development Planning”,
“cutoff”: 24,
“college”: “Faculty of Built & Natural Environment”
},
{
“name”: “BTech Accounting and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business and Management Studies”
},
{
“name”: “BTech Automotive Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Mechatronics”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Telecommunication Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Renewable Energy Systems Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BTech Medical Laboratory Sciences”,
“cutoff”: 24,
“college”: “Faculty of Health and Allied Sciences”
},
{
“name”: “BTech Biomedical Engineering”,
“cutoff”: 24,
“college”: “Faculty of Health and Allied Sciences”
}
]
},
“GIJ”: {
“name”: “University of Media Arts and Communication (GIJ)”,
“short”: “UMAC/GIJ”,
“programs”: [
{
“name”: “BA Communication Studies”,
“cutoff”: 24,
“college”: “School of Communication”
},
{
“name”: “BA Journalism”,
“cutoff”: 24,
“college”: “School of Journalism”
},
{
“name”: “BSc Development Communication”,
“cutoff”: 24,
“college”: “School of Communication”
},
{
“name”: “BSc Public Relations”,
“cutoff”: 24,
“college”: “School of Communication”
},
{
“name”: “BSc Advertising”,
“cutoff”: 24,
“college”: “School of Communication”
},
{
“name”: “BSc Film and Television Production”,
“cutoff”: 24,
“college”: “School of Media Arts”
},
{
“name”: “BSc Photography”,
“cutoff”: 28,
“college”: “School of Media Arts”
},
{
“name”: “BSc Media and Communication Technology”,
“cutoff”: 24,
“college”: “School of Technology”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Technology”
}
]
},
“NURSING”: {
“name”: “Public Nursing Training Colleges”,
“short”: “Nursing”,
“programs”: [
{
“name”: “BSc Public Health Nursing”,
“cutoff”: 12,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Anesthesia Nursing”,
“cutoff”: 12,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Critical Care Nursing”,
“cutoff”: 12,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Blood Services Nursing”,
“cutoff”: 14,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Community Mental Health Nursing”,
“cutoff”: 14,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Disease Control and Epidemiology”,
“cutoff”: 14,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Medical Laboratory Technology”,
“cutoff”: 14,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Health Information Management”,
“cutoff”: 14,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Environmental Health and Sanitation”,
“cutoff”: 16,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Ophthalmic Nursing”,
“cutoff”: 16,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Peri-Operative Nursing”,
“cutoff”: 16,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “BSc Physician Assistantship (Medical)”,
“cutoff”: 14,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Registered General Nursing (RGN) Diploma”,
“cutoff”: 20,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Registered Midwifery (RM) Diploma”,
“cutoff”: 20,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Registered Mental Health Nursing (RMN) Diploma”,
“cutoff”: 20,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Registered Community Mental Health Nursing Diploma”,
“cutoff”: 20,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Public Health Nursing (PHN) Diploma”,
“cutoff”: 20,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Diploma Physiotherapy”,
“cutoff”: 20,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Diploma Occupational Therapy”,
“cutoff”: 20,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Diploma Environmental Health”,
“cutoff”: 24,
“college”: “All Public Nursing Training Colleges”
},
{
“name”: “Diploma Community Nutrition”,
“cutoff”: 24,
“college”: “All Public Nursing Training Colleges”
}
]
},
“COE”: {
“name”: “Colleges of Education (Teacher Training)”,
“short”: “CoE”,
“programs”: [
{
“name”: “B.Ed. Early Grade Education”,
“cutoff”: 24,
“college”: “Colleges of Education”
},
{
“name”: “B.Ed. Primary Education”,
“cutoff”: 24,
“college”: “Colleges of Education”
},
{
“name”: “B.Ed. JHS Education”,
“cutoff”: 24,
“college”: “Colleges of Education”
},
{
“name”: “Diploma in Basic Education”,
“cutoff”: 30,
“college”: “Colleges of Education”
}
]
},
“CENTRAL”: {
“name”: “Central University”,
“short”: “CU”,
“programs”: [
{
“name”: “BA Theology and Ministerial Studies”,
“cutoff”: 24,
“college”: “Faculty of Theology & Mission”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing & IT”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing & IT”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Economics”,
“cutoff”: 24,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BA Law”,
“cutoff”: 24,
“college”: “Faculty of Law”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 24,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
}
]
},
“VVU”: {
“name”: “Valley View University”,
“short”: “VVU”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “School of Computing & IT”
},
{
“name”: “BSc Information Systems”,
“cutoff”: 24,
“college”: “School of Computing & IT”
},
{
“name”: “BSc Nursing”,
“cutoff”: 20,
“college”: “School of Health Sciences”
},
{
“name”: “BSc Medical Laboratory Science”,
“cutoff”: 20,
“college”: “School of Health Sciences”
},
{
“name”: “BSc Pharmacy”,
“cutoff”: 18,
“college”: “School of Health Sciences”
},
{
“name”: “BSc Public Health”,
“cutoff”: 24,
“college”: “School of Health Sciences”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BA Theology”,
“cutoff”: 28,
“college”: “School of Theology”
},
{
“name”: “BSc Agriculture”,
“cutoff”: 28,
“college”: “School of Agriculture”
}
]
},
“GIMPA”: {
“name”: “GIMPA \u2014 Ghana Institute of Management and Public Administration”,
“short”: “GIMPA”,
“programs”: [
{
“name”: “BSc Business Administration”,
“cutoff”: 24,
“college”: “Business School”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Business School”
},
{
“name”: “BSc Finance”,
“cutoff”: 24,
“college”: “Business School”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “Business School”
},
{
“name”: “BSc Human Resource Management”,
“cutoff”: 24,
“college”: “Business School”
},
{
“name”: “LLB Law”,
“cutoff”: 18,
“college”: “School of Law”
},
{
“name”: “BSc Public Administration”,
“cutoff”: 24,
“college”: “School of Public Service”
},
{
“name”: “BSc Governance and Leadership”,
“cutoff”: 24,
“college”: “School of Public Service”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Technology”
},
{
“name”: “BSc Logistics and Supply Chain Management”,
“cutoff”: 24,
“college”: “Business School”
}
]
},
“RMU”: {
“name”: “Regional Maritime University”,
“short”: “RMU”,
“programs”: [
{
“name”: “BSc Nautical Science (Deck Officer)”,
“cutoff”: 18,
“college”: “Faculty of Maritime Studies”
},
{
“name”: “BSc Marine Engineering”,
“cutoff”: 18,
“college”: “Faculty of Maritime Studies”
},
{
“name”: “BSc Port and Shipping Administration”,
“cutoff”: 20,
“college”: “Faculty of Maritime Studies”
},
{
“name”: “BSc Logistics and Supply Chain Management”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Transport Planning and Management”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Marine Environmental Management”,
“cutoff”: 24,
“college”: “Faculty of Maritime Studies”
},
{
“name”: “BSc Ocean Engineering Technology”,
“cutoff”: 20,
“college”: “Faculty of Engineering”
},
{
“name”: “BSc Electrical and Electronic Engineering”,
“cutoff”: 24,
“college”: “Faculty of Engineering”
},
{
“name”: “BSc Computer Science and Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing”
}
]
},
“CKTEDAM”: {
“name”: “C. K. Tedam University of Technology & Applied Sciences”,
“short”: “CKTedam”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “School of Applied Sciences”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Applied Sciences”
},
{
“name”: “BSc Mathematical Sciences”,
“cutoff”: 24,
“college”: “School of Applied Sciences”
},
{
“name”: “BSc Agriculture”,
“cutoff”: 28,
“college”: “School of Agriculture and Technology”
},
{
“name”: “BSc Agricultural Technology”,
“cutoff”: 28,
“college”: “School of Agriculture and Technology”
},
{
“name”: “BSc Agribusiness”,
“cutoff”: 28,
“college”: “School of Agriculture and Technology”
},
{
“name”: “BSc Nursing”,
“cutoff”: 20,
“college”: “School of Health Sciences”
},
{
“name”: “BSc Medical Laboratory Science”,
“cutoff”: 22,
“college”: “School of Health Sciences”
},
{
“name”: “BSc Public Health”,
“cutoff”: 24,
“college”: “School of Health Sciences”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 28,
“college”: “School of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 28,
“college”: “School of Business”
},
{
“name”: “BSc Economics”,
“cutoff”: 28,
“college”: “School of Business”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 28,
“college”: “School of Social Sciences”
}
]
},
“SD_DOMBO”: {
“name”: “SD Dombo University of Business and Integrated Development Studies”,
“short”: “SDD-UBIDS”,
“programs”: [
{
“name”: “BSc Business Administration”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Entrepreneurship”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Logistics and Supply Chain”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 24,
“college”: “School of Development Studies”
},
{
“name”: “BSc Integrated Development Studies”,
“cutoff”: 24,
“college”: “School of Development Studies”
},
{
“name”: “BSc Community Development”,
“cutoff”: 24,
“college”: “School of Development Studies”
},
{
“name”: “BSc Public Administration”,
“cutoff”: 24,
“college”: “School of Public Administration”
},
{
“name”: “BSc Agriculture Business”,
“cutoff”: 28,
“college”: “School of Agriculture”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “School of Technology”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Technology”
}
]
},
“PENT”: {
“name”: “Pentecost University”,
“short”: “PU”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing & IT”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing & IT”
},
{
“name”: “BSc Cyber Security”,
“cutoff”: 24,
“college”: “Faculty of Computing & IT”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BA Theology”,
“cutoff”: 28,
“college”: “Faculty of Theology”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 28,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BSc Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
}
]
},
“PRESBY”: {
“name”: “Presbyterian University”,
“short”: “PUG”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Economics”,
“cutoff”: 24,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BA Theology and Religious Studies”,
“cutoff”: 28,
“college”: “Faculty of Theology”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 28,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BSc Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
}
]
},
“ALL_NATIONS”: {
“name”: “All Nations University”,
“short”: “ANU”,
“programs”: [
{
“name”: “BSc Computer Science and Engineering”,
“cutoff”: 24,
“college”: “School of Engineering & IT”
},
{
“name”: “BSc Electrical and Electronic Engineering”,
“cutoff”: 24,
“college”: “School of Engineering & IT”
},
{
“name”: “BSc Mechanical Engineering”,
“cutoff”: 24,
“college”: “School of Engineering & IT”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Engineering & IT”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 28,
“college”: “School of Communication”
},
{
“name”: “BSc Public Health”,
“cutoff”: 28,
“college”: “School of Health Sciences”
}
]
},
“WISCONSIN”: {
“name”: “Wisconsin International University College”,
“short”: “WIUC”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
},
{
“name”: “BSc Public Administration”,
“cutoff”: 28,
“college”: “Faculty of Social Sciences”
}
]
},
“ACAD_CITY”: {
“name”: “Academic City University College”,
“short”: “AcadCity”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 18,
“college”: “School of Computing & Engineering”,
“notes”: “Holistic review \u2014 portfolio may be required”
},
{
“name”: “BSc Data Science and Analytics”,
“cutoff”: 18,
“college”: “School of Computing & Engineering”
},
{
“name”: “BSc Cyber Security”,
“cutoff”: 18,
“college”: “School of Computing & Engineering”
},
{
“name”: “BSc Electrical and Electronic Engineering”,
“cutoff”: 18,
“college”: “School of Computing & Engineering”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Marketing and Entrepreneurship”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting and Finance”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BA Communication and Media Studies”,
“cutoff”: 24,
“college”: “School of Communication”
},
{
“name”: “BSc Law (LLB)”,
“cutoff”: 20,
“college”: “School of Law”
}
]
},
“CATHOLIC”: {
“name”: “Catholic University of Ghana”,
“short”: “CUG”,
“programs”: [
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 24,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BA Theology”,
“cutoff”: 28,
“college”: “Faculty of Theology”
},
{
“name”: “BSc Nursing”,
“cutoff”: 22,
“college”: “Faculty of Health Sciences”
},
{
“name”: “BSc Public Health”,
“cutoff”: 24,
“college”: “Faculty of Health Sciences”
},
{
“name”: “BSc Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
}
]
},
“KAAF”: {
“name”: “KAAF University College”,
“short”: “KAAF”,
“programs”: [
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Public Health”,
“cutoff”: 24,
“college”: “Faculty of Health Sciences”
},
{
“name”: “BSc Nursing”,
“cutoff”: 22,
“college”: “Faculty of Health Sciences”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
},
{
“name”: “BSc Economics”,
“cutoff”: 24,
“college”: “Faculty of Social Sciences”
}
]
},
“METHODIST”: {
“name”: “Methodist University”,
“short”: “MUG”,
“programs”: [
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Banking and Finance”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BA Theology”,
“cutoff”: 28,
“college”: “Faculty of Theology”
},
{
“name”: “BSc Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 28,
“college”: “Faculty of Social Sciences”
}
]
},
“RADFORD”: {
“name”: “Radford University College”,
“short”: “RUC”,
“programs”: [
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “School of Computing”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Computing”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 28,
“college”: “School of Communication”
},
{
“name”: “BSc Law”,
“cutoff”: 24,
“college”: “School of Law”
}
]
},
“CSU”: {
“name”: “Christian Service University College”,
“short”: “CSUC”,
“programs”: [
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “Faculty of Business”
},
{
“name”: “BSc Nursing”,
“cutoff”: 22,
“college”: “Faculty of Health Sciences”
},
{
“name”: “BSc Development Studies”,
“cutoff”: 24,
“college”: “Faculty of Social Sciences”
},
{
“name”: “BA Theology”,
“cutoff”: 28,
“college”: “Faculty of Theology”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “Faculty of Computing”
},
{
“name”: “BSc Communication Studies”,
“cutoff”: 28,
“college”: “Faculty of Communication”
}
]
},
“GBUC”: {
“name”: “Ghana Baptist University College”,
“short”: “GBUC”,
“programs”: [
{
“name”: “BBA Business Administration”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Accounting”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Marketing”,
“cutoff”: 24,
“college”: “School of Business”
},
{
“name”: “BSc Computer Science”,
“cutoff”: 24,
“college”: “School of Computing”
},
{
“name”: “BSc Information Technology”,
“cutoff”: 24,
“college”: “School of Computing”
},
{
“name”: “BA Theology”,
“cutoff”: 28,
“college”: “School of Theology”
},
{
“name”: “BSc Public Health”,
“cutoff”: 24,
“college”: “School of Health Sciences”
},
{
“name”: “BSc Nursing”,
“cutoff”: 22,
“college”: “School of Health Sciences”
},
{
“name”: “BA Communication Studies”,
“cutoff”: 28,
“college”: “School of Communication”
}
]
}
};
