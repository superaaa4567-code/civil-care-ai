import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';

const doctors = [
  {
    name: 'Dr. Ahmed Ali Khan',
    specialty: 'Cardiologist',
    experience: '15 years',
    timings: 'Mon-Fri: 9:00 AM - 2:00 PM',
    initials: 'AK',
  },
  {
    name: 'Dr. Fatima Sheikh',
    specialty: 'Neurologist',
    experience: '12 years',
    timings: 'Mon-Sat: 10:00 AM - 3:00 PM',
    initials: 'FS',
  },
  {
    name: 'Dr. Muhammad Siddiqui',
    specialty: 'Orthopedic Surgeon',
    experience: '18 years',
    timings: 'Tue-Sat: 8:00 AM - 1:00 PM',
    initials: 'MS',
  },
  {
    name: 'Dr. Ayesha Patel',
    specialty: 'Pediatrician',
    experience: '10 years',
    timings: 'Mon-Fri: 2:00 PM - 6:00 PM',
    initials: 'AP',
  },
  {
    name: 'Dr. Hassan Malik',
    specialty: 'General Surgeon',
    experience: '20 years',
    timings: 'Mon-Thu: 9:00 AM - 4:00 PM',
    initials: 'HM',
  },
  {
    name: 'Dr. Zainab Hussain',
    specialty: 'Gynaecologist',
    experience: '14 years',
    timings: 'Mon-Sat: 11:00 AM - 5:00 PM',
    initials: 'ZH',
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Our Medical Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced and dedicated healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover-lift transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 bg-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {doctor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {doctor.specialty}
                    </CardDescription>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Experience: {doctor.experience}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{doctor.timings}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Link to={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}>
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Doctors;
