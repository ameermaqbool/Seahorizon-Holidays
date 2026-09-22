/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://seahorizonholidays.com',
  outDir: 'out', // Write postbuild files into the deployed static export.
  generateRobotsTxt: true,                  
  sitemapSize: 7000,                         
  changefreq: 'daily',                       
  priority: 0.7,                             
  exclude: ['/admin/*', '/api/*'],           
};

