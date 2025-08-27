import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AgencyLandingPage() {
  const tiers = [
    {
      name: "Lite",
      price: "€18.99/mo",
      description: "Perfect for a single landing page at the price of hosting.",
      features: [
        "1-page landing",
        "Free template",
        "Hosting included",
        "No revisions",
        "Email support"
      ]
    },
    {
      name: "Starter",
      price: "€29/mo",
      description: "One-page landing with premium template and support.",
      features: [
        "1-page landing",
        "Premium template",
        "Hosting included",
        "1 revision/month",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "€49/mo",
      description: "Up to 3 pages with forms and priority support.",
      features: [
        "Up to 3 pages",
        "Premium templates",
        "Contact form integration",
        "2 revisions/month",
        "Priority email/chat support"
      ]
    },
    {
      name: "Business",
      price: "€79/mo",
      description: "Full-featured mini-website with analytics and multiple pages.",
      features: [
        "5+ pages",
        "Premium template customization",
        "Forms, newsletter, analytics",
        "4 revisions/month",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-white shadow-sm">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Landing Pages for Local Businesses
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Fast, professional, GDPR-compliant landing pages built with templates, hosted on GitHub Pages. Your domain, our expertise.
        </p>
        <Button className="px-6 py-3 text-lg">Get Started</Button>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-500 mb-4">{tier.description}</p>
                  <p className="text-3xl font-extrabold mb-6">{tier.price}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto w-full">Choose {tier.name}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} Nordic Landing Pages. Built with ❤️ in Åland Islands.
      </footer>
    </div>
  );
}
