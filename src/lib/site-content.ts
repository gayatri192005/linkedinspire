export const SITE_URL = 'https://linkedinspire.com'
export const LOGO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINKEDINSPIRE%20logo-oBsZN5cVkzuUkqMl7WSsBYCm92T0NX.jpeg'
export const LINKTREE_URL = 'https://linktr.ee/linkedinspire'
export const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/linkedinspiregm/'
export const CONTACT_EMAIL = 'team.linkedinspire@gmail.com'

export const impactStats = [
  { value: 300, suffix: '+', label: 'Colleges reached', description: 'Across the LinkedINspire community' },
  { value: 50000, suffix: '+', label: 'Students reached', description: 'Through learning and community activities' },
  { value: 20, suffix: '+', label: 'Offline campus connects', description: 'In-person community activities' },
  { value: 10, suffix: 'M+', label: 'LinkedIn impressions', description: 'Generated through community learning' },
] as const

export const pillars = [
  {
    number: '01',
    title: 'Learn',
    description: 'Explore LinkedIn growth, content creation, personal branding, and professional storytelling.',
  },
  {
    number: '02',
    title: 'Connect',
    description: 'Build meaningful relationships with creators, mentors, professionals, and student communities.',
  },
  {
    number: '03',
    title: 'Grow',
    description: 'Develop your professional identity, improve your visibility, and discover new opportunities.',
  },
] as const

export const growthPaths = [
  {
    title: 'Build your personal brand',
    description: 'Learn to position yourself, optimise your profile, and communicate your professional journey.',
  },
  {
    title: 'Learn from industry experts',
    description: 'Get practical perspectives from creators, founders, recruiters, and working professionals.',
  },
  {
    title: 'Find your community',
    description: 'Connect with ambitious students, creators, and professionals across colleges.',
  },
  {
    title: 'Turn learning into opportunities',
    description: 'Use your skills and professional network to explore collaborations, internships, and career paths.',
  },
] as const

export const programs = [
  {
    title: 'LinkedINspire Live',
    eyebrow: 'Expert-led sessions',
    description: 'Free online sessions about LinkedIn growth, personal branding, networking, storytelling, and career development.',
    href: '/sessions',
    cta: 'Explore sessions',
  },
  {
    title: 'Campus Connect',
    eyebrow: 'Campus network',
    description: 'Partner with colleges and student communities to explore workshops, expert sessions, and offline activities.',
    href: '/campus-connect',
    cta: 'Explore Campus Connect',
  },
  {
    title: 'Creator Community',
    eyebrow: 'Learn together',
    description: 'A place for aspiring creators to exchange ideas, learn content skills, and explore collaboration.',
    href: '/community',
    cta: 'Join the community',
  },
  {
    title: 'Mentorship & Feedback',
    eyebrow: 'Practical guidance',
    description: 'Explore profile reviews and practical feedback when an appropriate session or program is available.',
    href: '/contact?topic=general',
    cta: 'Ask about availability',
  },
] as const

export type Session = {
  id: string
  title: string
  date: string
  dateLabel: string
  speaker: string
  description: string
  duration: string
  topics: string[]
  status: 'upcoming' | 'past'
  recordingUrl?: string
  registrationUrl?: string
}

export const sessions: Session[] = [
  {
    id: 'linkedin-growth-series-swaroop-talks',
    title: 'LinkedIn Growth Series ft. Swaroop Talks',
    date: '2025-11-15',
    dateLabel: 'November 15, 2025',
    speaker: 'Swaroop Talks',
    description: 'A session on LinkedIn growth strategies and content creation techniques.',
    duration: '90 min',
    topics: ['LinkedIn Growth', 'Content Creation', 'Engagement'],
    status: 'past',
  },
  {
    id: 'linkedinspire-harshith-sai-tunuguntla',
    title: 'LinkedINspire x Harshith Sai Tunuguntla',
    date: '2025-10-20',
    dateLabel: 'October 20, 2025',
    speaker: 'Harshith Sai Tunuguntla',
    description: 'A conversation about personal branding, professional storytelling, and profile optimisation.',
    duration: '75 min',
    topics: ['Personal Branding', 'Storytelling', 'Profile Optimisation'],
    status: 'past',
  },
  {
    id: 'career-branding-karthik-nagapuri',
    title: 'Career Branding with Karthik Nagapuri',
    date: '2025-10-05',
    dateLabel: 'October 5, 2025',
    speaker: 'Karthik Nagapuri',
    description: 'A session exploring career branding and the evolving startup ecosystem in India.',
    duration: '80 min',
    topics: ['Career Development', 'Startup Ecosystem', 'Professional Branding'],
    status: 'past',
  },
  {
    id: 'linkedinspire-foundation-series',
    title: 'LinkedINspire Foundation Series',
    date: '2025-09-15',
    dateLabel: 'September 15, 2025',
    speaker: 'Gayatri G',
    description: 'An introductory session covering LinkedIn fundamentals, profile optimisation, personal branding, and AI tools.',
    duration: '120 min',
    topics: ['LinkedIn Basics', 'Profile Optimisation', 'Personal Branding', 'AI Tools'],
    status: 'past',
  },
]

export type Speaker = {
  name: string
  role: string
  bio: string
  expertise: string[]
  linkedin?: string
}

