import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Award, Users, PlayCircle, ArrowRight, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import libraryBg from "@/assets/library-bg.mp4";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const courses = [
  { image: course1, title: "Web Development Bootcamp", instructor: "Sarah Johnson", rating: 4.8, students: 12500, duration: "40h", price: "$49.99" },
  { image: course2, title: "Digital Marketing Mastery", instructor: "Mike Chen", rating: 4.7, students: 8300, duration: "25h", price: "$39.99" },
  { image: course3, title: "UI/UX Design Fundamentals", instructor: "Emma Davis", rating: 4.9, students: 9800, duration: "30h", price: "$44.99" },
  { image: course4, title: "Data Science & ML", instructor: "Alex Turner", rating: 4.6, students: 6700, duration: "50h", price: "$59.99" },
];

const stats = [
  { icon: BookOpen, value: "500+", label: "Courses" },
  { icon: Users, value: "50K+", label: "Students" },
  { icon: Award, value: "200+", label: "Instructors" },
  { icon: PlayCircle, value: "10K+", label: "Video Hours" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={libraryBg} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/60" />
        {/* Decorative blurs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <motion.div
              className="flex-1 space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeUp}
                className="inline-block bg-background/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full border border-white/20 tracking-wide uppercase"
              >
                🎓 #1 Online Learning Platform
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Learn Without{" "}
                <span className="text-secondary relative inline-block">
                  Limits
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/80 max-w-lg leading-relaxed">
                Start, switch, or advance your career with <span className="text-white font-medium">thousands of courses</span> from expert instructors.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  <Link to="/courses">Explore Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base border-white/40 text-white hover:bg-white hover:text-foreground hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm">
                  <Link to="/login">Join for Free</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-white/20 group/hero">
                <img src={heroImage} alt="Students learning together on TanveSkilora platform" className="w-full h-[300px] lg:h-[400px] object-cover group-hover/hero:scale-110 transition-transform duration-700 ease-out" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                custom={i}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Featured Courses
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">
              Explore our most popular courses handpicked by our team
            </motion.p>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {courses.map((course, i) => (
              <motion.div key={course.title} variants={fadeUp} custom={i}>
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all duration-300">
              <Link to="/courses">View All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Expert Instructors</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">Learn from industry leaders and certified professionals</motion.p>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { img: instructor1, name: "Sarah Johnson", role: "Web Development", students: "12K+" },
              { img: instructor2, name: "Mike Chen", role: "Digital Marketing", students: "8K+" },
              { img: testimonial1, name: "Emma Davis", role: "UI/UX Design", students: "10K+" },
              { img: testimonial2, name: "Alex Turner", role: "Data Science", students: "7K+" },
            ].map((inst, i) => (
              <motion.div
                key={inst.name}
                variants={scaleIn}
                custom={i}
                className="text-center group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-accent group-hover:ring-primary transition-all duration-300 group-hover:shadow-lg">
                  <img src={inst.img} alt={inst.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-foreground">{inst.name}</h3>
                <p className="text-sm text-muted-foreground">{inst.role}</p>
                <p className="text-xs text-primary mt-1 font-medium">{inst.students} Students</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground mb-3">What Our Students Say</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">Real stories from real learners around the world</motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { img: testimonial1, name: "Priya Sharma", text: "TanveSkilora completely transformed my career. The courses are practical, well-structured, and the instructors are amazing!", rating: 5 },
              { img: testimonial2, name: "James Wilson", text: "I went from zero coding knowledge to landing my first developer job in 6 months. Best investment I ever made.", rating: 5 },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-star fill-star" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" />
                  <span className="font-medium text-foreground">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,hsl(var(--secondary)/0.2),transparent_60%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_60%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Learning?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-primary-foreground/80 mb-8 max-w-md mx-auto text-lg">
            Join thousands of students and start your learning journey today.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <Link to="/login">Get Started for Free <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
