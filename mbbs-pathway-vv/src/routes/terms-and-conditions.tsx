import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MBBS India Scholarship" },
      {
        name: "description",
        content:
          "Terms and conditions governing registration and participation in the MBBS India Scholarship exam.",
      },
      { property: "og:title", content: "Terms & Conditions — MBBS India Scholarship" },
      {
        property: "og:description",
        content:
          "Binding rules governing registration, exam conduct, disqualification, disbursement and dispute resolution.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mbbsindiascholarship.com/terms-and-conditions" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://mbbsindiascholarship.com/terms-and-conditions",
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
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
          Terms &amp; Conditions
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
          <Section title="1. Acceptance of Terms">
            These Terms &amp; Conditions ("Terms") form a legally binding
            electronic contract under the Information Technology Act, 2000
            between you ("Applicant", "you") and the organiser of
            mbbsindiascholarship.com ("we", "us", "Organiser"). By ticking the
            consent checkbox, completing registration or making payment, you
            unconditionally accept these Terms, the Privacy Policy and the
            Refund Policy. If you do not agree, do not register.
          </Section>

          <Section title="2. Nature of the Programme">
            The MBBS India Scholarship is a private, merit-based scholarship
            competition open to NEET UG aspirants. It is <strong>not</strong> a
            government examination, admission test, coaching guarantee,
            game of chance, lottery, wagering or gambling activity, and
            confers no right of admission, employment, or entitlement of any
            kind. All rewards are scholarships within the meaning of Section
            10(16) of the Income Tax Act, 1961.
          </Section>

          <Section title="3. Eligibility">
            You must be a resident of India, at least 17 years of age (or
            registered with the explicit written consent of a parent / legal
            guardian if a minor), and be a genuine NEET UG aspirant. By
            registering you represent that all information submitted is true,
            complete and current, and that you have the legal capacity to
            enter into this contract.
          </Section>

          <Section title="4. Registration Fee">
            The registration fee is <strong>₹1,700</strong> per applicant,
            inclusive of applicable taxes and payment-gateway charges. The
            fee is <strong>strictly non-refundable</strong>, non-transferable
            and non-adjustable under any circumstances, including but not
            limited to withdrawal, non-appearance, technical failure at the
            applicant&apos;s end, disqualification, cancellation of the exam
            slot by the applicant, or failure to qualify. Chargebacks,
            reversals or payment disputes constitute a material breach and
            will trigger immediate disqualification and legal recovery
            action.
          </Section>

          <Section title="5. Exam Pattern">
            The exam follows the NEET UG syllabus, in the format of 100
            multiple-choice questions to be attempted in 100 minutes, with 25
            questions each from Physics, Chemistry, Botany and Zoology.
            Marking: +4 correct, −1 incorrect, 0 unattempted.
          </Section>

          <Section title="6. Scholarships &amp; Disbursement">
            <p>
              100 scholarships are guaranteed for every 1,000{" "}
              <em>verified</em> registrations. The prize pool and individual
              amounts are <strong>dynamic and subject to increase or
              decrease</strong> based solely on the actual number of verified
              applicants. The Organiser&apos;s calculation of the final slab
              is conclusive.
            </p>
            <p className="mt-2">
              All scholarship amounts are disbursed{" "}
              <strong>directly to the winner&apos;s recognised MBBS college
              fee account</strong> in India, upon receipt of the admission
              letter and college bank details, and only after completion of
              KYC and identity verification. Under no circumstance are prize
              amounts paid in cash, to a personal account, or to a third
              party. Winners must claim disbursement within 90 days of the
              NEET UG result; unclaimed awards lapse without liability.
            </p>
          </Section>

          <Section title="7. Grounds for Rejection / Disqualification">
            The Organiser reserves the absolute right to reject an
            application, cancel a result or forfeit a scholarship, without
            refund, for reasons including (but not limited to): false or
            fabricated information; impersonation; use of unfair means or
            third-party assistance; multiple registrations by the same
            candidate; payment chargeback or dispute; failure to complete KYC
            or produce a valid NEET UG scorecard / admission letter within
            the disbursement window; non-appearance; breach of Terms; or
            violation of Indian law. The Organiser&apos;s decision on
            disqualification is final.
          </Section>

          <Section title="8. Result &amp; Rank List — Final and Binding">
            The all-India merit rank published by the Organiser is{" "}
            <strong>final, conclusive and binding</strong> on all applicants.
            No re-evaluation, re-check, appeal, chargeback, complaint,
            arbitration, mediation, consumer forum proceeding or civil suit
            will be entertained on the rank list, the prize computation or
            the disqualification decisions. By registering you expressly and
            irrevocably waive any right to dispute the outcome.
          </Section>

          <Section title="9. Fair Conduct &amp; Anti-Fraud">
            The exam is proctored. Any attempt to cheat, share screens, use
            AI tools, communicate with others, use unauthorised material, or
            manipulate the platform will result in immediate disqualification
            and permanent blacklisting. The Organiser may report fraud to law
            enforcement and initiate criminal proceedings under the Indian
            Penal Code, 1860, Bharatiya Nyaya Sanhita, 2023 and the
            Information Technology Act, 2000.
          </Section>

          <Section title="10. Intellectual Property">
            All content on this website — question papers, question bank,
            branding, code, design, text and graphics — is the exclusive
            property of the Organiser. You may not copy, reproduce,
            redistribute, screen-record, or create derivative works without
            prior written consent. Violation attracts civil and criminal
            liability under the Copyright Act, 1957 and the Information
            Technology Act, 2000.
          </Section>

          <Section title="11. Limitation of Liability">
            To the maximum extent permitted by law, the aggregate liability
            of the Organiser, its promoters, directors, employees and agents
            arising out of or in connection with the programme or these
            Terms is limited to the registration fee actually paid by the
            applicant. In no event shall the Organiser be liable for any
            indirect, incidental, special, punitive, exemplary or
            consequential damages, loss of profit, opportunity, data, or
            goodwill — even if advised of such possibility. The Organiser is
            not liable for failure of internet connectivity, device issues,
            power outages, force majeure events, or any cause outside its
            reasonable control.
          </Section>

          <Section title="12. Indemnity">
            You agree to indemnify, defend and hold harmless the Organiser,
            its promoters, directors, employees, agents and affiliates from
            and against any and all claims, damages, losses, liabilities and
            expenses (including reasonable legal fees) arising out of your
            breach of these Terms, any misrepresentation, or any violation of
            law or third-party rights.
          </Section>

          <Section title="13. Modifications">
            The Organiser reserves the right to modify, suspend or
            discontinue the programme, the exam schedule, the prize slab or
            these Terms at any time, with or without notice. Continued use of
            the website after any change constitutes acceptance of the
            revised Terms.
          </Section>

          <Section title="14. Governing Law &amp; Jurisdiction">
            These Terms are governed by the laws of India. Subject to
            Clause 8 (rank list is final and non-disputable), any residual
            dispute strictly relating to the interpretation of these Terms
            shall be subject to the <strong>exclusive jurisdiction of the
            competent courts at New Delhi, India</strong>, and no other
            court, tribunal or forum shall have jurisdiction.
          </Section>

          <Section title="15. Severability &amp; Waiver">
            If any provision of these Terms is held invalid or unenforceable,
            the remaining provisions shall continue in full force. Failure by
            the Organiser to enforce any right shall not constitute a waiver
            of that right.
          </Section>

          <Section title="16. Contact">
            For any correspondence regarding these Terms, write to{" "}
            <a
              className="underline"
              href="mailto:support@mbbsindiascholarship.com"
            >
              support@mbbsindiascholarship.com
            </a>
            .
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
