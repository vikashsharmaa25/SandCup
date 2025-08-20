import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/Button";
import { Calendar, Clock, MapPin, Mail, Phone, Download } from "lucide-react";
import { formatDate, formatTime } from "../../utils/formatDateTime";
import LottiePlayer from "../LottiePlayer";
import placeholderAnimation from "../../assets/NodataFound.json";
import { toast } from "react-toastify";
import axiosInstance from "../../apis/Axiosinstance";

export function EventList({ events, loading, error, refreshEvents }) {
  const getEventTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "conference":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "workshop":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "meetup":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "webinar":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const exportToCSV = async () => {
    try {
      const response = await axiosInstance.get("/events/download/csv", {
        responseType: "blob", // tells axios to expect binary data
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "events.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("CSV downloaded successfully");
    } catch (error) {
      console.error("CSV download error:", error);
      toast.error("Failed to download CSV");
    }
  };

  return (
    <section className="py-20 bg-muted/30 max-w-[1400px] mx-auto">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Upcoming Events
            </h2>
            <p className="md:text-xl text-sm text-muted-foreground md:line-clamp-1">
              Discover and join amazing events created by our community
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              onClick={exportToCSV}
              variant=""
              className="bg-transparent text-foreground hover:bg-muted/20 hover:text-foreground border border-gray-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button
              onClick={refreshEvents}
              variant=""
              className="bg-transparent text-foreground hover:bg-muted/20 hover:text-foreground border border-gray-700"
            >
              Refresh
            </Button>
          </div>
        </div>

        {loading ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground text-lg">Loading events...</p>
            </CardContent>
          </Card>
        ) : error ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-red-500 text-lg">{error}</p>
            </CardContent>
          </Card>
        ) : events.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground text-lg">
                No events created yet. Be the first to create an event!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event._id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                {event.banner ? (
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={event.banner}
                      alt={event.eventTitle}
                      className="w-full h-full object-fill"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 overflow-hidden flex justify-center items-center rounded-t-lg">
                    <LottiePlayer
                      animationData={placeholderAnimation}
                      className="w-full"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold line-clamp-2">
                      {event.eventTitle}
                    </CardTitle>
                    <Badge className={getEventTypeColor(event.eventType)}>
                      {event.eventType.charAt(0).toUpperCase() +
                        event.eventType.slice(1)}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {formatDate(event.eventDate)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {formatTime(event.eventTime)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Organizer Contact:
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Mail className="h-3 w-3 mr-2" />
                      {event.organizerEmail}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-3 w-3 mr-2" />
                      {event.organizerContact.replace(
                        /(\d{3})(\d{3})(\d{4})/,
                        "($1) $2-$3"
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
