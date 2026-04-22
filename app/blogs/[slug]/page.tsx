import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/data/blogs";
import Navbar from "@/components/Navbar";

type BlogDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: "Blog Not Found | Appeal Partners",
        };
    }

    return {
        title: `${post.title} | Appeal Partners`,
        description: post.description,
        alternates: {
            canonical: `https://appealpartners.com/blogs/${post.slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter((item) => item.slug !== post.slug)
        .slice(0, 3);
    const checklistItems = [
        "Identify the exact trigger in Seller Central.",
        "Pause weak or repetitive appeals.",
        "Document the real corrective actions already taken.",
        "Build prevention steps Amazon can trust.",
    ];

    return (
        <main className="min-h-screen bg-slate-950">
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="absolute inset-0">
                    <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>
                </div>

                <div className="pt-0 md:pt-6">
                    <Navbar />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="py-14 sm:py-18 lg:py-20">
                        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
                            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-blue-200">
                                {post.category}
                            </span>
                            <span className="text-slate-300">
                                {post.readTime}
                            </span>
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-200">
                                2026 seller guide
                            </span>
                        </div>

                        <div className="max-w-4xl">
                            <h1
                                className="text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl"
                                style={{
                                    fontFamily: "Clash Display, sans-serif",
                                    backgroundImage:
                                        "linear-gradient(to right, white, #dbeafe, #e9d5ff)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                {post.title}
                            </h1>
                            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100/90">
                                {post.description}
                            </p>

                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                    <p className="text-xs uppercase tracking-[0.2em] text-blue-200/75">
                                        Focus
                                    </p>
                                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                                        Root cause clarity over rushed appeals
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                    <p className="text-xs uppercase tracking-[0.2em] text-blue-200/75">
                                        Goal
                                    </p>
                                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                                        Build a response Amazon can trust
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                    <p className="text-xs uppercase tracking-[0.2em] text-blue-200/75">
                                        Best Use
                                    </p>
                                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                                        Sellers handling high-stakes account
                                        issues
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20">
                <div className="absolute inset-0">
                    <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <article className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:p-8 lg:p-10">
                        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"></div>

                        <div className="mb-8 rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-white/8 to-blue-500/10 p-6">
                            <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 shadow-sm">
                                Introduction
                            </div>
                            <div className="space-y-5 text-base leading-8 text-slate-200">
                                {post.intro.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10">
                            {post.sections.map((section, index) => (
                                <section
                                    key={`${section.title}-${index}`}
                                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7"
                                >
                                    <div className="mb-5 flex items-center gap-3">
                                        <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200/75">
                                            Section{" "}
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                        {section.title}
                                    </h2>

                                    {section.paragraphs ? (
                                        <div className="mt-4 space-y-4 text-base leading-8 text-slate-200">
                                            {section.paragraphs.map(
                                                (paragraph) => (
                                                    <p key={paragraph}>
                                                        {paragraph}
                                                    </p>
                                                ),
                                            )}
                                        </div>
                                    ) : null}

                                    {section.bullets ? (
                                        <div className="mt-6 space-y-3">
                                            {section.bullets.map(
                                                (bullet, bulletIndex) => (
                                                    <div
                                                        key={bullet}
                                                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                                                    >
                                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
                                                            {section.ordered ? (
                                                                bulletIndex + 1
                                                            ) : (
                                                                <i className="ri-check-line text-sm"></i>
                                                            )}
                                                        </div>
                                                        <p className="text-base leading-7 text-slate-100">
                                                            {bullet}
                                                        </p>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    ) : null}
                                </section>
                            ))}
                        </div>

                        <div className="mt-12 rounded-[1.75rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-6 sm:p-8">
                            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 shadow-sm">
                                Next Step
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-white">
                                Need help with this kind of case?
                            </h3>
                            <p className="mt-4 text-base leading-8 text-blue-100">
                                {post.cta}
                            </p>
                            <Link
                                href="/appeal-form"
                                className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
                            >
                                Request Reinstatement Help
                            </Link>
                        </div>
                    </article>

                    <aside className="space-y-6 lg:pt-4">
                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl">
                            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                                Quick Checklist
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                                What to focus on first
                            </h3>
                            <div className="mt-5 space-y-3">
                                {checklistItems.map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
                                            {index + 1}
                                        </div>
                                        <p className="text-sm leading-7 text-slate-200">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                                Urgent Help
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Suspended right now?
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-blue-100/85">
                                If you are already losing sales, a stronger
                                first strategy usually matters more than sending
                                another rushed appeal.
                            </p>
                            <Link
                                href="/appeal-form"
                                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:scale-105"
                            >
                                Start Your Appeal
                            </Link>
                        </div>

                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl">
                            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
                                More Reading
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                                More articles
                            </h3>
                            <div className="mt-5 space-y-4">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/blogs/${relatedPost.slug}`}
                                        className="block rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-blue-400/25 hover:bg-white/[0.06]"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                                            {relatedPost.category}
                                        </p>
                                        <p className="mt-2 text-base font-medium leading-6 text-white">
                                            {relatedPost.title}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Need a faster path back to selling?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
                        Appeal Partners helps sellers with suspended accounts,
                        Section 3 cases, inauthentic claims, and rejected
                        appeals.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/appeal-form"
                            className="inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 transition hover:scale-105"
                        >
                            Get Reinstatement Help
                        </Link>
                        <Link
                            href="/blogs"
                            className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/15"
                        >
                            Browse More Guides
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
