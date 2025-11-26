import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Youtube, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get weekly insights on AI and tech developments. No spam, just
            valuable content.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Webspherx</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Understand AI & the Future of Tech — without hype or noise. Making
              complex technology accessible to everyone.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/products/ai-tools-pack"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Tools Pack
                </a>
              </li>
              <li>
                <a
                  href="/products/prompt-packs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Prompt Packs
                </a>
              </li>
              <li>
                <a
                  href="/products/disruption-report"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Disruption Report
                </a>
              </li>
              <li>
                <a
                  href="/products/notion-templates"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Notion Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/legal/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/legal/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/legal/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 Webspherx. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:hello@webspherx.com"
              className="hover:text-primary transition-colors"
            >
              hello@webspherx.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
