import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, Linkedin, Mail } from "lucide-react"

const ContactModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-200">
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="flex justify-center space-x-4 mt-4">
          <Button variant="outline" size="icon" onClick={() => window.open('https://linkedin.com/in/rusbeh', '_blank')}>
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => window.open('https://github.com/rusbeh', '_blank')}>
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => window.location.href = 'mailto:rusbeh@example.com'}>
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;