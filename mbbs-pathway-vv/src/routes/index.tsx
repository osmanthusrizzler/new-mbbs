import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Award,
  BellRing,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  GraduationCap,
  IndianRupee,
  Instagram,
  Landmark,
  Lock,
  Mail,
  Moon,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Target,
  Trophy,
  Users,
  XCircle,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EXAM_DATE_ISO = "2026-08-10T14:00:00+05:30";
const SITE_URL = "https://mbbsindiascholarship.com";
const FEE = "₹1,700";
const NEWSLETTER_URL = "https://forms.gle/7Tky7i749p7qHSmx9";
const INSTAGRAM_URL = "https://instagram.com/mbbsindiascholarship";
const INSTAGRAM_HANDLE = "@mbbsindiascholarship";
const SUPPORT_EMAIL = "mbbsindiascholarship@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "MBBS India Scholarship 2026 | Win Up to ₹2 Lakh Meritorious Grant",
      },
      {
        name: "description",
        content:
          "India's most trusted MBBS scholarship exam for NEET UG aspirants. Top meritorious grant up to ₹2 Lakh, 100 guaranteed scholarships per 1,000 applicants, total disbursement up to ₹10 Lakh. Exam on 10 August 2026.",
      },
      {
        name: "keywords",
        content:
          "MBBS scholarship, MBBS India scholarship, NEET scholarship, NEET UG scholarship 2026, meritorious grant, medical scholarship India, MBBS tuition scholarship, scholarship exam India, mbbsindiascholarship",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "MBBS India Scholarship" },
      { name: "theme-color", content: "#0b2a6b" },
      {
        property: "og:title",
        content:
          "MBBS India Scholarship 2026 | Win Up to ₹2 Lakh Meritorious Grant",
      },
      {
        property: "og:description",
        content:
          "100 guaranteed scholarships per 1,000 applicants. Top grant up to ₹2 Lakh. Total disbursement up to ₹10 Lakh. Exam on 10 August 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "MBBS India Scholarship" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "MBBS India Scholarship 2026 | Win Up to ₹2 Lakh Meritorious Grant",
      },
      {
        name: "twitter:description",
        content:
          "100 guaranteed scholarships per 1,000 applicants. Total disbursement up to ₹10 Lakh.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "MBBS India Scholarship",
              url: SITE_URL,
              logo: SITE_URL + "/favicon.ico",
              email: SUPPORT_EMAIL,
              sameAs: [INSTAGRAM_URL],
              description:
                "National scholarship exam for NEET UG aspirants aiming for MBBS admission in India.",
            },
            {
              "@type": "WebSite",
              url: SITE_URL,
              name: "MBBS India Scholarship",
            },
            {
              "@type": "Event",
              name: "MBBS India Scholarship Exam 2026",
              startDate: EXAM_DATE_ISO,
              endDate: "2026-08-10T15:40:00+05:30",
              eventAttendanceMode:
                "https://schema.org/OnlineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: { "@type": "VirtualLocation", url: SITE_URL },
              description:
                "100-question, 100-minute NEET UG pattern scholarship test. 100 winners guaranteed per 1,000 registrations.",
              organizer: {
                "@type": "Organization",
                name: "MBBS India Scholarship",
                url: SITE_URL,
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who can apply for the MBBS India Scholarship?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Any student appearing for NEET UG or aspiring to join MBBS in India is eligible.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many scholarships are awarded?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "100 scholarships are guaranteed for every 1,000 verified registrations. Grant amounts scale up or down with the number of verified applicants.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When is the meritorious grant paid?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The meritorious grant / scholarship is disbursed only after successful MBBS allotment, verification, and completion of all legal processes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the registration fee refundable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The ₹1,700 registration fee is strictly non-refundable under any circumstances.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useThemeInit();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Countdown />
        <StatsStrip />
        <ImportantDates />
        <ExamPattern />
        <SampleQuestion />
        <GrantSlab />
        <RejectionReasons />
        <HowItWorks />
        <Trust />
        <Testimonials />
        <WhyUs />
        <Faq />
        <CallToAction />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Theme ---------------- */

function useThemeInit() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  }, []);
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-secondary"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

/* ---------------- Announcement Bar (marquee) ---------------- */

