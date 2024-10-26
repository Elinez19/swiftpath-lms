import { Button } from "@/components/ui/button";
import { Globe, Youtube, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Business</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Teach on LearnHub</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Get the app</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Career guides</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Browse courses</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Help and Support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookie settings</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Sitemap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Globe className="h-4 w-4" />
              English
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 LearnHub, Inc.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Accessibility statement</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Security</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Modern slavery statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}