/*
  Example event — copy, uncomment, and customize. Do not leave sample events live.

  {
    id: "event-1",
    slug: "aws-cloud-workshop",
    title: "AWS Cloud Workshop",
    type: "Workshop",
    poster: "/images/events/aws-cloud-workshop/poster.jpg",
    tags: ["AWS", "Cloud Computing"],
    shortDescription: "A hands-on introduction to AWS cloud fundamentals for students.",
    description: "Full event recap goes here.",
    details: "Date, venue, and format details.",
    activities: ["Keynote", "Hands-on lab"],
    speakers: ["Guest name"],
    outcomes: ["Students completed the lab"],
    images: [
      "/images/events/aws-cloud-workshop/1.jpg",
      "/images/events/aws-cloud-workshop/2.jpg",
      "/images/events/aws-cloud-workshop/3.jpg",
    ],
  },
*/

export const eventTypes = [
  "Workshop",
  "Webinar",
  "Hackathon",
  "Seminar",
  "Bootcamp",
  "Meetup",
  "Competition",
  "Community Event",
  "Other",
] as const;

export type EventType = (typeof eventTypes)[number];

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  type: EventType;
  poster: string | null;
  tags: string[];
  shortDescription: string;
  description: string;
  details?: string;
  activities?: string[];
  speakers?: string[];
  outcomes?: string[];
  images: Array<string | null>;
};

export const events: EventItem[] = [];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
