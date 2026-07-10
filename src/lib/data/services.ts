import {
  ShoppingCart,
  Smartphone,
  Briefcase,
  Globe,
  Code2,
  Palette,
} from "lucide-react";

export const services = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Custom online stores with secure payments, inventory management, and seamless shopping experiences that drive sales.",
    features: [
      "Shopify & WooCommerce",
      "Payment Gateway Integration",
      "Product Management",
      "Order Tracking System",
    ],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android that engage users and grow your business on the go.",
    features: [
      "iOS & Android Development",
      "React Native & Flutter",
      "App Store Deployment",
      "Push Notifications",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Services",
    description:
      "Tailored software solutions including CRM, ERP, dashboards, and automation tools to streamline your operations.",
    features: [
      "Custom CRM & ERP",
      "Business Automation",
      "Data Analytics Dashboards",
      "API Integrations",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies for maximum performance and user experience.",
    features: [
      "Next.js & React",
      "SEO Optimization",
      "Performance Tuning",
      "CMS Integration",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom Software",
    description:
      "End-to-end software development from concept to deployment, built exactly to your business requirements.",
    features: [
      "Full-Stack Development",
      "Cloud Solutions",
      "Microservices Architecture",
      "DevOps & CI/CD",
    ],
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user research and modern design principles for delightful experiences.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Brand Identity",
    ],
    color: "from-indigo-500 to-violet-600",
  },
];
