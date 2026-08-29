const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://khaanchwala-bk51042oq-khaachwala.vercel.app'

const routes = [
  '/', '/about-us', '/services', '/industries', '/portfolio', '/process', '/testimonials', '/blog', '/faq', '/contact', '/privacy-policy', '/terms-conditions',
  '/services/toughened-glass', '/services/shower-cubicles', '/services/glass-partitions', '/services/office-glass-cabins', '/services/custom-wall-mirrors', '/services/decorative-mirrors', '/services/glass-railings-balustrades', '/services/aluminium-sliding-windows', '/services/upvc-windows', '/services/mesh-doors', '/services/fusion-glass-beveling', '/services/glass-polishing', '/services/pvd-work-aluminium-profiles', '/services/aristo-wardrobes',
  '/industries/residential', '/industries/apartments', '/industries/villas', '/industries/offices', '/industries/hotels', '/industries/restaurants-cafes', '/industries/hospitals', '/industries/retail-stores', '/industries/salons-gyms',
  '/portfolio/residential-projects', '/portfolio/commercial-projects', '/portfolio/before-after', '/portfolio/video-gallery',
  '/process/site-visit', '/process/measurement', '/process/design', '/process/fabrication', '/process/installation', '/process/after-sales-support',
  '/blog/glass-buying-guide', '/blog/mirror-design-ideas', '/blog/shower-cubicle-guide', '/blog/office-partition-guide', '/blog/glass-maintenance-tips', '/blog/interior-design-trends',
]

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/api/*', '/_next/*'],
  additionalPaths: async (config) => routes.map((path) => ({ loc: path, changefreq: 'weekly', priority: path === '/' ? 1 : 0.8 })),
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }],
  },
}
