import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageCircle, Stethoscope, Heart, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Index = () => {
  const quickActions = [
    { icon: Calendar, label: 'Book Appointment', path: '/appointments', variant: 'default' as const },
    { icon: Stethoscope, label: 'Find Doctors', path: '/doctors', variant: 'secondary' as const },
    { icon: MessageCircle, label: 'AI Assistant', path: '/chatbot', variant: 'outline' as const },
  ];

  const departments = [
    { name: 'Cardiology', icon: Heart, description: 'Heart & cardiovascular care' },
    { name: 'Pediatrics', icon: Users, description: 'Child healthcare specialists' },
    { name: 'Surgery', icon: Award, description: 'Advanced surgical procedures' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Caring for Hyderabad Since 1945
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Civil Hospital - Your trusted partner in health and wellness
            </p>
            <div className="flex flex-wrap gap-4">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant}
                  size="lg"
                  asChild
                  className="transition-smooth hover-lift"
                >
                  <Link to={action.path}>
                    <action.icon className="mr-2 h-5 w-5" />
                    {action.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Our Departments
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={dept.name} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <dept.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">{dept.name}</h3>
                  <p className="text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">Civil Hospital Hyderabad</p>
          <p className="text-sm opacity-90 mt-2">Emergency: +92 22 1234567 | Available 24/7</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
