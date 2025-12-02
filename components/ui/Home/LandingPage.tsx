import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Bot,
  Rocket,
  Package,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import EmailSignup from "./EmailSignUp";


export default function LandingPage() {
  return (
    <div className="min-h-screen relative">
      {/* <div
        className={`fixed inset-0 bg-black transition-opacity duration-2000 z-50 ${
          videoEnded ? "opacity-1 pointer-events-none" : "opacity-30"
        }`}
      >
        <video
          src="/Futuristic_Website_Background_Video_Generation.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setVideoEnded(true)}
        />


        <button
          className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white hover:bg-white/30 transition"
          onClick={() => setVideoEnded(true)}
        >
          Skip Intro
        </button>
      </div> */}

      {/* Background */}
      <div className="absolute -top-20 z-[-2] h-screen w-screen bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,161,242,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,161,242,0.3),rgba(0,0,0,0))]"></div>
      </div>

      {/* Hero Section - More compact and impactful */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold leading-tight">
            <span className="bg-linear-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 20px rgba(16, 175, 255, 0.6)) drop-shadow(0 0 40px rgba(16, 175, 255, 0.3))' }}>
              Master AI <span className="text-white animate-pulse inline-block">+</span> Future Tech Skills
            </span>
            <br />
            <span className="text-foreground">That Actually Get You Hired in 2026</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed">
            Practical courses, tools, prompts, and insights used by 50,000+ students & professionals at Google, Microsoft, Amazon, and top US startups. No fluff. No hype. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 pt-8">
            <Button asChild size="lg" className="text-base h-12 px-8">
              <Link href="/products">
                Explore Premium Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base h-12 px-8"
            >
              <Link href="/blog">Read Latest Insights →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center">
        <p className="text-lg sm:text-xl text-muted-foreground font-medium">
          Clear, practical, no-BS AI education for ambitious students and early-career professionals in the United States.
        </p>
      </section>

      {/* Features Section - Larger cards, less spacing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2">
            <CardHeader className="space-y-4 pb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Deep, data-driven analysis of AI developments, major model releases, and how new breakthroughs impact careers, industries, and everyday life.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2">
            <CardHeader className="space-y-4 pb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Tech Disruption</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Exploring the technologies reshaping businesses—AI agents, automation, robotics, quantum computing—and how they create new opportunities for people who adapt early.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2">
            <CardHeader className="space-y-4 pb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Digital Products</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Premium AI learning resources crafted to accelerate your skills, boost productivity, and help you stay ahead in a fast-moving technology landscape.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lead Magnet Section - More prominent */}

      {/* Digital Products Preview - Larger cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4">
            Premium AI Learning Resources Built for Students & Working Professionals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group border-2 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <CardHeader className="space-y-3 pb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">AI Tools Pack – 300+ Curated & Tested Tools (Updated Monthly)</CardTitle>
              <CardDescription className="text-base">
                Save hundreds of hours. The ultimate Notion dashboard with the best AI tools for productivity, learning, job hunting, creativity, and career growth in 2025.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-4 pt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">$29</span>
                  <span className="text-muted-foreground">one-time payment</span>
                </div>
                <span className="text-sm text-muted-foreground">Instant access</span>
              </div>
              <Button asChild className="w-full h-11">
                <Link href="/products/ai-tools-pack">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group border-2 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <CardHeader className="space-y-3 pb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Prompt Packs – 250+ Expert-Level Prompts (ChatGPT, Claude, Gemini)</CardTitle>
              <CardDescription className="text-base">
                Proven prompts for acing college assignments, job applications, LinkedIn content, technical interviews, and daily work — used by students at Stanford, NYU, UT Austin & professionals at FAANG.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-4 pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">$19</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <Button asChild className="w-full h-11">
                <Link href="/products/prompt-packs">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group border-2 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <CardHeader className="space-y-3 pb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Monthly Disruption Report – Big-Picture AI & Tech Trends</CardTitle>
              <CardDescription className="text-base">
                Monthly 30–40 page deep-dive on the AI trends that matter for your career: job market shifts, new tools, salary data, emerging roles, and actionable strategies.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-4 pt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">$39</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <span className="text-sm text-muted-foreground">Cancel anytime</span>
              </div>
              <Button asChild className="w-full h-11">
                <Link href="/products/disruption-report">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base"
          >
            <Link href="/products">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Card className="border-2 bg-linear-to-r from-primary/25 to-primary/12 border-primary/30 shadow-xl overflow-hidden bg-">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <CardHeader className="text-center space-y-4 pt-10 pb-6">
            <div className="flex justify-center mb-2">
              <Badge className="px-4 py-1.5 text-sm">
                <Zap className="w-3 h-3 mr-1.5" />
                Free Download
              </Badge>
            </div>
            <CardTitle className="text-2xl sm:text-3xl lg:text-3xl leading-tight px-4">
              Free 2025 Report: The 7 AI + FutureTech Trends Every Student & Professional Must Know
            </CardTitle>
            <CardDescription className="text-base sm:text-lg max-w-2xl mx-auto px-4">
              A 25-page breakdown of the exact trends shaping jobs, salaries, and opportunities in 2025–2026. Perfect for college students, recent grads, and professionals who want to stay ahead.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-10">
            <EmailSignup />
          </CardContent>
        </Card>
      </section>

      {/* Latest Articles Preview - More compact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4">
            Latest AI & Career Insights (Updated Weekly)
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { badge: "AI", icon: Bot },
            { badge: "Tech", icon: Rocket },
            { badge: "Analysis", icon: TrendingUp },
          ].map((item, i) => (
            <Card
              key={i}
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border-2"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="w-fit">
                    {item.badge}
                  </Badge>
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {i === 0 && "How the Latest AI Model Upgrades Will Affect Your Job & Salary in 2025–2026"}
                  {i === 1 && "AI Adoption in US Companies: Real Data + How to Position Yourself"}
                  {i === 2 && "The Exact AI Skills Top US Employers Are Hiring For Right Now"}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {i === 0 && "Deep analysis of recent AI breakthroughs and their direct impact on career opportunities and salary expectations."}
                  {i === 1 && "Data-driven insights into how US companies are implementing AI and what it means for your career strategy."}
                  {i === 2 && "The most in-demand AI skills based on real job postings from top tech companies and startups."}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button
                  asChild
                  variant="ghost"
                  className="group-hover:translate-x-1 transition-transform p-0 h-auto"
                >
                  <Link
                    href={`/blog/article-${i + 1}`}
                    className="text-base font-medium"
                  >
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base"
          >
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
