import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Legal
          </h1>
          <p className="mt-2 text-muted">
            Terms of Service, Privacy Policy, Cookie Policy, and Content &
            Copyright Policy for Readlink.
          </p>
        </div>

        <div className="space-y-12">
          <section id="terms" className="space-y-4">
            <h2 className="text-2xl font-semibold">Terms of Service</h2>
            <p className="text-sm text-muted">
              Effective date: March 2, 2026
              <br />
              Last updated: March 2, 2026
            </p>
            <p>
              Welcome to Readlink! Readlink is operated by Lykan Sagl, Ai
              Salici, 6633 Lavertezzo, Switzerland (&quot;Company,&quot;
              &quot;we,&quot; &quot;us&quot;). By using our app or website, you
              agree to these Terms of Service (&quot;Terms&quot;). Please read
              them carefully.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">1. Eligibility</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>You must be at least 13 years old to use Readlink.</li>
                  <li>
                    By signing up, you confirm that you meet this age
                    requirement.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">2. Account Registration</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    You may need an account (via Clerk) to access some
                    features.
                  </li>
                  <li>Keep your login credentials secure.</li>
                  <li>
                    You are responsible for all activity on your account.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">3. User-Generated Content</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    Users may upload text, share links, or pull book data from
                    APIs, and may later post content publicly and share to
                    social media.
                  </li>
                  <li>You retain ownership of the content you submit.</li>
                  <li>
                    By submitting content, you grant Readlink a worldwide,
                    non-exclusive, royalty-free license to use, display, and
                    distribute your content within the app.
                  </li>
                  <li>
                    You warrant that you own or have the right to share all
                    content you submit.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">4. Prohibited Conduct</h3>
                <p className="mt-2 text-muted">You may not:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Upload illegal or infringing content.</li>
                  <li>Harass or threaten others.</li>
                  <li>Attempt to compromise the security of Readlink.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">5. Intellectual Property</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    All Readlink branding, software, and content are owned by
                    Lykan Sagl or its licensors.
                  </li>
                  <li>
                    You may not copy, reproduce, or distribute our intellectual
                    property without permission.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">6. API &amp; Third-Party Content</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    Books pulled via APIs may belong to third parties. We do
                    not guarantee the accuracy, legality, or completeness of
                    this content.
                  </li>
                  <li>
                    You are responsible for your use of any third-party content.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">7. Termination</h3>
                <p className="mt-2 text-muted">
                  We may suspend or terminate accounts for violating these Terms
                  or at our discretion.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">8. Disclaimers</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Readlink is provided &quot;as is.&quot;</li>
                  <li>
                    We do not guarantee uninterrupted access, accuracy, or
                    suitability for any purpose.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">9. Limitation of Liability</h3>
                <p className="mt-2 text-muted">
                  To the maximum extent permitted by law, Lykan Sagl is not
                  liable for indirect, incidental, or consequential damages
                  arising from use of the app.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">10. Indemnification</h3>
                <p className="mt-2 text-muted">
                  You agree to indemnify and hold harmless Lykan Sagl, its
                  affiliates, and employees from claims arising from your use of
                  Readlink or violation of these Terms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">11. Governing Law</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>These Terms are governed by Swiss law.</li>
                  <li>Disputes are resolved in Swiss courts.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="privacy" className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
            <p className="text-sm text-muted">
              Effective date: March 2, 2026
              <br />
              Last updated: March 2, 2026
              <br />
              Controller: Lykan Sagl, Ai Salici, 6633 Lavertezzo, Switzerland
              <br />
              Contact email: readlinkofficial@gmail.com
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">1. What Data We Collect</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Account info: email, login data via Clerk.</li>
                  <li>User content: text, links, API data.</li>
                  <li>
                    Usage info: app interactions, device info (analytics
                    placeholder).
                  </li>
                  <li>Cookies &amp; tracking: see Cookie Policy.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">2. How We Use Your Data</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Provide, maintain, and improve Readlink.</li>
                  <li>Display user-generated content.</li>
                  <li>
                    Communicate with you (optional updates/marketing if you
                    consent).
                  </li>
                  <li>Analyze app usage (analytics placeholder).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">3. Legal Basis</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Consent (for marketing or optional features).</li>
                  <li>
                    Legitimate interest (for app functionality and analytics).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">4. Sharing &amp; Transfers</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    We may share data with service providers (Clerk, Vercel,
                    Neon).
                  </li>
                  <li>
                    International transfers are safeguarded via standard privacy
                    agreements.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">5. Your Rights</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Access, correction, or deletion of your data.</li>
                  <li>Withdraw consent at any time.</li>
                  <li>Contact us at readlinkofficial@gmail.com.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">6. Retention</h3>
                <p className="mt-2 text-muted">
                  We retain data only as long as necessary for app operation and
                  legal obligations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">7. Security</h3>
                <p className="mt-2 text-muted">
                  We use reasonable technical and organizational measures to
                  protect your data.
                </p>
              </div>
            </div>
          </section>

          <section id="cookie" className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-semibold">Cookie Policy</h2>
            <p className="text-sm text-muted">Effective date: March 2, 2026</p>
            <ul className="list-disc space-y-1 pl-6 text-muted">
              <li>Readlink uses essential cookies for app functionality.</li>
              <li>
                Analytics cookies may be used in the future (PostHog, Google
                Analytics).
              </li>
              <li>Users can control cookies through browser settings.</li>
              <li>
                See Privacy Policy for more details on data collection.
              </li>
            </ul>
          </section>

          <section id="content" className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-semibold">
              Content &amp; Copyright Policy
            </h2>
            <ul className="list-disc space-y-1 pl-6 text-muted">
              <li>Users retain ownership of uploaded content.</li>
              <li>
                By posting, users grant Readlink a license to display and share
                content.
              </li>
              <li>
                Users must only post content they own or have rights to.
              </li>
              <li>
                Takedown procedure: email readlinkofficial@gmail.com for
                copyright concerns.
              </li>
              <li>
                Repeat infringers may have accounts suspended or terminated.
              </li>
              <li>
                Content pulled from APIs may belong to third parties. Use
                responsibly.
              </li>
              <li>
                Public sharing and social media reposting are permitted under
                the license you grant.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
