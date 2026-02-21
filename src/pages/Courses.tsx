import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const allCourses = [
  { image: course1, title: "Web Development Bootcamp", instructor: "Sarah Johnson", rating: 4.8, students: 12500, duration: "40h", price: "$49.99" },
  { image: course2, title: "Digital Marketing Mastery", instructor: "Mike Chen", rating: 4.7, students: 8300, duration: "25h", price: "$39.99" },
  { image: course3, title: "UI/UX Design Fundamentals", instructor: "Emma Davis", rating: 4.9, students: 9800, duration: "30h", price: "$44.99" },
  { image: course4, title: "Data Science & ML", instructor: "Alex Turner", rating: 4.6, students: 6700, duration: "50h", price: "$59.99" },
  { image: course1, title: "Advanced React Patterns", instructor: "Sarah Johnson", rating: 4.8, students: 5200, duration: "20h", price: "$34.99" },
  { image: course2, title: "SEO & Content Strategy", instructor: "Mike Chen", rating: 4.5, students: 4100, duration: "15h", price: "$29.99" },
  { image: course3, title: "Mobile App Design", instructor: "Emma Davis", rating: 4.7, students: 7200, duration: "35h", price: "$42.99" },
  { image: course4, title: "Python for Beginners", instructor: "Alex Turner", rating: 4.8, students: 15000, duration: "28h", price: "$34.99" },
];

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-accent py-16">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-foreground mb-4">All Courses</motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-8 max-w-lg mx-auto">Browse our full catalog and find the perfect course for you</motion.p>
          <motion.div variants={fadeUp} className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-10 rounded-full bg-card border-border" />
          </motion.div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {allCourses.map((course, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
