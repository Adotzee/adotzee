const fs = require('fs');
const path = require('path');

const pages = [
  "about", "contact", "privacy", "terms", "cookies", 
  "accessibility", "states", "cities", "blogs", "guides", "faq"
];

const basePath = path.join(__dirname, 'src', 'app');

pages.forEach(page => {
  const dir = path.join(basePath, page);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const capitalized = page.charAt(0).toUpperCase() + page.slice(1);
  const filePath = path.join(dir, 'page.tsx');

  const content = `import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: \`${capitalized} | \${COMPANY_INFO.name}\`,
    description: \`Learn more about ${capitalized} at \${COMPANY_INFO.name}, India's trusted college admission platform.\`,
    alternates: {
        canonical: \`\${COMPANY_INFO.fullUrl}/${page}\`,
    }
};

export default function ${capitalized}Page() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: '${capitalized}', url: \`\${COMPANY_INFO.fullUrl}/${page}\` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": \`${capitalized} | \${COMPANY_INFO.name}\`,
        "description": \`Learn more about ${capitalized} at \${COMPANY_INFO.name}.\`,
        "url": \`\${COMPANY_INFO.fullUrl}/${page}\`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    ${capitalized}
                </h1>
                <div className="prose prose-lg text-slate-600">
                    <p>Welcome to the ${capitalized} page of {COMPANY_INFO.name}, India's trusted college admission platform.</p>
                    <p>We are actively working on expanding this section to provide you with verified, high-quality information regarding college admissions and educational guidance.</p>
                </div>
            </div>
        </div>
    );
}
`;

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log("Files generated successfully!");
