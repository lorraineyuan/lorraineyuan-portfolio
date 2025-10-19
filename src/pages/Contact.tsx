import { Mail, MapPin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Contact</h1>

        <div className="space-y-8 text-lg">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 mt-1 text-sidebar-accent flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:ly364@cornell.edu" className="text-sidebar-accent hover:underline">
                ly364@cornell.edu
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
            <FileText className="w-6 h-6 mt-1 text-sidebar-accent flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Curriculum Vitae</h3>
              <p className="text-muted-foreground">Available upon request</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
          <p className="text-lg text-foreground">
            Available by appointment. Please email to schedule a meeting.
          </p>
        </div>
      </div>
    </div>
  );
}
