import { BookOpen, Microscope, Palette, Trophy } from "lucide-react";

export const programs = [
  {
    icon: BookOpen,
    title: "Primary School",
    description:
      "A joyful, inquiry-led foundation that builds literacy, numeracy and curiosity for life.",
  },
  {
    icon: Microscope,
    title: "Middle School",
    description:
      "STEM-rich projects, robotics and lab work that turn curiosity into capability.",
  },
  {
    icon: Palette,
    title: "Senior Secondary",
    description:
      "IB & CBSE pathways with expert mentorship for global university admissions.",
  },
  {
    icon: Trophy,
    title: "Beyond Academics",
    description:
      "Sports, music, drama and leadership programs that shape well-rounded individuals.",
  },
] as const;