export const speakers: Speaker[] = [
  {
    name: 'Swaroop Talks',
    role: 'Tech mentor & content creator',
    bio: 'A creator and mentor sharing practical perspectives on LinkedIn growth and content creation.',
    expertise: ['LinkedIn growth', 'Content strategy', 'Tech mentoring'],
    linkedin: 'https://www.linkedin.com/in/swaroop-talks/',
  },
  {
    name: 'Harshith Sai Tunuguntla',
    role: 'Software engineer & mentor',
    bio: 'A software engineer and mentor focused on personal branding and professional storytelling.',
    expertise: ['Personal branding', 'Storytelling', 'Career growth'],
    linkedin: 'https://www.linkedin.com/in/harshithtunuguntla/',
  },
  {
    name: 'Karthik Nagapuri',
    role: 'Public speaker',
    bio: 'A public speaker sharing perspectives on the startup ecosystem and career branding.',
    expertise: ['Public speaking', 'Startup ecosystem', 'Career branding'],
    linkedin: 'https://www.linkedin.com/in/karthiknagapuri/',
  },
  {
    name: 'Vamsi Bhavani',
    role: 'Edtech mentor & software engineer',
    bio: 'An edtech mentor and software engineer with an interest in educational content and career guidance.',
    expertise: ['Edtech', 'Software development', 'Career guidance'],
  },
  {
    name: 'Gayatri G',
    role: 'Founding member, LinkedINspire',
    bio: 'Founding member of LinkedINspire, a community helping students and professionals build their presence and network.',
    expertise: ['LinkedIn strategy', 'Personal branding', 'Community building'],
    linkedin: 'https://www.linkedin.com/in/g-gayatri192005/',
  },
]

export type ResourceCategory =
  | 'Profile Optimisation'
  | 'Personal Branding'
  | 'Content Creation'
  | 'LinkedIn Growth'
  | 'Networking'
  | 'Resume Building'
  | 'Career Development'
  | 'AI Tools'

export type Resource = {
  title: string
  category: ResourceCategory
  description: string
  format: string
  href: string
}

export const resourceCategories: ResourceCategory[] = [
  'Profile Optimisation',
  'Personal Branding',
  'Content Creation',
  'LinkedIn Growth',
  'Networking',
  'Resume Building',
  'Career Development',
  'AI Tools',
]

export const resources: Resource[] = [
  {
    title: 'LinkedIn Profile Checklist',
    category: 'Profile Optimisation',
    description: 'A practical review list for your headline, About section, experience, skills, and profile links.',
    format: 'Markdown checklist',
    href: '/resources/linkedin-profile-checklist.md',
  },
  {
    title: 'Personal Branding Starter Guide',
    category: 'Personal Branding',
    description: 'A short worksheet to clarify your audience, point of view, proof, and professional story.',
    format: 'Markdown guide',
    href: '/resources/personal-branding-guide.md',
  },
  {
    title: '30-Day Content Calendar',
    category: 'Content Creation',
    description: 'A reusable CSV calendar with space for ideas, formats, draft dates, and reflection.',
    format: 'CSV template',
    href: '/resources/30-day-content-calendar.csv',
  },
  {
    title: 'Thoughtful Post-Writing Prompts',
    category: 'LinkedIn Growth',
    description: 'Prompts for turning lessons, projects, and observations into useful posts in your own voice.',
    format: 'Text prompt pack',
    href: '/resources/linkedin-post-prompts.txt',
  },
  {
    title: 'Networking Conversation Starters',
    category: 'Networking',
    description: 'Respectful opening lines and follow-up ideas for starting genuine professional conversations.',
    format: 'Markdown guide',
    href: '/resources/networking-starters.md',
  },
  {
    title: 'Resume Review Checklist',
    category: 'Resume Building',
    description: 'A concise self-review checklist for clarity, relevance, evidence, and readability.',
    format: 'Markdown checklist',
    href: '/resources/resume-review-checklist.md',
  },
  {
    title: 'Career Story Worksheet',
    category: 'Career Development',
    description: 'A worksheet to connect projects, skills, and learning into a clear career narrative.',
    format: 'Markdown worksheet',
    href: '/resources/career-story-worksheet.md',
  },
  {
    title: 'AI-Assisted Content Prompts',
    category: 'AI Tools',
    description: 'Prompts for brainstorming and editing while keeping your facts, judgment, and voice in control.',
    format: 'Text prompt pack',
    href: '/resources/ai-content-prompts.txt',
  },
]

export const faqs = [
  {
    question: 'What is LinkedINspire?',
    answer: 'LinkedINspire is a community-driven initiative helping students and professionals build their personal brands, grow their networks, and discover opportunities through LinkedIn.',
  },
  {
    question: 'Is joining the community free?',
    answer: 'The community and the sessions described on this site are free to join. Any event-specific costs, if applicable, should be stated in that event information before you take part.',
  },
  {
    question: 'Who can join?',
    answer: 'Students, creators, mentors, professionals, and anyone interested in learning about LinkedIn growth and professional branding are welcome to explore the community.',
  },
  {
    question: 'How can I attend live sessions?',
    answer: 'Check the Sessions page for published dates and registration links. There are no upcoming registration links listed at the moment.',
  },
  {
    question: 'Where can I watch previous recordings?',
    answer: 'Recordings will appear on the Sessions page when the team publishes a verified link. No recording links are currently available there.',
  },
  {
    question: 'How can I become a Campus Lead?',
    answer: 'Read the Campus Connect information and send an application using the form on that page. The form opens an email draft; it does not store your application on this website.',
  },
  {
    question: 'Can my college collaborate with LinkedINspire?',
    answer: 'Yes. Use the separate college partnership enquiry on the Campus Connect page or the collaboration form to describe the activity you have in mind.',
  },
  {
    question: 'How can I become a speaker?',
    answer: 'Use the speaker application option on the Speakers page to send the team an email draft with your details.',
  },
  {
    question: 'Do I receive certificates?',
    answer: 'Certificates are not listed as a standard benefit. If a particular session offers one, its event details should say so.',
  },
  {
    question: 'How can I contact the team?',
    answer: 'Email team.linkedinspire@gmail.com or use the contact form. The form opens a draft in your email app and does not submit information to a website database.',
  },
] as const
