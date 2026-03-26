/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://adotzee.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/search'], // Exclude dynamic search results pages for better crawl budget
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search'],
      },
    ],
  },
};
