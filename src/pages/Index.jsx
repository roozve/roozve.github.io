import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"
import ContactModal from '@/components/ContactModal';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      name: "tech-spotlight-portfolio",
      description: "Private repository",
      technologies: ["JavaScript"],
      githubUrl: "https://github.com/roozve/tech-spotlight-portfolio"
    },
    {
      name: "maps-for-work-samples",
      description: "Forked from google/maps-for-work-samples",
      technologies: ["Shell"],
      githubUrl: "https://github.com/roozve/maps-for-work-samples"
    },
    {
      name: "armp2",
      description: "Public repository",
      technologies: ["C"],
      githubUrl: "https://github.com/roozve/armp2"
    },
    {
      name: "p2OutGraph",
      description: "Public repository",
      technologies: ["Python"],
      githubUrl: "https://github.com/roozve/p2OutGraph"
    },
    {
      name: "smartSupportSystem",
      description: "A ups hackathon project",
      technologies: ["JavaScript"],
      githubUrl: "https://github.com/roozve/smartSupportSystem"
    },
    {
      name: "MuscleMemoryV2",
      description: "Public repository",
      technologies: ["C++"],
      githubUrl: "https://github.com/roozve/MuscleMemoryV2"
    },
    {
      name: "flashMe",
      description: "Public repository",
      technologies: ["HTML"],
      githubUrl: "https://github.com/roozve/flashMe"
    },
    {
      name: "flashCard-Hackathon",
      description: "Hackathon Project",
      technologies: ["CSS"],
      githubUrl: "https://github.com/roozve/flashCard-Hackathon"
    },
    {
      name: "WebServiceDB",
      description: "DataBase with a WebService",
      technologies: ["C#"],
      githubUrl: "https://github.com/roozve/WebServiceDB"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center relative">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rusbeh Turki - Full Stack Developer & Problem Solver</h1>
          <p className="text-xl mb-6">Turning complex business challenges into innovative software solutions.</p>
          <p className="mb-8">Specializing in full-stack development using C#, ASP.NET, SQL, and modern web technologies. Passionate about transforming ideas into scalable solutions.</p>
          <div className="space-x-4">
            <Button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <ContactModal />
          </div>
        </div>
        <Button variant="ghost" className="absolute bottom-8 animate-bounce" onClick={scrollToNextSection}>
          <ChevronDown className="h-8 w-8" />
        </Button>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Frontend", skills: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap"] },
              { category: "Backend", skills: ["C#", "ASP.NET MVC", ".NET Core", "SQL Server", "SSIS"] },
              { category: "Dev Tools & Methodologies", skills: ["Git", "Scrum", "Agile"] },
              { category: "Languages", skills: ["Python", "Java", "Visual Basic", "C", "C++", "Shell"] }
            ].map((skillSet, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="hover:bg-gray-100 p-2 rounded transition-colors duration-200">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>UPS - Applications Developer (June 2018 - Present)</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  <li>Full-stack solutions using ASP.NET Core, WCF services, collaboration on business solutions.</li>
                  <li>SQL Server, SSIS package design, maintaining Redhat infrastructure.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>UPS - Intern Applications Developer (July 2017 - May 2018)</AccordionTrigger>
              <AccordionContent>
                <p>C#, SQL, front- and backend projects.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Dataform Software - Intern Developer (June 2017 - July 2018)</AccordionTrigger>
              <AccordionContent>
                <p>Xamarin, C# development for multi-platform applications.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" onClick={() => window.open('https://github.com/roozve?tab=repositories', '_blank')}>
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Western Governors University</h3>
                <p className="mb-2">Master of Business Administration - MBA, Information Technology</p>
                <p>Apr 2021 - Aug 2023</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Middlesex College</h3>
                <p className="mb-2">Associate's Degree, Computer & Information Systems</p>
                <p className="mb-2">2013 - 2016</p>
                <p>Associate in Applied Science (A.A.S.) Degree</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">New Jersey Institute of Technology</h3>
                <p className="mb-2">Degree in Engineering Technology (Graduated 2018)</p>
                <p>Relevant coursework: Python, Java, and Server Administration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;