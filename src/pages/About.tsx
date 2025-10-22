import { Target, Eye, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            About Civil Hospital Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A legacy of compassionate healthcare serving the people of Hyderabad and surrounding regions since 1881. 
            We are committed to providing accessible, quality medical care to all members of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-up">
          <Card className="hover-lift transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To be the leading healthcare institution in Sindh, recognized for excellence in patient care, 
                medical education, and innovative treatments that improve community health outcomes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To provide comprehensive, compassionate healthcare services to all patients regardless of their 
                economic status, while advancing medical knowledge through research and education.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                2200-bed tertiary care hospital with modern operation theaters, advanced diagnostic equipment, 
                specialized departments, emergency services, and comprehensive outpatient facilities.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto animate-fade-in gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl">Our Commitment to Community Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Civil Hospital Hyderabad stands as a beacon of hope and healing for the people of Sindh and 
              neighboring Balochistan. As a major teaching hospital affiliated with Liaquat University of 
              Medical & Health Sciences, Jamshoro, we combine clinical excellence with academic innovation.
            </p>
            <p>
              Our team of dedicated healthcare professionals works tirelessly to ensure that every patient 
              receives the highest standard of care. We believe in treating not just the illness, but the 
              whole person, with dignity and respect.
            </p>
            <p>
              Through continuous investment in medical technology, staff training, and infrastructure development, 
              we strive to meet the evolving healthcare needs of our community while maintaining our commitment 
              to accessible and affordable medical services.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
