const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src', 'app');

const contents = {
  about: `
      <h2>Who is Adotzee?</h2>
      <p>Adotzee is India's most trusted college admission and career guidance platform. We are an elite education consultancy and technology platform designed to bridge the gap between ambitious students and premier educational institutions.</p>
      <h2>Why Trust Adotzee?</h2>
      <p>We believe in absolute transparency. Unlike typical consultancies, our data is rigorously verified, and our processes are fully transparent. Every college listed on our platform undergoes strict verification for accuracy in fees, facilities, and placements.</p>
      <h2>How Does Admission Work?</h2>
      <p>Students can explore verified colleges on our platform, compare them, and request a callback. Our expert counsellors provide personalized guidance, helping students select the right course and securing direct admission without hidden charges.</p>
  `,
  contact: `
      <h2>Get in Touch with Our Experts</h2>
      <p>Have questions about college admissions? Our team of verified admission experts is here to provide fast support and transparent guidance.</p>
      <ul>
        <li><strong>Email:</strong> adotzeein@gmail.com</li>
        <li><strong>Phone:</strong> +91 8281060462</li>
        <li><strong>Address:</strong> Kerala, India</li>
      </ul>
      <h2>Fast Response Support</h2>
      <p>We pride ourselves on our student-first approach. Submit an enquiry securely, and one of our experts will contact you shortly.</p>
  `,
  faq: `
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-xl text-indigo-600">How is data verified on Adotzee?</h3>
          <p>Our dedicated team physically and digitally verifies all college information, including fees, accreditations, and campus facilities. Our live data is updated daily.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl text-indigo-600">Are there any hidden charges for counselling?</h3>
          <p>No. We provide transparent admission guidance with zero hidden charges. Our primary goal is your educational success.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl text-indigo-600">Which locations do you cover?</h3>
          <p>We specialize in premier institutions across South India, heavily focusing on Karnataka (Bangalore, Mangalore), Tamil Nadu, and Kerala.</p>
        </div>
      </div>
  `,
  privacy: `
      <h2>Privacy Commitment</h2>
      <p>Your privacy is our priority. This Privacy Policy outlines how Adotzee collects, uses, and protects your personal information when you use our platform for college discovery and admission guidance.</p>
      <h2>Data Security</h2>
      <p>All enquiries are securely processed. We never sell your data to unverified third parties. Your information is used strictly to connect you with expert counsellors and verified colleges.</p>
  `,
  terms: `
      <h2>Terms of Service</h2>
      <p>Welcome to Adotzee. By accessing our platform, you agree to these terms. We provide verified college information and admission guidance. While we strive for 100% accuracy, admission decisions ultimately rest with the respective educational institutions.</p>
      <h2>User Responsibilities</h2>
      <p>Students must provide accurate information during the counselling process to ensure we can secure the best possible admission opportunities.</p>
  `,
  cookies: `
      <h2>Cookie Policy</h2>
      <p>Adotzee uses cookies to enhance your college discovery experience. Cookies help us understand user behavior, optimize our website's core web vitals, and personalize your admission guidance journey.</p>
      <h2>Managing Cookies</h2>
      <p>You can control cookie preferences through your browser settings. However, disabling essential cookies may impact the performance of our platform.</p>
  `,
  accessibility: `
      <h2>Accessibility Statement</h2>
      <p>Adotzee is committed to ensuring digital accessibility for all students, including those with disabilities. We continually improve our user experience and apply relevant accessibility standards (WCAG 2.1).</p>
      <h2>Feedback</h2>
      <p>If you encounter any accessibility barriers on our platform, please contact our support team. We prioritize fixing accessibility issues to maintain a 100/100 accessibility score.</p>
  `,
  states: `
      <h2>Discover Colleges by State</h2>
      <p>Explore premier educational institutions across India's top educational hubs. We provide verified admission guidance for colleges in:</p>
      <ul>
        <li><strong>Karnataka:</strong> Known for IT and Engineering hubs like Bangalore and Mangalore.</li>
        <li><strong>Tamil Nadu:</strong> Home to prestigious medical and technical universities.</li>
        <li><strong>Kerala:</strong> Renowned for high-quality education and scenic campuses.</li>
      </ul>
  `,
  cities: `
      <h2>Discover Colleges by City</h2>
      <p>Find the perfect campus in your preferred city. Our platform covers major educational destinations:</p>
      <ul>
        <li><strong>Bangalore:</strong> The Silicon Valley of India, perfect for Engineering and Management.</li>
        <li><strong>Mangalore:</strong> A growing hub for Medical and Allied Health Sciences.</li>
        <li><strong>Mysore:</strong> A peaceful city with excellent traditional and modern courses.</li>
        <li><strong>Coimbatore:</strong> The Manchester of South India, known for engineering excellence.</li>
      </ul>
  `,
  blogs: `
      <h2>Education Blog & Insights</h2>
      <p>Stay updated with the latest trends in higher education, entrance exams, and career opportunities. Our enterprise content team regularly publishes verified articles to help you navigate your student journey.</p>
      <p><em>Check back soon for our comprehensive series of 100 Pillar Articles covering Engineering, Medical, and MBA admissions.</em></p>
  `,
  guides: `
      <h2>Comprehensive Admission Guides</h2>
      <p>Navigating the college admission process can be complex. Our expert guides break down everything you need to know about:</p>
      <ul>
        <li>Direct Admission Procedures</li>
        <li>Scholarship Opportunities</li>
        <li>Education Loan Assistance</li>
        <li>Course Comparisons (e.g., BCA vs BTech)</li>
      </ul>
  `
};

Object.keys(contents).forEach(page => {
  const dir = path.join(basePath, page);
  const filePath = path.join(dir, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    const existingContent = fs.readFileSync(filePath, 'utf8');
    
    // Replace the boilerplate prose with actual HTML content
    const replaced = existingContent.replace(
      /<div className="prose prose-lg text-slate-600">[\s\S]*?<\/div>/,
      `<div className="prose prose-lg text-slate-600 max-w-none">
          ${contents[page]}
      </div>`
    );
    
    fs.writeFileSync(filePath, replaced, 'utf8');
  }
});

console.log("Enterprise content injected successfully.");
