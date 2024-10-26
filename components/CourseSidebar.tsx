"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, FileText, Globe, MonitorPlay } from "lucide-react";

interface CourseSidebarProps {
  course: {
    price: number;
    duration: string;
    lectures: number;
    level: string;
  };
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  return (
    <div className="w-full lg:w-[380px] p-6 lg:p-8">
      <Card className="p-6 sticky top-6">
        <div className="space-y-6">
          <div>
            <span className="text-3xl font-bold">${course.price}</span>
          </div>

          <div className="space-y-2">
            <Button className="w-full text-lg">Buy now</Button>
            <Button variant="outline" className="w-full text-lg">
              Add to cart
            </Button>
          </div>

          <div className="space-y-4 text-sm">
            <h4 className="font-semibold">This course includes:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MonitorPlay className="w-4 h-4" />
                {course.duration} of on-demand video
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {course.lectures} lectures
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Full lifetime access
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Learn at your own pace
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}