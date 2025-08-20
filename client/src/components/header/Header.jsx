import React, { useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

export function Header({ setIsModalOpen }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60 ">
      <div className="flex h-16 items-center justify-between px-4 max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Calendar className="sm:h-8 h-5 sm:w-8 w-5 text-primary-foreground" />
          <span className="sm:block hidden text-xl font-bold text-primary-foreground font-serif">
            SandCup Event
          </span>
          <span className="sm:hidden block text-xl font-bold text-primary-foreground font-serif">
            SE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Home
          </a>

          <a
            href="#upcoming"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Upcoming Event
          </a>

          <a
            href="#footer"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Footer
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2">
          <div className="md:block hidden">
            <Button
              variant="secondary"
              size="sm"
              className="md:block hidden"
              onClick={() => setIsModalOpen(true)}
            >
              Create Event
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground"
            onClick={toggleMobileMenu}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden border-b">
          <nav className="flex flex-col space-y-4 p-4 text-primary-foreground">
            <a
              href="#home"
              className="hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </a>
            <a
              href="#pricing"
              className="hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              Upcoming Event
            </a>
            <a
              href="#features"
              className="hover:text-primary-foreground/80 transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              Footer
            </a>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileOpen(false);
              }}
            >
              Create Event
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
