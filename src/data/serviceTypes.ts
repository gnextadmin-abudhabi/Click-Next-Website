// ============================================================
// CLICKNX — Service Types
// Performance Marketing Services
// ============================================================
export interface ProcessStep {
  title: string;
  description: string;
}
export interface PriceRange {
  label: string;
  min: number;
  max: number;
  unit?: string;
}
export interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}
export interface ServiceType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  emergency: boolean;
  featured: boolean;
  process: ProcessStep[];
  priceRanges: PriceRange[];
  keywords: string[];
  relatedServices: string[];
  caseStudies: CaseStudy[];
}
export const serviceTypes: ServiceType[] = [
  {
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    shortName: 'Google Ads',
    description: 'Expert Google Ads management for UAE businesses. We build, optimize, and scale Search, Display, Shopping, and Performance Max campaigns to maximize your ad spend ROI.',
    image: '/images/performance/google-ads-journey.webp',
    imageAlt: 'Illustrated Google Ads customer journey connecting search intent, campaign structure, landing pages, and qualified leads',
    icon: 'search',
    emergency: false,
    featured: true,
    process: [
      { title: 'Account Audit & Strategy', description: 'We audit existing campaigns or build a fresh strategy based on your business goals, budget, and target audience.' },
      { title: 'Keyword Research & Structuring', description: 'Deep keyword analysis with campaign-level organization for maximum Quality Score and minimum CPC.' },
      { title: 'Ad Copy & Creative Development', description: 'Compelling ad copy with responsive search ads, sitelink extensions, and location targeting.' },
      { title: 'Launch & Optimization', description: 'Campaign launch with daily bid adjustments, negative keyword management, and A/B testing.' },
      { title: 'Reporting & Scaling', description: 'Weekly performance reports with data-driven scaling strategies to grow profitable traffic.' },
    ],
    priceRanges: [
      { label: 'Starter (up to AED 10K ad spend)', min: 1000, max: 2500, unit: 'AED/month' },
      { label: 'Growth (AED 10K-50K ad spend)', min: 3000, max: 6000, unit: 'AED/month' },
      { label: 'Enterprise (AED 50K+ ad spend)', min: 8000, max: 15000, unit: 'AED/month' },
    ],
    keywords: ['Google Ads Abu Dhabi', 'PPC management UAE', 'Google Ads agency Dubai', 'search advertising Sharjah', 'performance max campaigns'],
    relatedServices: ['meta-ads', 'landing-page-design', 'analytics-tracking'],
    caseStudies: [
      {
        title: 'MEP Contractor Generates 420% More Project Inquiries',
        industry: 'Construction / MEP Contracting',
        challenge: 'A Dubai-based MEP contracting company was spending AED 20,000/month on Google Ads but receiving only 8 qualified project inquiries per month with a cost per lead of AED 2,500. Competitors were dominating search results for high-value commercial contracting keywords.',
        solution: 'We restructured their account with project-type-specific ad groups (commercial fit-out, MEP installation, maintenance contracts), created dedicated landing pages showcasing past projects with client testimonials, implemented call tracking for tender inquiries, and added negative keywords to filter residential-only searches.',
        results: ['42 qualified project inquiries per month (420% increase)', 'Cost per inquiry reduced to AED 476 (81% reduction)', '3 major commercial contracts won worth AED 4.2M total', 'Average project value increased by 180%'],
      },
      {
        title: 'Piping Contractor Dominates Abu Dhabi Search Results',
        industry: 'Piping / Plumbing Contracting',
        challenge: 'An Abu Dhabi-based industrial piping contractor was invisible on Google for high-intent keywords like "industrial piping contractor Abu Dhabi" and "pipe installation services UAE." Their competitors were capturing all commercial inquiries.',
        solution: 'We built a hyper-targeted Google Ads campaign with location-specific ad groups for each emirate, created service-specific landing pages for piping installation, repair, and maintenance, implemented Google Maps integration for local search visibility, and set up automated quote request forms.',
        results: ['From 2 to 38 inquiries per month in 60 days', 'Cost per lead dropped from AED 890 to AED 195', '8 new industrial piping contracts secured in first quarter', 'Ranked #1 for 15 high-value contracting keywords'],
      },
      {
        title: 'Real Estate Developer Achieves 6.2x ROAS on Google Ads',
        industry: 'Real Estate Development',
        challenge: 'A luxury real estate developer in Abu Dhabi was spending AED 35,000/month on Google Ads with a ROAS of only 1.4x. They were generating leads but very few were converting to actual property sales due to poor lead quality and lack of follow-up tracking.',
        solution: 'We rebuilt their campaign structure with property-type-specific ad groups (villas, apartments, commercial), created high-converting landing pages with virtual tour integration, implemented CRM-based lead scoring and automated follow-up sequences, and used custom intent audiences to target high-net-worth individuals.',
        results: ['Monthly sales pipeline grew from AED 2.1M to AED 8.7M', 'ROAS improved from 1.4x to 6.2x (340% increase)', 'Cost per qualified buyer reduced by 68%', 'Average time to close reduced from 45 days to 28 days'],
      },
    ],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    shortName: 'Meta Ads',
    description: 'Targeted Facebook and Instagram advertising for UAE businesses. Custom audience building, creative testing, and retargeting campaigns that convert scrollers into customers.',
    image: '/images/performance/meta-funnel.webp',
    imageAlt: 'Illustrated Meta Ads funnel connecting audience prospecting, paid social creative, retargeting, and conversion',
    icon: 'facebook',
    emergency: false,
    featured: true,
    process: [
      { title: 'Audience Research & Profiling', description: 'We identify your ideal customer profiles using Facebook Audience Insights, competitor analysis, and first-party data.' },
      { title: 'Creative Strategy & Design', description: 'Scroll-stopping ad creatives with video, carousel, and single-image formats tailored to your brand.' },
      { title: 'Campaign Setup & Testing', description: 'Multi-campaign structure with A/B testing across audiences, placements, and creative variations.' },
      { title: 'Optimization & Scaling', description: 'Daily budget reallocation, audience refinement, and lookalike expansion to lower cost per acquisition.' },
      { title: 'Retargeting & Funnel Building', description: 'Custom retargeting sequences for website visitors, video viewers, and engaged users.' },
    ],
    priceRanges: [
      { label: 'Starter (up to AED 10K ad spend)', min: 2500, max: 4000, unit: 'AED/month' },
      { label: 'Growth (AED 10K-50K ad spend)', min: 5000, max: 8000, unit: 'AED/month' },
      { label: 'Enterprise (AED 50K+ ad spend)', min: 10000, max: 18000, unit: 'AED/month' },
    ],
    keywords: ['Facebook Ads Abu Dhabi', 'Instagram marketing Dubai', 'Meta Ads agency UAE', 'social media advertising Sharjah', 'retargeting campaigns'],
    relatedServices: ['google-ads-management', 'tiktok-ads', 'social-media-marketing'],
    caseStudies: [
      {
        title: 'Laundry Chain Generates 280% More Bookings via Meta Ads',
        industry: 'Laundry & Dry Cleaning',
        challenge: 'A multi-branch laundry and dry cleaning service across Abu Dhabi and Dubai was struggling with low brand awareness and inconsistent customer flow. Their organic social media posts were reaching only 5% of their audience.',
        solution: 'We launched geo-targeted Meta Ads campaigns with carousel ads showcasing before/after garment cleaning, video testimonials, and a limited-time first-order discount. We built lookalike audiences from their existing customer database and ran retargeting campaigns for website visitors.',
        results: ['280% increase in online bookings in 60 days', 'Cost per booking reduced to AED 12', '5,400 new customers acquired in first quarter', 'ROAS of 4.8x on ad spend'],
      },
      {
        title: 'Restaurant Group Scales Weekend Reservations by 350%',
        industry: 'Restaurant & Hospitality',
        challenge: 'A group of three restaurants in Abu Dhabi was experiencing slow weekday and weekend reservation rates. They had no paid social strategy and relied entirely on word-of-mouth and walk-in traffic.',
        solution: 'We created visually compelling Instagram and Facebook video ads featuring signature dishes, chef interviews, and behind-the-scenes kitchen content. We used location targeting within 15km of each restaurant and ran reservation-form lead ads with instant booking confirmation.',
        results: ['350% increase in weekend reservations', 'AED 8 cost per reservation', 'Instagram followers grew from 2,100 to 18,500', 'Revenue increased by AED 180K in 3 months'],
      },
      {
        title: 'E-commerce Fashion Brand Achieves 5.6x ROAS on Meta',
        industry: 'E-commerce / Fashion Retail',
        challenge: 'An online fashion retailer based in Dubai was spending AED 15,000/month on Meta Ads with inconsistent results. Their product catalog was not properly synced with Meta, and they had no dynamic retargeting in place.',
        solution: 'We set up Meta Catalog integration with their Shopify store, launched dynamic product ads for cart abandonment, created collection-specific ad sets (women, men, accessories), and implemented a full-funnel strategy from awareness to conversion.',
        results: ['ROAS increased from 1.8x to 5.6x', 'Monthly revenue from Meta Ads grew to AED 84,000', 'Cart abandonment recovery rate improved to 18%', 'Cost per purchase dropped by 62%'],
      },
    ],
  },
  {
    slug: 'conversion-rate-optimization',
    name: 'Conversion Rate Optimization',
    shortName: 'CRO',
    description: 'Data-driven CRO services that turn your existing traffic into more leads and sales. Heatmap analysis, A/B testing, and landing page optimization for maximum conversion impact.',
    image: '/images/performance/cro-ab-testing.webp',
    imageAlt: 'Illustrated conversion optimization process splitting traffic between landing-page variants and selecting a winner',
    icon: 'trending-up',
    emergency: false,
    featured: true,
    process: [
      { title: 'Analytics & Heatmap Audit', description: 'We analyze your current funnel with Google Analytics, heatmaps, and session recordings to find leak points.' },
      { title: 'User Journey Mapping', description: 'End-to-end mapping of the customer journey to identify friction points and drop-off stages.' },
      { title: 'Hypothesis & Testing Plan', description: 'Prioritized testing roadmap with clear hypotheses for each experiment based on data and best practices.' },
      { title: 'A/B Testing & Implementation', description: 'Rigorous A/B and multivariate testing with statistically significant sample sizes.' },
      { title: 'Analysis & Iteration', description: 'Results analysis, winner implementation, and continuous testing for compounding gains.' },
    ],
    priceRanges: [
      { label: 'CRO Audit (One-time)', min: 5000, max: 8000, unit: 'AED' },
      { label: 'Ongoing CRO Program', min: 8000, max: 15000, unit: 'AED/month' },
      { label: 'Enterprise CRO', min: 18000, max: 30000, unit: 'AED/month' },
    ],
    keywords: ['conversion rate optimization UAE', 'CRO agency Abu Dhabi', 'A/B testing Dubai', 'landing page optimization Sharjah', 'funnel optimization'],
    relatedServices: ['landing-page-design', 'analytics-tracking', 'ab-testing'],
    caseStudies: [
      {
        title: 'Construction Firm Doubles Quote Requests with CRO',
        industry: 'Construction / General Contracting',
        challenge: 'A mid-sized construction and general contracting company in Abu Dhabi was getting decent traffic to their website but only 0.8% of visitors were submitting quote requests. Their existing contact form had 12 fields and no clear value proposition.',
        solution: 'We reduced the quote form from 12 fields to 5, added a sticky call-to-action bar, implemented trust signals (project gallery, client logos, certifications), and ran A/B tests on headline copy and CTA button colors.',
        results: ['Conversion rate increased from 0.8% to 2.1% (162% improvement)', 'Monthly quote requests grew from 24 to 64', 'Average time on page increased by 45%', 'Bounce rate reduced from 68% to 42%'],
      },
      {
        title: 'Healthcare Clinic Increases Appointment Bookings by 180%',
        industry: 'Healthcare / Medical Clinic',
        challenge: 'A multi-specialty medical clinic in Abu Dhabi had a professional website but visitors were not booking appointments online. The booking process required users to navigate through 4 pages.',
        solution: 'We redesigned the booking flow into a single-page form with inline validation, added an online scheduling widget, placed prominent phone and WhatsApp click-to-book buttons on every page, and optimized page speed from 6.2s to 1.8s.',
        results: ['Online appointment bookings increased by 180%', 'Form abandonment rate dropped from 72% to 31%', 'Mobile conversion rate improved by 220%', 'Average booking time reduced from 4 minutes to 45 seconds'],
      },
      {
        title: 'E-commerce Store Achieves 3.2x Revenue from Same Traffic',
        industry: 'E-commerce / Home Furnishings',
        challenge: 'An online home furnishings store in the UAE was spending heavily on ads to drive traffic but only 0.6% of visitors were completing purchases. Product pages lacked social proof and the checkout process was too complex.',
        solution: 'We added customer reviews with photos to product pages, implemented a guest checkout option, reduced checkout steps from 5 to 2, added free shipping threshold messaging, and created urgency with stock-level indicators.',
        results: ['Revenue increased 3.2x without additional ad spend', 'Conversion rate improved from 0.6% to 1.9%', 'Average order value increased by AED 120', 'Cart abandonment rate dropped from 78% to 52%'],
      },
    ],
  },
  {
    slug: 'analytics-tracking',
    name: 'Analytics & Tracking Setup',
    shortName: 'Analytics',
    description: 'Complete analytics infrastructure setup including GA4, Google Tag Manager, pixel tracking, and custom dashboards. Know exactly what every dirham of ad spend is producing.',
    image: '/images/performance/analytics-architecture.webp',
    imageAlt: 'Illustrated marketing measurement architecture connecting website events, advertising platforms, analytics, and CRM outcomes',
    icon: 'bar-chart-3',
    emergency: false,
    featured: false,
    process: [
      { title: 'Tracking Audit & Planning', description: 'We audit your current tracking setup and map out all required events, goals, and conversions.' },
      { title: 'GA4 & GTM Configuration', description: 'Full Google Analytics 4 and Google Tag Manager setup with custom event tracking and data layers.' },
      { title: 'Pixel & Conversion Setup', description: 'Facebook Pixel, Google Ads conversion tags, TikTok pixel, and LinkedIn Insight Tag installation.' },
      { title: 'Custom Dashboard & Reporting', description: 'Automated reporting dashboards in Looker Studio with real-time KPI tracking.' },
      { title: 'Training & Handover', description: 'We walk your team through the dashboards and train them on interpreting the data.' },
    ],
    priceRanges: [
      { label: 'Basic Setup', min: 3000, max: 5000, unit: 'AED' },
      { label: 'Advanced (e-commerce)', min: 6000, max: 10000, unit: 'AED' },
      { label: 'Enterprise (multi-platform)', min: 12000, max: 20000, unit: 'AED' },
    ],
    keywords: ['GA4 setup UAE', 'Google Tag Manager Abu Dhabi', 'pixel tracking Dubai', 'analytics implementation Sharjah', 'conversion tracking'],
    relatedServices: ['google-ads-management', 'conversion-rate-optimization', 'meta-ads'],
  caseStudies: [],
},
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    description: 'Strategic social media management for UAE brands. Content creation, community management, and organic growth strategies across Instagram, LinkedIn, Twitter, and TikTok.',
    image: '/images/performance/performance-creative.webp',
    imageAlt: 'Illustrated performance creative system adapting campaign concepts into paid social formats and placements',
    icon: 'megaphone',
    emergency: false,
    featured: false,
    process: [
      { title: 'Brand Voice & Content Strategy', description: 'We define your brand voice, content pillars, and posting cadence based on audience research.' },
      { title: 'Content Calendar & Creation', description: 'Monthly content calendar with custom graphics, reels, carousels, and caption writing.' },
      { title: 'Community Management', description: 'Daily engagement, comment responses, and DM management to build brand loyalty.' },
      { title: 'Growth & Engagement Optimization', description: 'Hashtag strategy, optimal timing analysis, and trend-based content to grow your following.' },
      { title: 'Monthly Reporting', description: 'Performance reports covering reach, engagement, follower growth, and top-performing content.' },
    ],
    priceRanges: [
      { label: 'Starter (2 platforms, 12 posts/mo)', min: 3000, max: 5000, unit: 'AED/month' },
      { label: 'Growth (3 platforms, 20 posts/mo)', min: 6000, max: 9000, unit: 'AED/month' },
      { label: 'Enterprise (4+ platforms, daily posts)', min: 10000, max: 16000, unit: 'AED/month' },
    ],
    keywords: ['social media marketing UAE', 'Instagram management Abu Dhabi', 'content creation Dubai', 'community management Sharjah', 'organic growth'],
    relatedServices: ['meta-ads', 'tiktok-ads', 'linkedin-ads'],
  caseStudies: [],
},
  {
    slug: 'tiktok-ads',
    name: 'TikTok Ads',
    shortName: 'TikTok Ads',
    description: 'TikTok advertising that captures attention and drives action. Short-form video ad creation, Spark Ads, and influencer-style campaigns tailored to the UAE market.',
    image: '/images/performance/tiktok-journey.webp',
    imageAlt: 'Illustrated TikTok Ads journey connecting short-form creative, engagement signals, landing pages, and conversions',
    icon: 'video',
    emergency: false,
    featured: false,
    process: [
      { title: 'Trend & Audience Analysis', description: 'We research trending formats, sounds, and behaviors among your target audience on TikTok.' },
      { title: 'Creative Brief & Ad Production', description: 'Native-looking video ads that feel like organic content while driving your marketing goal.' },
      { title: 'Campaign Structure & Launch', description: 'Strategic campaign setup with Spark Ads, In-Feed ads, and TopView formats based on budget.' },
      { title: 'Optimization & Creative Refresh', description: 'Weekly performance review with creative rotation to prevent ad fatigue and maintain engagement.' },
      { title: 'Scaling & Lookalike Building', description: 'Budget scaling of winning creatives and building custom/lookalike audiences from converters.' },
    ],
    priceRanges: [
      { label: 'Starter (up to AED 10K ad spend)', min: 3000, max: 5000, unit: 'AED/month' },
      { label: 'Growth (AED 10K-40K ad spend)', min: 6000, max: 10000, unit: 'AED/month' },
      { label: 'Enterprise (AED 40K+ ad spend)', min: 12000, max: 20000, unit: 'AED/month' },
    ],
    keywords: ['TikTok Ads UAE', 'TikTok advertising Abu Dhabi', 'short-form video ads Dubai', 'Spark Ads Sharjah', 'TikTok marketing agency'],
    relatedServices: ['meta-ads', 'social-media-marketing', 'landing-page-design'],
  caseStudies: [],
},
  {
    slug: 'linkedin-ads',
    name: 'LinkedIn Ads',
    shortName: 'LinkedIn Ads',
    description: 'B2B lead generation through LinkedIn advertising. Precision targeting by job title, industry, and company size to reach decision-makers across the UAE and beyond.',
    image: '/images/performance/linkedin-journey.webp',
    imageAlt: 'Illustrated LinkedIn Ads journey connecting target accounts, decision-makers, lead forms, CRM qualification, and pipeline',
    icon: 'linkedin',
    emergency: false,
    featured: false,
    process: [
      { title: 'B2B Audience Definition', description: 'Detailed targeting by job title, seniority, company size, industry, and geography.' },
      { title: 'Lead Magnet & Offer Strategy', description: 'Develop compelling offers (whitepapers, webinars, free audits) that drive B2B conversions.' },
      { title: 'Ad Creative & Copy Development', description: 'Professional Sponsored Content, Message Ads, and Dynamic Ads with B2B-optimized messaging.' },
      { title: 'Campaign Launch & Lead Tracking', description: 'Full campaign setup with LinkedIn Insight Tag, conversion tracking, and CRM integration.' },
      { title: 'Lead Nurture & ROI Optimization', description: 'Budget optimization toward highest-converting segments with lead quality feedback loops.' },
    ],
    priceRanges: [
      { label: 'Starter (up to AED 8K ad spend)', min: 3500, max: 5500, unit: 'AED/month' },
      { label: 'Growth (AED 8K-30K ad spend)', min: 7000, max: 12000, unit: 'AED/month' },
      { label: 'Enterprise (AED 30K+ ad spend)', min: 15000, max: 25000, unit: 'AED/month' },
    ],
    keywords: ['LinkedIn Ads UAE', 'B2B lead generation Abu Dhabi', 'LinkedIn advertising Dubai', 'account-based marketing Sharjah', 'professional targeting'],
    relatedServices: ['google-ads-management', 'programmatic-advertising', 'analytics-tracking'],
  caseStudies: [],
},
  {
    slug: 'programmatic-advertising',
    name: 'Programmatic Advertising',
    shortName: 'Programmatic',
    description: 'Automated, data-driven ad buying across thousands of websites and apps. Real-time bidding with precise audience targeting for maximum reach and efficiency across the UAE.',
    image: '/images/performance/programmatic-buying.webp',
    imageAlt: 'Illustrated programmatic media-buying system evaluating audiences, inventory, brand safety, and cross-device placements',
    icon: 'layers',
    emergency: false,
    featured: false,
    process: [
      { title: 'Audience & Inventory Strategy', description: 'Define target audiences, select demand-side platforms, and map premium inventory sources.' },
      { title: 'Campaign Architecture', description: 'Build multi-format campaigns (display, video, native, audio) with frequency capping and viewability targeting.' },
      { title: 'Real-Time Bidding Optimization', description: 'AI-driven bid optimization with real-time performance monitoring and audience segment refinement.' },
      { title: 'Fraud Prevention & Brand Safety', description: 'Implementation of verification tools to ensure ads appear on safe, brand-appropriate inventory.' },
      { title: 'Cross-Channel Reporting', description: 'Unified reporting across all programmatic channels with attribution modeling and ROI analysis.' },
    ],
    priceRanges: [
      { label: 'Starter (up to AED 20K ad spend)', min: 4000, max: 7000, unit: 'AED/month' },
      { label: 'Growth (AED 20K-80K ad spend)', min: 8000, max: 14000, unit: 'AED/month' },
      { label: 'Enterprise (AED 80K+ ad spend)', min: 16000, max: 30000, unit: 'AED/month' },
    ],
    keywords: ['programmatic advertising UAE', 'real-time bidding Abu Dhabi', 'DSP management Dubai', 'display advertising Sharjah', 'audience targeting'],
    relatedServices: ['google-ads-management', 'linkedin-ads', 'analytics-tracking'],
  caseStudies: [],
},
  {
    slug: 'landing-page-design',
    name: 'Landing Page Design',
    shortName: 'Landing Pages',
    description: 'High-converting landing pages designed to turn clicks into customers. Fast, mobile-first, and purpose-built for every campaign with proven conversion frameworks.',
    image: '/images/performance/landing-page-journey.webp',
    imageAlt: 'Illustrated ad-to-landing-page journey connecting campaign message, responsive page design, form submission, and qualified lead',
    icon: 'layout-template',
    emergency: false,
    featured: true,
    process: [
      { title: 'Campaign & Audience Analysis', description: 'We study your ad traffic, audience intent, and offer to determine the optimal landing page structure.' },
      { title: 'Wireframe & UX Design', description: 'Conversion-focused wireframes with clear hierarchy, social proof placement, and friction-free forms.' },
      { title: 'Copywriting & Content Development', description: 'Persuasive, benefit-driven copy with attention-grabbing headlines and clear calls-to-action.' },
      { title: 'Development & Speed Optimization', description: 'Lightning-fast page build with mobile-first design, sub-2-second load times, and SEO foundations.' },
      { title: 'Testing & Iteration', description: 'A/B testing of headlines, CTAs, form lengths, and layouts to continuously improve conversion rates.' },
    ],
    priceRanges: [
      { label: 'Single Landing Page', min: 3000, max: 6000, unit: 'AED/page' },
      { label: 'Multi-Page Funnel (3-5 pages)', min: 8000, max: 15000, unit: 'AED/funnel' },
      { label: 'Enterprise (unlimited pages, monthly)', min: 12000, max: 20000, unit: 'AED/month' },
    ],
    keywords: ['landing page design UAE', 'conversion landing page Abu Dhabi', 'sales funnel Dubai', 'lead generation pages Sharjah', 'high-converting pages'],
    relatedServices: ['conversion-rate-optimization', 'google-ads-management', 'meta-ads'],
  caseStudies: [],
},
];
// ============================================================
// Helper Functions
// ============================================================
export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((service) => service.slug === slug);
}
export function getServiceName(slug: string): string {
  const service = getServiceBySlug(slug);
  if (service) return service.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.emergency);
}
export function getFeaturedServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.featured);
}
export function getRelatedServices(slug: string): ServiceType[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is ServiceType => s !== undefined);
}
