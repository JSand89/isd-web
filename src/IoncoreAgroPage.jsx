import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  CheckCircle2,
  FlaskConical,
  Leaf,
  Mail,
  Microscope,
  ShieldCheck,
  Sparkles,
  Sprout,
  TestTube2,
  Tractor,
  Waves,
  Wheat,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import heroVideo from "./assets/Video_Hero.mp4";

const valuePoints = [
  {
    icon: Atom,
    title: "Alta concentración nutricional",
    body: "El perfil analítico de AGRONOVA® reporta una concentración total aproximada de 425 g/L, con presencia destacada de potasio, fósforo, azufre y boro.",
  },
  {
    icon: Waves,
    title: "Baja conductividad eléctrica",
    body: "Presenta una conductividad eléctrica de 0,208 dS/cm en dilución 1:100, una característica favorable para programas que buscan reducir la carga salina.",
  },
  {
    icon: ShieldCheck,
    title: "Matriz física estable",
    body: "Los análisis describen una muestra fluida, sin gelificación, sin partículas extrañas y con sedimentación blanda de fácil reincorporación.",
  },
  {
    icon: Sparkles,
    title: "Aplicación flexible",
    body: "Puede integrarse en programas de aplicación foliar o vía riego, bajo protocolos definidos según el cultivo, la etapa fenológica y el objetivo productivo.",
  },
];

const techSteps = [
  {
    icon: FlaskConical,
    title: "Plasma en fase líquida",
    body: "La tecnología utiliza energía aplicada sobre una matriz líquida para generar condiciones físicas especiales durante el proceso de elaboración.",
  },
  {
    icon: Microscope,
    title: "Nanoactivación",
    body: "El proceso busca mejorar la dispersión, la estabilidad y la disponibilidad de los componentes presentes en la formulación.",
  },
  {
    icon: TestTube2,
    title: "Matriz de baja salinidad",
    body: "El resultado es una solución líquida con baja conductividad eléctrica, pH ligeramente ácido y comportamiento físico estable.",
  },
];

const evidenceStats = [
  {
    value: "425,46 g/L",
    label: "Concentración total aproximada de nutrientes reportada.",
  },
  {
    value: "0,208 dS/cm",
    label: "Conductividad eléctrica en dilución 1:100.",
  },
  {
    value: "6,37–6,60",
    label: "Rango de pH reportado en los análisis.",
  },
  {
    value: "1,008 g/mL",
    label: "Densidad aproximada de la muestra analizada.",
  },
];

const cropBenefits = [
  {
    icon: Sprout,
    title: "Café",
    points: [
      "Apoyo nutricional en etapas de brotación, floración y llenado.",
      "Evaluación de vigor, uniformidad y respuesta del cultivo.",
      "Protocolos para pruebas dirigidas por agrónomos y asesores técnicos.",
    ],
  },
  {
    icon: Leaf,
    title: "Aguacate, cacao y frutales",
    points: [
      "Evaluación en prefloración, floración, cuajado y llenado.",
      "Aporte de elementos relacionados con desarrollo y calidad de fruto.",
      "Aplicación bajo protocolos técnicos controlados.",
    ],
  },
  {
    icon: Tractor,
    title: "Banano, plátano y extensivos",
    points: [
      "Apoyo a programas nutricionales en cultivos de alta demanda.",
      "Aplicación foliar o vía riego según las condiciones productivas.",
      "Evaluación de vigor, desarrollo y respuesta frente a estrés.",
    ],
  },
];

const safetyPoints = [
  {
    icon: Waves,
    text: "Su baja conductividad eléctrica permite trabajar con una matriz de menor carga salina frente a formulaciones convencionales altamente salinas.",
  },
  {
    icon: ShieldCheck,
    text: "Los análisis reportan niveles bajos o no detectables de arsénico, cadmio, mercurio y plomo.",
  },
  {
    icon: CheckCircle2,
    text: "Debe manejarse con los elementos básicos de protección recomendados para insumos agrícolas y siguiendo el protocolo técnico.",
  },
];

