// ============================================================
// CLICKNX — SEO Content
// FAQs, Reviews, and Rating Helpers
// ============================================================

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

export interface SeoContent {
  globalFaqs: FAQ[];
  serviceFaqs: Record<string, FAQ[]>;
  reviews: Review[];
}

export const seoContent: SeoContent = {
  globalFaqs: [
    {
      question: 'What is performance marketing and how is it different from traditional marketing?',
      answer: 'Performance marketing is a results-driven approach where you only pay for measurable actions like clicks, leads, or sales. Unlike traditional marketing, every campaign is tracked, measured, and optimized in real-time to maximize ROI. CLICKNX uses data from platforms like Google Ads, Meta Ads, and programmatic networks to ensure every dirham spent contributes to your business goals.',
    },
    {
      question: 'How much should I budget for paid advertising in the UAE?',
      answer: 'A sensible starting budget for paid ads in the UAE is AED 5,000 to AED 15,000 per month for ad spend, plus management fees. The ideal budget depends on your industry, competition, and growth targets. During our initial consultation, we analyze your market and recommend a budget that balances reach with profitability.',
    },
    {
      question: 'How long does it take to see results from digital advertising?',
      answer: 'Google Ads can generate leads within the first week of launching a well-optimized campaign. Meta Ads typically require 2-4 weeks for audience learning and optimization. SEO and organic strategies take 3-6 months to show significant results. We set clear expectations and provide weekly reporting so you always know how your campaigns are performing.',
    },
    {
      question: 'Do I need a website to run digital advertising campaigns?',
      answer: 'While not strictly required, a high-converting website or landing page dramatically improves your ad performance. CLICKNX offers landing page design and conversion rate optimization as core services to ensure your traffic turns into measurable business results.',
    },
    {
      question: 'What platforms does CLICKNX manage advertising on?',
      answer: 'We manage campaigns across Google Ads (Search, Display, Performance Max), Meta platforms (Facebook and Instagram), TikTok Ads, LinkedIn Ads, and programmatic networks through DSPs. Each platform serves a different audience and purpose, and we recommend the right mix based on your target customers.',
    },
    {
      question: 'How does CLICKNX measure and report campaign performance?',
      answer: 'Every campaign includes full analytics setup with GA4, Google Tag Manager, and platform-specific tracking. We provide automated dashboards in Looker Studio with real-time KPI tracking, plus weekly performance reports with actionable insights and optimization recommendations.',
    },
    {
      question: 'Can CLICKNX help with social media content, not just paid ads?',
      answer: 'Yes. Our Social Media Marketing service covers content strategy, custom creative production, community management, and organic growth across Instagram, LinkedIn, Twitter, and TikTok. We also manage paid social campaigns for a complete social strategy.',
    },
    {
      question: 'What makes CLICKNX different from other marketing agencies in Abu Dhabi?',
      answer: 'CLICKNX is a pure performance marketing agency. We do not sell vanity metrics or brand awareness campaigns without measurable outcomes. Every recommendation we make is backed by data, every campaign is tracked to the conversion level, and our success is directly tied to your business results.',
    },
  ],
  serviceFaqs: {
    'google-ads-management': [
      {
        question: 'How much does Google Ads management cost in Abu Dhabi?',
        answer: 'CLICKNX Google Ads management starts at AED 1,000/month for accounts with up to AED 10,000 in ad spend. Larger accounts are priced based on complexity and scale. We include full campaign management, keyword research, ad copy writing, bid optimization, and weekly reporting.',
      },
      {
        question: 'What industries does CLICKNX run Google Ads for?',
        answer: 'We manage Google Ads across all major industries in the UAE including real estate, healthcare, hospitality, e-commerce, professional services, and education. Our strategies are customized to each industry with relevant keyword targeting and industry-specific ad copy.',
      },
      {
        question: 'How do you improve Google Ads Quality Score?',
        answer: 'We improve Quality Score through targeted keyword grouping, relevant ad copy aligned with search intent, landing page optimization for relevance and speed, and strategic use of ad extensions. Higher Quality Scores mean lower CPCs and better ad positions.',
      },
      {
        question: 'How long does it take to see results from Google Ads in the UAE?',
        answer: 'Most businesses see initial leads within the first week of launching a well-optimized Google Ads campaign. However, optimal performance typically takes 4-6 weeks as we gather conversion data, refine targeting, and improve Quality Scores. The UAE market is competitive but responsive to well-structured campaigns.',
      },
      {
        question: 'What is a good cost per click (CPC) for Google Ads in Abu Dhabi?',
        answer: 'Average CPCs in the UAE vary by industry: professional services range from AED 3-8, real estate from AED 5-15, and e-commerce from AED 1-5. We focus on maximizing your return regardless of CPC by optimizing landing pages, targeting high-intent keywords, and improving Quality Scores to lower costs.',
      },
      {
        question: 'Can I run Google Ads in both Arabic and English?',
        answer: 'Yes. We create bilingual Google Ads campaigns with separate ad groups for Arabic and English keywords, culturally relevant ad copy for each audience, and language-specific landing pages. This is essential for reaching the full UAE market, as over 60% of consumers search in Arabic.',
      },
    ],
    'meta-ads': [
      {
        question: 'How much does Facebook and Instagram advertising cost in the UAE?',
        answer: 'Meta Ads management with CLICKNX starts at AED 2,500/month plus ad spend. Typical campaign budgets range from AED 5,000 to AED 50,000 per month depending on your audience size and objectives. We handle creative production, audience targeting, campaign setup, and daily optimization.',
      },
      {
        question: 'Can you target specific audiences on Facebook and Instagram?',
        answer: 'Yes. Meta advertising allows precision targeting by location (down to city or neighborhood), age, gender, interests, behaviors, and custom audiences. We also build lookalike audiences from your existing customers and use retargeting to reach people who have interacted with your brand.',
      },
      {
        question: 'How do you measure the success of Meta Ads campaigns?',
        answer: 'We track conversions, cost per result, return on ad spend (ROAS), and frequency metrics. Our dashboards show real-time performance so you can see exactly which ads are driving results. We optimize weekly based on conversion data, not just clicks or impressions.',
      },
      {
        question: 'How long should I run Meta Ads before evaluating results?',
        answer: 'Meta Ads typically need 2-4 weeks to exit the learning phase and stabilize. We recommend running campaigns for at least 30 days before making major decisions, as this gives enough data for meaningful optimization and trend analysis.',
      },
      {
        question: 'Do you create the ad creatives for Meta campaigns?',
        answer: 'Yes. Our team produces custom ad creatives including video ads, carousel ads, and single-image formats. We test multiple creative variations and scale the best performers. If you have existing brand assets, we incorporate those as well.',
      },
    ],
    'conversion-rate-optimization': [
      {
        question: 'What is a good conversion rate for UAE businesses?',
        answer: 'Average conversion rates vary by industry, but a typical benchmark for UAE businesses is 2-4% for lead generation and 1-3% for e-commerce. CLICKNX aims to improve your conversion rate by 30-50% within the first 3 months through data-driven testing and optimization.',
      },
      {
        question: 'How does A/B testing work for landing pages?',
        answer: 'We identify one variable to test at a time (headline, CTA, form length, imagery, etc.), create two versions, split your traffic evenly between them, and measure which version converts better. After reaching statistical significance, we implement the winner and start the next test.',
      },
    ],
    'landing-page-design': [
      {
        question: 'How much does a landing page cost in the UAE?',
        answer: 'CLICKNX landing page design starts at AED 3,000 per page for a single high-converting page. Multi-page funnels (3-5 pages) start at AED 8,000. Each page includes custom design, conversion-focused copy, mobile optimization, speed optimization, and analytics setup.',
      },
      {
        question: 'How long does it take to build a landing page?',
        answer: 'A standard landing page takes 5-7 business days from brief to launch. Multi-page funnels take 2-3 weeks. Rush delivery is available for time-sensitive campaigns.',
      },
    ],
    'analytics-tracking': [
      {
        question: 'What tracking does CLICKNX set up for my business?',
        answer: 'We install and configure GA4, Google Tag Manager, Facebook Pixel, Google Ads conversion tags, TikTok pixel, and LinkedIn Insight Tag. We also set up custom events (form submissions, phone calls, purchases), UTM tracking, and automated Looker Studio dashboards.',
      },
    ],
    'tiktok-ads': [
      {
        question: 'Is TikTok advertising effective for businesses in the UAE?',
        answer: 'The UAE has one of the highest TikTok adoption rates globally, making it highly effective for reaching younger demographics. CLICKNX creates native-feeling video ads that blend with organic content while driving measurable conversions.',
      },
    ],
    'linkedin-ads': [
      {
        question: 'How effective are LinkedIn Ads for B2B companies in the UAE?',
        answer: 'LinkedIn Ads are the most effective B2B advertising platform in the UAE, allowing targeting by job title, seniority, industry, and company size. CLICKNX helps B2B companies generate high-quality leads through Sponsored Content, Message Ads, and Dynamic Ads campaigns.',
      },
    ],
    'programmatic-advertising': [
      {
        question: 'What is programmatic advertising and who should use it?',
        answer: 'Programmatic advertising uses AI-powered platforms to buy ad space in real-time across thousands of websites and apps. It is ideal for businesses with larger budgets (AED 20,000+ per month) who want maximum reach with precise audience targeting across the open web.',
      },
    ],
    'social-media-marketing': [
      {
        question: 'How many social media platforms should my business be on?',
        answer: 'We recommend focusing on 2-3 platforms where your target audience is most active. For B2C businesses in the UAE, Instagram and TikTok are typically top performers. For B2B, LinkedIn is essential. We help you choose the right platforms based on your audience and goals.',
      },
    ],
  },
  reviews: [
    {
      name: 'MD Mehtab',
      rating: 5,
      date: '2025-03-15',
      text: 'CLICKNX completely transformed our Google Ads campaigns. Our cost per lead dropped by 65% in just two months, and the quality of leads improved significantly. Their team is transparent, data-driven, and always available to discuss performance. Best marketing decision we have made.',
      source: 'Google',
    },
    {
      name: 'Nadar Selvaraj',
      rating: 5,
      date: '2025-02-20',
      text: 'We hired CLICKNX for Meta Ads and conversion rate optimization. They delivered a complete campaign that generated over 200 qualified leads in just 6 weeks. The analytics dashboard they set up gives us full visibility into every dirham spent. Highly recommended.',
      source: 'Google',
    },
    {
      name: 'Kerala Alshaigi',
      rating: 5,
      date: '2025-01-10',
      text: 'Our ROI on paid advertising was poor before working with CLICKNX. They restructured our entire Google Ads account, built high-converting landing pages, and our ROAS went from 1.5x to 4.8x in three months. Exceptional performance marketing expertise.',
      source: 'Google',
    },
    {
      name: 'Waqas Khan',
      rating: 5,
      date: '2024-12-05',
      text: 'The team at CLICKNX helped us scale our TikTok and Instagram ad campaigns across the UAE. Their creative testing approach and audience targeting significantly improved our conversion rates. Professional, responsive, and they deliver measurable results.',
      source: 'Google',
    },
    {
      name: 'Safeway Nair',
      rating: 5,
      date: '2024-11-18',
      text: 'Highly recommend CLICKNX for performance marketing. They manage our Google Ads, Meta campaigns, and landing pages with a level of expertise we have not found elsewhere. Our monthly lead volume tripled while keeping cost per acquisition stable.',
      source: 'Google',
    },
    {
      name: 'زياد الرفاعي',
      rating: 5,
      date: '2024-10-25',
      text: 'Excellent and experienced performance marketing team. They built and managed our LinkedIn B2B lead generation campaigns with outstanding results. Cost per lead was 40% lower than our previous agency, and lead quality was noticeably higher. Very professional approach.',
      source: 'Google',
    },
  ],
};

