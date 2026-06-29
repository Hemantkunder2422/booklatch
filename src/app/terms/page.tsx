import type { Metadata } from "next"
import { PageShell } from "@/components/landing/page-shell"
import { LegalHeader, Prose } from "@/components/landing/legal"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of BookLatch, a product of Tinnovation.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  const { company, contact, name } = siteConfig

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <LegalHeader title="Terms of Service" updated="29 June 2026" />
        <Prose>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
            <strong>{name}</strong>, operated by {company} (&ldquo;{company}&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;). By accessing or using our website or services, you agree to be bound by
            these Terms.
          </p>

          <h2>Use of the service</h2>
          <p>
            You may use {name} only in compliance with these Terms and all applicable laws. You are
            responsible for the activity that occurs under your account.
          </p>

          <h2>Accounts</h2>
          <p>
            You must provide accurate information when creating an account and keep your credentials
            secure. You are responsible for maintaining the confidentiality of your account.
          </p>

          <h2>Billing &amp; payments</h2>
          <p>
            Paid plans are billed according to the pricing communicated to you. Fees are
            non-refundable except where required by law. We may change pricing with reasonable prior
            notice.
          </p>

          <h2>Acceptable use</h2>
          <ul>
            <li>Do not misuse, disrupt, or attempt to gain unauthorized access to the service.</li>
            <li>Do not use the service for unlawful, fraudulent, or harmful activity.</li>
            <li>Do not infringe the intellectual property or privacy rights of others.</li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            All rights, title, and interest in {name}, including its software, design, and content,
            remain the property of {company} and its licensors.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The service is provided &ldquo;as is&rdquo; without warranties of any kind, to the maximum
            extent permitted by law. We do not warrant that the service will be uninterrupted or
            error-free.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, {company} shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of the service.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate your access if you breach these Terms. You may stop using the
            service at any time.
          </p>

          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws of India, with exclusive jurisdiction of the courts
            of Karnataka.
          </p>

          <h2>Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the service after changes
            take effect constitutes acceptance of the revised Terms.
          </p>

          <h2>Contact us</h2>
          <p>
            {company} — {contact.address}
            <br />
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            Phone: <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          </p>
        </Prose>
      </article>
    </PageShell>
  )
}
