import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroCommunity from "@/assets/hero-community.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Co-Founder & Developer",
    initials: "TM",
    image: "",
    blurb:
      "I'm passionate about building software that brings people together. When I'm not coding, you'll find me at local meetups and community events — because the best ideas come from real connections.",
  },
  {
    name: "Team Member 2",
    role: "Co-Founder & Designer",
    initials: "TM",
    image: "",
    blurb:
      "I believe great design can break down barriers and make communities more accessible. I love creating spaces — digital and physical — where people feel welcome and inspired.",
  },
  {
    name: "Team Member 3",
    role: "Co-Founder & Strategist",
    initials: "TM",
    image: "",
    blurb:
      "Community has always been at the heart of everything I do. I built C.M.D. because I saw how technology could amplify the human desire to connect, share, and grow together.",
  },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-secondary-foreground/10">
    <div className="container flex items-center justify-between h-16">
      <Link to="/" className="text-xl font-display font-bold text-secondary-foreground tracking-wide">
        C.M.D.
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm text-secondary-foreground/70">
        <Link to="/" className="hover:text-secondary-foreground transition-colors">Home</Link>
        <Link to="/about" className="text-secondary-foreground transition-colors">About</Link>
        <a href="#" className="hover:text-secondary-foreground transition-colors">Events</a>
        <a href="#" className="hover:text-secondary-foreground transition-colors">Community</a>
      </div>
      <Button size="sm" className="rounded-full">Sign Up</Button>
    </div>
  </nav>
);

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero / Mission */}
      <section className="relative pt-32 pb-20 text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCommunity} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              <Heart className="h-4 w-4" /> Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
              Built by community,<br />
              <span className="text-primary">for community.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              We created C.M.D. because we believe the best things in life happen when people come together.
              Whether it's a morning hike with strangers who become friends, a neighborhood potluck, or a
              spontaneous coffee run — community is what makes a place feel like home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 text-center">
              Why <span className="text-primary">C.M.D.</span>?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We noticed something: in a world more digitally connected than ever, people were feeling
                more isolated. Social media gave us followers, but not friends. Notifications, but not
                neighbors.
              </p>
              <p>
                So we built C.M.D. — a platform designed to get people off their screens and into their
                communities. We wanted to make it effortless to discover what's happening nearby, to join
                a pickup game, attend a local workshop, or simply find someone to grab coffee with.
              </p>
              <p>
                This isn't just an app to us. It's a reflection of what we value most: genuine human
                connection, shared experiences, and the magic that happens when people show up for each
                other.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Three friends who love software, love people, and decided to combine the two.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group p-8 rounded-2xl bg-background border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : null}
                  <AvatarFallback className="text-2xl font-display font-bold bg-primary/10 text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <span className="text-sm font-medium text-primary mb-4 block">{member.role}</span>
                <p className="text-muted-foreground leading-relaxed">{member.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to join us?
            </h2>
            <p className="text-lg text-secondary-foreground/70 max-w-xl mx-auto mb-8">
              We're building this for you — and we'd love for you to be part of it.
            </p>
            <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-[var(--shadow-soft)]">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary border-t border-secondary-foreground/10">
        <div className="container text-center">
          <span className="text-lg font-display font-bold text-secondary-foreground/60">C.M.D.</span>
          <p className="text-sm text-secondary-foreground/40 mt-2">Connect. Meet. Discover. © 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
