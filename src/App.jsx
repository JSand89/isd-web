import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Droplets,
  Factory,
  Globe2,
  Gauge,
  Languages,
  Mail,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Waves,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import IoncoreAgroPage from "./IoncoreAgroPage";
import heroVideo from "./assets/Video_Hero.mp4";

const copy = {
  en: {
    navBrand: "AquaVyn™",
    navBy: "by ISD+i²",
    navStory: "Technology Story",
    navImpact: "Impact",
    navTech: "Technical Section",
    navContact: "Contact",
    languageLabel: "ES",
    heroEyebrow: "Advanced water treatment for industrial transformation",
    heroTitle: "Turning complex waste streams into water, energy, and future value.",
    heroBody:
      "AquaVyn™ by ISD+i² is a modular deeptech platform designed to transform industrial water challenges into strategic infrastructure opportunities.",
    heroPrimary: "Contact ISD+i²",
    heroSecondary: "Explore the system",
    heroCaption:
      "ISD:Integrated Solutions to Complex problems",
    systemLabel: "System walkthrough",
    problemTitle: "The challenge is no longer only treatment.",
    problemBody:
      "Industries face growing pressure to reduce discharge risk, recover water, control energy costs, and align with ESG and regulatory demands. Traditional systems often solve one variable while worsening another.",
    problemPoints: [
      "High-complexity industrial wastewater",
      "Rising compliance and operating pressure",
      "Conventional processes with heavy reject streams",
    ],
    story1Label: "01 · Entry",
    story1Title: "Contaminated water enters the system.",
    story1Body:
      "The journey begins with industrial water streams carrying biological load, hydrocarbons, and complex contaminants. AquaVyn™ transforms this challenge as a transformation opportunity.",
    story2Label: "02 · Activation",
    story2Title: "Inside the reactor, the system comes alive.",
    story2Body:
      "As water moves through the system, it passes through a staged process that prepares the stream, activates treatment conditions, and supports progressive contaminant reduction. Visual cues such as light pulses, flow direction, and internal motion help communicate the logic of a complex treatment platform.",
    story3Label: "03 · Conversion",
    story3Title: "A treatment process designed as a value engine.",
    story3Body:
      "AquaVyn™ is not presented as a single-purpose piece of equipment, but as a modular platform designed to recover water, unlock value opportunities connected to energy and to nanotechnology applied to agricultural inputs, and scale its deployment across industrial environments.",
    story4Label: "04 · Output",
    story4Title: "Cleaner output. Stronger industrial logic.",
    story4Body:
      "The final stage focuses on outcomes: treated water, operational efficiency, modular deployment, and the strategic potential to convert environmental pain points into productive assets.",
    metricsTitle: "Selected technical highlights",
    metricsBody:
      "These technical highlights help translate AquaVyn™’s value proposition into concrete signals of capability, scalability, and technological development for partners and investors.",
    metrics: [
      { value: "ΔT up to 60°C", label: "Thermal uplift potential" },
      {
        value: "Up to 200 m³/day",
        label: "Current operational-scale reference",
      },
      { value: ">90%", label: "Water recovery narrative" },
      { value: "TRL 7–8", label: "Technology readiness positioning" },
      { value: "4 granted", label: "Patents granted" },
      { value: "+6 in review", label: "Additional patents under examination" },
    ],
    techTitle: "Technical section",
    techBody:
      "AquaVyn™ is presented as a modular treatment platform with a visual sequence that explains the process without overwhelming the user.",
    techCards: [
      {
        title: "Pre-conditioning",
        body: "A clean introduction to inflow management, pressure balance, and system preparation.",
      },
      {
        title: "Hydrolyzer stage",
        body: "The first transformation stage is framed as molecular preparation before advanced treatment.",
      },
      {
        title: "Energy / plasma visualization",
        body: "A premium visual layer uses light pulses and bubbles to explain invisible process intensity.",
      },
      {
        title: "Final polishing and output",
        body: "The output stage communicates cleaner water, scalable deployment, and system logic for investors.",
      },
    ],
    marketTitle: "Why this matters now",
    marketBody:
      "The investor case combines industrial need, sustainability pressure, and scalable infrastructure logic. AquaVyn™ is positioned where treatment, energy, and operational resilience intersect.",
    marketPoints: [
      "Industrial water stress and stricter regulation",
      "Demand for compact and modular treatment platforms",
      "Growing value in reuse, recovery, and sustainability performance",
    ],
    proofTitle: "Proof and traction placeholders",
    proofBody:
      "This section is intentionally built with placeholders so future proof points can be swapped in without changing the full design system.",
    proofCards: [
      "Case study placeholder",
      "Industrial partner placeholder",
      "Pilot site placeholder",
    ],
    ctaTitle: "Ready for the investor version of the conversation?",
    ctaBody:
      "The current landing is designed as a cinematic front door. Next layers can include real case studies, diagrams, technical validation, and investor materials.",
    ctaButton: "Email ISD+i²",
    footer: "AquaVyn™ by ISD+i² · Investor concept landing",
  },
  es: {
    navBrand: "AquaVyn™",
    navBy: "por ISD+i²",
    navStory: "Recorrido tecnológico",
    navImpact: "Impacto",
    navTech: "Sección técnica",
    navContact: "Contacto",
    languageLabel: "EN",
    heroEyebrow: "Tratamiento avanzado de agua para transformación industrial",
    heroTitle:
      "Convirtiendo corrientes complejas de residuos en agua, energía y valor futuro.",
    heroBody:
      "AquaVyn™ de ISD+i² es una plataforma deeptech modular diseñada para transformar desafíos industriales del agua en oportunidades estratégicas de infraestructura.",
    heroPrimary: "Contactar a ISD+i²",
    heroSecondary: "Explorar el sistema",
    heroCaption:
      "ISD: Soluciones Integradas a Problemas Complejos.",
    systemLabel: "Recorrido del sistema",
    problemTitle: "El reto ya no es solo tratar agua.",
    problemBody:
      "Las industrias enfrentan presión creciente para reducir riesgos de vertimiento, recuperar agua, controlar costos energéticos y alinearse con exigencias ESG y regulatorias. Los sistemas tradicionales suelen resolver una variable mientras empeoran otra.",
    problemPoints: [
      "Aguas industriales de alta complejidad",
      "Presión creciente en operación y cumplimiento",
      "Procesos convencionales con corrientes de rechazo pesadas",
    ],
    story1Label: "01 · Entrada",
    story1Title: "El agua contaminada entra al sistema.",
    story1Body:
      "El recorrido comienza con corrientes industriales que pueden contener carga biológica, hidrocarburos y contaminantes complejos. AquaVyn™ convierte ese problema como una oportunidad de transformación.",
    story2Label: "02 · Activación",
    story2Title: "Dentro del reactor, el sistema cobra vida.",
    story2Body:
      "A medida que el agua fluye a través del sistema, entra en un recorrido de tratamiento por etapas donde la corriente es acondicionada, expuesta a energía controlada y guiada hacia una salida más limpia. La combinación de luz, movimiento y flujo se utiliza para hacer comprensible un proceso avanzado de un solo vistazo.",
    story3Label: "03 · Conversión",
    story3Title: "Un proceso de tratamiento pensado como motor de valor.",
    story3Body:
      "AquaVyn™ no se presenta como un equipo de función única, sino como una plataforma modular diseñada para recuperar agua, habilitar oportunidades de valor vinculadas a la energía y a la nanotecnología orientada al desarrollo de insumos para el agro, y escalar su despliegue en entornos industriales.",
    story4Label: "04 · Salida",
    story4Title: "Salida más limpia. Lógica industrial más sólida.",
    story4Body:
      "La etapa final se enfoca en resultados: agua tratada, eficiencia operativa, despliegue modular y el potencial estratégico de convertir pasivos ambientales en activos productivos.",
    metricsTitle: "Aspectos técnicos destacados",
    metricsBody:
      "Estos aspectos técnicos permiten traducir la propuesta de AquaVyn™ en señales concretas de capacidad, escalabilidad y desarrollo tecnológico para aliados e inversionistas.",
    metrics: [
      { value: "ΔT hasta 60°C", label: "Potencial de incremento térmico" },
      {
        value: "Hasta 200 m³/día",
        label: "Referencia actual de escala operativa",
      },
      { value: ">90%", label: "Narrativa de recuperación de agua" },
      { value: "TRL 7–8", label: "Posicionamiento de madurez tecnológica" },
      { value: "4 concedidas", label: "Patentes otorgadas" },
      { value: "+6 en examen", label: "Patentes adicionales en revisión" },
    ],
    techTitle: "Sección técnica",
    techBody:
      "AquaVyn™ se presenta como una plataforma modular de tratamiento con una secuencia visual que explica el proceso sin abrumar al usuario.",
    techCards: [
      {
        title: "Preacondicionamiento",
        body: "Una introducción clara al manejo del influente, balance de presión y preparación del sistema.",
      },
      {
        title: "Etapa de hidrolizador",
        body: "La primera etapa de transformación se comunica como preparación molecular previa al tratamiento avanzado.",
      },
      {
        title: "Visualización de energía / plasma",
        body: "Una capa visual premium usa pulsos de luz y burbujas para explicar la intensidad de un proceso invisible.",
      },
      {
        title: "Pulido final y salida",
        body: "La etapa de salida comunica agua más limpia, despliegue escalable y lógica de sistema para inversionistas.",
      },
    ],
    marketTitle: "Por qué esto importa ahora",
    marketBody:
      "El caso de inversión combina necesidad industrial, presión por sostenibilidad y lógica de infraestructura escalable. AquaVyn™ se posiciona donde se cruzan tratamiento, energía y resiliencia operativa.",
    marketPoints: [
      "Estrés hídrico industrial y regulación más estricta",
      "Demanda de plataformas compactas y modulares",
      "Mayor valor en reúso, recuperación y desempeño sostenible",
    ],
    proofTitle: "Placeholders de prueba y tracción",
    proofBody:
      "Esta sección se deja de forma intencional con placeholders para poder cambiar pruebas futuras sin rehacer todo el sistema visual.",
    proofCards: [
      "Placeholder de caso de estudio",
      "Placeholder de aliado industrial",
      "Placeholder de sitio piloto",
    ],
    ctaTitle: "¿Listo para la versión inversionista de esta conversación?",
    ctaBody:
      "La landing actual está diseñada como una entrada cinematográfica. Las siguientes capas pueden incluir casos reales, diagramas, validación técnica y materiales para inversionistas.",
    ctaButton: "Escribir a ISD+i²",
    footer: "AquaVyn™ por ISD+i² · Landing conceptual para inversionistas",
  },
};