function AnnouncementBar() {
  const items = [
    "🔒 Enrollment window is not live yet — subscribe to be the first to know",
    "🏆 Top meritorious grant up to ₹2 Lakh + 100 guaranteed scholarships per 1,000",
    "💸 Total disbursement pool up to ₹10 Lakh",
    "🗓️ Exam: 10 August 2026 · 2:00 PM IST",
    "🏥 Grant paid directly to your MBBS college on allotment",
  ];
  return (
    <div className="overflow-hidden border-b border-border/60 bg-primary text-primary-foreground">
      <div className="marquee flex whitespace-nowrap py-2 text-xs font-semibold sm:text-sm">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            {t}
          </span>
        ))}
      </div>
      <style>{`
        .marquee { animation: marquee 40s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulseDot { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: 0.4; } }
        .live-dot::before {
          content: ""; display: inline-block; width: 8px; height: 8px; border-radius: 9999px;
          background: currentColor; margin-right: 8px; animation: pulseDot 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-display text-base font-bold tracking-tight sm:text-lg">
            MBBS India Scholarship
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            ["Exam", "#exam-pattern"],
            ["Grants", "#grants"],
            ["Dates", "#dates"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer">
              <BellRing className="h-4 w-4" />
              Subscribe
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              India&apos;s Largest MBBS Scholarship Exam
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Win Up to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ₹2 Lakh
              </span>
              <span className="text-primary">*</span>
              <br />
              MBBS Scholarship
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">100 scholarships guaranteed</strong>{" "}
              for every 1,000 verified applicants. Open to every NEET UG
              aspirant across India. Total disbursement{" "}
              <strong className="text-foreground">up to ₹10 Lakh</strong> — paid
              directly to your medical college.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer">
                  <BellRing className="h-4 w-4" />
                  Subscribe to Newsletter · Free
                </a>
              </Button>
              <Button disabled size="lg" variant="outline" className="text-base">
                <Lock className="h-4 w-4" />
                Enroll · {FEE} (Locked)
              </Button>
            </div>

            <p className="mt-4 max-w-xl text-xs text-muted-foreground">
              *Registrations are not live yet. Grant amounts scale with the
              number of verified applicants. Full slab published before the
              exam.
            </p>

            <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-border/60 pt-6">
              {[
                ["₹10L", "Total disbursement"],
                ["100 / 1000", "Guaranteed"],
                ["10 Aug", "Exam 2026"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {v}
                  </dt>
                  <dd className="text-xs uppercase tracking-wide text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-2xl" />
            <Card className="relative border-border/60 bg-card/90 shadow-2xl backdrop-blur">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    <Trophy className="h-4 w-4" />
                    Scholarship Snapshot
                  </div>
                  <span className="live-dot inline-flex items-center rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                    Newsletter open
                  </span>
                </div>
                <CardTitle className="font-display text-2xl">
                  Everything a NEET aspirant deserves
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  ["Strictly NEET UG pattern", "Perfect national mock"],
                  ["100 guaranteed scholarships", "For every 1,000 registrations"],
                  ["Merit-only ranking", "Score decides — nothing else"],
                  ["Direct-to-college payout", "On allotment & verification"],
                ].map(([t, s]) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/40 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">{t}</p>
                      <p className="text-xs text-muted-foreground">{s}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Countdown ---------------- */

function Countdown() {
  const target = new Date(EXAM_DATE_ISO).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const cells: [string, number][] = [
    ["Days", days],
    ["Hours", hours],
    ["Minutes", minutes],
    ["Seconds", seconds],
  ];

  return (
    <section className="border-b border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" />
              Exam Day Countdown
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              10 August 2026 · 2:00 PM IST
            </h2>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Enrollment is not live yet. Subscribe to the newsletter to be
              first in line when it opens.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {cells.map(([label, value]) => (
              <div
                key={label}
                className="min-w-[64px] rounded-xl bg-primary-foreground/10 px-3 py-3 text-center backdrop-blur"
              >
                <div className="font-display text-2xl font-bold tabular-nums sm:text-3xl">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/80">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats Strip (animated counters) ---------------- */

function useCountUp(target: number, duration = 1400) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.round(target * (0.2 + 0.8 * p * (2 - p))));
            if (p < 1) requestAnimationFrame(step);
            else setN(target);
          };
          requestAnimationFrame(step);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { n, ref };
}

function StatCounter({ value, suffix, prefix, label }: { value: number; suffix?: string; prefix?: string; label: string }) {
  const { n, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-2xl font-bold text-primary sm:text-3xl">
        {prefix}
        {n.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function StatsStrip() {
  return (
    <section className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <StatCounter value={10000} suffix="+" label="Aspirants targeted" />
        <StatCounter value={100} suffix=" / 1000" label="Guaranteed scholarships" />
        <StatCounter value={10} suffix=" Lakh" prefix="₹" label="Total disbursement" />
        <StatCounter value={2400} suffix="+" label="Newsletter subscribers" />
      </div>
    </section>
  );
}

/* ---------------- Important Dates ---------------- */

function ImportantDates() {
  const rows = [
    ["Newsletter", "Open now — subscribe for updates"],
    ["Enrollment Opens", "To be announced"],
    ["Application Deadline", "8 August 2026"],
    ["Admit Card Release", "9 August 2026"],
    ["Exam Date", "10 August 2026 · 2:00 PM – 3:40 PM IST"],
    ["Result Declaration", "17 August 2026 (1 week after exam)"],
    ["Scholarship Disbursement", "After successful MBBS allotment & verification"],
  ];
  return (
    <section id="dates" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Important Dates
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your 2026 scholarship calendar
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Milestone</th>
                <th className="px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([m, d], i) => (
                <tr
                  key={m}
                  className={
                    "border-t border-border/60 " +
                    (i % 2 ? "bg-background" : "bg-secondary/20")
                  }
                >
                  <td className="flex items-center gap-2 px-5 py-4 font-semibold">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {m}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Exam Pattern ---------------- */

function ExamPattern() {
  const subjects = [
    { name: "Physics", count: 25 },
    { name: "Chemistry", count: 25 },
    { name: "Botany", count: 25 },
    { name: "Zoology", count: 25 },
  ];

  return (
    <section id="exam-pattern" className="border-t border-border/60 bg-secondary/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Exam Blueprint
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Strictly the NEET UG Syllabus
          </h2>
          <p className="mt-4 text-muted-foreground">
            NEET UG itself is <strong>180 questions in 180 minutes</strong>. We
            compress it to{" "}
            <strong className="text-foreground">
              100 questions in 100 minutes
            </strong>{" "}
            — same syllabus, same rigour, faster verdict.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((s) => (
            <Card
              key={s.name}
              className="border-border/60 bg-card text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {s.name}
                </h3>
                <p className="mt-2 font-display text-3xl font-bold text-foreground">
                  {s.count}
                </p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Questions
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: <Target className="h-5 w-5" />, big: "100", small: "MCQs total" },
            { icon: <Clock className="h-5 w-5" />, big: "100 min", small: "Duration" },
            { icon: <Users className="h-5 w-5" />, big: "100 / 1000", small: "Scholarships" },
          ].map((s) => (
            <Card key={s.small} className="border-border/60 bg-card/70">
              <CardContent className="flex items-center gap-4 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {s.icon}
                </div>
                <div>
                  <p className="font-display text-xl font-bold">{s.big}</p>
                  <p className="text-xs text-muted-foreground">{s.small}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-border/60 bg-card p-4 text-center text-sm text-muted-foreground">
          Marking scheme mirrors NEET UG: <strong>+4</strong> correct,{" "}
          <strong>−1</strong> incorrect, 0 unattempted.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Sample Question ---------------- */

function SampleQuestion() {
  const [picked, setPicked] = useState<string | null>(null);
  const correct = "C";
  const options = [
    ["A", "Chlorophyll a"],
    ["B", "Xanthophyll"],
    ["C", "Both a and b"],
    ["D", "Neither"],
  ];
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Try a Sample Question
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Feels exactly like NEET UG
          </h2>
        </div>

        <Card className="mt-10 border-border/60 bg-card shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <p className="text-sm font-semibold text-primary">Botany · Q. 42</p>
            <p className="mt-2 text-lg font-medium">
              Which of the following pigments is/are involved in the light
              reaction of photosynthesis?
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {options.map(([k, v]) => {
                const isPicked = picked === k;
                const isCorrect = picked && k === correct;
                const isWrong = isPicked && k !== correct;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setPicked(k)}
                    className={
                      "flex items-center gap-3 rounded-xl border p-4 text-left transition-all " +
                      (isWrong
                        ? "border-destructive bg-destructive/10"
                        : isCorrect
                          ? "border-accent bg-accent/10"
                          : isPicked
                            ? "border-primary bg-primary/5"
                            : "border-border/60 bg-secondary/30 hover:border-primary/40")
                    }
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background font-display text-sm font-bold text-foreground">
                      {k}
                    </span>
                    <span className="text-sm font-medium">{v}</span>
                  </button>
                );
              })}
            </div>
            {picked && (
              <p
                className={
                  "mt-5 rounded-lg p-3 text-sm " +
                  (picked === correct
                    ? "bg-accent/10 text-accent-foreground"
                    : "bg-destructive/10 text-destructive")
                }
              >
                {picked === correct
                  ? "✅ Correct — both chlorophyll a and xanthophyll play roles in light absorption."
                  : "❌ Try again — think about accessory pigments too."}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ---------------- Grant Slab ---------------- */

function GrantSlab() {
  const tiers = [
    { rank: "Rank 1", amount: "Up to ₹2,00,000", winners: "1 scholarship", tone: "gold" },
    { rank: "Rank 2", amount: "₹50,000", winners: "1 scholarship", tone: "silver" },
    { rank: "Rank 3", amount: "₹25,000", winners: "1 scholarship", tone: "silver" },
    { rank: "Rank 4 – 10", amount: "₹20,000", winners: "7 scholarships", tone: "bronze" },
    { rank: "Rank 11 – 50", amount: "Variable Meritorious Grant", winners: "40 scholarships", tone: "base" },
    { rank: "Rank 51 – 100", amount: "₹1,700 (Base Merit Grant)", winners: "50 scholarships", tone: "base" },
  ];
  return (
    <section
      id="grants"
      className="border-y border-border/60 bg-gradient-to-b from-secondary/20 to-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Scholarship Distribution
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            100 Guaranteed Scholarships per 1,000 Applicants
          </h2>
          <p className="mt-4 text-muted-foreground">
            Indicative slab for a 1,000-applicant cohort. Scholarship amounts
            are <strong>subject to increase or decrease</strong> based on the
            actual number of verified applicants — full slab published
            transparently before the exam.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.rank}
              className="relative overflow-hidden border-border/60 bg-card transition-shadow hover:shadow-lg"
            >
              <div
                className={
                  "absolute inset-x-0 top-0 h-1 " +
                  (t.tone === "gold"
                    ? "bg-award"
                    : t.tone === "silver"
                      ? "bg-primary"
                      : t.tone === "bronze"
                        ? "bg-accent"
                        : "bg-muted-foreground/40")
                }
              />
              <CardHeader className="pb-2">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.rank}
                </div>
                <CardTitle className="font-display text-2xl">
                  {t.amount}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t.winners}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Disbursed to your medical college on allotment & verification.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-muted-foreground">
          Total disbursement scales up to ₹10 Lakh. Ranks 1–3 amounts and
          ranks 11–50 variable grants scale proportionately with the number of
          verified applicants. Final slab is locked and published 24 hours
          before the exam.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Rejection Reasons ---------------- */

function RejectionReasons() {
  const reasons = [
    "Submission of false, fabricated, or misleading personal information.",
    "Impersonation or attempting the exam on behalf of another candidate.",
    "Use of unfair means during the exam — screen sharing, external help, or third-party tools.",
    "Multiple registrations from the same candidate using different emails or numbers.",
    "Payment charge-back, dispute, or reversal of the registration fee.",
    "Failure to complete KYC / identity verification when requested.",
    "Non-appearance for the scheduled online proctored exam.",
    "Inability to produce a valid NEET UG scorecard / admission letter within 90 days of the result.",
    "Not securing admission to a recognised MBBS college in India within the disbursement window.",
    "Violation of Terms & Conditions, Code of Conduct, or any applicable Indian law.",
  ];
  return (
    <section className="border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" />
            Read carefully
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            10 Reasons Your Scholarship Can Be Rejected
          </h2>
          <p className="mt-3 text-muted-foreground">
            We keep the exam fair for everyone. Any of the following results in
            <strong className="text-foreground"> immediate disqualification</strong> and
            forfeiture of the scholarship — with no refund of the registration
            fee.
          </p>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li
              key={r}
              className="flex gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <XCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Reason {i + 1}
                </p>
                <p className="mt-1 text-sm text-foreground">{r}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- How It Works ---------------- */

function HowItWorks() {
  const steps = [
    {
      icon: <BellRing className="h-5 w-5" />,
      title: "Subscribe now",
      body: "Join the newsletter to be first in line when enrollment opens.",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Enroll for the exam",
      body: `Pay ${FEE} registration fee when enrollment goes live.`,
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Take the online exam",
      body: "100 questions · 100 minutes · Strict NEET UG syllabus & pattern.",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Grant to your college",
      body: "Scholarship disbursed to your MBBS college after allotment & verification.",
    },
  ];
  return (
    <section id="how" className="border-t border-border/60 bg-secondary/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From subscribing to college disbursement in 4 steps
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                Step {i + 1}
              </div>
              <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {s.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Trust ---------------- */

function Trust() {
  const items = [
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Government-Recognised Setup",
      body: "Registered under Udyam / MSME. Compliance details available on request.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Legal-Process Backed",
      body: "The meritorious grant / scholarship will only be distributed after completing all applicable legal processes and verifications.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Direct-to-College Disbursement",
      body: "Scholarships are wired straight to the winner's medical college on admission — never to a personal wallet.",
    },
  ];
  return (
    <section id="trust" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Trust & Legitimacy
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Transparent, compliant, and student-first
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <Card
              key={i.title}
              className="border-border/60 bg-card transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {i.icon}
                </div>
                <CardTitle className="mt-3 font-display text-lg">
                  {i.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {i.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-center text-sm text-accent-foreground">
          Disclaimer: The total scholarship disbursement is dynamic (up to
          ₹10 Lakh) and scales proportionately with the number of verified
          registrations.
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const items = [
    {
      name: "Ananya S.",
      city: "Lucknow, UP",
      body: "The pattern feels exactly like NEET UG. Solving 100 in 100 min was the best pre-NEET reality check I got.",
    },
    {
      name: "Rahul K.",
      city: "Kota, Rajasthan",
      body: "Direct-to-college disbursement is what convinced my parents. No cash, no scams. Just a clean scholarship.",
    },
    {
      name: "Sneha P.",
      city: "Pune, Maharashtra",
      body: "For ₹1,700 I get a serious mock and a shot at a real meritorious grant. Way better than another coaching test.",
    },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            What aspirants say
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by NEET aspirants across India
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="border-border/60 bg-card shadow-sm">
              <CardContent className="pt-6">
                <Quote className="h-6 w-6 text-primary/60" />
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                  <div className="flex gap-0.5 text-award">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */

function WhyUs() {
  const points = [
    ["No middlemen", "Grant is wired to your MBBS college directly."],
    ["Verified NEET pattern", "Same syllabus, same marking scheme, sharper format."],
    ["Merit-only ranking", "No quota, no interviews, no favouritism — pure score."],
    ["Transparent slabs", "Scholarship slabs locked and published before the exam."],
    ["Legally clean payout", "Disbursement only after completing all legal processes."],
    ["Nationwide access", "Online, proctored, and open to every state and board."],
  ];
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why MBBS India Scholarship
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The fairest {FEE} you&apos;ll spend this year
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {points.map(([t, b]) => (
            <div
              key={t}
              className="flex gap-3 rounded-xl border border-border/60 bg-card p-5 shadow-sm"
            >
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-foreground">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function Faq() {
  const faqs = [
    {
      q: "Who can register for the MBBS India Scholarship?",
      a: "Every NEET UG aspirant across India, from any state and any board, can register. No prior score is required.",
    },
    {
      q: "How is our exam different from NEET UG?",
      a: "NEET UG is 180 questions in 180 minutes. We use the same syllabus and marking scheme but run 100 questions in 100 minutes — a sharper mock with real scholarships on the line.",
    },
    {
      q: "How are scholarships paid?",
      a: "Scholarships are transferred directly to the winner's medical college fee account after successful allotment and verification. We never transfer cash to a personal wallet.",
    },
    {
      q: `Is the ${FEE} fee refundable?`,
      a: `No. The ${FEE} registration fee is strictly non-refundable under any circumstances.`,
    },
    {
      q: "When is the meritorious grant actually paid?",
      a: "Only after MBBS allotment, verification, and completion of all applicable legal processes.",
    },
    {
      q: "What if I have a dispute with the results?",
      a: "The all-India merit rank is final and binding. No disputes, chargebacks, or legal claims will be entertained — by registering, you accept the rank list as final.",
    },
    {
      q: "Can the scholarship amount change?",
      a: "Yes. Scholarship amounts are subject to increase or decrease based on the actual number of verified applicants. The final slab is locked 24 hours before the exam.",
    },
  ];
  return (
    <section id="faq" className="border-y border-border/60 bg-secondary/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Questions aspirants ask us
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border/60 bg-card p-4 shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-semibold text-foreground">{f.q}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Call To Action (Subscribe / Enroll-locked) ---------------- */

function CallToAction() {
  return (
    <section id="register" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Claim your spot
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Two ways to move forward
          </h2>
          <p className="mt-3 text-muted-foreground">
            Enrollment isn&apos;t live yet. Subscribe to the newsletter now and
            be the first to know when registration opens.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Newsletter — active */}
          <Card className="relative overflow-hidden border-accent/30 bg-card shadow-xl transition-transform hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="live-dot text-accent text-xs font-bold uppercase tracking-wider">
                  Open
                </span>
              </div>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <BellRing className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Subscribe to Newsletter
              </h3>
              <p className="mt-1 text-3xl font-display font-bold text-accent">
                Free
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "First-in-line access when enrollment opens",
                  "Exam updates, syllabus drops, and scholarship slabs",
                  "Zero spam — unsubscribe anytime",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {l}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-6 w-full text-base">
                <a
                  href={NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BellRing className="h-4 w-4" />
                  Subscribe for Free
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Enroll — locked */}
          <Card className="relative overflow-hidden border-border/60 bg-secondary/20 shadow-inner">
            <div className="absolute inset-x-0 top-0 h-1 bg-muted-foreground/40" />
            <CardContent className="p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Lock className="h-3 w-3" />
                Not live yet
              </div>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <IndianRupee className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Enroll for the Exam
              </h3>
              <p className="mt-1 text-3xl font-display font-bold text-foreground">
                {FEE}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Full seat for the 10 August 2026 exam",
                  "100 guaranteed scholarships per 1,000 applicants",
                  "Meritorious grant paid to your MBBS college on allotment",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" />
                    {l}
                  </li>
                ))}
              </ul>
              <Button
                disabled
                size="lg"
                variant="outline"
                className="mt-6 w-full text-base"
              >
                <Lock className="h-4 w-4" />
                Enrollment Locked
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Registrations are not live. Subscribe to be the first to know.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact Strip ---------------- */

function ContactStrip() {
  const cards = [
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram (Support)",
      value: INSTAGRAM_HANDLE,
      href: INSTAGRAM_URL,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Official Email",
      value: SUPPORT_EMAIL,
      href: `mailto:${SUPPORT_EMAIL}`,
    },
  ];
  return (
    <section className="border-t border-border/60 bg-secondary/20 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Talk to us
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Support only via Instagram &amp; email
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {c.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.title}
                </p>
                <p className="mt-1 text-sm font-medium">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-foreground px-4 py-12 text-background sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold">
                MBBS India Scholarship
              </span>
            </div>
            <p className="mt-4 text-sm text-background/70">
              India&apos;s trusted MBBS scholarship exam for NEET UG aspirants.
              Merit-based. Meritorious grants paid directly to your medical
              college after allotment &amp; verification.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-background/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-background/20"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>
                <Link to="/privacy-policy" className="hover:text-background">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-background">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-background">
                  Refund &amp; Cancellation
                </Link>
              </li>
              <li>
                <a
                  href={NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  Subscribe to Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold">Important</h3>
            <p className="mt-4 text-sm text-background/70">
              Registration fee is strictly non-refundable. Scholarship amounts
              are subject to change based on verified applicants. The
              meritorious grant will only be distributed after completing all
              applicable legal processes. The all-India merit rank is final and
              binding — no disputes, chargebacks or legal claims will be
              entertained.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/60">
          © {new Date().getFullYear()} MBBS India Scholarship
          (mbbsindiascholarship.com). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
