export interface ServiceVisual {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const serviceVisuals: Record<string, ServiceVisual[]> = {
  'google-ads-management': [
    {
      src: '/images/performance/google-ads-optimization.webp',
      alt: 'Illustrated Google Ads optimization funnel filtering search intent into higher-quality conversion opportunities',
      title: 'Cut wasted search spend',
      description: 'We separate high-intent searches from irrelevant traffic, then optimize bids, relevance, and landing-page alignment around qualified conversions.',
    },
    {
      src: '/images/performance/google-ads-pmax.webp',
      alt: 'Illustrated Performance Max campaign intelligence core connecting Google advertising channels and conversion feedback',
      title: 'Coordinate every Google channel',
      description: 'Creative assets, audience signals, and conversion data work together across Search, Display, Shopping, YouTube, and Performance Max.',
    },
  ],
  'meta-ads': [
    {
      src: '/images/performance/meta-creative-testing.webp',
      alt: 'Illustrated Meta Ads creative testing matrix comparing social ad formats and routing winners into campaign scaling',
      title: 'Test creatives systematically',
      description: 'Hooks, formats, audiences, and offers are tested as controlled variables so budget moves toward evidence-backed winners.',
    },
    {
      src: '/images/performance/meta-ecommerce.webp',
      alt: 'Illustrated Meta ecommerce journey connecting product ads, website activity, cart recovery, and completed purchases',
      title: 'Recover and convert demand',
      description: 'Catalog campaigns and retargeting reconnect product discovery with cart activity and measurable purchases.',
    },
  ],
  'conversion-rate-optimization': [
    {
      src: '/images/performance/cro-funnel.webp',
      alt: 'Illustrated conversion funnel diagnostic showing visitor drop-off points and opportunities for improvement',
      title: 'Find where conversions leak',
      description: 'Journey data reveals the steps where visitors hesitate, abandon forms, or fail to reach a meaningful conversion.',
    },
    {
      src: '/images/performance/cro-mobile.webp',
      alt: 'Illustrated comparison between a difficult mobile conversion path and a streamlined optimized experience',
      title: 'Remove mobile friction',
      description: 'Shorter forms, clearer actions, stronger proof, and faster journeys turn paid mobile traffic into more enquiries.',
    },
  ],
  'analytics-tracking': [
    {
      src: '/images/performance/analytics-attribution.webp',
      alt: 'Illustrated multi-touch attribution journey connecting paid media channels to a verified conversion',
      title: 'Understand every touchpoint',
      description: 'Attribution connects paid search, social, video, website visits, and CRM outcomes instead of crediting only the final click.',
    },
    {
      src: '/images/performance/analytics-optimization.webp',
      alt: 'Illustrated campaign reporting system feeding performance insights back into budget and optimization decisions',
      title: 'Turn reporting into action',
      description: 'Live measurement should change bids, budgets, audiences, and creative—not simply produce another monthly report.',
    },
  ],
  'social-media-marketing': [
    {
      src: '/images/performance/meta-creative-testing.webp',
      alt: 'Illustrated paid social creative variations organized for structured campaign testing',
      title: 'Build creative for paid performance',
      description: 'One campaign idea becomes platform-ready feed, story, reel, carousel, and video variations designed for testing.',
    },
    {
      src: '/images/performance/tiktok-refresh.webp',
      alt: 'Illustrated creative refresh cycle moving social ads from testing through scaling and fatigue monitoring',
      title: 'Stay ahead of creative fatigue',
      description: 'A consistent refresh cycle protects performance as audiences tire of once-winning ads.',
    },
  ],
  'tiktok-ads': [
    {
      src: '/images/performance/tiktok-refresh.webp',
      alt: 'Illustrated TikTok advertising creative refresh cycle from testing and scaling to fatigue and renewal',
      title: 'Refresh before performance fades',
      description: 'We track the creative lifecycle and introduce new hooks before fatigue raises acquisition costs.',
    },
    {
      src: '/images/performance/performance-creative.webp',
      alt: 'Illustrated performance creative production system adapting one campaign concept into multiple social placements',
      title: 'Create for the placement',
      description: 'Short-form concepts are adapted for the platform, placement, and customer stage rather than resized as an afterthought.',
    },
  ],
  'linkedin-ads': [
    {
      src: '/images/performance/linkedin-feedback.webp',
      alt: 'Illustrated LinkedIn lead-quality feedback loop connecting campaigns with CRM qualification and sales outcomes',
      title: 'Optimize for lead quality',
      description: 'CRM feedback teaches campaigns which companies and decision-makers become real opportunities—not merely form fills.',
    },
    {
      src: '/images/performance/analytics-attribution.webp',
      alt: 'Illustrated B2B attribution journey connecting LinkedIn advertising touchpoints with qualified pipeline',
      title: 'Connect media to pipeline',
      description: 'Campaign engagement is measured through qualification, meetings, and pipeline to expose the real commercial contribution.',
    },
  ],
  'programmatic-advertising': [
    {
      src: '/images/performance/analytics-attribution.webp',
      alt: 'Illustrated cross-channel attribution path connecting programmatic advertising touchpoints to conversion outcomes',
      title: 'Measure beyond impressions',
      description: 'Programmatic reach is evaluated against meaningful visits, assisted conversions, and attributable business outcomes.',
    },
    {
      src: '/images/performance/analytics-optimization.webp',
      alt: 'Illustrated optimization loop using campaign reporting to improve media allocation and audience decisions',
      title: 'Optimize inventory continuously',
      description: 'Placement, frequency, audience, and creative signals feed an ongoing allocation and optimization cycle.',
    },
  ],
  'landing-page-design': [
    {
      src: '/images/performance/landing-page-anatomy.webp',
      alt: 'Exploded illustration of a conversion-focused landing page with hero, proof, form, FAQ, and mobile action layers',
      title: 'Build every section around action',
      description: 'Message, proof, friction reduction, mobile behaviour, and tracking are designed as one conversion system.',
    },
    {
      src: '/images/performance/cro-mobile.webp',
      alt: 'Illustrated mobile landing-page optimization journey comparing friction with a streamlined conversion path',
      title: 'Design mobile-first journeys',
      description: 'Paid traffic gets a fast, focused mobile experience with fewer steps between intent and enquiry.',
    },
  ],
};
