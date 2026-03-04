import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend auth
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-secondary border-b border-secondary-foreground/10">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-display font-bold text-secondary-foreground tracking-wide">
            C.M.<span className="text-primary">D.</span>
          </Link>
          <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
            Home
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left panel — branding */}
        <div className="md:w-1/2 bg-secondary text-secondary-foreground flex flex-col justify-center px-8 md:px-16 py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-2">
              C.M.<span className="text-primary">D.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-8">
              Your community<br />starts here.
            </h2>
            <ul className="space-y-3 text-secondary-foreground/60 text-sm">
              <li>• Discover activities near you</li>
              <li>• Create events with RSVP</li>
              <li>• Connect with your community</li>
              <li>• Filter by interests & distance</li>
            </ul>
          </motion.div>

          {/* Footer in left panel */}
          <div className="mt-auto pt-16 border-t border-secondary-foreground/10">
            <span className="text-lg font-display font-bold text-secondary-foreground/40">C.M.D.</span>
            <p className="text-xs text-secondary-foreground/30 mt-1">Connect. Meet. Discover. © 2026</p>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="md:w-1/2 bg-background flex items-center justify-center px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md"
          >
            {/* Tab toggle */}
            <div className="flex rounded-lg border border-border overflow-hidden mb-8">
              <button
                onClick={() => setMode("signin")}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  mode === "signin"
                    ? "bg-card text-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  mode === "signup"
                    ? "bg-card text-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 rounded-lg"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-lg"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 rounded-lg text-base">
                {mode === "signin" ? "Sign In" : "Sign Up"}
              </Button>
            </form>

            <div className="text-center mt-6 space-y-2">
              {mode === "signin" ? (
                <>
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button onClick={() => setMode("signup")} className="text-primary font-medium hover:underline">
                      Sign up
                    </button>
                  </p>
                  <button className="text-sm text-primary font-medium hover:underline">
                    Forgot password?
                  </button>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button onClick={() => setMode("signin")} className="text-primary font-medium hover:underline">
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
