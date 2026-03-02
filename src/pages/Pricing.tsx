import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion"; // ✅ added

// ✅ banner image
import headerBg from "@/assets/price.webp";

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

const plans = [
  {
    icon: Star,
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with online learning",
    features: [
      "Access to 10 free courses",
      "Community forums",
      "Basic certificates",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    icon: Zap,
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Ideal for serious learners who want unlimited access",
    features: [
      "Access to all 500+ courses",
      "Priority support",
      "Verified certificates",
      "Offline downloads",
      "Progress tracking",
      "1-on-1 mentorship sessions",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    icon: Crown,
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description:
      "Best for teams and organizations scaling their training",
    features: [
      "Everything in Pro",
      "Team analytics dashboard",
      "Custom learning paths",
      "API access",
      "Dedicated account manager",
      "White-label options",
      "Bulk enrollment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ✅ Hero Banner */}
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
            Simple, Transparent Pricing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-200 max-w-lg mx-auto text-lg"
          >
            Choose the plan that fits your learning goals. No hidden fees,
            cancel anytime.
          </motion.p>
        </motion.div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all flex flex-col ${
                  plan.popular ? "ring-2 ring-secondary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground">
                  {plan.name}
                </h3>

                <div className="mt-2 mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full py-6 ${
                    plan.popular
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  <Link to="/login">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes! You can cancel your subscription anytime. You'll keep access until the billing period ends.",
              },
              {
                q: "Is there a free trial for Pro?",
                a: "Yes, we offer a 7-day free trial for the Pro plan.",
              },
              {
                q: "Do you offer student discounts?",
                a: "Yes, we offer 50% discount for verified students.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, PayPal, and bank transfers for Enterprise plans.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold text-card-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;