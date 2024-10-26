"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; 
import { ArrowUp } from "lucide-react"; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled 300px down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-900 hover:bg-violet-900 text-white rounded-full shadow-lg p-3"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-8 h-8" />
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;