const storyPanels = {
  en: [
    { key: "story1", pipeState: "dark", bubbleDensity: 0.2, glow: "low" },
    { key: "story2", pipeState: "mixed", bubbleDensity: 0.65, glow: "high" },
    {
      key: "story3",
      pipeState: "transition",
      bubbleDensity: 0.9,
      glow: "medium",
    },
    { key: "story4", pipeState: "clean", bubbleDensity: 0.35, glow: "low" },
  ],
  es: [
    { key: "story1", pipeState: "dark", bubbleDensity: 0.2, glow: "low" },
    { key: "story2", pipeState: "mixed", bubbleDensity: 0.65, glow: "high" },
    {
      key: "story3",
      pipeState: "transition",
      bubbleDensity: 0.9,
      glow: "medium",
    },
    { key: "story4", pipeState: "clean", bubbleDensity: 0.35, glow: "low" },
  ],
};

function StickyStorySection({ panels, t }) {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
          <div className="flex h-full items-center">
            <div className="w-full rounded-[32px] border border-slate-200 bg-white/80 p-4 shadow-xl backdrop-blur-sm">
              <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-slate-950">
                <video
                  className="h-full w-full object-cover"
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-sky-200/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {panels.map((panel, index) => (
            <motion.article
              key={panel.key}
              initial={{ opacity: 0.35, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="min-h-[85vh] rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:min-h-screen lg:p-10"
            >
              <div className="flex h-full flex-col justify-center">
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-sky-800">
                  {t[`${panel.key}Label`]}
                </div>

                <div className="mt-6 inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Step {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
                  {t[`${panel.key}Title`]}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 lg:text-lg">
                  {t[`${panel.key}Body`]}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Flow state
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-900">
                      {panel.pipeState}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Visual energy
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-900">
                      {panel.glow}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Bubble density
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-900">
                      {Math.round(panel.bubbleDensity * 100)}%
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AquaVynLanding() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const panels = useMemo(() => storyPanels[lang], [lang]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.55),rgba(255,255,255,1)_35%,rgba(241,245,249,1)_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              {t.navBrand}
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
              {t.navBy}
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 lg:flex">
            <a href="#story" className="transition hover:text-slate-900">
              {t.navStory}
            </a>
            <a href="#impact" className="transition hover:text-slate-900">
              {t.navImpact}
            </a>
            <a href="#technical" className="transition hover:text-slate-900">
              {t.navTech}
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              {t.navContact}
            </a>
          </nav>

          <Button
            variant="outline"
            className="rounded-full border-slate-300 bg-white/70"
            onClick={() => setLang((prev) => (prev === "en" ? "es" : "en"))}
          >
            <Languages className="mr-2 h-4 w-4" />
            {t.languageLabel}
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-24">
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-sky-900 shadow-sm">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                {t.heroEyebrow}
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 lg:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                {t.heroBody}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-slate-900 px-7 hover:bg-slate-800"
                >
                  <a href="#contact-form">
                    {t.heroPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-300 bg-white/80 px-7"
                >
                  <a href="#story">{t.heroSecondary}</a>
                </Button>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                {t.heroCaption}
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-slate-200 bg-white/70 p-4 shadow-xl backdrop-blur-sm">
                <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-slate-950">
                  <video
                    className="h-full w-full object-cover"
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-sky-200/10" />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 pb-10 text-sm text-slate-500 lg:px-10">
            <ChevronDown className="h-4 w-4 animate-bounce" />
            {t.systemLabel}
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-white/75 p-8 shadow-sm backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.25em] text-sky-800">
                AquaVyn™
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                {t.problemTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
                {t.problemBody}
              </p>
            </div>

            <div className="grid gap-4">
              {t.problemPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-sky-700" />
                  <span className="text-sm leading-6 text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StickyStorySection panels={panels} t={t} />

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-[#163456] to-slate-900 p-8 text-white shadow-xl lg:p-10">
            <div className="max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-[0.25em] text-sky-200">
                AquaVyn™
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">
                {t.metricsTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200 lg:text-lg">
                {t.metricsBody}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {t.metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="text-2xl font-semibold tracking-tight">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section
          id="technical"
          className="mx-auto max-w-7xl px-6 py-10 lg:px-10"
        >
          <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.25em] text-sky-800">
                Technical
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                {t.techTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">
                {t.techBody}
              </p>

              <div className="mt-6 grid gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <Droplets className="mt-0.5 h-5 w-5 text-sky-700" />
                  <span className="text-sm leading-6 text-slate-700">
                    AquaVyn™ is framed as a guided system journey from inflow to
                    final output.
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <Gauge className="mt-0.5 h-5 w-5 text-sky-700" />
                  <span className="text-sm leading-6 text-slate-700">
                    The design is ready for future animated diagrams, process
                    labels, and engineering overlays.
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <Thermometer className="mt-0.5 h-5 w-5 text-sky-700" />
                  <span className="text-sm leading-6 text-slate-700">
                    Claims are displayed in a way that can later connect to
                    reports, pilots, and investor documentation.
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.techCards.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border-slate-200 bg-gradient-to-b from-white to-slate-50"
                >
                  <CardContent className="p-6">
                    <div className="text-lg font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-slate-600">
                      {item.body}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:p-10">
              <div className="text-xs font-medium uppercase tracking-[0.25em] text-sky-800">
                Market
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                {t.marketTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">
                {t.marketBody}
              </p>

              <div className="mt-6 space-y-4">
                {t.marketPoints.map((point, idx) => {
                  const Icon = [Factory, Globe2, Building2][idx] || Waves;

                  return (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                    >
                      <Icon className="mt-0.5 h-5 w-5 text-sky-700" />
                      <span className="text-sm leading-6 text-slate-700">
                        {point}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
<div
  id="contact-form"
  className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:p-10"
>  <div className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
    Contact
  </div>
  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
    {lang === "es" ? "Formulario de contacto" : "Contact form"}
  </h2>
  <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">
    {lang === "es"
      ? "Cuéntanos sobre tu interés en AquaVyn™. Este formulario está listo para canalizar contactos iniciales de inversión, alianzas estratégicas o pilotos industriales."
      : "Tell us about your interest in AquaVyn™. This form is ready to capture initial conversations related to investment, strategic partnerships, or industrial pilots."}
  </p>

  <form
    action="https://formspree.io/f/maqanoew"
    method="POST"
    className="mt-8 grid gap-4"
  >
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {lang === "es" ? "Nombre" : "Name"}
        </label>
        <input
          type="text"
          name="name"
          placeholder={lang === "es" ? "Tu nombre" : "Your name"}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder={lang === "es" ? "tu@empresa.com" : "you@company.com"}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          required
        />
      </div>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {lang === "es" ? "Empresa" : "Company"}
        </label>
        <input
          type="text"
          name="company"
          placeholder={lang === "es" ? "Nombre de la empresa" : "Company name"}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {lang === "es" ? "Interés principal" : "Primary interest"}
        </label>
        <select
          name="interest"
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          required
        >
          <option value="">
            {lang === "es" ? "Selecciona una opción" : "Select an option"}
          </option>
          <option value="Investment">
            {lang === "es" ? "Inversión" : "Investment"}
          </option>
          <option value="Strategic partnership">
            {lang === "es" ? "Alianza estratégica" : "Strategic partnership"}
          </option>
          <option value="Industrial pilot">
            {lang === "es" ? "Piloto industrial" : "Industrial pilot"}
          </option>
          <option value="General information">
            {lang === "es" ? "Información general" : "General information"}
          </option>
        </select>
      </div>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {lang === "es" ? "Mensaje" : "Message"}
      </label>
      <textarea
        name="message"
        rows="5"
        placeholder={
          lang === "es"
            ? "Cuéntanos brevemente cómo te gustaría explorar AquaVyn™."
            : "Briefly tell us how you would like to explore AquaVyn™."
        }
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        required
      />
    </div>

    <input type="hidden" name="_subject" value="New AquaVyn contact form submission" />

    <div className="pt-2">
      <Button className="rounded-full bg-slate-900 px-7 hover:bg-slate-800">
        {lang === "es" ? "Enviar contacto" : "Send inquiry"}
      </Button>
    </div>
  </form>
</div>
</div>

        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-[#0f2740] via-[#173c64] to-[#214b78] p-8 text-white shadow-2xl lg:p-12">
            <div className="max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-[0.25em] text-sky-200">
                ISD+i²
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-5xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200 lg:text-lg">
                {t.ctaBody}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-7 text-slate-950 hover:bg-slate-100"
              >
                <a href="#contact-form">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.ctaButton}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>{t.footer}</div>
          <a
            href="mailto:isd@isd.com.co"
            className="transition hover:text-slate-900"
          >
            isd@isd.com.co
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/aquavyn") {
    return <AquaVynLanding />;
  }

  return <IoncoreAgroPage />;
}
