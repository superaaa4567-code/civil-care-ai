import { BookOpen, Calendar, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Our Rich History
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 140 years of dedicated service to the people of Hyderabad
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="animate-fade-up gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl">Civil Hospital Hyderabad - A Legacy of Care</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                The Civil Hospital, Hyderabad, also known as Liaquat University Hospital (LUH), is a 2200-bed 
                tertiary care hospital in Hyderabad, Sindh. With a rich history spanning over a century, it has 
                been a cornerstone of healthcare in the region.
              </p>
              <p>
                The hospital was initially established in 1881 to provide basic health facilities to the people 
                of Hyderabad and surrounding areas. This marked the beginning of organized medical care in the region, 
                serving as a vital resource for the growing population.
              </p>
              <p>
                The hospital's construction was completed with seven wards by 1894 at a cost of 88,173 rupees—a 
                significant investment at the time. These initial wards laid the foundation for what would become 
                one of the largest healthcare institutions in Sindh.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up">
            <Card className="hover-lift transition-smooth">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Medical Education Milestone</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  A medical school was established on the premises, which was upgraded to degree-college status 
                  (Sindh Medical College) in 1945. This advancement marked the hospital's evolution into a major 
                  center for medical education and training.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-smooth">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Liaquat Medical College</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  In 1951, Liaquat Medical College was established on the hospital's site and later moved to its 
                  new campus in Jamshoro. This transition further strengthened the region's medical education 
                  infrastructure and research capabilities.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in gradient-card">
            <CardHeader>
              <CardTitle className="text-xl">A Major Teaching and Referral Center Today</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Today, Civil Hospital Hyderabad serves Sindh and neighboring Balochistan as a major teaching 
                hospital affiliated with Liaquat University of Medical & Health Sciences, Jamshoro. The hospital 
                continues its proud tradition of combining clinical excellence with academic innovation.
              </p>
              <p>
                With 2200 beds and modern medical facilities, the hospital treats thousands of patients daily, 
                offering specialized care across multiple departments. It remains a vital healthcare institution, 
                upholding its commitment to accessible and quality medical services for all.
              </p>
              <p className="text-sm italic border-l-4 border-primary pl-4 mt-6">
                From its humble beginnings in 1881 to its current status as a premier tertiary care center, 
                Civil Hospital Hyderabad has been a constant source of healing and hope for generations of families.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default History;
