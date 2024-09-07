import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description || "No description available"}</p>
        <div className="mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-2">
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
          View on GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;