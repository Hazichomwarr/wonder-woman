// app/(site)/page.tsx
import Hero from "../_components/Hero";
import SectionCTA from "../_components/SectionCTA";
import SectionFestival from "../_components/SectionFestival";
import SectionPillars from "../_components/SectionPillars";
import SectionPrograms from "../_components/SectionPrograms";

export default function Page() {
  return (
    <>
      <Hero />
      <SectionPillars />
      <SectionFestival />
      <SectionPrograms />
      <SectionCTA />
    </>
  );
}
