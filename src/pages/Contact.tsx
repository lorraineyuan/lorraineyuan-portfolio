import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">Contact</h1>

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 mt-1 text-sidebar-accent flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:hy557@cornell.edu" className="text-sidebar-accent hover:underline">
                hy557@cornell.edu
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 mt-1 text-sidebar-accent flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-foreground">
                Cornell Tech<br />
                2 West Loop Road<br />
                New York, NY 10044
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Linkedin className="w-6 h-6 mt-1 text-sidebar-accent flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/huaibing-lorraine-yuan-cornell/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sidebar-accent hover:underline"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
