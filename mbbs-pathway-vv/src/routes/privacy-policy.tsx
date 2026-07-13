import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MBBS India Scholarship" },
      {
        name: "description",
        content:
          "How MBBS India Scholarship collects, uses, stores and protects personal information under Indian data protection law.",
      },
      { property: "og:title", content: "Privacy Policy — MBBS India Scholarship" },
      {
        property: "og:description",
        content:
          "Our practices for collecting, using, storing and protecting your personal data.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mbbsindiascholarship.com/privacy-policy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://mbbsindiascholarship.com/privacy-policy" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              MBBS India Scholarship
            </span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-8 text-foreground">
          <Section title="1. Scope">
            This Privacy Policy explains how mbbsindiascholarship.com ("we",
            "us") collects, uses, stores, shares and safeguards personal
            information. It is issued under the Information Technology
            (Reasonable Security Practices and Procedures and Sensitive
            Personal Data or Information) Rules, 2011 and is aligned with
            the Digital Personal Data Protection Act, 2023. By using this
            website, you consent to this Policy.
          </Section>

          <Section title="2. Information We Collect">
            <ul className="list-disc space-y-1 pl-5">
              <li>Full name, email address, WhatsApp number.</li>
              <li>NEET UG roll number and score, when provided.</li>
              <li>
                Payment confirmation metadata received from our payment
                gateway (we do <strong>not</strong> store your card, UPI PIN,
                CVV or full account number).
              </li>
              <li>KYC documents (only for scholarship disbursement).</li>
              <li>
                Technical data — IP address, device, browser, cookies and
                usage logs — for security and analytics.
              </li>
            </ul>
          </Section>

          <Section title="3. Purpose of Use">
            <ul className="list-disc space-y-1 pl-5">
              <li>To process registration, admit-card issuance and exam conduct.</li>
              <li>To publish the merit rank and administer scholarship disbursement.</li>
              <li>To verify identity, prevent fraud and enforce our Terms.</li>
              <li>To communicate exam updates via email, SMS and WhatsApp.</li>
              <li>To comply with legal, tax and audit obligations.</li>
            </ul>
          </Section>

          <Section title="4. Legal Basis &amp; Consent">
            We process personal data on the basis of your explicit consent
            (given at registration), performance of the contract created by
            these Terms, compliance with legal obligations and legitimate
            interest (fraud prevention). You may withdraw consent by writing
            to us, subject to legal and operational retention requirements.
          </Section>

          <Section title="5. Sharing">
            We do <strong>not</strong> sell or rent personal data. We share
            it strictly with: (i) our payment gateway; (ii) proctoring and
            exam-technology partners; (iii) the winner&apos;s medical college
            for disbursement; (iv) statutory or law-enforcement authorities
            when required by law, court order or valid legal process.
          </Section>

          <Section title="6. Data Security">
            We implement reasonable administrative, technical and physical
            safeguards, including transport-layer encryption (HTTPS),
            role-based access, and secure hosting. However, no transmission
            over the internet is 100% secure. To the extent permitted by
            law, we disclaim liability for unauthorised access resulting
            from causes beyond our reasonable control.
          </Section>

          <Section title="7. Retention">
            Personal data is retained for the duration of the scholarship
            programme and for up to 7 years thereafter to comply with tax,
            audit and legal obligations, after which it is anonymised or
            deleted.
          </Section>

          <Section title="8. Your Rights">
            Subject to applicable law, you may request access, correction,
            or deletion of your personal data, and withdraw consent. Requests
            can be made at{" "}
            <a
              className="underline"
              href="mailto:privacy@mbbsindiascholarship.com"
            >
              privacy@mbbsindiascholarship.com
            </a>
            . We may verify your identity before acting on the request and
            may retain data where legally required.
          </Section>

          <Section title="9. Cookies">
            We use essential cookies for authentication and analytics
            cookies to improve the site. You can disable non-essential
            cookies in your browser; some features may not work correctly
            without them.
          </Section>

          <Section title="10. Children">
            Applicants under 18 must register with the written consent of a
            parent or legal guardian. We do not knowingly collect data from
            children below 13.
          </Section>

          <Section title="11. Changes">
            We may update this Policy at any time. The updated version is
            effective on posting. Continued use of the website constitutes
            acceptance of the revised Policy.
          </Section>

          <Section title="12. Grievance Officer">
            In accordance with the Information Technology Act, 2000 and Rule
            5(9) of the IT Rules, 2011, grievances may be addressed to:
            <br />
            Email:{" "}
            <a
              className="underline"
              href="mailto:grievance@mbbsindiascholarship.com"
            >
              grievance@mbbsindiascholarship.com
            </a>
            <br />
            We shall acknowledge grievances within 48 hours and resolve them
            within 30 days.
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-2 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
