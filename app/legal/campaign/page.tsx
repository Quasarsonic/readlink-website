import Link from "next/link";

export default function CampaignRulesPage() {
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
            Readlink — The 200 Founders Edition: Official Rules
          </h1>
        </div>

        <div className="space-y-12">
          <section className="space-y-4">
            <p className="text-sm text-muted">
              Effective date: [DATE — to be filled in before publish; ≥3 days
              before campaign opens]
              <br />
              Campaign window: [OPEN DATE] through [CLOSE DATE], inclusive.
              Both dates UTC.
            </p>
            <p>
              Promoter: Lykan Sagl, Ai Salici, 6633 Lavertezzo, Switzerland
              (&quot;Readlink,&quot; &quot;we,&quot; &quot;us&quot;).
            </p>
            <p>Governing law: Swiss law.</p>
            <p className="font-semibold">
              NO PURCHASE NECESSARY TO ENTER. A FREE ALTERNATIVE ENTRY METHOD IS
              AVAILABLE. SEE SECTION 8. VOID WHERE PROHIBITED.
            </p>
            <p>
              By participating, you agree to be bound by these Official Rules
              and the decisions of the Promoter, which are final and binding.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              1. Eligibility
            </h2>

            <div>
              <h3 className="font-semibold">1.1 Age and account</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  You must be at least 16 years of age at the time of entry
                  (matches Readlink&apos;s Terms of Service). By entering, you
                  represent and warrant that you meet this age requirement.
                  Readlink does not independently verify participant age; any
                  entry or prize obtained in violation of this requirement is
                  void and subject to forfeiture under Section 6.
                </li>
                <li>
                  You must have a valid Readlink account at readlink.app.
                </li>
                <li>
                  Your profile must be complete (display name, handle, profile
                  photo) to qualify for entry — see Section 2.1.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">1.2 Geographic eligibility</h3>
              <p className="mt-2 text-muted">
                The campaign is open to residents of all countries where
                Readlink operates, except jurisdictions where the campaign
                would qualify as a regulated lottery, sweepstakes, or gambling
                activity. The campaign is explicitly void in the following
                jurisdictions:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  United States: open in all states subject to state-level
                  restrictions; the No-Purchase-Necessary alternative path
                  (Section 8) ensures compliance with state laws requiring
                  consideration-free entry.
                </li>
                <li>Canada: open in all provinces except Quebec.</li>
                <li>France, Belgium: void.</li>
                <li>Italy: void.</li>
                <li>Brazil: void.</li>
                <li>India: void.</li>
                <li>Saudi Arabia, United Arab Emirates: void.</li>
                <li>
                  Specific Swiss cantons with promotional-contest-specific
                  rules: subject to verification before campaign open.
                </li>
              </ul>
              <p className="mt-2 text-muted">
                The Promoter reserves the right to add or remove jurisdictions
                from the exclusion list at any time if regulatory analysis
                warrants.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">1.3 Excluded persons</h3>
              <p className="mt-2 text-muted">
                The following are not eligible to participate:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Employees, officers, directors, and contractors of Lykan Sagl
                  and their immediate family members (spouse, parents, children,
                  siblings, and their respective spouses).
                </li>
                <li>
                  Persons living in the same household as any of the above.
                </li>
                <li>
                  Anyone professionally involved in the development, marketing,
                  or administration of the campaign.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              2. How to enter
            </h2>
            <p className="text-muted">
              There are two paths to enter: a Standard Entry path (via Readlink
              platform activity) and a No-Purchase-Necessary Alternative Entry
              path (described in Section 8).
            </p>

            <div>
              <h3 className="font-semibold">2.1 Standard entry</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Sign up for a Readlink account at readlink.app during the
                  campaign window.
                </li>
                <li>
                  Complete your profile (display name, handle, profile photo).
                </li>
                <li>
                  You are automatically entered when your profile is complete.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">2.2 Earning points</h3>
              <p className="mt-2 text-muted">
                Once entered, you earn points through five actions:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-4 font-semibold">Action</th>
                      <th className="py-2 pr-4 font-semibold">Points</th>
                      <th className="py-2 font-semibold">Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">
                        Create your library (25 books)
                      </td>
                      <td className="py-2 pr-4">500 pts</td>
                      <td className="py-2">Library reaches 25 books</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Bring a reader</td>
                      <td className="py-2 pr-4">1,000 pts</td>
                      <td className="py-2">
                        Someone signs up via your referral link and adds 5+
                        books within 72 hours
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Your referral goes deep</td>
                      <td className="py-2 pr-4">500 pts bonus</td>
                      <td className="py-2">
                        A user you referred reaches 25 books in their library
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">
                        Referral converts to Premium
                      </td>
                      <td className="py-2 pr-4">1,500 pts bonus</td>
                      <td className="py-2">
                        A user you referred subscribes to Premium
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Go Premium (multiplier)</td>
                      <td className="py-2 pr-4">
                        2× all points earned, plus 2 Golden Tickets
                      </td>
                      <td className="py-2">You subscribe to Premium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-muted">
                Golden Tickets are gift codes that grant the recipient free
                Premium access for a defined period (default: 1 month).
                Recipients of Golden Tickets also count as referrals for the
                gifter under the &quot;Bring a reader&quot; action.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2.3 Entry limit</h3>
              <p className="mt-2 text-muted">
                One entry per person. Multiple accounts, automated entries,
                accounts created by third parties on a participant&apos;s behalf,
                or any other attempt to circumvent the one-entry-per-person
                limit are grounds for disqualification (Section 6).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              3. Prizes
            </h2>

            <div>
              <h3 className="font-semibold">3.1 Prize tiers</h3>
              <p className="mt-2 text-muted">
                Final leaderboard positions at the close of the campaign window
                lock each participant&apos;s prize tier. All prizes are truly
                lifetime (no sunset, no cap, no expiry).
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[40rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-4 font-semibold">
                        Rank at close
                      </th>
                      <th className="py-2 pr-4 font-semibold">Tier name</th>
                      <th className="py-2 font-semibold">Prize</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">#1 – #3</td>
                      <td className="py-2 pr-4">Top Finisher</td>
                      <td className="py-2">
                        50% lifetime referral commission rate + permanent
                        featured spot on the Readlink homepage hero section
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">#4 – #20</td>
                      <td className="py-2 pr-4">Top 20 Finisher</td>
                      <td className="py-2">
                        35% lifetime referral commission rate + permanent
                        featured spot on the Readlink homepage hero section
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">#21 – #200</td>
                      <td className="py-2 pr-4">The Shelf</td>
                      <td className="py-2">
                        20% lifetime referral commission rate + permanent
                        featured spot on the Readlink homepage hero section
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Participated, didn&apos;t finish top 200, qualified per
                        Section 3.2
                      </td>
                      <td className="py-2 pr-4">Participant</td>
                      <td className="py-2">
                        10% lifetime referral commission rate
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">3.2 Participant tier qualification</h3>
              <p className="mt-2 text-muted">
                To qualify for the Participant tier (10% lifetime), a user must,
                before the campaign close date:
              </p>
              <p className="mt-2 text-muted">
                (a) Have a complete Readlink profile (display name, handle,
                profile photo); AND
              </p>
              <p className="text-muted">
                (b) Add at least 25 books to their Readlink library.
              </p>
              <p className="mt-2 text-muted">
                Users who sign up but do not meet both (a) and (b) are not
                entered into the campaign and do not receive any campaign
                commission entitlement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                3.3 Commission rate — what it applies to
              </h3>
              <p className="mt-2 text-muted">
                The lifetime commission rate applies to: every referred user
                who subscribes to Readlink Premium, paid for the duration of
                that referred user&apos;s Premium subscription, at the
                percentage of the subscription revenue defined by the
                participant&apos;s tier.
              </p>
              <p className="mt-2 text-muted">
                Commissions are credited to the participant&apos;s Readlink
                commission balance and convertible to: (i) Premium credit applied
                against their own subscription, (ii) general in-app credit, or
                (iii) cash payout via Stripe Express subject to a minimum payout
                threshold (CHF 100) and Stripe Express identity-verification
                (KYC) requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.4 Tie-breaker</h3>
              <p className="mt-2 text-muted">
                If two or more participants are tied at exactly the same
                points total at a tier boundary, the tie-breaker is the earliest
                timestamp at which each participant reached that point total.
                The participant who reached it earliest wins the higher rank.
              </p>
              <p className="mt-2 text-muted">
                If the earliest-timestamp data is unavailable, the secondary
                tie-breaker is the participant with the higher count of
                &quot;Bring a reader&quot; actions (most referrals). Final
                tertiary tie-breaker is at the Promoter&apos;s sole discretion.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.5 Hero-section placement</h3>
              <p className="mt-2 text-muted">
                Top 200 finishers receive a permanent placement on the Readlink
                homepage hero section, displaying their profile photo, display
                name, handle, and rank. The placement is clickable through to
                their readlink.app/l/[handle] library page.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.6 Forfeiture of prize</h3>
              <p className="mt-2 text-muted">
                The Promoter may revoke any prize tier (commission rate and/or
                hero placement) if the participant:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Violates the Readlink Terms of Service in a material way.
                </li>
                <li>
                  Is found, after the fact, to have gained their rank through
                  fraud or any prohibited conduct under Section 6.
                </li>
                <li>Voluntarily deletes their Readlink account.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">3.7 Prize non-transferability</h3>
              <p className="mt-2 text-muted">
                Campaign prizes are tied to the participant&apos;s Readlink
                account and are not transferable to another account or person.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.8 Tax responsibility</h3>
              <p className="mt-2 text-muted">
                Participants are solely responsible for any taxes owed on
                commissions earned. Readlink may issue tax documentation where
                required by law.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.9 Substitution</h3>
              <p className="mt-2 text-muted">
                The Promoter reserves the right to substitute any prize element
                with one of equivalent or greater value if the original is
                unavailable.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              4. The leaderboard and ranking
            </h2>

            <div>
              <h3 className="font-semibold">4.1 Real-time ranking</h3>
              <p className="mt-2 text-muted">
                Rankings update in approximately real time during the campaign
                window based on points accrued through actions defined in
                Section 2.2.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">4.2 Closing snapshot</h3>
              <p className="mt-2 text-muted">
                At the campaign close date and time, the Promoter takes a
                definitive snapshot of all participants&apos; points totals. This
                snapshot is the basis for final tier assignments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">4.3 Adjustments</h3>
              <p className="mt-2 text-muted">
                The Promoter reserves the right to adjust point totals before
                the closing snapshot if anti-fraud detection (Section 6)
                requires it. Post-snapshot adjustments are only made in cases
                of detected fraud or technical error.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              5. Phase 1 / Phase 2 referral program structure
            </h2>
            <p className="text-muted">
              During the campaign window (&quot;Phase 1&quot;), referral
              commissions exist only as campaign prizes. There is no general,
              open-to-everyone referral program during Phase 1.
            </p>
            <p className="text-muted">
              After campaign close (&quot;Phase 2&quot;), Readlink will launch a
              general referral program open to all users. Phase 2 terms will be
              published separately before Phase 2 launches.
            </p>
            <p className="text-muted">
              Campaign-tier participants (Top Finisher, Top 20 Finisher, The
              Shelf, Participant) keep their campaign-earned commission rates
              indefinitely under the Phase 2 program. Their rates are not
              adjusted, reduced, or replaced by the Phase 2 standard rate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              6. Prohibited conduct and disqualification
            </h2>
            <p className="text-muted">
              The Promoter may disqualify any participant, revoke any prize
              tier, and reverse any accrued points or commissions if the
              participant engages in any of the following:
            </p>

            <div>
              <h3 className="font-semibold">6.1 Account and identity fraud</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Creating multiple Readlink accounts to gain multiple entries.
                </li>
                <li>
                  Using fake, automated, or third-party-controlled accounts.
                </li>
                <li>
                  Misrepresenting identity in profile (false display name,
                  stolen profile photo, impersonation).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6.2 Referral fraud</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Self-referral via secondary accounts, alternate devices,
                  family or household members, or coordinated colluding
                  accounts.
                </li>
                <li>
                  Referrals from accounts that are inactive, automated, or
                  created solely for the purpose of inflating referral counts.
                </li>
                <li>
                  Click-laundering or any attempt to route legitimate organic
                  signups through a referral link to claim attribution.
                </li>
                <li>
                  Coordinating with other participants to refer each other in
                  cycles.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6.3 System gaming</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Using bots, scripts, or any automated tools to perform campaign
                  actions.
                </li>
                <li>
                  Exploiting bugs in the points system in a manner the
                  participant knew or should have known was unintended.
                </li>
                <li>
                  Attempting to manipulate the leaderboard through any means
                  other than legitimately earning points.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6.4 Other grounds</h3>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Violating any other section of these Rules or the Readlink
                  Terms of Service.
                </li>
                <li>
                  Behavior that the Promoter, in its sole discretion, determines
                  is contrary to the spirit of the campaign.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6.5 Detection methods</h3>
              <p className="mt-2 text-muted">
                The Promoter uses a combination of fingerprint, IP,
                payment-method, email-domain, behavioral, and graph-analysis
                heuristics to detect prohibited conduct. Detection rules and
                thresholds are not publicly disclosed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">6.6 Consequences</h3>
              <p className="mt-2 text-muted">
                Consequences of detected prohibited conduct, at the
                Promoter&apos;s discretion, include any or all of: points
                reversal, commission balance reversal, removal from the
                leaderboard, disqualification from the campaign, revocation of
                prize tier, and account suspension or termination.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              7. Privacy and publicity
            </h2>

            <div>
              <h3 className="font-semibold">7.1 Data collected</h3>
              <p className="mt-2 text-muted">
                The Promoter collects the following data from participants for
                campaign purposes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>Account information (provided at signup via Clerk).</li>
                <li>
                  Profile information (display name, handle, profile photo).
                </li>
                <li>
                  Campaign activity (points accrued, actions completed,
                  referrals made, leaderboard position over time).
                </li>
                <li>
                  Anti-fraud telemetry as needed for Section 6 enforcement.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">7.2 Use of data</h3>
              <p className="mt-2 text-muted">
                Campaign data is used to operate the campaign, compute rankings,
                detect fraud, award prizes, and display the participant on the
                leaderboard and homepage hero section.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7.3 Publicity rights</h3>
              <p className="mt-2 text-muted">
                By participating, the participant consents to the use of their
                display name, handle, profile photo, and rank in:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  The leaderboard at readlink.app/launch and the homepage hero
                  section during the campaign.
                </li>
                <li>
                  Marketing materials related to the campaign for the duration
                  of the campaign and for 12 months after campaign close.
                </li>
                <li>
                  Permanent display on the Readlink homepage hero section if
                  the participant is a top 200 finisher.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">7.4 Data retention</h3>
              <p className="mt-2 text-muted">
                Campaign data is retained for the duration of the campaign and
                for the longer of: (i) the lifetime of the participant&apos;s
                Readlink account, or (ii) such period as is necessary to
                administer the lifetime commission prize and comply with
                applicable legal and tax requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7.5 Reference to Privacy Policy</h3>
              <p className="mt-2 text-muted">
                All processing of personal data under this campaign is also
                governed by the Readlink Privacy Policy at{" "}
                <Link href="/legal#privacy" className="underline hover:text-foreground">
                  readlink.app/legal
                </Link>
                . Where these Rules and the Privacy Policy diverge, the more
                protective provision applies.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              8. No-Purchase-Necessary alternative entry
            </h2>
            <p className="text-muted">
              To comply with applicable laws in jurisdictions where any element
              of the campaign could be construed as requiring consideration, an
              alternative entry path is available.
            </p>

            <div>
              <h3 className="font-semibold">8.1 What the alternative is</h3>
              <p className="mt-2 text-muted">
                Premium subscription doubles all points earned (&quot;Go
                Premium&quot; multiplier in Section 2.2). This creates a paid
                path that could be interpreted as consideration in some
                jurisdictions. The No-Purchase-Necessary alternative allows any
                participant to receive an equivalent points multiplier without
                subscribing to Premium.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">8.2 How to claim</h3>
              <p className="mt-2 text-muted">
                To claim the No-Purchase-Necessary points multiplier, send an
                email to legal@readlink.app with:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>Subject line: &quot;NPN Campaign Entry&quot;</li>
                <li>Your Readlink handle.</li>
                <li>
                  A handwritten declaration (scanned or photographed) stating:
                  &quot;I request the No-Purchase-Necessary alternative entry to
                  the Readlink 200 Founders Edition campaign,&quot; signed and
                  dated.
                </li>
              </ul>
              <p className="mt-2 text-muted">
                Upon receipt and verification, the Promoter will apply the
                equivalent of the Premium 2× multiplier to the participant&apos;s
                account for one calendar month from grant date, renewable
                monthly by re-sending the request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">8.3 No other distinction</h3>
              <p className="mt-2 text-muted">
                A participant entering via the No-Purchase-Necessary path has
                equal eligibility for all campaign tiers and prizes as a
                participant who subscribed to Premium.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              9. Disputes and termination
            </h2>

            <div>
              <h3 className="font-semibold">
                9.1 Promoter&apos;s right to modify or terminate
              </h3>
              <p className="mt-2 text-muted">
                The Promoter reserves the right to terminate, modify, or suspend
                the campaign at any time for force majeure, fraud at scale,
                technical failure that compromises campaign integrity, or any
                legal or regulatory cause. Notice of any such action will be
                posted at readlink.app/legal/campaign within 24 hours.
              </p>
              <p className="mt-2 text-muted">
                If the campaign is terminated early, prize tiers are assigned
                based on leaderboard standings at the time of termination,
                subject to a minimum campaign duration of 7 days from open.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">9.2 Decisions final</h3>
              <p className="mt-2 text-muted">
                The Promoter&apos;s decisions on eligibility, ranking, prize
                awards, and the application of these Rules are final and binding
                on all participants.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">9.3 Disputes</h3>
              <p className="mt-2 text-muted">
                Disputes arising under these Rules are governed by Swiss law and
                resolved in the courts of Locarno, Switzerland.
              </p>
              <p className="mt-2 text-muted">
                For consumer participants in jurisdictions where mandatory
                consumer-protection laws apply, those laws are not waived by
                these Rules.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              10. Miscellaneous
            </h2>

            <div>
              <h3 className="font-semibold">10.1 Severability</h3>
              <p className="mt-2 text-muted">
                If any provision of these Rules is found to be invalid or
                unenforceable, the remaining provisions remain in full force.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">10.2 No waiver</h3>
              <p className="mt-2 text-muted">
                The Promoter&apos;s failure to enforce any provision of these
                Rules in any specific case does not waive the Promoter&apos;s
                right to enforce that provision in other cases.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">10.3 Independent campaign</h3>
              <p className="mt-2 text-muted">
                This campaign is not sponsored, endorsed, administered by, or
                associated with Apple Inc., Google LLC, Meta Platforms Inc., or
                any other third-party platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">10.4 Contact</h3>
              <p className="mt-2 text-muted">
                For questions about these Rules: legal@readlink.app.
              </p>
              <p className="text-muted">
                For questions about the campaign mechanic, points, or general
                participation: support@readlink.app.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
