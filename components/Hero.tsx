"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
          alt="Students learning"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learn Without Limits
          </h1>
          <p className="text-xl mb-8">
            Start, switch, or advance your career with more than 213,000 courses from expert instructors.
          </p>
          
          <div className="flex gap-4 max-w-lg">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full pl-10 bg-white text-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}