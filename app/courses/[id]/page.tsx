import { Metadata } from "next";
import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe, PlayCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import CourseSidebar from "@/components/CourseSidebar";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | MySkillsRoot`,
    description: course.description,
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{course.category}</Badge>
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">
                {course.description}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Created by {course.instructor}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
              </div>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">What you'll learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Course content</h2>
              <div className="space-y-2">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {section.lectures} lectures • {section.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <CourseSidebar course={course} />
    </div>
  );
}