import { ProductCardData, BranchLocation } from '../types';

export const PERSONAL_PRODUCTS: ProductCardData[] = [
  {
    id: 'checking',
    title: 'Checking Accounts',
    description: 'Convenient, fee-friendly checking options designed for your daily transactions and easy access.',
    actionText: 'Learn More →',
    iconName: 'credit-card',
    category: 'Personal',
    details: {
      badge: 'Most Popular',
      rate: '0.05% APY on balances over $1,000',
      minDeposit: '$25 to open',
      features: [
        'No monthly maintenance fees with direct deposit or $500 balance',
        'Over 55,000 surcharge-free Allpoint® ATMs worldwide',
        'Contactless Visa® Debit Card with zero liability protection',
        'Mobile check deposit, Zelle® instant transfers, and Apple Pay®'
      ],
      benefits: [
        'Early Direct Deposit – get paid up to 2 days early',
        'Free online bill pay & customized spending alerts',
        'Dedicated 24/7 New England community customer support'
      ]
    }
  },
  {
    id: 'savings',
    title: 'Savings & CDs',
    description: 'Grow your wealth securely with competitive rates on savings accounts and certificates of deposit.',
    actionText: 'View Rates →',
    iconName: 'piggy-bank',
    category: 'Personal',
    details: {
      badge: 'High Yield Rates',
      rate: 'Up to 4.85% APY on 11-Month CD',
      minDeposit: '$500 for High-Yield CD',
      features: [
        'High-Yield Savings with tiered competitive interest rates',
        'Flexible Certificates of Deposit from 6 to 60 months',
        'FDIC Insured up to $250,000 per depositor',
        'Automatic round-up savings program linked to debit card'
      ],
      benefits: [
        'Zero monthly maintenance fee when linked to checking',
        'Guaranteed fixed return on Certificate of Deposit options',
        'Compound interest calculated and credited monthly'
      ]
    }
  },
  {
    id: 'mortgages',
    title: 'Mortgages',
    description: 'Find the right home loan with expert guidance and flexible financing options for your dream home.',
    actionText: 'Explore Mortgages →',
    iconName: 'home',
    category: 'Personal',
    details: {
      badge: 'Low Down Payment',
      rate: 'Rates from 6.125% Fixed 30-Year APR',
      minDeposit: 'As low as 3% down payment',
      features: [
        'Fixed-Rate & Adjustable-Rate Mortgages (ARM)',
        'First-Time Homebuyer grants & local community credits',
        'Jumbo loans up to $3M with streamlined underwriting',
        'Home Equity Lines of Credit (HELOC) with low introductory rates'
      ],
      benefits: [
        'Local loan officers who know your neighborhood',
        'Digital application with pre-approval in under 24 hours',
        'Complimentary rate-lock guarantee protection'
      ]
    }
  },
  {
    id: 'small-business',
    title: 'Small Business',
    description: 'Empower your enterprise with dedicated business checking, loans, and merchant services.',
    actionText: 'Business Solutions →',
    iconName: 'store',
    category: 'Personal',
    details: {
      badge: 'Commercial Grade',
      rate: 'Special introductory SBA rates',
      minDeposit: '$100 minimum opening deposit',
      features: [
        'Business Checking with 250 free monthly transactions',
        'SBA 7(a) & 504 loan preferred lender status',
        'Integrated Clover® merchant point-of-sale systems',
        'ACH payroll & multi-user treasury authorization'
      ],
      benefits: [
        'Dedicated Business Banker assigned to your company',
        'Remote deposit capture scanners for paper checks',
        'Commercial line of credit for flexible cash flow management'
      ]
    }
  }
];

