import { Link } from 'react-router-dom';
import { Heart, Brain, Bone, Baby, Scissors, Activity, Ear, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const departments = [
  {
    name: 'Cardiology',
    icon: Heart,
    description: 'Comprehensive heart care with advanced cardiac diagnostics and treatment facilities.',
  },
  {
    name: 'Neurology',
    icon: Brain,
    description: 'Expert neurological care for brain, spine, and nervous system disorders.',
  },
  {
    name: 'Orthopedics',
    icon: Bone,
    description: 'Specialized bone, joint, and musculoskeletal treatment and surgery.',
  },
  {
    name: 'Pediatrics',
    icon: Baby,
    description: 'Complete healthcare services for infants, children, and adolescents.',
  },
  {
    name: 'Surgery',
    icon: Scissors,
    description: 'Advanced surgical procedures with state-of-the-art operation theaters.',
  },
  {
    name: 'Radiology',
    icon: Activity,
    description: 'Modern imaging and diagnostic services including X-ray, CT, and MRI.',
  },
  {
    name: 'ENT',
    icon: Ear,
    description: 'Treatment for ear, nose, throat, and related head and neck conditions.',
  },
  {
    name: 'Gynaecology',
    icon: User,
    description: "Women's health services including maternal and reproductive care.",
  },
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Our Departments
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Civil Hospital offers comprehensive medical services across multiple specialized departments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <Card key={index} className="hover-lift transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/doctors">
                    <Button className="w-full">View Doctors</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Departments;
