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
          <section className="space-y-4">
            <h2
              id="terms"
              className="scroll-mt-24 text-2xl font-semibold tracking-tight"
            >
              Terms of Service
            </h2>
            <p className="text-sm text-muted">
              Effective date: March 2, 2026
              <br />
              Last updated: May 15, 2026
            </p>
            <p>
              Welcome to Readlink. Readlink is operated by Lykan Sagl, Ai
              Salici, 6633 Lavertezzo, Switzerland (&quot;Readlink,&quot;
              &quot;we,&quot; &quot;us&quot;). By using our app or website, you
              agree to these Terms of Service (&quot;Terms&quot;). Please read
              them carefully.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">1. Eligibility</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>You must be at least 16 years old to use Readlink.</li>
                  <li>
                    By signing up, you confirm that you meet this age
                    requirement.
                  </li>
                  <li>
                    In jurisdictions where the age of majority is higher than
                    16, your continued use of the Service confirms that a parent
                    or legal guardian has reviewed and accepts these Terms on
                    your behalf where required by local law.
                  </li>
                  <li>
                    We do not knowingly permit anyone under 16 to create an
                    account. If we become aware that an account has been created
                    by someone under 16, we will close the account and delete
                    associated personal data in accordance with our Privacy
                    Policy.
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
                  <li>
                    You are responsible for keeping your login credentials secure
                    and for all activity on your account.
                  </li>
                  <li>
                    One person, one account. Automated account creation is
                    prohibited.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">
                  3. Your Content — Categories and Rights
                </h3>
                <p className="mt-2 text-muted">
                  Readlink hosts and processes several different kinds of
                  content. Different rules apply to each, so please read this
                  section carefully.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">3.1 What you upload, in plain terms</h3>
                <p className="mt-2 text-muted">
                  When you use Readlink, you may contribute four broad kinds of
                  content:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    (a) Creative content — your reviews, posts, comments, photos
                    you take yourself, and notes you choose to publish.
                  </li>
                  <li>
                    (b) Private notes and annotations — notes you mark as
                    private, intended only for yourself.
                  </li>
                  <li>
                    (c) Functional book metadata — corrections or additions to
                    factual book information (titles, authors, ISBNs, page
                    counts, publication dates, edition data, table of contents
                    structure, and similar structural information).
                  </li>
                  <li>
                    (d) OCR text fragments — short text excerpts you capture from
                    physical books using our OCR feature, where you select a
                    region of a page and Readlink extracts the text. Source
                    photos are discarded; only the text you select is retained.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">3.2 Ownership</h3>
                <p className="mt-2 text-muted">
                  You retain ownership of all content you contribute, in every
                  category above. Readlink does not claim ownership of your
                  work.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  3.3 License to Readlink — Creative Content (Category a)
                </h3>
                <p className="mt-2 text-muted">
                  For creative content, you grant Readlink a worldwide,
                  non-exclusive, royalty-free license to host, display,
                  reproduce, distribute, and create derived previews of your
                  content, solely for the purpose of operating, promoting, and
                  improving the Service. This license includes the right to
                  sublicense to our service providers (e.g., hosting providers)
                  to the extent necessary to operate the Service.
                </p>
                <p className="mt-2 text-muted">
                  This license terminates when you delete the content or your
                  account, except: (i) for reasonable backup retention periods,
                  (ii) where the content has been reshared, embedded, or quoted
                  by other users (in which case the secondary uses persist), and
                  (iii) for aggregated or anonymized data that no longer
                  identifies you or your work.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  3.4 Treatment of Private Notes and Annotations (Category b)
                </h3>
                <p className="mt-2 text-muted">
                  Private notes and annotations remain yours. We do not display
                  them to other users, do not use them to train models, and do
                  not include them in any public dataset. We process them only
                  as necessary to provide the Service to you (for example, to
                  display them back to you, sync across devices, or back them
                  up).
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  3.5 License to Readlink — Functional Book Metadata (Category c)
                </h3>
                <p className="mt-2 text-muted">
                  Functional book metadata is, by its nature, factual information
                  that benefits every reader on the platform. To maintain a
                  clean, accurate, shared book catalog, you grant Readlink a
                  worldwide, perpetual, irrevocable, royalty-free, sublicensable,
                  and transferable license to use, modify, combine, distribute,
                  and incorporate your metadata contributions into the Readlink
                  Dataset, including for use after you delete your account.
                </p>
                <p className="mt-2 text-muted">
                  This applies only to the factual and structural layer of book
                  information. It does not apply to your reviews, opinions, or
                  creative writing about books, which fall under Section 3.3.
                </p>
                <p className="mt-2 text-muted">
                  You represent and warrant that your contribution of functional
                  metadata is consistent with applicable doctrines of fair use,
                  right of quotation (including under Art. 25 of the Swiss
                  Federal Copyright Act), fair dealing, or equivalent
                  informational-use principles in your jurisdiction. Functional
                  bibliographic data — titles, authors, ISBNs, publication dates,
                  page counts, and structural elements such as tables of contents
                  — is generally treated as factual information not subject to
                  copyright in itself; nothing in this section requires you to
                  contribute material that exceeds these recognized
                  informational-use principles.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  3.6 License to Readlink — OCR Text Fragments (Category d)
                </h3>
                <p className="mt-2 text-muted">
                  When you use the OCR feature, Readlink discards the source photo
                  as soon as text extraction is complete. Only the text you
                  affirmatively select is retained. Because OCR fragments may
                  include short excerpts of copyrighted text, you agree that:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>You will only OCR books you own or have lawful access to.</li>
                  <li>
                    You will not use the feature to systematically reproduce
                    substantial portions of any work.
                  </li>
                  <li>
                    Short fragments you save and choose to keep private are
                    treated as private notes (Section 3.4).
                  </li>
                  <li>
                    Short fragments you choose to publish (for example, attaching
                    a quote to a review) are treated as creative content (Section
                    3.3) and you represent that the use qualifies as quotation,
                    criticism, or review under applicable copyright law.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">3.7 Your Warranties</h3>
                <p className="mt-2 text-muted">
                  For all content you contribute, you represent and warrant
                  that:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    You own the content or have all necessary rights, licenses,
                    and permissions to contribute it.
                  </li>
                  <li>
                    Your contribution does not infringe any third party&apos;s
                    intellectual property, privacy, publicity, or other rights.
                  </li>
                  <li>For OCR fragments, you have lawful access to the source book.</li>
                  <li>
                    For photographs you upload to the feed, the photograph is
                    yours or you have permission to share it.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">3.8 Moral Rights</h3>
                <p className="mt-2 text-muted">
                  To the extent permitted by applicable law, you waive, or agree
                  not to assert, any moral rights you may have in your
                  contributions to the extent necessary for Readlink to exercise
                  the licenses granted above. Where such waiver is not
                  permitted, you grant Readlink permission to display, edit for
                  length, crop, format, and contextually display your
                  contributions in the normal course of operating the Service.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">4. The Readlink Dataset</h3>
                <p className="mt-2 text-muted">
                  The Readlink Dataset is the compiled, curated body of book
                  metadata that results from combining public sources (such as the
                  Open Library API), our own work, and contributions from our
                  community under Section 3.5.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    The selection, arrangement, structure, and presentation of the
                    Readlink Dataset are proprietary to Readlink and protected to
                    the maximum extent available under applicable copyright,
                    database, and contract law.
                  </li>
                  <li>
                    You may use the Readlink Dataset through the Service for
                    personal, non-commercial purposes consistent with these Terms.
                  </li>
                  <li>
                    You may not extract, copy, or reuse substantial parts of the
                    Readlink Dataset for any other purpose without our prior
                    written consent.
                  </li>
                  <li>
                    Specifically, you may not use automated tools (scrapers,
                    bots, crawlers, headless browsers, or any other systematic
                    extraction method) to access, copy, or harvest data from the
                    Service except where we expressly authorize it (for example,
                    through a published API).
                  </li>
                  <li>
                    Violation of this section is a material breach of these Terms
                    and may result in immediate account termination, technical
                    countermeasures, and legal action including claims for damages
                    and injunctive relief.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">4.1 Survival and Persistence of the Dataset</h3>
                <p className="mt-2 text-muted">
                  The Readlink Dataset is built up over time as users add
                  corrections, structural data, and other functional contributions
                  on top of records derived from public sources and licensed
                  providers. To preserve the integrity of the Service and protect
                  the work users invest in their libraries, Readlink asserts a
                  Right of Persistence over the Readlink Dataset:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    Readlink retains a perpetual right to maintain, store,
                    modify, combine, and continue to operate on all structured
                    bibliographic data and user contributions previously
                    integrated into the Readlink Dataset.
                  </li>
                  <li>
                    Functional metadata contributions made under Section 3.5
                    persist in the Readlink Dataset after the contributing user
                    terminates their account.
                  </li>
                  <li>
                    The expiration, termination, or modification of any agreement
                    with a third-party data provider does not extinguish
                    Readlink&apos;s interest in records that have been integrated,
                    augmented, curated, or materially transformed within the
                    Readlink Dataset, which may be treated as derivative works of
                    Readlink and its community.
                  </li>
                  <li>
                    The persistence of the Dataset is a user-protective measure:
                    when you add reviews, notes, or annotations linked to a book
                    record, the underlying record needs to remain stable even if
                    our upstream data sources change.
                  </li>
                </ul>
                <p className="mt-2 text-muted">
                  The Right of Persistence is exercised consistent with
                  applicable third-party rights and the specific terms of the
                  relevant upstream agreement, and Readlink reserves the right to
                  prune, regenerate, or restructure records as required by law or
                  by a binding contractual obligation that cannot be reconciled
                  with this Right.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">5. Prohibited Conduct</h3>
                <p className="mt-2 text-muted">You may not:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Upload illegal, infringing, defamatory, or harassing content.</li>
                  <li>Harass, threaten, dox, or impersonate others.</li>
                  <li>
                    Attempt to compromise the security of Readlink or other
                    users&apos; accounts.
                  </li>
                  <li>
                    Use automated systems to access, scrape, or interact with the
                    Service except as expressly permitted.
                  </li>
                  <li>
                    Use the Service to systematically reproduce copyrighted books
                    or substantial portions of them.
                  </li>
                  <li>
                    Circumvent any technical or contractual restrictions on the
                    Service.
                  </li>
                  <li>
                    Use the Service to send spam, malware, or unsolicited
                    commercial communications.
                  </li>
                  <li>
                    Resell, sublicense, or commercially exploit the Service or its
                    contents without our express written consent.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">6. Intellectual Property</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    All Readlink branding, software, designs, layouts, and
                    original content are owned by Lykan Sagl or its licensors.
                  </li>
                  <li>The Readlink Dataset is governed by Section 4.</li>
                  <li>
                    Book metadata sourced from the Open Library API and similar
                    public sources is used in accordance with the licenses granted
                    by those sources (typically CC0 or equivalent for Open Library).
                  </li>
                  <li>
                    Cover images displayed in the Service may be subject to
                    publisher copyright; we display them under principles of fair
                    use, fair dealing, and equivalent doctrines, and in accordance
                    with our Content &amp; Copyright Policy.
                  </li>
                  <li>
                    You may not copy, reproduce, distribute, or create derivative
                    works from Readlink&apos;s intellectual property without
                    permission.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">7. Third-Party Content</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    Books, metadata, and cover images displayed via APIs (Open
                    Library and others) may belong to third parties.
                  </li>
                  <li>
                    We do not guarantee the accuracy, legality, or completeness
                    of third-party content.
                  </li>
                  <li>
                    You are responsible for your use of any third-party content
                    surfaced through the Service.
                  </li>
                  <li>
                    If you believe third-party content displayed in Readlink
                    infringes your rights, please follow the procedure in our
                    Content &amp; Copyright Policy.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">8. Termination</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    You may terminate your account at any time through the app or
                    by contacting us.
                  </li>
                  <li>
                    We may suspend or terminate accounts for: material violation
                    of these Terms; repeated copyright infringement; harassment,
                    threats, or doxxing of users; security attacks or attempts to
                    compromise the Service; systematic scraping or automated access
                    in violation of Section 4; fraudulent activity (including in
                    any promotion, referral, or campaign); or behavior that
                    creates legal risk for Readlink or other users. Where
                    reasonable, we will provide notice and an opportunity to remedy
                    before termination.
                  </li>
                  <li>
                    Upon termination: creative content (Section 3.3) is removed
                    from public display in accordance with normal deletion
                    timelines; functional metadata contributions (Section 3.5)
                    remain in the Readlink Dataset; private notes (Section 3.4)
                    are deleted.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">9. Disclaimers</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Readlink is provided &quot;as is&quot; and &quot;as available.&quot;</li>
                  <li>
                    We do not guarantee uninterrupted access, accuracy, or
                    suitability for any purpose.
                  </li>
                  <li>
                    We do not guarantee that book metadata, recommendations, or
                    AI-generated suggestions are accurate or complete.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">10. Limitation of Liability</h3>
                <p className="mt-2 text-muted">
                  To the maximum extent permitted by law, Lykan Sagl is not liable
                  for indirect, incidental, consequential, or punitive damages
                  arising from your use of the Service. Our total liability for any
                  claim arising under these Terms is limited to the greater of (a)
                  the amount you paid Readlink in the 12 months preceding the
                  claim, or (b) CHF 1,000.
                </p>
                <p className="mt-2 text-muted">
                  Nothing in this section limits or excludes liability for death or
                  personal injury caused by negligence, fraud, gross negligence,
                  willful misconduct, or any other liability that cannot be
                  excluded or limited under applicable law, including mandatory
                  consumer protections in your jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">11. Indemnification</h3>
                <p className="mt-2 text-muted">
                  You agree to indemnify and hold harmless Lykan Sagl, its
                  affiliates, and employees from any claims, damages, or expenses
                  arising from: your use of the Service, your contributions, your
                  violation of these Terms, or your violation of any third
                  party&apos;s rights.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">12. Changes to These Terms</h3>
                <p className="mt-2 text-muted">
                  We may update these Terms from time to time. For material
                  changes, we will notify users via in-app notice or email at least
                  30 days before the change takes effect. Continued use of the
                  Service after the effective date of an updated version constitutes
                  acceptance of the changes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  13. Governing Law and Dispute Resolution
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    These Terms are governed by Swiss law, excluding
                    conflict-of-laws principles.
                  </li>
                  <li>
                    Disputes are resolved in the competent courts of Locarno,
                    Ticino, Switzerland, or as otherwise required by mandatory local
                    consumer protection law.
                  </li>
                  <li>
                    Where you are an EU consumer, nothing in these Terms deprives
                    you of mandatory consumer protections under your local law.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">14. Paid Features and In-App Purchases</h3>
                <h4 className="mt-2 font-semibold">14.1 Apple App Store and Google Play</h4>
                <p className="mt-2 text-muted">
                  Paid features, subscriptions, and in-app purchases offered through
                  the iOS or Android app are sold and processed by Apple or Google
                  under their respective terms (Apple Media Services Terms and
                  Conditions; Google Play Terms of Service). When you make such a
                  purchase, you enter into a transaction with Apple or Google, not
                  directly with Lykan Sagl, for the payment portion of that
                  transaction. Their refund, billing, family sharing, and renewal
                  terms govern the payment relationship and supersede anything to
                  the contrary in these Terms.
                </p>
                <p className="mt-2 text-muted">
                  The features and content delivered as a result of that purchase
                  are provided by Lykan Sagl and remain subject to these Terms.
                </p>
                <h4 className="mt-2 font-semibold">14.2 Refunds</h4>
                <p className="mt-2 text-muted">
                  Refund requests for in-app purchases must be directed to Apple or
                  Google through their respective support channels — we cannot
                  directly refund a transaction Apple or Google processed. Where
                  required by mandatory consumer protection law (including the EU
                  right of withdrawal for digital content), we will honor your
                  statutory rights regardless of the store&apos;s policy.
                </p>
                <h4 className="mt-2 font-semibold">14.3 Subscriptions</h4>
                <p className="mt-2 text-muted">
                  Subscriptions purchased through Apple or Google auto-renew under
                  the terms of those stores until you cancel them in your Apple ID
                  or Google Play account settings. Canceling within Readlink does
                  not cancel the underlying store subscription. To manage or cancel
                  your subscription, please use the subscription settings in your
                  Apple ID (App Store) or Google Play account.
                </p>
                <h4 className="mt-2 font-semibold">14.4 RevenueCat</h4>
                <p className="mt-2 text-muted">
                  We use RevenueCat, Inc. to validate and manage subscription
                  entitlements across platforms. RevenueCat acts as our processor for
                  this purpose. See our Privacy Policy for the data flows involved.
                </p>
                <h4 className="mt-2 font-semibold">
                  14.5 Web Subscriptions and Stripe
                </h4>
                <p className="mt-2 text-muted">
                  Premium subscriptions purchased on the Readlink website are sold
                  and processed by Lykan Sagl as merchant of record, with payments
                  handled by Stripe Payments Europe, Limited or its affiliates
                  (&quot;Stripe&quot;) acting as our payment processor. When you
                  subscribe on the website, you enter into the subscription contract
                  directly with Lykan Sagl under these Terms; Stripe&apos;s role is
                  limited to processing the transaction under its own terms applicable
                  to payers.
                </p>
                <p className="mt-2 text-muted">
                  Web subscriptions auto-renew at the cadence selected at checkout
                  (monthly or annual) until you cancel. You may cancel a web
                  subscription at any time through your Readlink account settings or
                  by contacting us at legal@readlink.app. Cancellation takes effect at
                  the end of the current billing period; you retain access to Premium
                  features through that period.
                </p>
                <p className="mt-2 text-muted">
                  Refunds for web subscriptions are handled directly by Readlink. We
                  will honor refund requests where required by mandatory consumer
                  protection law, including the European Union right of withdrawal for
                  digital content where applicable, and otherwise consider refund
                  requests on a case-by-case basis. Contact legal@readlink.app to
                  request a refund.
                </p>
                <p className="mt-2 text-muted">
                  We use RevenueCat, Inc. to maintain a single, unified Premium
                  entitlement across our website and (once available) our mobile
                  applications. If you subscribe on the website and later sign in on
                  a mobile device with the same Readlink account, your Premium
                  entitlement is recognized on both surfaces. RevenueCat does not
                  handle payment funds; its role is described in Section 14.4 and in
                  our Privacy Policy.
                </p>
                <h4 className="mt-2 font-semibold">
                  14.6 Premium and Time-Limited Campaigns
                </h4>
                <p className="mt-2 text-muted">
                  From time to time, Readlink runs time-limited campaigns,
                  promotions, or contests with their own published rules and entry
                  windows. Subscribing to Premium — whether before, during, or after
                  such a campaign, and whether on the website (Section 14.5) or
                  through Apple or Google (Sections 14.1–14.3) — gives you access to
                  the Premium product features for the term of your subscription, and
                  is governed by these Terms together with the relevant billing terms.
                </p>
                <p className="mt-2 text-muted">
                  Purchasing or holding a Premium subscription does not, by itself,
                  enroll you in any campaign. Entry into a campaign, eligibility for
                  any campaign prize or reward, and the effect (if any) that your
                  Premium subscription has on campaign mechanics are governed
                  exclusively by the published rules of that campaign in effect at the
                  time you participate. Where a campaign&apos;s published rules describe
                  a benefit, multiplier, or bonus tied to Premium status, that benefit
                  applies only within the entry window and under the conditions
                  specified in those rules.
                </p>
                <p className="mt-2 text-muted">
                  Campaigns may include a free alternative entry path for participants
                  who do not subscribe to Premium; that path is described in the
                  relevant campaign rules. The existence of such an alternative does
                  not entitle you to a refund of a Premium subscription you have
                  separately chosen to purchase.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">15. Contact</h3>
                <p className="mt-2 text-muted">
                  For questions about these Terms: legal@readlink.app
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-t border-border pt-10">
            <h2
              id="privacy"
              className="scroll-mt-24 text-2xl font-semibold tracking-tight"
            >
              Privacy Policy
            </h2>
            <p className="text-sm text-muted">
              Effective date: March 2, 2026
              <br />
              Last updated: May 9, 2026
              <br />
              Controller: Lykan Sagl, Ai Salici, 6633 Lavertezzo, Switzerland
              <br />
              Contact email: legal@readlink.app
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">1. What Data We Collect</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Account info: email, login data via Clerk.</li>
                  <li>
                    Content you create: reviews, posts, comments, photos you upload
                    to the feed, private notes, OCR text fragments you save.
                  </li>
                  <li>
                    Functional contributions: corrections and additions to book
                    metadata.
                  </li>
                  <li>
                    Usage info: app interactions, device info, approximate location
                    derived from IP.
                  </li>
                  <li>Cookies &amp; tracking: see Cookie Policy.</li>
                  <li>
                    Payment data (referrers opting into cash payouts only): full
                    legal name, address, government-issued identification, bank or
                    card details, tax identifiers, and additional information
                    required by Stripe for identity verification,
                    anti-money-laundering screening, and tax reporting. This data
                    is collected by Stripe, Inc. and its affiliates through
                    Stripe&apos;s hosted onboarding flow (Stripe Connect Express)
                    when you opt into cash commissions under our referral program.
                    By opting in, you also enter into a direct contractual
                    relationship with Stripe and are subject to Stripe&apos;s
                    Services Agreement, Connected Account Agreement, and Privacy
                    Policy.
                  </li>
                  <li>
                    In-app purchase and subscription data (paid features only): when
                    you purchase a subscription or in-app feature on iOS or Android,
                    the transaction is processed by Apple (App Store) or Google
                    (Google Play) under their respective billing terms. We do not
                    receive your full payment details (card number, billing address,
                    etc.) — Apple and Google retain that data and share with us only
                    the limited transaction information necessary to grant you the
                    features you purchased, including a transaction identifier,
                    product identifier, purchase and renewal timestamps, and
                    entitlement status. We use RevenueCat, Inc. as our subscription
                    management infrastructure to validate purchases, manage
                    entitlements across platforms, and track subscription lifecycle
                    events. RevenueCat receives the same limited transaction data
                    described above plus a pseudonymous user identifier we generate.
                  </li>
                </ul>
                <p className="mt-2 text-muted">
                  We do not retain photos used for OCR. The source image is discarded
                  once text extraction is complete; only the text fragment you
                  select is stored.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">2. How We Use Your Data</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Provide, maintain, and improve Readlink.</li>
                  <li>
                    Display your public content to other users in line with your
                    privacy settings.
                  </li>
                  <li>
                    Operate features such as recommendations, search, and the social
                    graph.
                  </li>
                  <li>Maintain the Readlink Dataset of book metadata.</li>
                  <li>
                    Communicate with you about your account, and (with your consent)
                    send optional updates or marketing.
                  </li>
                  <li>Analyze app usage to improve the Service.</li>
                  <li>
                    Detect, prevent, and respond to fraud, abuse, scraping, and
                    security incidents.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">3. Legal Basis (GDPR / FADP)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    <strong>Performance of a contract</strong> — to provide the
                    Service you signed up for, and to process referral commissions for
                    participants in the referral program.
                  </li>
                  <li>
                    <strong>Legitimate interest</strong> — to operate, secure, and
                    improve the Service, including dataset maintenance, abuse
                    prevention, and analytics.
                  </li>
                  <li>
                    <strong>Consent</strong> — for marketing communications and
                    optional features.
                  </li>
                  <li>
                    <strong>Legal obligation</strong> — to comply with applicable law,
                    including anti-money-laundering, sanctions screening, and tax
                    reporting obligations triggered by referral commission payouts.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">4. Sharing &amp; Transfers</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    We share data with service providers strictly as needed to
                    operate the Service: Clerk (authentication), Vercel (hosting),
                    Neon (database), Stripe (processing payments for web subscriptions
                    and identity verification for the referral program&apos;s cash
                    payout track), RevenueCat (subscription management and entitlement
                    validation across the website and in-app purchases), Cookiebot
                    (cookie consent management), and analytics providers (planned).
                  </li>
                  <li>We do not sell your personal data.</li>
                  <li>
                    <strong>Payment data and international payout transfers:</strong>{" "}
                    For referrers who opt into cash payouts under our referral
                    program, payment-related personal data is shared with Stripe,
                    Inc. and its affiliates, banking partners, and intermediary
                    financial networks. Cash payouts are processed through Stripe
                    Connect Express. Cross-border payouts may involve correspondent
                    banks and payment networks in the recipient&apos;s country. Stripe
                    Connect Express onboarding, dashboard access, and feature
                    availability vary by country and are subject to Stripe&apos;s local
                    terms. Stripe operates as an independent controller for portions
                    of this data under its own privacy policy, in addition to its role
                    as our processor for other portions. See the Referral Program
                    Terms for further detail.
                  </li>
                  <li>
                    <strong>Web subscription processing via Stripe:</strong> When you
                    purchase a Premium subscription on the Readlink website, Stripe
                    processes the payment as our processor under Swiss data protection
                    law and the GDPR. Stripe receives the billing email, billing
                    address, and tokenized payment instrument details necessary to
                    complete and renew the transaction; we receive only the limited
                    subscription metadata described in Section 1. Stripe may further
                    share transaction data with card networks, issuing banks, and
                    fraud-prevention partners as necessary to authorize and settle the
                    payment. Stripe operates from the European Union (Stripe Payments
                    Europe, Limited) and, for cross-border processing flows internal to
                    Stripe, relies on its own legal transfer mechanisms (standard
                    contractual clauses, the EU-US Data Privacy Framework). For further
                    information about how Stripe handles your data, see Stripe&apos;s
                    Privacy Policy.
                  </li>
                  <li>
                    <strong>In-app purchases via Apple and Google:</strong> When you
                    purchase a subscription or paid feature through the iOS or
                    Android app, your purchase is processed directly by Apple Inc.
                    through the App Store or Google LLC through Google Play, under
                    those companies&apos; own terms and privacy policies. Apple and
                    Google act as independent controllers of your full payment data,
                    which we do not receive. Limited transaction metadata (product,
                    timestamp, entitlement status, anonymized transaction identifier)
                    is shared with us and with RevenueCat, Inc., which we use to
                    manage subscription lifecycle and entitlements across platforms.
                    For information about how Apple and Google handle your payment
                    data, see Apple&apos;s Privacy Policy and Google&apos;s Privacy Policy
                    directly.
                  </li>
                  <li>
                    International transfers are safeguarded via standard contractual
                    clauses, the EU-US Data Privacy Framework where applicable, and
                    Switzerland&apos;s adequacy framework.
                  </li>
                  <li>
                    We may disclose data where required by valid legal process, to
                    enforce our Terms, or to protect the rights and safety of users.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">5. Your Rights</h3>
                <p className="mt-2 text-muted">You have the right to:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction of inaccurate data.</li>
                  <li>
                    Request deletion of your data, subject to limits described in our
                    Terms (functional metadata contributions remain in the Readlink
                    Dataset).
                  </li>
                  <li>Object to or restrict certain processing.</li>
                  <li>
                    Withdraw consent at any time where processing is based on
                    consent.
                  </li>
                  <li>
                    Lodge a complaint with the Swiss Federal Data Protection and
                    Information Commissioner (FDPIC) or your local data protection
                    authority.
                  </li>
                  <li>Data portability where applicable.</li>
                </ul>
                <p className="mt-2 text-muted">
                  To exercise any of these rights, contact legal@readlink.app.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">6. Retention</h3>
                <p className="mt-2 text-muted">
                  We retain personal data only as long as necessary to operate the
                  Service and comply with legal obligations. Specifically:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                  <li>
                    <strong>Account data:</strong> retained while your account is
                    active, deleted on termination.
                  </li>
                  <li>
                    <strong>Public creative content:</strong> removed from public
                    display upon deletion. Residual copies in encrypted backups are
                    retained for up to 90 days, after which they are overwritten in
                    the normal backup rotation.
                  </li>
                  <li>
                    <strong>Private notes and OCR fragments:</strong> deleted on
                    account termination.
                  </li>
                  <li>
                    <strong>Functional metadata contributions:</strong> retained as
                    part of the Readlink Dataset per the Terms of Service.
                  </li>
                  <li>
                    <strong>Logs and security data:</strong> retained for limited
                    periods consistent with security and legal needs.
                  </li>
                  <li>
                    <strong>Payment and KYC data:</strong> retained by Stripe and by
                    Readlink for the periods required by applicable
                    anti-money-laundering, tax, and accounting law, typically up to 10
                    years after the last payout, regardless of account termination.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">7. Security</h3>
                <p className="mt-2 text-muted">
                  We use reasonable technical and organizational measures to protect
                  your data, including encryption in transit, access controls, and
                  provider-level security from our subprocessors. No system is perfectly
                  secure; we will notify you of significant breaches as required by
                  applicable law.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">8. Children</h3>
                <p className="mt-2 text-muted">
                  The Service is not intended for anyone under 16. We do not knowingly
                  collect personal data from anyone under 16. If we become aware that we
                  have collected data from a person under 16 without verified parental
                  consent in jurisdictions where that is permissible, we will delete
                  it. If you believe a person under 16 has provided us data, please
                  contact legal@readlink.app.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">9. Changes to This Policy</h3>
                <p className="mt-2 text-muted">
                  We may update this Privacy Policy from time to time. For material
                  changes — including changes to the categories of data we collect, the
                  purposes of processing, the legal basis, retention periods, or the list
                  of subprocessors — we will notify you via in-app notice or email at
                  least 30 days before the change takes effect. The &quot;Last
                  updated&quot; date above reflects the most recent revision.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-t border-border pt-10">
            <h2
              id="cookies"
              className="scroll-mt-24 text-2xl font-semibold tracking-tight"
            >
              Cookie Policy
            </h2>
            <p className="text-sm text-muted">
              Effective date: March 2, 2026
              <br />
              Last updated: May 9, 2026
            </p>
            <h3 className="font-semibold">What cookies we use</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
              <li>
                Essential cookies — required for the Service to function
                (authentication via Clerk, session management, security). These are
                always active because the Service cannot operate without them.
              </li>
              <li>
                Analytics cookies — when activated, used to understand how the Service
                is used (current or future providers may include PostHog and Google
                Analytics). These are only set after you give consent through our
                cookie banner.
              </li>
              <li>
                Functionality cookies — used to remember preferences (e.g., theme,
                language). Set only after consent where required by law.
              </li>
            </ul>
            <h3 className="mt-2 font-semibold">Consent</h3>
            <p className="text-muted">
              Where required by the EU ePrivacy Directive, Swiss data protection law,
              or other applicable rules, we request your consent before setting any
              non-essential cookies. You can change your preferences at any time
              through the cookie banner or your account settings.
            </p>
            <p className="text-muted">
              If you decline non-essential cookies, the Service will still work; some
              features and our ability to improve the Service will be limited.
            </p>
            <h3 className="mt-2 font-semibold">Your controls</h3>
            <ul className="list-disc space-y-1 pl-6 text-muted">
              <li>Adjust your consent through the cookie banner at any time.</li>
              <li>
                Block or delete cookies through your browser settings (note that
                disabling essential cookies may prevent the Service from working).
              </li>
              <li>
                See the Privacy Policy for details on how we process the data collected
                via cookies.
              </li>
            </ul>
            <h3 className="mt-2 font-semibold">Live cookie list</h3>
            <p className="text-muted">
              A current list of all cookies and similar technologies used on Readlink
              — including provider, purpose, duration, and category — is available
              through our cookie banner declaration.
            </p>
          </section>

          <section className="space-y-4 border-t border-border pt-10">
            <h2
              id="content-copyright"
              className="scroll-mt-24 text-2xl font-semibold tracking-tight"
            >
              Content &amp; Copyright Policy
            </h2>
            <p className="text-sm text-muted">
              Effective date: March 2, 2026
              <br />
              Last updated: May 9, 2026
            </p>
            <h3 className="font-semibold">Ownership and License</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
              <li>Users retain ownership of content they upload.</li>
              <li>
                License grants to Readlink are described in detail in Section 3 of the
                Terms of Service.
              </li>
              <li>
                Users must only contribute content they own or have rights to share.
              </li>
              <li>
                Public sharing and social media reposting are permitted under the
                licenses described in the Terms.
              </li>
            </ul>
            <h3 className="mt-2 font-semibold">Third-Party Content</h3>
            <ul className="list-disc space-y-1 pl-6 text-muted">
              <li>
                Cover images, book descriptions, and other content surfaced via APIs
                may be subject to third-party rights.
              </li>
              <li>
                Readlink displays such content on a good-faith basis under principles of
                fair use, fair dealing, quotation, and equivalent doctrines.
              </li>
              <li>We act expeditiously on valid takedown requests.</li>
            </ul>
            <h3 className="mt-2 font-semibold">Copyright Takedown Procedure</h3>
            <p className="text-muted">
              If you believe content available through Readlink infringes your copyright
              or other intellectual property rights, send a Takedown Notice to
              legal@readlink.app including:
            </p>
            <ol className="list-decimal space-y-1 pl-6 text-muted">
              <li>Your contact information (name, address, email, phone).</li>
              <li>
                Identification of the work you claim is infringed (title, author, ISBN
                where relevant).
              </li>
              <li>
                The exact location of the allegedly infringing material on Readlink
                (URL, profile, post, or precise description).
              </li>
              <li>
                A statement that you have a good-faith belief the use is not authorized
                by the rights holder, an agent, or the law.
              </li>
              <li>
                A statement, made under penalty of perjury or its civil-law equivalent,
                that the information is accurate and that you are the rights holder or
                authorized to act on the rights holder&apos;s behalf.
              </li>
              <li>Your physical or electronic signature.</li>
            </ol>
            <p className="text-muted">
              Readlink operates a notice-and-action procedure under Article 16 of the
              EU Digital Services Act (Regulation (EU) 2022/2065), Swiss
              intermediary-liability principles, and equivalent doctrines in other
              jurisdictions where we offer the Service. We are a Swiss-established
              service and do not rely on the U.S. Digital Millennium Copyright Act safe
              harbor, although our procedure is designed to be compatible with
              DMCA-style notices submitted by U.S. rights holders.
            </p>
            <p className="text-muted">We will:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted">
              <li>Acknowledge receipt of valid notices without undue delay.</li>
              <li>
                Process notices in a timely, diligent, non-arbitrary, and objective
                manner.
              </li>
              <li>
                Where the notice is sufficiently substantiated, remove or disable access
                to the allegedly infringing material expeditiously and provide a clear
                statement of reasons to the user who posted the content, including the
                legal basis for the action and information about available redress.
              </li>
              <li>
                Notify the affected user and provide them an opportunity to file a
                counter-notice through the procedure described below.
              </li>
              <li>
                Maintain a record of all notices and actions for the period required by
                applicable law.
              </li>
              <li>
                Track repeat infringers and suspend or terminate accounts associated with
                repeated, manifestly illegal content per Article 23 of the Digital
                Services Act.
              </li>
            </ul>
            <h3 className="mt-2 font-semibold">Counter-Notice</h3>
            <p className="text-muted">
              If you believe content you posted was wrongly removed, you may submit a
              counter-notice to legal@readlink.app including: your contact information,
              identification of the removed content, a statement under penalty of perjury
              or civil-law equivalent that you believe the content was removed in error,
              and your consent to legal jurisdiction in the courts of Locarno, Ticino,
              Switzerland.
            </p>
            <h3 className="mt-2 font-semibold">Repeat Infringers</h3>
            <ul className="list-disc space-y-1 pl-6 text-muted">
              <li>
                Accounts that are the subject of multiple valid takedown notices may be
                suspended or terminated at our discretion.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
