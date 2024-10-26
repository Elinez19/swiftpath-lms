
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, BookOpen, Users, Trophy, TrendingUp } from "lucide-react";
import CourseCard from "@/components/CourseCards";
import CategoryPills from "@/components/CategoryPills";
import HeroSection from "@/components/Hero";

const Home = () => {
    const featuredCourses = [
        {
          id: 1,
          title: "Complete Web Development Bootcamp 2024",
          instructor: "Dr. Angela Yu",
          rating: 4.8,
          students: 245000,
          price: 89.99,
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
          category: "Development"
        },
        {
          id: 2,
          title: "Machine Learning A-Z: Hands-On Python & R",
          instructor: "Kirill Eremenko",
          rating: 4.7,
          students: 185000,
          price: 94.99,
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
          category: "Data Science"
        },
        {
          id: 3,
          title: "The Complete Digital Marketing Course",
          instructor: "Rob Percival",
          rating: 4.6,
          students: 165000,
          price: 84.99,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
          category: "Marketing"
        }
      ];
    
      return (
        <main className="min-h-screen bg-background">
          <HeroSection />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Courses</h2>
                <Button variant="outline">View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
    
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Top Categories</h2>
              <CategoryPills />
            </section>
    
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6">
                <BookOpen className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">213,000+ Courses</h3>
                <p className="text-muted-foreground">Explore a wide range of courses</p>
              </Card>
              <Card className="p-6">
                <Users className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">5M+ Students</h3>
                <p className="text-muted-foreground">Join our growing community</p>
              </Card>
              <Card className="p-6">
                <Trophy className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">Learn from industry experts</p>
              </Card>
              <Card className="p-6">
                <TrendingUp className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
                <p className="text-muted-foreground">Learn at your own pace</p>
              </Card>
            </section>
          </div>
        </main>
      );
}

export default Home
