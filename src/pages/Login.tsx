import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left panel - teal */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="relative z-10 text-center px-12">
          <BookOpen className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Welcome to TanveSkilora</h2>
          <p className="text-primary-foreground/80 text-lg max-w-md mx-auto">
            Start your learning journey with world-class instructors and thousands of courses.
          </p>
        </div>
        {/* Decorative circles */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary-foreground/5" />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-foreground/5" />
      </div>

      {/* Right panel - form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
             
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
  src="/logo_cropped.png"
  alt="Tanve Skilora"
  className="h-16 w-auto max-w-[260px] object-contain"
/>
</Link>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            {isLogin ? "Welcome back!" : "Create Account"}
          </h1>
          <p className="text-muted-foreground mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Tabs */}
          <div className="flex rounded-full bg-muted p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all ${
                isLogin ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all ${
                !isLogin ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Register
            </button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div>
                <Label htmlFor="fullname" className="text-foreground">Full Name</Label>
                <Input id="fullname" placeholder="Enter your full name" className="mt-1.5 rounded-lg border-input" />
              </div>
            )}
            <div>
              <Label htmlFor="username" className="text-foreground">User name</Label>
              <Input id="username" placeholder="Enter your User name" className="mt-1.5 rounded-lg border-input" />
            </div>
            {!isLogin && (
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-1.5 rounded-lg border-input" />
              </div>
            )}
            <div>
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="rounded-lg border-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">Remember me</label>
                </div>
                <a href="#" className="text-sm text-secondary hover:underline">Forgot Password?</a>
              </div>
            )}

            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg py-6 text-base">
              {isLogin ? "Login" : "Register"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-secondary font-medium hover:underline">
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
