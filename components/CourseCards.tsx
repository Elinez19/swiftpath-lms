"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    instructor: string;
    rating: number;
    students: number;
    price: number;
    image: string;
    category: string;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer group">
        <div className="relative h-48">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {course.category}
          </Badge>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-muted-foreground mb-2">{course.instructor}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 font-bold">{course.rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(course.rating)
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <span className="text-xl font-bold">${course.price}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}