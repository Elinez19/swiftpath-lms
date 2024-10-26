"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Lock, PlayCircle } from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Getting Started",
    duration: "2h 15m",
    lectures: [
      {
        id: "1-1",
        title: "Welcome to the Course",
        duration: "5:30",
        isCompleted: true,
        isLocked: false,
      },
      {
        id: "1-2",
        title: "Course Overview",
        duration: "10:15",
        isCompleted: true,
        isLocked: false,
      },
      {
        id: "1-3",
        title: "Setting Up Your Development Environment",
        duration: "15:45",
        isCompleted: false,
        isLocked: false,
      },
    ],
  },
  {
    id: 2,
    title: "HTML Fundamentals",
    duration: "3h 45m",
    lectures: [
      {
        id: "2-1",
        title: "Introduction to HTML",
        duration: "12:30",
        isCompleted: false,
        isLocked: false,
      },
      {
        id: "2-2",
        title: "HTML Elements and Tags",
        duration: "18:45",
        isCompleted: false,
        isLocked: true,
      },
      {
        id: "2-3",
        title: "Working with Forms",
        duration: "25:10",
        isCompleted: false,
        isLocked: true,
      },
    ],
  },
];

export default function CourseContent() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold">Course Content</h3>
          <p className="text-sm text-muted-foreground">
            25 sections • 475 lectures • 65h total length
          </p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {sections.map((section) => (
          <AccordionItem key={section.id} value={`section-${section.id}`}>
            <AccordionTrigger>
              <div className="flex justify-between items-center w-full">
                <span>{section.title}</span>
                <span className="text-sm text-muted-foreground">{section.duration}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {section.lectures.map((lecture) => (
                  <li
                    key={lecture.id}
                    className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {lecture.isLocked ? (
                        <Lock className="w-4 h-4 text-muted-foreground" />
                      ) : lecture.isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <PlayCircle className="w-4 h-4" />
                      )}
                      <span className={lecture.isLocked ? "text-muted-foreground" : ""}>
                        {lecture.title}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{lecture.duration}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}