import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — MBBS India Scholarship" },
      {
        name: "description",
        content:
          "The ₹1,700 MBBS India Scholarship registration fee is strictly non-refundable. Read the full policy.",
      },
      { property: "og:title", content: "Refund Policy — MBBS India Scholarship" },
      {
        property: "og:description",
        content:
          "The registration fee is strictly non-refundable. No exceptions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mbbsindiascholarship.com/refund-policy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://mbbsindiascholarship.com/refund-policy" },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
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
          Refund &amp; Cancellation Policy
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
          <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm font-semibold text-destructive">
            The ₹1,700 registration fee is strictly NON-REFUNDABLE under any
            circumstances. No exceptions. No partial refunds.
          </div>

          <Section title="1. Non-Refundable Nature">
            By completing payment, you expressly agree that the registration
            fee of <strong>₹1,700</strong> is a non-refundable service
            charge for slot reservation, question-paper preparation,
            proctoring, evaluation, ranking and administrative overheads.
            It is not an advance, not a deposit, and not adjustable against
            any future service.
          </Section>

          <Section title="2. Situations Where No Refund Is Payable">
            <ul className="list-disc space-y-1 pl-5">
              <li>Change of mind, personal reasons or a decision not to appear.</li>
              <li>Non-appearance for the scheduled exam.</li>
              <li>Technical, connectivity, hardware or power issues at the applicant&apos;s end.</li>
              <li>Failure to qualify, secure a rank or win a scholarship.</li>
              <li>Failure to complete KYC or submit required documents.</li>
              <li>
                Disqualification arising from breach of Terms, unfair means,
                impersonation or misrepresentation.
              </li>
              <li>Payment made by mistake, duplicate payment (see Clause 4).</li>
              <li>
                Cancellation, rescheduling or reformatting of the exam by the
                Organiser (a fresh slot will be offered instead of a refund).
              </li>
            </ul>
          </Section>

          <Section title="3. No Chargebacks">
            Initiating a chargeback, dispute or reversal with your bank or
            card issuer will trigger immediate disqualification, permanent
            blacklisting, and legal recovery action, including the cost of
            recovery, gateway penalties and reasonable legal fees. You
            expressly waive the right to file such disputes.
          </Section>

          <Section title="4. Duplicate Payments">
            In the sole case of a verified duplicate payment for the same
            applicant against the same exam slot (confirmed against payment
            gateway records), the duplicate amount alone may be refunded to
            the original payment source within 15 working days, after
            deduction of gateway charges.
          </Section>

          <Section title="5. Gateway Charges">
            Any transaction, gateway, tax or convenience charges incurred
            are non-refundable in every case, including duplicate-payment
            refunds under Clause 4.
          </Section>

          <Section title="6. Governing Law">
            This Policy forms part of the Terms &amp; Conditions and is
            governed by the laws of India. Subject to the finality of the
            rank list, disputes strictly relating to the interpretation of
            this Policy shall be subject to the exclusive jurisdiction of
            the competent courts at New Delhi, India.
          </Section>

          <Section title="7. Contact">
            For payment-related queries only (not refund appeals), write to{" "}
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