const specs = [
  ["Estado físico", "Líquido"],
  ["Concentración total reportada", "Aproximadamente 425,46 g/L"],
  ["pH reportado", "6,37–6,60"],
  ["Conductividad eléctrica", "0,208 dS/cm en dilución 1:100"],
  ["Densidad", "Aproximadamente 1,008 g/mL"],
  ["Solubilidad", "Alta dispersión en agua"],
  ["Comportamiento físico", "Fluido, sin gelificación y con sedimentación blanda"],
  ["Aplicación", "Foliar o vía riego, según protocolo"],
  ["Estado actual", "Tecnología en proceso de validación agronómica"],
];

const allyBenefits = [
  "Acceso a información técnica y resultados de laboratorio.",
  "Protocolos de evaluación definidos según cultivo.",
  "Acompañamiento durante la prueba controlada.",
  "Incentivo del 15% asociado a la comercialización.",
  "5% adicional sujeto a la entrega completa de la información técnica acordada.",
];

function SectionHeading({ eyebrow, title, body, light = false }) {
  return (
    <div className="max-w-3xl">
      <div
        className={`text-xs font-semibold uppercase tracking-[0.24em] ${
          light ? "text-lime-200" : "text-emerald-700"
        }`}
      >
        {eyebrow}
      </div>

      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight lg:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {body ? (
        <p
          className={`mt-4 text-base leading-7 lg:text-lg ${
            light ? "text-emerald-50/80" : "text-slate-600"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export default function AgronovaPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f3fbf4_0%,#ffffff_34%,#eef8f0_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="group">
            <div className="text-lg font-semibold tracking-tight text-emerald-950">
              AGRONOVA®
            </div>

            <div className="text-xs uppercase tracking-[0.2em] text-emerald-700">
              Tecnología agrícola by ISD+i²
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#valor" className="transition hover:text-emerald-800">
              Beneficios
            </a>

            <a href="#tecnologia" className="transition hover:text-emerald-800">
              Tecnología
            </a>

            <a href="#evidencia" className="transition hover:text-emerald-800">
              Evidencia
            </a>

            <a href="#cultivos" className="transition hover:text-emerald-800">
              Cultivos
            </a>

            <a href="#aliados" className="transition hover:text-emerald-800">
              Aliados
            </a>

            <a href="#contacto" className="transition hover:text-emerald-800">
              Contacto
            </a>
          </nav>

          <Button
            asChild
            className="rounded-full bg-emerald-700 px-5 hover:bg-emerald-800"
          >
            <a href="#contact-form">Solicitar evaluación</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500" />

          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24 lg:pt-24">
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
                <Leaf className="mr-2 h-3.5 w-3.5" />
                Nanotecnología física aplicada al agro
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-emerald-950 lg:text-7xl">
                AGRONOVA®: más eficiencia nutricional para cultivos que buscan
                mejores resultados.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                Nanoinsumo agrícola líquido desarrollado mediante procesos
                físicos de plasma en fase líquida y nanoactivación, con una
                matriz de baja conductividad eléctrica y alta concentración
                nutricional.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-emerald-700 px-7 hover:bg-emerald-800"
                >
                  <a href="#contact-form">
                    Solicitar evaluación técnica
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-emerald-300 bg-white/90 px-7 text-emerald-950 hover:bg-emerald-50"
                >
                  <a href="#tecnologia">Conocer la tecnología</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-emerald-200 bg-white/75 p-4 shadow-xl backdrop-blur-sm">
                <div className="relative h-[440px] overflow-hidden rounded-[24px] bg-emerald-950">
                  <video
                    className="h-full w-full object-cover"
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/80 via-emerald-700/20 to-lime-200/25 mix-blend-multiply" />

                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-emerald-950/60 p-5 text-white backdrop-blur-sm sm:inset-x-8 sm:bottom-8">
                    <div className="text-xs uppercase tracking-[0.22em] text-lime-200">
                      Tecnología desarrollada en Colombia
                    </div>

                    <div className="mt-2 text-xl font-semibold sm:text-2xl">
                      Una matriz líquida estable, concentrada y evaluada
                      mediante análisis de laboratorio.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="valor"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-10"
        >
          <SectionHeading
            eyebrow="Propuesta de valor"
            title="¿Por qué evaluar AGRONOVA® en su cultivo?"
            body="AGRONOVA® combina alta concentración nutricional, baja conductividad eléctrica y estabilidad física para apoyar programas de nutrición vegetal más eficientes y precisos."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {valuePoints.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="rounded-2xl border-emerald-100 bg-white/85 shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          id="tecnologia"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-10"
        >
          <div className="grid gap-8 rounded-[32px] border border-emerald-200 bg-emerald-950 p-8 text-white shadow-xl lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <SectionHeading
              eyebrow="Tecnología"
              title="Una nueva forma de desarrollar insumos agrícolas."
              body="AGRONOVA® es obtenido mediante procesos físicos de plasma en fase líquida y nanoactivación. Este enfoque busca mejorar la estabilidad, disponibilidad y comportamiento de la matriz durante su aplicación."
              light
            />

            <div className="grid gap-4">
              {techSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-300 text-emerald-950">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-emerald-50/75">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="evidencia"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-10"
        >
          <div className="rounded-[32px] border border-emerald-100 bg-white/90 p-8 shadow-sm lg:p-10">
            <SectionHeading
              eyebrow="Evidencia técnica"
              title="Caracterización realizada por un laboratorio especializado."
              body="AGRONOVA® fue sometido a análisis físico-químicos para caracterizar su perfil nutricional, conductividad eléctrica, pH, densidad, metales pesados y comportamiento físico."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {evidenceStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6"
                >
                  <div className="text-3xl font-semibold tracking-tight text-emerald-950">
                    {stat.value}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-emerald-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-6 text-slate-700">
                Los resultados describen una matriz altamente concentrada,
                fluida, sin gelificación y con niveles bajos o no detectables
                de metales pesados críticos.
              </p>

              <Button
                asChild
                variant="outline"
                className="shrink-0 rounded-full border-emerald-300 text-emerald-900 hover:bg-emerald-50"
              >
                <a href="#contact-form">Solicitar ficha técnica</a>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="cultivos"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-10"
        >
          <SectionHeading
            eyebrow="Cultivos objetivo"
            title="Una tecnología adaptable a diferentes sistemas productivos."
            body="Los protocolos de AGRONOVA® se ajustan según el cultivo, su etapa fenológica y el objetivo técnico definido con el productor o el ingeniero agrónomo."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {cropBenefits.map((crop) => {
              const Icon = crop.icon;

              return (
                <Card
                  key={crop.title}
                  className="rounded-2xl border-emerald-100 bg-white/90"
                >
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-100 text-emerald-800">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {crop.title}
                      </h3>
                    </div>

                    <div className="mt-6 space-y-4">
                      {crop.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />

                          <p className="text-sm leading-6 text-slate-600">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-100 bg-white/80 px-6 py-5 text-sm leading-6 text-slate-600">
            También pueden desarrollarse protocolos para hortalizas, pastos,
            palma, sacha inchi, maíz, arroz y otros cultivos de interés.
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-emerald-100 bg-white/90 p-8 shadow-sm lg:p-10">
              <SectionHeading
                eyebrow="Seguridad y manejo"
                title="Tecnología orientada a una agricultura más eficiente."
              />

              <div className="mt-7 space-y-4">
                {safetyPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />

                      <span className="text-sm leading-6 text-slate-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] border border-emerald-100 bg-white/90 p-8 shadow-sm lg:p-10">
              <SectionHeading
                eyebrow="Información técnica"
                title="Principales características de AGRONOVA®."
              />

              <div className="mt-7 divide-y divide-emerald-100 rounded-2xl border border-emerald-100 bg-white">
                {specs.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-2 px-5 py-4 sm:grid-cols-[0.4fr_0.6fr]"
                  >
                    <div className="text-sm font-semibold text-emerald-800">
                      {label}
                    </div>

                    <div className="text-sm leading-6 text-slate-700">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="aliados"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-10"
        >
          <div className="grid gap-8 rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 p-8 text-white shadow-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-emerald-950">
                <Wheat className="h-6 w-6" />
              </div>

              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-lime-200">
                Programa de aliados técnicos
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-5xl">
                Trabajamos con agrónomos que quieran evaluar, recomendar y
                documentar resultados.
              </h2>

              <p className="mt-4 text-base leading-7 text-emerald-50/80 lg:text-lg">
                AGRONOVA® está construyendo una red de ingenieros agrónomos,
                asesores técnicos y profesionales del agro interesados en
                desarrollar pruebas controladas en condiciones reales de campo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-sm">
              <div className="space-y-4">
                {allyBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />

                    <p className="text-sm leading-6 text-emerald-50/85">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="mt-7 rounded-full bg-white px-7 text-emerald-950 hover:bg-emerald-50"
              >
                <a href="#contact-form">
                  Quiero ser aliado técnico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-900 via-emerald-800 to-lime-700 p-8 text-white shadow-xl lg:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-200">
                Evaluación en campo
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-5xl">
                Convierta su cultivo en el próximo caso de evaluación
                AGRONOVA®.
              </h2>

              <p className="mt-4 text-base leading-7 text-emerald-50 lg:text-lg">
                Cuéntenos qué cultivo maneja, cuál es su objetivo productivo y
                qué reto nutricional desea evaluar. Nuestro equipo revisará la
                información y propondrá un protocolo inicial.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-7 text-emerald-950 hover:bg-emerald-50"
                >
                  <a href="#contact-form">
                    <Mail className="mr-2 h-4 w-4" />
                    Hablar con el equipo técnico
                  </a>
                </Button>
              </div>
            </div>

            <div
              id="contact-form"
              className="scroll-mt-24 rounded-[32px] border border-emerald-100 bg-white/90 p-8 shadow-sm lg:p-10"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Contacto
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Solicitar evaluación técnica
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">
                Comparta la información básica de su cultivo para revisar la
                viabilidad de una prueba controlada con AGRONOVA®.
              </p>

              <form
                action="https://formspree.io/f/maqanoew"
                method="POST"
                className="mt-8 grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Nombre
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Correo electrónico
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="tu@empresa.com"
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Teléfono
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+57 300 000 0000"
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="profile"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Perfil
                    </label>

                    <select
                      id="profile"
                      name="profile"
                      defaultValue=""
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="Ingeniero agrónomo">
                        Ingeniero agrónomo
                      </option>
                      <option value="Asesor técnico">Asesor técnico</option>
                      <option value="Productor">Productor</option>
                      <option value="Asociación o cooperativa">
                        Asociación o cooperativa
                      </option>
                      <option value="Distribuidor">Distribuidor</option>
                      <option value="Centro de investigación">
                        Centro de investigación
                      </option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="crop"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Cultivo
                    </label>

                    <input
                      id="crop"
                      type="text"
                      name="crop"
                      placeholder="Café, aguacate, cacao..."
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Municipio y departamento
                    </label>

                    <input
                      id="location"
                      type="text"
                      name="location"
                      placeholder="Ej. Tuluá, Valle del Cauca"
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hectares"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Área aproximada
                  </label>

                  <input
                    id="hectares"
                    type="text"
                    name="hectares"
                    placeholder="Ej. 5 hectáreas"
                    className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Objetivo o problema técnico
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Cuéntanos la etapa del cultivo, el programa nutricional actual y el resultado que esperas evaluar."
                    className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    required
                  />
                </div>

                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva solicitud de evaluación técnica AGRONOVA"
                />

                <Button className="w-fit rounded-full bg-emerald-700 px-7 hover:bg-emerald-800">
                  Enviar solicitud
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-900/10 bg-white/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            AGRONOVA® by ISD+i² · Tecnología agrícola desarrollada en Colombia
          </div>

          <a
            href="mailto:agronova@isd.com.co"
            className="transition hover:text-emerald-800"
          >
            agronova@isd.com.co
          </a>
        </div>
      </footer>
    </div>
  );
}