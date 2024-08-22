import { PricesPlansData } from "./PricesPlans.types";

export const dataPricePlans: PricesPlansData = [
  {
    id: 1,
    name: "Started",
    description:
      "Perfecto para quienes recién comienzan. Obtén acceso a herramientas esenciales para dar tus primeros pasos.",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "50$",
      },
      {
        id: 2,
        name: "/anual",
        price: "550$",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "Soporte 24/7",
        active: false,
      },
      {
        id: 4,
        name: "Interfaz amigable",
        active: false,
      },
      {
        id: 5,
        name: "Actualizaciones automáticas",
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Advance",
    description:
      "Ideal para usuarios con experiencia. Disfruta de funcionalidades avanzadas que te ayudarán a crecer y optimizar tu rendimiento.",
    primary: true,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "80$",
      },
      {
        id: 2,
        name: "/anual",
        price: "880$",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "Soporte 24/7",
        active: true,
      },
      {
        id: 4,
        name: "Interfaz amigable",
        active: false,
      },
      {
        id: 5,
        name: "Actualizaciones automáticas",
        active: false,
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    description:
      "Nuestro plan más completo. Accede a todas las características exclusivas y soporte prioritario para maximizar tu potencial",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "100$",
      },
      {
        id: 2,
        name: "/anual",
        price: "1.100$",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "Soporte 24/7",
        active: true,
      },
      {
        id: 4,
        name: "Interfaz amigable",
        active: true,
      },
      {
        id: 5,
        name: "Actualizaciones automáticas",
        active: true,
      },
    ],
  },
];
