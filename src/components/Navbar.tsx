import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      
      {/* NAV CONTAINER */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
  src="/logo_cropped.png"
  alt="Tanve Skilora"
  className="h-9 w-auto max-w-[250px] object-contain"
/>
</Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/courses" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Courses</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Blog</Link>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>

          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 tells" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/courses" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Courses</Link>
          <Link to="/about" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/blog" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link to="/pricing" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link to="/contact" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Contact</Link>
<Button
  asChild
className="bg-[#4FAFA6] hover:bg-[#3e978f] text-white">
  <Link to="/login">Get Started</Link>
</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;