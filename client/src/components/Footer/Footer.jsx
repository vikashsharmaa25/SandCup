import React from "react";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12 md:py-16">
      <div className="max-w-[1200px] p-4 sm:p-4 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-2">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-base sm:text-xl font-bold font-serif">
                SandCup Event
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed">
              The professional platform for seamless event management and
              organization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#create-event"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base block"
                >
                  Create Event
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base block"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-2 sm:space-y-4">
            <h3 className="text-sm sm:text-lg font-semibold">Support</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-base"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-base"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-base"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2 sm:space-y-4">
            <h3 className="text-sm sm:text-lg font-semibold">Contact Us</h3>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-base break-all">
                  vikash9422@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-base">
                  8709136168
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-base">
                  Laxmi Nagar, Delhi
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-10 md:mt-12 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm">
            © 2025 SandCup. All rights reserved. Built with ❤️ for event
            organizers.
          </p>
        </div>
      </div>
    </footer>
  );
}
