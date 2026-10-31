export type BlogSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  datePublished: string
  dateLabel: string
  readingMinutes: number
  image: string
  imageAlt: string
  sections: BlogSection[]
}

export const blogCategories = [
  'LinkedIn Growth',
  'Personal Branding',
  'Creator Stories',
  'Career Development',
  'Networking',
  'Content Strategy',
  'Industry Insights',
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: 'a-profile-that-tells-a-clear-story',
    title: 'A profile that tells a clear story',
    excerpt: 'Make it easier for people to understand what you do, what you care about, and how to start a conversation.',
    category: 'Personal Branding',
    author: 'LinkedINspire',
    datePublished: '2026-10-31',
    dateLabel: 'October 31, 2026',
    readingMinutes: 5,
    image: '/images/community-workshop.png',
    imageAlt: 'Illustrative professional community workshop',
    sections: [
      {
        heading: 'Begin with the person reading',
        paragraphs: [
          'A LinkedIn profile is more useful when it answers a few basic questions quickly: what are you learning or working on, who do you hope to help, and what kind of conversation would you welcome?',
          'Choose one primary audience for the first draft. Writing for everyone at once often makes a profile sound less specific than your actual experience.',
        ],
      },
      {
        heading: 'Make the headline do more than name a role',
        paragraphs: [
          'Use plain language to describe your area of focus. If you are early in your career, it is fine to name the skills you are building or the problems you are curious about instead of implying seniority you have not yet reached.',
        ],
        bullets: ['Name your field or current focus.', 'Add one useful skill or point of view.', 'Keep claims concrete and easy to support.'],
      },
      {
        heading: 'Use the About section as an introduction',
        paragraphs: [
          'A short, natural structure can help: what drew you to this work, what you are learning or building, and what you would like to explore next. Read it aloud and remove lines that sound unlike you.',
          'Finish with a simple invitation to connect. Your profile does not need to promise outcomes; it needs to make a genuine next step clear.',
        ],
      },
    ],
  },
  {
    slug: 'a-content-habit-you-can-keep',
    title: 'A content habit you can keep',
    excerpt: 'Build a repeatable way to share what you are learning without turning every post into a performance.',
    category: 'Content Strategy',
    author: 'LinkedINspire',
    datePublished: '2026-10-31',
    dateLabel: 'October 31, 2026',
    readingMinutes: 4,
    image: '/images/community-workshop.png',
    imageAlt: 'Illustrative group sharing ideas in a workshop',
    sections: [
      {
        heading: 'Collect before you create',
        paragraphs: [
          'Keep a small note of questions, project decisions, useful resources, and lessons that surprised you. These everyday observations are often more authentic starting points than trying to invent a perfect post from scratch.',
        ],
      },
      {
        heading: 'Choose a simple structure',
        paragraphs: [
          'Try a clear opening, one idea, a specific example, and a closing question or takeaway. The structure should help the reader follow your thinking, not hide the fact that you are still learning.',
        ],
        bullets: ['What did you try?', 'What changed your understanding?', 'What would you do differently next time?'],
      },
      {
        heading: 'Make the schedule realistic',
        paragraphs: [
          'Pick a pace you can maintain alongside study or work. A thoughtful post occasionally is more sustainable than an ambitious schedule that leaves no room for reflection.',
          'Before publishing, verify names, numbers, links, and permissions. Keep other people’s private information out of your drafts unless they have explicitly agreed to share it.',
        ],
      },
    ],
  },
  {
    slug: 'networking-starts-with-curiosity',
    title: 'Networking starts with curiosity',
    excerpt: 'A respectful first message can open a conversation without asking a stranger for too much too soon.',
    category: 'Networking',
    author: 'LinkedINspire',
    datePublished: '2026-10-31',
    dateLabel: 'October 31, 2026',
    readingMinutes: 4,
    image: '/images/campus-collaboration.png',
    imageAlt: 'Illustrative students and mentors collaborating on campus',
    sections: [
      {
        heading: 'Make the reason for reaching out specific',
        paragraphs: [
          'Mention a project, talk, article, or professional question that genuinely connects to your message. A specific reason is more considerate than a generic request for someone’s time.',
        ],
      },
      {
        heading: 'Keep the first ask small',
        paragraphs: [
          'Introduce yourself in one or two sentences, explain why you chose that person, and ask one focused question. If you would like a longer conversation, ask whether they are open to it rather than assuming they are.',
        ],
        bullets: ['Respect a lack of response.', 'Avoid repeated follow-ups.', 'Thank people for their time and advice.'],
      },
      {
        heading: 'Build a relationship, not a transaction',
        paragraphs: [
          'Share useful context, follow through on suggestions, and offer appreciation without expecting a referral in return. A professional network grows through mutual respect over time.',
        ],
      },
    ],
  },
  {
    slug: 'turn-learning-into-career-proof',
    title: 'Turn your learning into career proof',
    excerpt: 'Document projects and practice in a way that helps other people see how you approach your work.',
    category: 'Career Development',
    author: 'LinkedINspire',
    datePublished: '2026-10-31',
    dateLabel: 'October 31, 2026',
    readingMinutes: 5,
    image: '/images/campus-collaboration.png',
    imageAlt: 'Illustrative campus team working together on a project',
    sections: [
      {
        heading: 'Keep a record while the details are fresh',
        paragraphs: [
          'For each project, write down the goal, your role, the steps you took, the tools you used, and what you learned. A private log makes it easier to prepare a clear resume bullet or portfolio note later.',
        ],
      },
      {
        heading: 'Describe your contribution precisely',
        paragraphs: [
          'Separate what you personally did from what the wider team achieved. Use numbers only when you can explain where they came from, and do not share confidential information from a class, employer, or client.',
        ],
      },
      {
        heading: 'Connect the lesson to your next step',
        paragraphs: [
          'A concise project reflection can show how you solve problems and respond to feedback. Link the experience to a skill you want to practise next, rather than claiming that one project proves expertise in an entire field.',
        ],
      },
    ],
  },
  {
    slug: 'a-practical-linkedin-growth-foundation',
    title: 'A practical LinkedIn growth foundation',
    excerpt: 'Start with clarity, useful participation, and a profile that reflects the work you actually want to do.',
    category: 'LinkedIn Growth',
    author: 'LinkedINspire',
    datePublished: '2026-10-31',
    dateLabel: 'October 31, 2026',
    readingMinutes: 5,
    image: '/images/community-workshop.png',
    imageAlt: 'Illustrative LinkedIn learning and networking workshop',
    sections: [
      {
        heading: 'Decide what you want the platform to help with',
        paragraphs: [
          'Choose a practical goal such as documenting your learning, meeting people in a field, or finding relevant opportunities. A clear goal makes it easier to decide what to share and which conversations to follow.',
        ],
      },
      {
        heading: 'Participate with something useful',
        paragraphs: [
          'Comment with a question, an example, or a thoughtful addition. When you publish, focus on an idea your intended reader can use. You do not need to turn every experience into a lesson for everyone.',
        ],
      },
      {
        heading: 'Review what feels authentic',
        paragraphs: [
          'Notice which topics lead to meaningful conversations and which formats are comfortable to make. Reach and impressions can fluctuate, so treat them as signals—not as a measure of your worth or a guaranteed outcome.',
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
