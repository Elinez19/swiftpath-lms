"use client";

import { Button } from "@/components/ui/button";
import { Code, Palette, LineChart, Music, Camera, Briefcase, BookOpen, Megaphone } from "lucide-react";

const categories = [
  { name: "Development", icon: Code },
  { name: "Design", icon: Palette },
  { name: "Business", icon: Briefcase },
  { name: "Finance", icon: LineChart },
  { name: "Music", icon: Music },
  { name: "Photography", icon: Camera },
  { name: "Teaching", icon: BookOpen },
  { name: "Marketing", icon: Megaphone },
];

export default function CategoryPills() {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.name}
            variant="outline"
            className="flex items-center gap-2 rounded-full"
          >
            <Icon className="w-4 h-4" />
            {category.name}
          </Button>
        );
      })}
    </div>
  );
}