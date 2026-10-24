// ==========================================================================
// Blood Donation Awareness - Educational Data & Fictional Seed Donors
// Clean, structured data used by app.js for interactive features
// ==========================================================================

// 1. ABO/Rh Blood Compatibility Matrix
export const COMPATIBILITY_DATA = {
  'O-': {
    name: 'O Negative',
    give: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
    receive: ['O-'],
    badge: 'Universal Red Cell Donor',
    note: 'O- red cells lack A, B, and Rh antigens. In severe trauma emergencies, O- is transfused immediately before lab crossmatching.'
  },
  'O+': {
    name: 'O Positive',
    give: ['O+', 'A+', 'B+', 'AB+'],
    receive: ['O-', 'O+'],
    badge: 'Most Common Blood Type',
    note: 'Around 38% of people have O+. It is the most transfused blood type in hospital trauma centers and planned surgeries.'
  },
  'A-': {
    name: 'A Negative',
    give: ['A-', 'A+', 'AB-', 'AB+'],
    receive: ['O-', 'A-'],
    badge: 'Vital Platelet Donor',
    note: 'A- can give red cells to all A and AB patients. Donors with A- are highly encouraged to donate platelets.'
  },
  'A+': {
    name: 'A Positive',
    give: ['A+', 'AB+'],
    receive: ['O-', 'O+', 'A-', 'A+'],
    badge: 'High Demand Blood Type',
    note: 'Second most common group (~34%). Vital for cancer chemotherapy support, general surgery, and orthopedic units.'
  },
  'B-': {
    name: 'B Negative',
    give: ['B-', 'B+', 'AB-', 'AB+'],
    receive: ['O-', 'B-'],
    badge: 'Rare Blood Type (~2%)',
    note: 'Very rare blood type. Crucial for managing ongoing hematological disorders like sickle cell disease and thalassemia.'
  },
  'B+': {
    name: 'B Positive',
    give: ['B+', 'AB+'],
    receive: ['O-', 'O+', 'B-', 'B+'],
    badge: 'Regular Demand (~9%)',
    note: 'Frequently required for pediatric surgeries, routine hospital supplies, and cancer care transfusions.'
  },
  'AB-': {
    name: 'AB Negative',
    give: ['AB-', 'AB+'],
    receive: ['O-', 'A-', 'B-', 'AB-'],
    badge: 'Rarest Group (<1%)',
    note: 'The rarest blood type in the world. AB- individuals are prized universal emergency plasma donors.'
  },
  'AB+': {
    name: 'AB Positive',
    give: ['AB+'],
    receive: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
    badge: 'Universal Recipient',
    note: 'Can receive red cells from every blood group. In addition, AB+ donors produce universal plasma that can treat anyone.'
  }
};

// 2. Clinical Impact Use Cases
export const IMPACT_CARDS = [
  {
    icon: '🚗',
    title: 'Emergency Trauma',
    desc: 'Severe road accidents and trauma injuries can require up to 30 to 50 blood units within minutes to prevent hemorrhagic shock.',
    demand: '30–50 Units per Patient'
  },
  {
    icon: '🏥',
    title: 'Surgeries & Transplants',
    desc: 'Complex cardiac operations, hip replacements, and liver or kidney organ transplants rely on available compatible blood.',
    demand: '2–10 Units per Surgery'
  },
  {
    icon: '🩺',
    title: 'Cancer & Chemotherapy',
    desc: 'Chemotherapy medications suppress bone marrow, requiring regular platelet and red cell transfusions to sustain cancer patients.',
    demand: 'Weekly Transfusions'
  },
  {
    icon: '👶',
    title: 'Maternal & Neonatal Care',
    desc: 'Postpartum hemorrhage in mothers and premature newborns suffering from anemia depend on screened, emergency blood reserves.',
    demand: 'Immediate Hospital Access'
  }
];

// 3. Myths and Peer-Reviewed Medical Facts
export const MYTHS_DATA = [
  {
    myth: "Donating blood makes you weak and takes weeks to recover.",
    fact: "Your body replenishes donated fluid volume (plasma) within 24 to 48 hours and produces new red blood cells within 3 to 4 weeks. Normal daily activities can be resumed after 24 hours."
  },
  {
    myth: "You can catch infections or diseases like HIV by donating blood.",
    fact: "Impossible. Every single needle, tube, and collection kit is 100% sterile, factory-sealed, and used exactly once before being safely incinerated."
  },
  {
    myth: "If you have a tattoo or body piercing, you can never donate blood.",
    fact: "You can safely donate once a routine safety deferral window (usually 3 to 6 months depending on regional health guidelines) has passed after getting the tattoo."
  },
  {
    myth: "The donation process is painful and takes half a day.",
    fact: "The actual needle collection takes only 8 to 10 minutes and feels like a brief pinch. The entire visit, including health screening and resting with refreshments, takes under 45 minutes."
  }
];

// 4. Interactive 4-Question Knowledge Quiz
export const QUIZ_QUESTIONS = [
  {
    question: "What is the minimum recommended interval between regular whole blood donations for healthy adults?",
    options: ["14 Days", "56 Days (8 Weeks)", "6 Months", "1 Year"],
    correctIndex: 1,
    explanation: "Red blood cells require approximately 56 days (8 weeks) to safely regenerate to healthy baseline levels."
  },
  {
    question: "Which blood group is known as the Universal Red Blood Cell Donor?",
    options: ["A Positive", "AB Positive", "O Negative", "B Positive"],
    correctIndex: 2,
    explanation: "O Negative red cells do not have A, B, or Rh surface antigens, so they can be safely transfused to any blood type in emergencies."
  },
  {
    question: "Roughly how many human lives can be saved by a single whole blood donation?",
    options: ["1 Life", "Up to 3 Lives", "5 Lives", "10 Lives"],
    correctIndex: 1,
    explanation: "One unit of whole blood is separated into three components: Red Blood Cells, Platelets, and Plasma, helping up to 3 different patients."
  },
  {
    question: "Can blood donation equipment be reused between different donors?",
    options: [
      "Yes, after washing with hot water",
      "Yes, if cleaned with alcohol",
      "No, all needles and bags are strictly single-use and sterile",
      "Only for family members"
    ],
    correctIndex: 2,
    explanation: "Blood collection needles and bags are strictly sterile, single-use, and disposed of as clinical medical waste immediately after donation."
  }
];

// 5. Initial Fictional Seed Donors for Demo
export const INITIAL_DONORS = [
  { name: 'Rahul Sharma', bloodGroup: 'O+', city: 'Campus Central', phone: '•••-•••-4321' },
  { name: 'Ananya Verma', bloodGroup: 'A+', city: 'North Enclave', phone: '•••-•••-8765' },
  { name: 'Amit Patel', bloodGroup: 'O-', city: 'Civil Lines', phone: '•••-•••-1122' },
  { name: 'Sneha Kulkarni', bloodGroup: 'B+', city: 'Tech Park', phone: '•••-•••-9900' },
  { name: 'David Miller', bloodGroup: 'AB+', city: 'Metro Station', phone: '•••-•••-3344' }
];
