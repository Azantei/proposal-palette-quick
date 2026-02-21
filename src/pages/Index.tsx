import { motion } from "framer-motion";
import heroImage from "@/assets/hero-community.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Community gathering in a park" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
    </div>
    <div className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
          Your neighborhood, reimagined
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary-foreground leading-tight mb-6">
          Connect.<br />Meet.<br />
          <span className="text-primary">Discover.</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-lg leading-relaxed">
          Create, discover, and join local activities and events. From spontaneous hangouts to organized gatherings — your community awaits.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-[var(--shadow-soft)]">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
            Explore Events
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const features = [
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Find activities and events happening in your neighborhood with distance-based filtering and map integration.",
  },
  {
    icon: Users,
    title: "Dual-Mode Content",
    description: "Create casual activity posts for spontaneous hangouts or structured events with RSVP — all in one platform.",
  },
  {
    icon: Sparkles,
    title: "Interest Matching",
    description: "Get personalized recommendations based on your selected tags, categories, and interests.",
  },
  {
    icon: Calendar,
    title: "RSVP & Attend",
    description: "Express interest, gauge attendance, and stay organized with built-in event management tools.",
  },
];

const Features = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Everything you need to <span className="text-primary">connect</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          C.M.D. bridges casual, spontaneous community activities with organized events — fostering genuine engagement.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { num: "01", title: "Sign Up", desc: "Create your profile and set your location and interests." },
  { num: "02", title: "Discover", desc: "Browse local activities or search by category and distance." },
  { num: "03", title: "Connect", desc: "RSVP, join events, and meet people in your community." },
];

const HowItWorks = () => (
  <section className="py-24 bg-card">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          How it <span className="text-primary">works</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <span className="text-6xl font-display font-bold text-primary/20">{step.num}</span>
            <h3 className="text-2xl font-display font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 bg-secondary text-secondary-foreground">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Ready to discover your community?
        </h2>
        <p className="text-lg text-secondary-foreground/70 max-w-xl mx-auto mb-8">
          Join C.M.D. and start connecting with people, activities, and events near you.
        </p>
        <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-[var(--shadow-soft)]">
          Join C.M.D. Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-secondary-foreground/10">
    <div className="container flex items-center justify-between h-16">
      <span className="text-xl font-display font-bold text-secondary-foreground tracking-wide">C.M.D.</span>
      <div className="hidden md:flex items-center gap-8 text-sm text-secondary-foreground/70">
        <a href="#" className="hover:text-secondary-foreground transition-colors">About</a>
        <a href="#" className="hover:text-secondary-foreground transition-colors">Events</a>
        <a href="#" className="hover:text-secondary-foreground transition-colors">Community</a>
      </div>
      <Button size="sm" className="rounded-full">Sign Up</Button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-12 bg-secondary border-t border-secondary-foreground/10">
    <div className="container text-center">
      <span className="text-lg font-display font-bold text-secondary-foreground/60">C.M.D.</span>
      <p className="text-sm text-secondary-foreground/40 mt-2">Connect. Meet. Discover. © 2026</p>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
