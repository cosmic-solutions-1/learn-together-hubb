import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Star, Clock, Users, PlayCircle, Award, CheckCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const courseData: Record<string, {
  image: string; title: string; instructor: string; instructorImg: string; rating: number; students: number; duration: string; price: string; description: string; lessons: string[];
}> = {
  "web-development-bootcamp": {
    image: course1, title: "Web Development Bootcamp", instructor: "Sarah Johnson", instructorImg: instructor1,
    rating: 4.8, students: 12500, duration: "40h", price: "$49.99",
    description: "Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp designed for beginners and intermediate developers.",
    lessons: ["HTML5 & CSS3 Fundamentals", "JavaScript ES6+ Deep Dive", "React Components & Hooks", "Node.js & Express Backend", "MongoDB & Database Design", "Authentication & Security", "Deployment & DevOps Basics", "Capstone Project"],
  },
  "digital-marketing-mastery": {
    image: course2, title: "Digital Marketing Mastery", instructor: "Mike Chen", instructorImg: instructor2,
    rating: 4.7, students: 8300, duration: "25h", price: "$39.99",
    description: "Learn the latest digital marketing strategies including SEO, social media marketing, email campaigns, Google Ads, and analytics to grow any business online.",
    lessons: ["SEO Fundamentals", "Social Media Strategy", "Google Ads Mastery", "Email Marketing Automation", "Content Marketing", "Analytics & Reporting", "Conversion Optimization", "Marketing Campaign Project"],
  },
  "ui-ux-design-fundamentals": {
    image: course3, title: "UI/UX Design Fundamentals", instructor: "Emma Davis", instructorImg: instructor1,
    rating: 4.9, students: 9800, duration: "30h", price: "$44.99",
    description: "Learn user-centered design principles, wireframing, prototyping, and modern UI design using Figma. Create stunning interfaces that users love.",
    lessons: ["Design Thinking Process", "User Research Methods", "Wireframing Techniques", "Figma Masterclass", "Color Theory & Typography", "Responsive Design", "Usability Testing", "Portfolio Project"],
  },
  "data-science-ml": {
    image: course4, title: "Data Science & ML", instructor: "Alex Turner", instructorImg: instructor2,
    rating: 4.6, students: 6700, duration: "50h", price: "$59.99",
    description: "Dive into data science and machine learning with Python. Learn pandas, scikit-learn, TensorFlow, and build real-world predictive models.",
    lessons: ["Python for Data Science", "Pandas & NumPy", "Data Visualization", "Statistical Analysis", "Machine Learning Basics", "Deep Learning with TensorFlow", "Natural Language Processing", "Final ML Project"],
  },
};

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courseData[slug || ""];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/courses"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden" animate="visible" variants={fadeLeft}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{course.title}</h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 text-star fill-star" /> {course.rating}</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.students.toLocaleString()} students</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="flex items-center gap-1"><PlayCircle className="h-4 w-4" /> {course.lessons.length} lessons</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <img src={course.instructorImg} alt={course.instructor} className="w-10 h-10 rounded-full object-cover hover:scale-110 transition-transform duration-300 ring-2 ring-transparent hover:ring-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{course.instructor}</p>
                  <p className="text-xs text-muted-foreground">Lead Instructor</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">{course.price}</span>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base">
                  Enroll Now
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-card-hover group/img hover:-translate-y-2 transition-all duration-500"
              initial="hidden" animate="visible" variants={fadeRight}
            >
              <img src={course.image} alt={course.title} className="w-full h-80 object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.h2
                className="text-2xl font-bold text-foreground mb-6"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Course Curriculum
              </motion.h2>
              <motion.div
                className="space-y-3"
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {course.lessons.map((lesson, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    <span className="text-card-foreground font-medium">{lesson}</span>
                    <PlayCircle className="h-4 w-4 text-muted-foreground ml-auto" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
              <div className="bg-muted rounded-xl p-6 space-y-4">
                {["Industry-ready skills", "Hands-on projects", "Certificate of completion", "Lifetime access", "Community support", "Downloadable resources"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-primary rounded-xl p-6 text-center">
                <Award className="h-10 w-10 text-primary-foreground mx-auto mb-3" />
                <h3 className="font-bold text-primary-foreground mb-2">Get Certified</h3>
                <p className="text-sm text-primary-foreground/80">Earn a recognized certificate upon course completion</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