// ============================================================
// Helper Functions
// ============================================================

export function getGlobalFaqs(): FAQ[] {
  return seoContent.globalFaqs;
}

export function getServiceFaqs(serviceSlug: string): FAQ[] {
  return seoContent.serviceFaqs[serviceSlug] || [];
}

export function getReviews(): Review[] {
  return seoContent.reviews;
}

export function getAverageRating(): number {
  if (seoContent.reviews.length === 0) return 0;
  const sum = seoContent.reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / seoContent.reviews.length) * 10) / 10;
}

export function getReviewCount(): number {
  return seoContent.reviews.length;
}

export function getFiveStarPercentage(): number {
  if (seoContent.reviews.length === 0) return 0;
  const fiveStarCount = seoContent.reviews.filter((r) => r.rating === 5).length;
  return Math.round((fiveStarCount / seoContent.reviews.length) * 100);
}

// ============================================================
// Template-compatible helper functions
// ============================================================

/** Export the raw reviews array for template access */
export const reviews = seoContent.reviews;

/**
 * Generate FAQs for a given area and optional service.
 * Combines global FAQs with service-specific FAQs.
 */
export function generateFaqs(area: { name: string }, service?: { slug: string; name: string }): FAQ[] {
  const serviceFaqs = service ? seoContent.serviceFaqs[service.slug] || [] : [];
  const globalFaqs = seoContent.globalFaqs.slice(0, 4); // Show first 4 global FAQs
  return [...serviceFaqs, ...globalFaqs];
}

/**
 * Get the most relevant reviews for a specific page.
 * Returns up to `limit` reviews, prioritizing all available reviews.
 */
export function getReviewsForPage(_areaSlug: string, _serviceSlug?: string, limit: number = 3): Review[] {
  return seoContent.reviews.slice(0, limit);
}
