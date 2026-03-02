import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import contactOffice from "@/assets/contact-office.jpg";

// ✅ add your banner image here
import headerBg from "@/assets/banner-courses.jpg";


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
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@TanveSkilora.com" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Visit Us", value: "123 Learning Ave, San Francisco, CA" },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri, 9AM – 6PM PST" },
];

const Contact = () => {
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
            Contact Us
          </motion.h1>

          <motion.p
            variants={fadeUp}
                      

            className="text-gray-200 max-w-lg mx-auto text-lg"
          >
          We'd love to hear from you. Reach out and we'll get back to you within 24 hours           </motion.p>
        </motion.div>
      </section>

    

      {/* Contact section */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              className="bg-card rounded-xl p-8 shadow-card"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeLeft}
            >
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Send a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                    <Input placeholder="John" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                    <Input placeholder="Doe" className="rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <Input placeholder="How can we help?" className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea placeholder="Tell us more..." className="rounded-lg min-h-[120px]" />
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full py-6">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Info + Image */}
            <motion.div
              className="space-y-8"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
            >
              <div className="rounded-2xl overflow-hidden shadow-card-hover group/img hover:-translate-y-2 transition-all duration-500">
                <img src={contactOffice} alt="Our Office" className="w-full h-56 object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={stagger}
              >
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={c.label}
                    variants={scaleIn}
                    custom={i}
                    className="bg-muted rounded-xl p-5 flex items-start gap-4 hover:shadow-card-hover transition-all duration-300"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
