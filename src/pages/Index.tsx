import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageCircle, Stethoscope, Heart, Users, Award, Building2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Index = () => {
  const quickActions = [
    { icon: Calendar, label: 'Book Appointment', path: '/appointments', variant: 'default' as const },
    { icon: Stethoscope, label: 'Doctors List', path: '/doctors', variant: 'secondary' as const },
    { icon: MessageCircle, label: 'Ask AI Assistant', path: '#', variant: 'outline' as const },
  ];

  const departments = [
    { name: 'Cardiology', icon: Heart, description: 'Heart & cardiovascular care' },
    { name: 'Pediatrics', icon: Users, description: 'Child healthcare specialists' },
    { name: 'Surgery', icon: Award, description: 'Advanced surgical procedures' },
  ];

  const stats = [
    { label: 'Departments', value: '8+', icon: Building2 },
    { label: 'Expert Doctors', value: '50+', icon: Stethoscope },
    { label: 'Daily Patients', value: '500+', icon: Users },
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

      {/* Quick Overview Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover-lift transition-smooth">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
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

      {/* Emergency Hotline */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover-lift transition-smooth">
            <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-1">24/7 Emergency Hotline</h3>
                  <p className="text-primary-foreground/80">We're here for you, anytime</p>
                </div>
              </div>
              <a href="tel:+92221234567" className="text-3xl md:text-4xl font-bold hover:underline">
                +92 22 1234567
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
