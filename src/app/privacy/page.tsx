import type { Metadata } from "next"
import { PageShell } from "@/components/landing/page-shell"
import { LegalHeader, Prose } from "@/components/landing/legal"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BookLatch (a product of Tinnovation) collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  const { company, contact, name, url } = siteConfig

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <LegalHeader title="Privacy Policy" updated="29 June 2026" />
        <Prose>
          <p>
            This Privacy Policy explains how {company} (&ldquo;{company}&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;), the company behind <strong>{name}</strong> ({url}), collects, uses,
            and safeguards your information when you visit our website or use our services. By using{" "}
            {name}, you agree to the practices described here.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Information you provide:</strong> your name, email address, phone number, and
              any message you submit through our contact or sign-up forms.
            </li>
            <li>
              <strong>Account &amp; usage data:</strong> details you provide when creating an account
              and information about how you interact with our product.
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, device information, and
              cookies or similar technologies used to operate and improve the site.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiries and provide customer support.</li>
            <li>To provide, maintain, secure, and improve our services.</li>
            <li>To send you service-related and, where permitted, marketing communications.</li>
            <li>To comply with legal obligations and prevent fraud or abuse.</li>
          </ul>

          <h2>How we share information</h2>
          <p>
            We do not sell your personal information. We may share it with trusted service providers
            who help us operate our business (for example, payment, hosting, and communication
            providers), and where required by law or to protect our rights.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies to remember your preferences and understand how
            the site is used. You can control cookies through your browser settings.
          </p>

          <h2>Data retention &amp; security</h2>
          <p>
            We retain personal information only as long as necessary for the purposes described in
            this policy, and we apply reasonable technical and organizational measures to protect it
            against unauthorized access, loss, or misuse.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, or delete your
            personal information, or to object to or restrict certain processing. To exercise these
            rights, contact us using the details below.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            Our services are not directed to individuals under 18, and we do not knowingly collect
            personal information from children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be reflected by
            updating the &ldquo;Last updated&rdquo; date above.
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
