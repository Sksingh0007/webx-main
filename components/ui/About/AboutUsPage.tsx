import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target, Search, Rocket } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-primary">Webspherx</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Understanding AI & the Future of Tech — without hype or noise
        </p>
      </div>

      <div className="space-y-12">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              In a world flooded with AI hype and tech noise, Webspherx cuts
              through the clutter to deliver clear, factual analysis of
              artificial intelligence and emerging technologies. We believe in
              making complex tech accessible to everyone — from curious
              beginners to seasoned professionals.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What We Do</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Analyze AI developments and their real-world impact</li>
                <li>• Break down tech disruptions in plain language</li>
                <li>• Create practical digital products and tools</li>
                <li>• Provide news without sensationalism</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Who We Serve</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Students learning about AI</li>
                <li>• Tech professionals staying current</li>
                <li>• Founders and creators</li>
                <li>• AI-curious beginners</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Clear & Factual</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No hype, no noise. Just clear explanations of complex topics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Real-World Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We focus on practical applications and real business impact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Future-Oriented</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                 {` Helping you prepare for what's coming next in tech.`}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Join Our Community</CardTitle>
            <CardDescription>
              Get weekly insights on AI and tech developments. No spam, just
              valuable content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
