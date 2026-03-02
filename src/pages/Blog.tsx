import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

// ✅ add your banner image here
import headerBg from "@/assets/banner-blog.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const posts = [
  {
    img: blog1,
    title: "10 Tips for Effective Online Learning",
    author: "Sarah Johnson",
    date: "Feb 10, 2026",
    excerpt:
      "Discover the best strategies to make the most of your online learning experience and stay motivated.",
  },
  {
    img: blog2,
    title: "The Future of E-Learning in 2026",
    author: "Mike Chen",
    date: "Feb 8, 2026",
    excerpt:
      "Explore the latest trends and technologies shaping the future of online education worldwide.",
  },
  {
    img: blog3,
    title: "How to Build a Study Routine That Works",
    author: "Emma Davis",
    date: "Feb 5, 2026",
    excerpt:
      "Learn how to create a productive study schedule that fits your lifestyle and helps you achieve your goals.",
  },
  {
    img: blog1,
    title: "Top Skills Employers Want in 2026",
    author: "Alex Turner",
    date: "Feb 1, 2026",
    excerpt:
      "Stay ahead of the curve by learning the most in-demand skills that employers are looking for this year.",
  },
  {
    img: blog2,
    title: "Collaborative Learning: Why It Matters",
    author: "Sarah Johnson",
    date: "Jan 28, 2026",
    excerpt:
      "Understand the benefits of collaborative learning and how to leverage it in an online environment.",
  },
  {
    img: blog3,
    title: "From Student to Professional: A Guide",
    author: "Mike Chen",
    date: "Jan 25, 2026",
    excerpt:
      "A comprehensive guide on transitioning from an online student to a working professional.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ✅ Hero Banner with Background Image */}
      <section
        className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Blog
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-200 max-w-lg mx-auto text-lg"
          >
            Insights, tips, and stories from our community of learners and educators
          </motion.p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {posts.map((post, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                custom={i}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    to="#"
                    className="text-sm font-medium text-secondary hover:underline inline-flex items-center gap-1"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;