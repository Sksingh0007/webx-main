"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: "ai-revolution-2025",
    title: "The AI Revolution: What 2025 Holds for Businesses",
    excerpt:
      "Analyzing the key AI trends that will reshape industries in 2025, from autonomous agents to multimodal AI systems.",
    date: "2024-01-15",
    category: "AI Analysis",
    readTime: "8 min read",
  },
  {
    id: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude vs Gemini: The Ultimate Comparison",
    excerpt:
      "A comprehensive breakdown of the leading AI models, their strengths, weaknesses, and best use cases.",
    date: "2024-01-12",
    category: "Tool Reviews",
    readTime: "12 min read",
  },
  {
    id: "quantum-computing-breakthrough",
    title: "Quantum Computing Breakthrough: What It Means for Tech",
    excerpt:
      "Google's latest quantum chip achievement and its implications for cryptography, AI, and computing.",
    date: "2024-01-10",
    category: "Tech News",
    readTime: "6 min read",
  },
  {
    id: "ai-automation-jobs",
    title: "AI Automation: Which Jobs Are Safe and Which Aren't",
    excerpt:
      "Data-driven analysis of job displacement and creation in the age of AI automation.",
    date: "2024-01-08",
    category: "Future of Work",
    readTime: "10 min read",
  },
  {
    id: "startup-ai-tools",
    title: "15 AI Tools Every Startup Should Use in 2024",
    excerpt:
      "Essential AI tools for marketing, development, design, and operations that can give startups a competitive edge.",
    date: "2024-01-05",
    category: "Startup Tools",
    readTime: "7 min read",
  },
  {
    id: "deepfake-detection",
    title: "Deepfakes in 2024: Detection Tools and Ethical Concerns",
    excerpt:
      "How to identify deepfakes, the latest detection technologies, and the ethical implications.",
    date: "2024-01-03",
    category: "AI Ethics",
    readTime: "9 min read",
  },
  {
    id: "ai-coding-assistants",
    title: "GitHub Copilot vs Cursor vs Replit: AI Coding Showdown",
    excerpt:
      "Comparing the top AI coding assistants and their impact on developer productivity.",
    date: "2024-01-01",
    category: "Developer Tools",
    readTime: "11 min read",
  },
  {
    id: "tech-predictions-2025",
    title: "10 Bold Tech Predictions for 2025",
    excerpt:
      "Our data-backed predictions for the biggest tech trends and disruptions coming in 2025.",
    date: "2023-12-28",
    category: "Predictions",
    readTime: "13 min read",
  },
  {
    id: "ai-content-creation",
    title: "AI Content Creation: Tools, Ethics, and Best Practices",
    excerpt:
      "A comprehensive guide to using AI for content creation while maintaining quality and authenticity.",
    date: "2023-12-25",
    category: "Content Strategy",
    readTime: "8 min read",
  },
  {
    id: "blockchain-ai-convergence",
    title: "When Blockchain Meets AI: The Next Tech Frontier",
    excerpt:
      "Exploring the intersection of blockchain and AI technologies and their combined potential.",
    date: "2023-12-22",
    category: "Emerging Tech",
    readTime: "10 min read",
  },
];

const categories = [
  "All",
  "AI Analysis",
  "Tech News",
  "Tool Reviews",
  "Future of Work",
  "Startup Tools",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tech <span className="text-primary">Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Clear analysis of AI developments, tech disruptions, and digital
          trends that matter
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-lg"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Card
            key={article.id}
            className="flex flex-col hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary" className="badge-gradient">
                  {article.category}
                </Badge>
                <span className="text-sm text-muted">{article.readTime}</span>
              </div>
              <CardTitle className="text-xl title-gradient-hover transition-all cursor-pointer">
                {article.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
              <CardDescription className="line-clamp-3">
                {article.excerpt}
              </CardDescription>
            </CardContent>

            <CardFooter className="flex items-center justify-between">
              <span className="text-sm text-muted">{article.date}</span>
              <Button variant="link" className="gradient-text p-0 h-auto">
                Read More →
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button
          variant="outline"
          size="lg"
          className="rounded-lg font-semibold"
        >
          Load More Articles
        </Button>
      </div>
    </div>
  );
}
