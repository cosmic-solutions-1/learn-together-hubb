import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Globe, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

import aboutTeam from "@/assets/about-team.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutValues from "@/assets/about-values.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

// ✅ Header background image
import headerBg from "@/assets/banner-contact.jpg";

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

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We constantly evolve our platform with cutting-edge technology to deliver the best learning experience.",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "Our team is driven by a deep passion for education and making knowledge accessible to everyone.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "We believe quality education should be available to anyone, anywhere in the world.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We foster a supportive community where learners and educators grow together.",
  },
];

const team = [
  { img: instructor1, name: "Sarah Johnson", role: "CEO & Founder" },
  { img: instructor2, name: "Mike Chen", role: "CTO" },
  { img: testimonial1, name: "Emma Davis", role: "Head of Content" },
  { img: testimonial2, name: "Alex Turner", role: "Lead Instructor" },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

    {/* ✅ Hero Section Full Screen Background */}
<section
  className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: `url(${headerBg})` }}
>
  {/* overlay */}
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
      About TanveSkilora
    </motion.h1>

    <motion.p
      variants={fadeUp}
      className="text-gray-200 max-w-lg mx-auto text-lg"
    >
      Empowering millions of learners worldwide with quality education since 2020
    </motion.p>
  </motion.div>
</section>
      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <img
                src={aboutMission}
                alt="Our Mission"
                className="w-full h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase">
                  Our Mission
                </span>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4">
                Making Education Accessible for Everyone
              </h2>

              <p className="text-muted-foreground mb-4">
                At TanveSkilora, we believe that everyone deserves access to
                world-class education. Our mission is to bridge the gap between
                traditional learning and modern technology.
              </p>

              <p className="text-muted-foreground">
                Founded in 2020, we've grown into a global platform serving
                50,000+ students across 120+ countries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground mb-3"
            >
              Our Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={scaleIn}
                custom={i}
                className="bg-card rounded-xl p-6 text-center shadow-card"
              >
                <v.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Image */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Celebrating Student Success
          </motion.h2>

          <img
            src={aboutValues}
            alt="Student success"
            className="rounded-2xl mx-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;