import { EmptyPartners } from "@/components/EmptyPartners";
import { PartnerCard } from "@/components/PartnerCard";
import { SectionHeading } from "@/components/SectionHeading";
import { partners } from "@/data/partners";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Partners — AWS Student Builder Group NUML Rawalpindi",
  description:
    "Organizations and communities partnering with AWS Student Builder Group at NUML Rawalpindi.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Community"
        title="Partners"
        description="Meet the organizations and communities helping us create better learning opportunities for students. New partners can be added from the partners data file without changing the layout."
      />
      <div className="mt-12">
        {partners.length === 0 ? (
          <EmptyPartners />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
