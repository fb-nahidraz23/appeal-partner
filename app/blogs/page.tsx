
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BlogsPage() {

    return (
        <main className="min-h-screen bg-slate-950">
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="absolute inset-0">
                    <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>
                </div>

                {/* Logo in top left with premium styling - Desktop only */}
                {/* <div className="absolute top-4 left-4 z-30 hidden lg:block">
                    <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5">
                        <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
                                <img
                                    src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png"
                                    alt="Appeal Partners"
                                    className="w-5 h-5 object-contain"
                                />
                            </div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                        </div>
                        <div>
                            <span className="text-base font-semibold text-white tracking-tight">
                                Appeal Partners
                            </span>
                        </div>
                    </div>
                </div> */}
<Navbar/>
                

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="py-16 sm:py-20 lg:py-24">
                        <div className="max-w-3xl">
                            <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm">
                                <div className="mr-2 h-2 w-2 rounded-full bg-emerald-400"></div>
                                Amazon Reinstatement Insights
                            </div>
                            <h1
                                className="text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl"
                                style={{
                                    fontFamily: "Clash Display, sans-serif",
                                    backgroundImage:
                                        "linear-gradient(to right, white, #dbeafe, #e9d5ff)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Seller recovery guides built for high-stakes
                                account issues
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/85 sm:text-lg">
                                Browse practical guidance on Amazon suspensions,
                                Section 3 cases, rejected appeals, and
                                inauthentic product claims. Each article is
                                written to help sellers move faster and make
                                fewer costly mistakes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <article
                                key={post.slug}
                                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
                            >
                                <div className="mb-5 flex items-center justify-between gap-4">
                                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                                        {post.category}
                                    </span>
                                    <span className="text-sm text-slate-300">
                                        {post.readTime}
                                    </span>
                                </div>

                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-lg font-bold text-white">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <h2 className="text-2xl font-semibold leading-snug text-white">
                                    {post.title}
                                </h2>
                                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                                    {post.description}
                                </p>

                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="mt-8 inline-flex items-center text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200"
                                >
                                    Read full article
                                    <i className="ri-arrow-right-line ml-2 text-base"></i>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="border-t border-white/10 bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need help with a suspension right now?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
            Appeal Partners helps Amazon sellers build strong reinstatement strategies for urgent account and listing issues.
          </p>
          <Link
            href="/appeal-form"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
          >
            Start Your Appeal
          </Link>
        </div>
      </section> */}
            <Footer />
        </main>
    );
}
