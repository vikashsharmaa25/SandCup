import React from "react";
import { ArrowRight, Calendar, Users, BarChart3 } from "lucide-react";
import { Button } from "../ui/Button";

export function HeroSection({ setIsModalOpen }) {
  return (
    <section
      id="home"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted hero"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center heroIndex">
          <h1 className="font-bold text-foreground font-serif">
            Seamlessly Manage Your <span className="text-primary">Events</span>{" "}
            and Create Lasting Experiences
          </h1>
          <p className="md:text-lg text-sm text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The comprehensive platform for event organizers, conference
            planners, and workshop hosts. Create, manage, and track your events
            with professional-grade tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground"
              onClick={() => setIsModalOpen(true)}
            >
              Create Your First Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Easy Event Creation
              </h3>
              <p className="text-muted-foreground text-center">
                Intuitive form with validation and file uploads
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Real-Time Collaboration
              </h3>
              <p className="text-muted-foreground text-center">
                Work with your team seamlessly
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-muted-foreground text-center">
                Track performance and export data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
