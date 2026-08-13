"use client";

import { useMemo, useState } from "react";

import ExperienceCategories from "./ExperienceCategories";
import FeaturedExperiences from "./FeaturedExperiences";
import { experiences } from "@/data/experiences";

export default function ExperienceContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExperiences = useMemo(() => {
    if (activeCategory === "All") {
      return experiences;
    }

    return experiences.filter(
      (experience) => experience.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <ExperienceCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <FeaturedExperiences experiences={filteredExperiences} />
    </>
  );
}