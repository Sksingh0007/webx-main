import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const products = [
  {
    id: "ai-tools-pack",
    title: "AI Tools Pack",
    description:
      "Curated collection of 50+ AI tools for productivity, creativity, and business growth.",
    price: "$29",
    features: [
      "50+ AI Tools",
      "Regular Updates",
      "Use Case Examples",
      "Lifetime Access",
    ],
  },
  {
    id: "prompt-packs",
    title: "Prompt Packs",
    description:
      "Professional prompt libraries for ChatGPT, Claude, and other AI models.",
    price: "$19",
    features: [
      "200+ Prompts",
      "Multiple Categories",
      "Copy-Paste Ready",
      "Bonus Templates",
    ],
  },
  {
    id: "disruption-report",
    title: "Disruption Report",
    description:
      "Monthly analysis of tech disruptions and their business implications.",
    price: "$39/mo",
    features: [
      "Monthly Reports",
      "Industry Analysis",
      "Trend Predictions",
      "Executive Summary",
    ],
  },
  {
    id: "notion-templates",
    title: "Notion Templates",
    description:
      "AI-powered Notion templates for productivity and project management.",
    price: "$15",
    features: [
      "10+ Templates",
      "AI Integration",
      "Setup Guides",
      "Video Tutorials",
    ],
  },
  {
    id: "mini-course",
    title: "AI Fundamentals Course",
    description:
      "Complete beginner course on AI concepts, tools, and practical applications.",
    price: "$99",
    features: [
      "5 Hours Content",
      "Practical Exercises",
      "Certificate",
      "Community Access",
    ],
  },
  {
    id: "newsletter",
    title: "Premium Newsletter",
    description: "Weekly deep-dive analysis of AI and tech developments.",
    price: "$9/mo",
    features: ["Weekly Issues", "Exclusive Content", "Early Access", "No Ads"],
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Digital <span className="text-primary">Products</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Practical tools, templates, and resources to help you navigate the AI
          and tech landscape
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">
                  {product.price}
                </span>
              </div>

              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-primary mr-2 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button variant="default" className="w-full">
                Learn More
              </Button>
              <Button variant="outline" className="w-full">
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