export const CATEGORY_HERO_CONTENT = {
  Personal: {
    heading: 'Banking built for your everyday life.',
    description: "Experience secure, modern financial solutions designed to help you thrive. From checking to wealth management, we're here for good.",
    primaryCta: 'Explore Checking',
    secondaryCta: 'Find a Location',
    ctaTarget: 'checking',
    image: '/images/hero.jpg',
    badge: 'Eastern Bank Branch • Boston, MA',
    alt: 'Eastern Bank personal banker assisting client at Boston branch consultation desk'
  },
  Business: {
    heading: 'Fueling local businesses and local dreams.',
    description: "Smart cash flow tools, competitive commercial lending, and local advisors dedicated to scaling your company with confidence.",
    primaryCta: 'Business Checking',
    secondaryCta: 'Explore Loans',
    ctaTarget: 'small-business',
    image: '/images/business_hero.jpg',
    badge: 'Commercial Business Suite • Boston, MA',
    alt: 'Eastern Bank commercial advisor reviewing business expansion plan with entrepreneur'
  },
  Commercial: {
    heading: 'Institutional expertise with community roots.',
    description: "Tailored treasury services, real estate financing, and syndicated credit solutions built for middle-market and corporate clients.",
    primaryCta: 'Commercial Lending',
    secondaryCta: 'Treasury Services',
    ctaTarget: 'small-business',
    image: '/images/commercial_hero.jpg',
    badge: 'Executive Boardroom • Financial District',
    alt: 'Eastern Bank commercial lending director presenting syndicated financing to executive leaders'
  },
  Wealth: {
    heading: 'Thoughtful wealth management for generations.',
    description: "Comprehensive financial planning, fiduciary asset management, trust administration, and private banking tailored to your life goals.",
    primaryCta: 'Meet an Advisor',
    secondaryCta: 'Wealth Strategies',
    ctaTarget: 'savings',
    image: '/images/wealth_hero.jpg',
    badge: 'Private Wealth Advisory • Boston, MA',
    alt: 'Eastern Bank senior wealth advisor consulting with private client over portfolio strategy'
  },
  'About Us': {
    heading: 'Serving our communities since 1818.',
    description: "As the oldest and largest mutual bank in the nation, we operate with a purpose: to support our customers, employees, and community for good.",
    primaryCta: 'Our Mission',
    secondaryCta: 'Community Impact',
    ctaTarget: 'checking',
    image: '/images/about_hero.jpg',
    badge: 'Community Foundation • Boston, MA',
    alt: 'Eastern Bank volunteers and local children participating in community garden revitalization'
  }
};

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    id: 'b1',
    name: 'Boston Financial District',
    address: '265 Franklin Street',
    city: 'Boston',
    state: 'MA',
    zip: '02110',
    distance: '0.4 miles away',
    phone: '+1 (786) 665-5317',
    hours: 'Mon-Fri: 8:30 AM - 5:00 PM | Sat: 9:00 AM - 1:00 PM',
    features: ['24/7 Smart ATM', 'Full Service Tellers', 'Mortgage Specialist', 'Safe Deposit Boxes', 'Notary Public'],
    hasATM: true,
    hasDriveThru: false
  },
  {
    id: 'b2',
    name: 'Cambridge - Harvard Square',
    address: '1414 Massachusetts Ave',
    city: 'Cambridge',
    state: 'MA',
    zip: '02138',
    distance: '2.8 miles away',
    phone: '+1 (786) 665-5317',
    hours: 'Mon-Fri: 8:30 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM',
    features: ['24/7 Smart ATM', 'Drive-Up Window', 'Small Business Advisor', 'Instant Debit Card Issuance'],
    hasATM: true,
    hasDriveThru: true
  },
  {
    id: 'b3',
    name: 'Quincy Center Branch',
    address: '343 Hancock Street',
    city: 'Quincy',
    state: 'MA',
    zip: '02171',
    distance: '6.2 miles away',
    phone: '+1 (786) 665-5317',
    hours: 'Mon-Fri: 8:30 AM - 5:00 PM | Sat: 9:00 AM - 1:00 PM',
    features: ['Drive-Up ATM', 'Drive-Thru Teller', 'Wealth Advisory Desk', 'Coin Counting Machine'],
    hasATM: true,
    hasDriveThru: true
  },
  {
    id: 'b4',
    name: 'Salem Heritage Branch',
    address: '200 Essex Street',
    city: 'Salem',
    state: 'MA',
    zip: '01970',
    distance: '14.5 miles away',
    phone: '+1 (786) 665-5317',
    hours: 'Mon-Fri: 8:30 AM - 5:00 PM | Sat: Closed',
    features: ['24/7 Walk-Up ATM', 'Commercial Lending Office', 'Foreign Currency Exchange'],
    hasATM: true,
    hasDriveThru: false
  }
];

export const CD_RATES = [
  { term: '7-Month CD', apy: '4.75%', min: '$500', penalty: '90 days interest', featured: false },
  { term: '11-Month CD Special', apy: '4.85%', min: '$500', penalty: '90 days interest', featured: true },
  { term: '18-Month CD', apy: '4.25%', min: '$500', penalty: '180 days interest', featured: false },
  { term: '36-Month CD', apy: '3.90%', min: '$500', penalty: '180 days interest', featured: false },
  { term: '60-Month CD', apy: '3.65%', min: '$500', penalty: '365 days interest', featured: false },
];
