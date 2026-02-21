import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Globe, Lightbulb, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutValues from "@/assets/about-values.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We constantly evolve our platform with cutting-edge technology to deliver the best learning experience." },
  { icon: Heart, title: "Passion", desc: "Our team is driven by a deep passion for education and making knowledge accessible to everyone." },
  { icon: Globe, title: "Accessibility", desc: "We believe quality education should be available to anyone, anywhere in the world." },
  { icon: Users, title: "Community", desc: "We foster a supportive community where learners and educators grow together." },
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

      {/* Hero */}
      <section className="bg-accent py-16">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-foreground mb-4">About TanveSkilora</motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">Empowering millions of learners worldwide with quality education since 2020</motion.p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-card-hover group/img hover:-translate-y-2 transition-all duration-500"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeLeft}
            >
              <img src={aboutMission} alt="Our Mission" className="w-full h-80 object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out" />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Making Education Accessible for Everyone</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At TanveSkilora, we believe that everyone deserves access to world-class education. Our mission is to bridge the gap between traditional learning and modern technology, creating an inclusive platform where knowledge knows no boundaries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2020, we've grown from a small startup to a global platform serving over 50,000 students across 120+ countries, with 500+ expert-led courses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { value: "50K+", label: "Active Students" },
              { value: "500+", label: "Courses" },
              { value: "120+", label: "Countries" },
              { value: "95%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <motion.div key={s.label} variants={scaleIn} custom={i}>
                <p className="text-3xl font-bold text-primary-foreground">{s.value}</p>
                <p className="text-sm text-primary-foreground/70">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-3">Our Core Values</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">The principles that guide everything we do</motion.p>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={scaleIn}
                custom={i}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all text-center"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeLeft}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our diverse team of educators, technologists, and creatives are united by a shared passion for transforming education.
              </p>
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={stagger}
              >
                {team.map((t, i) => (
                  <motion.div
                    key={t.name}
                    className="text-center group cursor-pointer"
                    variants={scaleIn}
                    custom={i}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-accent group-hover:ring-primary transition-all duration-300">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-card-hover group/img hover:-translate-y-2 transition-all duration-500"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
            >
              <img src={aboutTeam} alt="Our Team" className="w-full h-96 object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Image */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-4">Celebrating Student Success</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto mb-10">Every graduation is a testament to hard work, dedication, and the power of accessible education.</motion.p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-card-hover max-w-3xl mx-auto group/img hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={aboutValues} alt="Student success" className="w-full h-auto object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
