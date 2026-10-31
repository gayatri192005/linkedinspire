import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ActionLink from '@/components/ui/ActionLink'
import PageIntro from '@/components/ui/PageIntro'
import ShareArticle from '@/components/ui/ShareArticle'
import { blogPosts, getBlogPost } from '@/lib/blog-posts'
import { SITE_URL } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: 'Guide not found' }
  return createPageMetadata(post.title, post.excerpt, `/blog/${post.slug}`)
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const articleUrl = `${SITE_URL}/blog/${post.slug}`

  return (
    <article>
      <PageIntro eyebrow={`${post.category} · ${post.readingMinutes} min read`} title={post.title} description={post.excerpt} />
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8 aspect-[16/8] overflow-hidden rounded-2xl border border-[#dbe5ef] bg-[#eef4f8]">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 896px" className="object-cover" />
          </div>
          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#687b8c]">
            <span>By {post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>{post.dateLabel}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <div className="space-y-9">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-[#102a43]">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-[#42566b]">{paragraph}</p>)}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-[#42566b]">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          <div className="mt-10"><ShareArticle title={post.title} url={articleUrl} /></div>
          <div className="mt-7"><ActionLink href="/blog" variant="secondary" size="sm">Back to all guides</ActionLink></div>
        </div>
      </section>
    </article>
  )
}
