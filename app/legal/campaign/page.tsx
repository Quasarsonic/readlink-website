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
              Effective date: 2026-05-15
              <br />
              Last updated: May 17, 2026
              <br />
              Campaign window: 2026-06-01 00:00 UTC through 2026-08-31 23:59 UTC, inclusive. Both dates UTC. (92 days.)
            </p>
            <p>
              Promoter: Lykan Sagl, Ai Salici, 6633 Lavertezzo, Switzerland
              (&quot;Readlink,&quot; &quot;we,&quot; &quot;us&quot;).
            </p>
            <p>Governing law: Swiss law.</p>
            <p className="font-semibold">
              NO PURCHASE NECESSARY TO ENTER. A FREE ALTERNATIVE ENTRY METHOD IS
              AVAILABLE. SEE SECTION 7. VOID WHERE PROHIBITED.
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
                  void and subject to forfeiture under Section 5.
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
                Readlink operates, <strong>except</strong> the jurisdictions
                listed below. For clarity, jurisdictions are excluded for one of
                two distinct reasons — legal exclusion (the campaign cannot
                lawfully run there) or operational exclusion (the campaign could
                lawfully run with additional compliance work not pursued for the
                launch). The effect on participants is the same.
              </p>

              <p className="mt-4 font-semibold text-muted">
                Open jurisdictions:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  <strong>United States</strong>: open in all states. The
                  No-Purchase-Necessary alternative path (Section 7) addresses
                  state laws requiring consideration-free entry.
                </li>
                <li>
                  <strong>Canada (except Quebec)</strong>: open in all provinces
                  and territories except Quebec (see operational exclusions
                  below). Per Canadian federal contest law, prize awards in
                  Canada are subject to a mathematical skill-testing requirement
                  administered by the Promoter at the time of prize claim.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-muted">
                Fully void — legal exclusion
              </p>
              <p className="mt-1 text-muted">
                (the campaign cannot lawfully run in these jurisdictions under
                our current structure, regardless of additional paperwork):
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  <strong>Belgium</strong>: void under Belgian
                  promotional-contest restrictions.
                </li>
                <li>
                  <strong>Saudi Arabia, United Arab Emirates</strong>: void under
                  applicable restrictions on prize promotions and games of
                  chance.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-muted">
                Operationally excluded — compliance lift not pursued for the
                launch
              </p>
              <p className="mt-1 text-muted">
                (the campaign could lawfully run in these jurisdictions, but
                the additional registration, bonding, translation, or filing
                requirements are not pursued for the launch campaign):
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  <strong>Quebec</strong>: French-language materials and the
                  federal skill-testing question requirement not pursued for the
                  launch. Eligibility may be extended to Quebec residents in
                  subsequent campaigns.
                </li>
                <li>
                  <strong>France</strong>: French-language materials and{" "}
                  <em>règlement</em> deposit with a <em>huissier de justice</em>{" "}
                  not pursued for the launch.
                </li>
                <li>
                  <strong>Italy</strong>: notification to the Ministry of
                  Enterprises and Made in Italy, prize-value bond,
                  Italian-server prize-assignment infrastructure, notarial
                  witnessing, and Italian-language materials not pursued for the
                  launch.
                </li>
                <li>
                  <strong>Brazil</strong>: SECAP (Secretariat for Evaluation,
                  Planning, Energy and Lottery) authorization and
                  Portuguese-language materials not pursued for the launch.
                </li>
                <li>
                  <strong>India</strong>: state-by-state regulatory variability
                  not assessed for the launch; the campaign is excluded in all
                  Indian states and union territories.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-muted">
                Subject to pre-launch verification:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  <strong>Specific Swiss cantons</strong> with
                  promotional-contest-specific rules: subject to verification
                  before campaign open. Switzerland&apos;s federal Money Gaming Act
                  treats skill contests (<em>Geschicklichkeitswettbewerbe</em>)
                  differently from games of chance, and the campaign is
                  structured as a skill contest; cantonal disclosure rules will
                  be confirmed before launch.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-muted">
                Note on the Premium multiplier and jurisdictional analysis:
              </p>
              <p className="mt-2 text-muted">
                The Go Premium 2× multiplier (Section 2.2) is a feature of the
                campaign mechanic and applies uniformly to all eligible
                participants regardless of jurisdiction. The
                No-Purchase-Necessary alternative (Section 7) provides an
                equivalent multiplier to participants who do not subscribe to
                Premium, neutralizing the multiplier as a basis for excluding
                additional jurisdictions on consideration grounds. Jurisdictions
                are excluded above because of categorical legal restrictions or
                operational compliance lift, not because of the multiplier
                itself.
              </p>

              <p className="mt-2 text-muted">
                The Promoter reserves the right to add or remove jurisdictions
                from the exclusion list at any time if regulatory analysis
                warrants. The current exclusion list will be published at
                readlink.app/legal/campaign at the time of campaign open and
                updated within 24 hours of any change.
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
              path (described in Section 7).
            </p>

            <div>
              <h3 className="font-semibold">2.1 Standard entry</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-6 text-muted">
                <li>
                  Have a Readlink account at readlink.app. Accounts may be
                  created at any time, including before the campaign opens (see
                  Section 2.4).
                </li>
                <li>
                  Complete your profile (display name, handle, profile photo).
                </li>
                <li>
                  You are registered for the campaign when your profile is
                  complete and the campaign window is open, and you appear on
                  the campaign leaderboard from this point. Profiles completed
                  before the campaign opens are registered at the moment the
                  window opens (Section 2.4).
                </li>
              </ol>
              <p className="mt-4 text-muted">
                <strong>Note on registration vs. prize qualification</strong>:
                Completing your profile registers you for the campaign and
                places you on the leaderboard, but does not by itself qualify
                you for any prize tier. Prize tier qualification requires meeting
                the thresholds in Section 3.2 (a complete profile <em>and</em>{" "}
                at least 25 books in your Readlink library by the campaign close
                date). Registered users who do not meet the prize qualification
                threshold by close are not eligible for any campaign prize,
                regardless of whether they subscribed to Premium during the
                campaign window.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2.2 Earning points</h3>
              <p className="mt-2 text-muted">
                Once registered, you earn points through the following actions:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[40rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-4 font-semibold">Action</th>
                      <th className="py-2 pr-4 font-semibold">Points</th>
                      <th className="py-2 font-semibold">Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Create your library</td>
                      <td className="py-2 pr-4">500 pts</td>
                      <td className="py-2">Library reaches 25 books</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Bring a reader</td>
                      <td className="py-2 pr-4">1,000 pts</td>
                      <td className="py-2">
                        Someone signs up via your unique referral link (or Golden
                        Ticket / NPN trial code) and adds 5 or more books within 72
                        hours
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Your referral goes deep</td>
                      <td className="py-2 pr-4">500 pts bonus</td>
                      <td className="py-2">
                        A user who signed up via your referral link, Golden Ticket,
                        or trial code reaches 25 books in their library
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Referral converts to Premium</td>
                      <td className="py-2 pr-4">1,500 pts bonus</td>
                      <td className="py-2">
                        A user who signed up via your referral link, Golden Ticket,
                        or trial code subscribes to Premium. Points are credited at
                        the time of subscription. If the subscription is refunded by
                        Readlink or reversed via chargeback within 30 days, the 1,500
                        points are reversed under §5.6.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Build your network</td>
                      <td className="py-2 pr-4">500 pts bonus</td>
                      <td className="py-2">
                        You have successfully completed the &quot;Bring a reader&quot;
                        action with 2 distinct referred readers
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Go Premium (campaign multiplier)
                      </td>
                      <td className="py-2 pr-4">
                        2× all points earned through Actions 1–5 (retroactive +
                        going forward)
                      </td>
                      <td className="py-2">
                        You subscribe to Premium at any point in the campaign
                        window (or hold an active Premium subscription at
                        window-open)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 font-semibold text-muted">
                Golden Tickets — Premium subscriber benefit:
              </p>
              <p className="mt-2 text-muted">
                Yearly Premium subscribers receive 4 Golden Tickets during the
                campaign window. Monthly Premium subscribers receive 2 Golden
                Tickets during the campaign window. Premium subscribers active
                at window-open (2026-06-01 00:00 UTC) receive their tickets at
                that time; subscribers who subscribe to Premium during the
                campaign window receive their tickets at the moment of
                subscription. Tickets are distributed once per campaign and do
                not accumulate with additional billing cycles.
              </p>
              <p className="mt-2 text-muted">
                Each Golden Ticket is a gift code that grants the recipient one
                calendar month of free Premium access. Premium subscribers may
                not redeem their own tickets; the system blocks self-redemption
                at the application layer.
              </p>
              <p className="mt-2 text-muted">
                A Golden Ticket recipient who creates a Readlink account and
                meets the &quot;Bring a reader&quot; threshold (5+ books in 72h) is counted
                as a referral for the gifting Premium subscriber under Section
                2.2 Action &apos;Bring a reader&apos; and its downstream actions (&apos;Your
                referral goes deep&apos;, &apos;Referral converts to Premium&apos;). Where a
                recipient is attributed via both a Golden Ticket and a unique
                referral link, the gifter is credited only once. Anti-fraud rules
                in Section 5.2 apply to ticket-driven referrals the same as to
                URL-driven referrals.
              </p>
              <p className="mt-2 text-muted">
                Equivalent acquisition tooling is available to non-purchasing
                participants through the No-Purchase-Necessary trial code
                mechanism in Section 7.3.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2.3 Entry limit</h3>
              <p className="mt-2 text-muted">
                One entry per person. Multiple accounts, automated entries,
                accounts created by third parties on a participant&apos;s behalf,
                or any other attempt to circumvent the one-entry-per-person
                limit are grounds for disqualification (Section 5).
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                2.4 Pre-launch activity (accounts and subscriptions created before
                the campaign opens)
              </h3>
              <p className="mt-2 text-muted">
                The Readlink website is available from the effective date of these
                Rules. The Readlink mobile application launches on 2026-06-01
                00:00 UTC, simultaneously with the opening of the campaign window.
                Before that moment, users may create a Readlink account, complete
                their profile, and subscribe to Premium via the website.
                Pre-launch activity interacts with the campaign as follows:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  <strong>Accounts and profile completion</strong>: pre-launch
                  accounts are valid Readlink accounts under the Terms of Service.
                  Completing a profile (display name, handle, profile photo) before
                  the campaign opens reserves the user&apos;s handle, registers the user
                  with Readlink, and places the user on the campaign leaderboard at 0
                  points. During the pre-launch period (2026-05-15 through 2026-05-31),
                  pre-registered users are displayed on the leaderboard sorted by the
                  timestamp of profile completion, earliest at top; this ordering is
                  for display purposes only and is not a competitive ranking, as no
                  points can be earned before the campaign window opens. Point accrual
                  begins at 2026-06-01 00:00 UTC, after which leaderboard position is
                  determined solely by points earned during the campaign window in
                  accordance with Section 2.2 (with ties broken under Section 3.4). No
                  re-action is required at window-open.
                </li>
                <li>
                  <strong>Library additions and the 25-book threshold (Section 3.2)</strong>: the
                  library feature is part of the Readlink mobile application, which
                  does not exist before 2026-06-01 00:00 UTC. No books can be added
                  to any user&apos;s library before that moment. All books counting
                  toward the Section 3.2 qualification threshold are therefore added
                  during the campaign window. The 500-point &quot;Create your library&quot;
                  award (Section 2.2) can only be earned during the campaign window.
                </li>
                <li>
                  <strong>Premium subscriptions</strong>: pre-launch Premium
                  subscriptions are valid product subscriptions under the Terms of
                  Service and entitle the subscriber to the Premium product features
                  from the moment of subscription. The campaign 2× multiplier (Section
                  2.2) applies as follows: any participant who holds an active Premium
                  subscription at the moment the campaign window opens (2026-06-01
                  00:00 UTC), <strong>or who subscribes to Premium at any point during
                  the campaign window</strong>, has the 2× multiplier applied to{" "}
                  <strong>all</strong>{" "}
                  campaign points credited to their account — both
                  points already earned in the window prior to subscription (applied
                  retroactively) and points earned subsequently (applied going forward).
                  Once the 2× multiplier has been applied to a participant&apos;s account
                  through Premium subscription during the campaign window, it remains in
                  effect for the remainder of that participant&apos;s campaign even if the
                  Premium subscription is later cancelled. The multiplier is a personal
                  benefit of the Premium subscription: it applies only to the subscribing
                  participant&apos;s own campaign points and has no effect on the points of
                  any other participant (including the subscriber&apos;s referrer or
                  referrals). There is no retroactive application to pre-window activity,
                  because no campaign points are earned before 2026-06-01 00:00 UTC.
                </li>
                <li>
                  <strong>Referrals</strong>: campaign points for &apos;Bring a reader&apos;
                  and its downstream actions (&apos;Your referral goes deep&apos;, &apos;Referral
                  converts to Premium&apos;) are credited only for referee accounts
                  created during the campaign window (2026-06-01 00:00 UTC through
                  2026-08-31 23:59 UTC). Referral attribution at signup is via the
                  referrer&apos;s unique referral link, via Golden Ticket redemption,
                  via No-Purchase-Necessary trial code redemption, or via referral
                  handle entered at signup. Referral signups completed before
                  2026-06-01 do not contribute to leaderboard points.
                </li>
                <li>
                  <strong>Golden Tickets</strong>: Yearly Premium subscribers active at
                  window-open receive 4 Golden Tickets at 2026-06-01 00:00 UTC. Monthly
                  Premium subscribers active at window-open receive 2 Golden Tickets at
                  2026-06-01 00:00 UTC. Premium subscribers who subscribe on or after
                  2026-06-01 receive their tickets (4 for yearly, 2 for monthly) at the
                  moment of subscription. Per Section 2.2, ticket recipients meeting the
                  Action &apos;Bring a reader&apos; threshold count as referrals for the gifter.
                </li>
              </ul>
              <p className="mt-4 text-muted">
                Nothing in this Section 2.4 changes the Section 3.2 prize
                qualification threshold or the Section 1 eligibility requirements.
                Pre-launch participation is handle reservation and Premium product use
                under the Terms of Service; it is not entry into the competitive
                period, which begins at 2026-06-01 00:00 UTC.
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
                lock each participant&apos;s prize tier. All visibility prizes
                (homepage hero and founders page placement) are permanent and persist
                for as long as Readlink operates, subject to the forfeiture conditions
                in Section 3.6. Premium-time prizes activate at campaign close for the
                duration awarded.
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
                      <td className="py-2 pr-4">Top Founders</td>
                      <td className="py-2">
                        3 years of free Readlink Premium + permanent featured spot
                        on the Readlink homepage hero section
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">#4 – #20</td>
                      <td className="py-2 pr-4">First Edition</td>
                      <td className="py-2">
                        1 year of free Readlink Premium + permanent featured spot on
                        the Readlink homepage hero section
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">#21 – #200</td>
                      <td className="py-2 pr-4">Collection</td>
                      <td className="py-2">
                        Up to 6 months of free Readlink Premium, scaled by points
                        earned according to a published schedule (see Section 3.3
                        below) + permanent featured spot on the founders page at
                        readlink.app/launch
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">3.2 Prize qualification threshold</h3>
              <p className="mt-2 text-muted">
                To qualify for <strong>any</strong> prize tier (Top Founders,
                First Edition, or Collection), a registered user must,
                before the campaign close date:
              </p>
              <p className="mt-2 text-muted">
                (a) Have a complete Readlink profile (display name, handle,
                profile photo); <strong>AND</strong>
              </p>
              <p className="text-muted">
                (b) Add at least 25 books to their Readlink library.
              </p>
              <p className="mt-2 text-muted">
                Registered users who do not meet both (a) and (b) by the campaign
                close date are not eligible for any prize tier, regardless of (i)
                leaderboard position, (ii) points accumulated, (iii) Premium
                subscription status, or (iv) Golden Tickets gifted or received.
                Subscribing to Premium during the campaign window does not
                substitute for, lower, or otherwise affect the 25-book qualification
                threshold; non-qualifying Premium subscribers retain full Premium
                product access for the duration of their subscription but receive
                no campaign award.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                3.3 Premium-time prize — what it covers and how it scales
              </h3>
              <p className="mt-2 text-muted">
                The Premium-time prize activates at the campaign close date.
              </p>
              <p className="mt-2 text-muted">
                Top Founders (ranks #1–#3) receive 3 years of free Readlink
                Premium. First Edition (ranks #4–#20) receive 1 year of free
                Readlink Premium. Collection (ranks #21–#200) receive free
                Readlink Premium scaled by total campaign points earned, per
                the following schedule:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[24rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-4 font-semibold">Points at close</th>
                      <th className="py-2 font-semibold">Free Premium awarded</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">1,500 – 3,999 points</td>
                      <td className="py-2">1 month</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">4,000 – 8,999 points</td>
                      <td className="py-2">2 months</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">9,000 – 17,999 points</td>
                      <td className="py-2">3 months</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">18,000 – 29,999 points</td>
                      <td className="py-2">4 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">30,000+ points</td>
                      <td className="py-2">6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-muted">
                To qualify for the Collection tier specifically (ranks #21–#200),
                a participant must also meet the following additional thresholds
                beyond the Section 3.2 requirements:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  A minimum of 400 points earned during the campaign window
                </li>
                <li>
                  At least 1 successful &apos;Bring a reader&apos; completion
                </li>
              </ul>
              <p className="mt-4 text-muted">
                Free Premium time grants the participant access to all Premium
                product features for the duration awarded, beginning at campaign
                close. Free Premium time is not transferable, not redeemable for
                cash, and does not stack with any concurrent paid Premium
                subscription (a paid subscription is paused for the duration of
                the free Premium-time award, with paid renewal resuming
                automatically after the free period ends, unless the participant
                cancels).
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.4 Tie-breaker</h3>
              <p className="mt-2 text-muted">
                If two or more participants are tied at exactly the same points
                total at a tier boundary, the tie-breaker is the earliest
                timestamp at which each participant reached that point total. The
                participant who reached it earliest wins the higher rank.
              </p>
              <p className="mt-2 text-muted">
                If the earliest-timestamp data is unavailable or contested, the
                secondary tie-breaker is the participant with the higher count
                of completed &apos;Bring a reader&apos; actions (most referrals).
              </p>
              <p className="mt-2 text-muted">
                If still tied, the final tie-breaker is at the Promoter&apos;s sole
                discretion based on overall campaign contribution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.5 Hero-section placement</h3>
              <p className="mt-2 text-muted">
                Top 200 finishers receive permanent featured placement displaying
                their profile photo, display name, handle, and rank, with the
                placement surface determined by tier. The top 20 finishers (Top
                Founders and First Edition tiers, ranks #1–#20) are displayed on
                the Readlink homepage hero section — the prominent rotating
                &quot;founders tiles&quot; surface on readlink.app. The Collection tier
                (ranks #21–#200) is displayed on the founders page at
                readlink.app/launch, which remains live as a permanent founders
                archive after campaign close. In both surfaces, the placement is
                clickable through to the finisher&apos;s readlink.app/l/[handle]
                library page. Both surfaces persist indefinitely subject to Section
                3.6.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3.6 Forfeiture of prize</h3>
              <p className="mt-2 text-muted">
                The Promoter may revoke any prize tier (Premium-time award and/or
                featured placement) if the participant:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Violates the Readlink Terms of Service in a material way.
                </li>
                <li>
                  Is found, after the fact, to have gained their rank through
                  fraud or any prohibited conduct under Section 5.
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
                Participants are solely responsible for any taxes owed on the value
                of campaign prizes, including any in-kind value attributed to free
                Premium-time awards under applicable local tax law. Readlink may
                issue tax documentation where required by law in the participant&apos;s
                jurisdiction.
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
                the closing snapshot if anti-fraud detection (Section 5)
                requires it. Post-snapshot adjustments are only made in cases
                of detected fraud or technical error.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              5. Prohibited conduct and disqualification
            </h2>
            <p className="text-muted">
              The Promoter may disqualify any participant, revoke any prize
              tier, and reverse any accrued points if the
              participant engages in any of the following:
            </p>

            <div>
              <h3 className="font-semibold">5.1 Account and identity fraud</h3>
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
              <h3 className="font-semibold">5.2 Referral fraud</h3>
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
                <li>
                  Redeeming or attempting to redeem one&apos;s own Golden Ticket
                  or NPN trial code (whether directly or via an associated
                  account, household member, or coordinating party).
                </li>
                <li>
                  Sharing tickets or trial codes solely with accounts that do
                  not represent genuine new users (e.g., dormant accounts,
                  automated accounts, accounts created solely to redeem the
                  ticket).
                </li>
                <li>
                  Using tickets or trial codes to inflate referral counts via
                  any other prohibited conduct described in this Section 5.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">5.3 System gaming</h3>
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
              <h3 className="font-semibold">5.4 Other grounds</h3>
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
              <h3 className="font-semibold">5.5 Detection methods</h3>
              <p className="mt-2 text-muted">
                The Promoter uses a combination of fingerprint, IP,
                payment-method, email-domain, behavioral, and graph-analysis
                heuristics to detect prohibited conduct. Detection rules and
                thresholds are not publicly disclosed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">5.6 Consequences</h3>
              <p className="mt-2 text-muted">
                Consequences of detected prohibited conduct, at the
                Promoter&apos;s discretion, include any or all of: points
                reversal, removal from the
                leaderboard, disqualification from the campaign, revocation of
                prize tier, and account suspension or termination.
              </p>
              <p className="mt-2 text-muted">
                Points credited under Action &apos;Referral converts to Premium&apos;
                (§2.2) are subject to reversal if the referenced Premium
                subscription is refunded by Readlink or reversed via chargeback
                within 30 days of subscription, regardless of whether prohibited
                conduct is alleged. This reversal is a structural element of
                the points-credit mechanism, not a penalty under this Section.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              6. Privacy and publicity
            </h2>

            <div>
              <h3 className="font-semibold">6.1 Data collected</h3>
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
                  Anti-fraud telemetry as needed for Section 5 enforcement.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6.2 Use of data</h3>
              <p className="mt-2 text-muted">
                Campaign data is used to operate the campaign, compute rankings,
                detect fraud, award prizes, and display the participant on the
                leaderboard and homepage hero section.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">6.3 Publicity rights</h3>
              <p className="mt-2 text-muted">
                By participating, the participant consents to the use of their
                display name, handle, profile photo, and rank in:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  The leaderboard at readlink.app/launch and the homepage hero
                  section during the campaign window.
                </li>
                <li>
                  Marketing materials related to the campaign for the duration
                  of the campaign and for 12 months after campaign close.
                </li>
                <li>
                  Permanent display on the Readlink homepage hero section if the
                  participant finishes in the top 20 (Top Founders or First Edition
                  tier), and permanent display on the founders page at
                  readlink.app/launch if the participant finishes in the Collection
                  tier (ranks #21–#200) — in both cases with no time limit on this
                  use, subject to the participant retaining their Readlink account.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6.4 Data retention</h3>
              <p className="mt-2 text-muted">
                Campaign data is retained for the duration of the campaign and for
                the longer of: (i) the lifetime of the participant&apos;s Readlink
                account, or (ii) such period as is necessary to administer the
                Premium-time prize and comply with applicable legal and tax
                requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">6.5 Reference to Privacy Policy</h3>
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
              7. No-Purchase-Necessary alternative entry
            </h2>
            <p className="text-muted">
              To comply with applicable laws in jurisdictions where any element
              of the campaign could be construed as requiring consideration, an
              alternative entry path is available.
            </p>

            <div>
              <h3 className="font-semibold">7.1 What the alternative path covers</h3>
              <p className="mt-2 text-muted">
                The campaign includes two mechanics that may be construed as
                requiring consideration in some jurisdictions:
              </p>
              <p className="mt-2 text-muted">
                (a) The &apos;Go Premium&apos; campaign action (Section 2.2) provides
                Premium subscribers with a 2× points multiplier. The Premium
                subscription requires payment.
              </p>
              <p className="mt-2 text-muted">
                (b) Golden Tickets (Section 2.2) are distributed to Premium
                subscribers as a Premium product benefit. Premium subscribers
                may use their tickets to invite new users; ticket recipients
                who meet the &apos;Bring a reader&apos; threshold count as referrals for
                the gifter. The ticket distribution requires a Premium
                subscription, which requires payment.
              </p>
              <p className="mt-2 text-muted">
                The No-Purchase-Necessary alternative provides equivalent
                mechanisms to participants who do not subscribe to Premium:
              </p>
              <p className="mt-2 text-muted">
                (a) An equivalent 2× points multiplier (the NPN multiplier),
                applicable to all campaign points credited to the participant&apos;s
                account.
              </p>
              <p className="mt-2 text-muted">
                (b) An equivalent allocation of trial codes (the NPN trial
                codes), functionally equivalent to Golden Tickets — each grants
                the recipient one calendar month of free Premium, and recipients
                who meet the &apos;Bring a reader&apos; threshold count as referrals for
                the trial code holder.
              </p>
              <p className="mt-2 text-muted">
                The NPN alternative preserves equal-dignity competitive position
                between paying and non-paying participants in every campaign
                mechanic that affects ranking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7.2 How to claim</h3>
              <p className="mt-2 text-muted">
                To claim either or both of the NPN mechanisms, submit a request
                through the Readlink contact form at readlink.app/contact:
              </p>
              <p className="mt-4 font-semibold text-muted">
                (a) For the NPN 2× points multiplier:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Select the request type &apos;NPN Campaign Entry – Multiplier&apos;
                </li>
                <li>Provide your Readlink handle</li>
                <li>
                  Attach a handwritten declaration stating: &apos;I request the
                  No-Purchase-Necessary alternative entry to the Readlink 200
                  Founders Edition campaign,&apos; signed and dated.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-muted">
                (b) For NPN trial codes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Select the request type &apos;NPN Campaign Entry – Trial Codes&apos;
                </li>
                <li>Provide your Readlink handle</li>
                <li>
                  Specify the number of trial codes requested (maximum 4 per
                  campaign window, matching the maximum a yearly Premium subscriber
                  receives)
                </li>
                <li>
                  Attach a handwritten declaration stating: &apos;I request
                  No-Purchase-Necessary trial codes for the Readlink 200 Founders
                  Edition campaign,&apos; signed and dated.
                </li>
              </ul>
              <p className="mt-2 text-muted">
                A single request may include both (a) and (b). Trial codes may
                be requested at any time during the campaign window, in any
                combination, up to the 4-code maximum per participant.
              </p>
              <p className="mt-4 font-semibold text-muted">
                Upon receipt and verification:
              </p>
              <p className="mt-2 text-muted">
                <strong>For the multiplier (a):</strong> The Promoter aims to verify and apply
                the NPN 2× multiplier within five (5) business days of receipt.
                Once verified, the 2× multiplier is applied to all campaign points
                credited to the participant&apos;s account — both points already earned
                earlier in the campaign window (applied retroactively to 2026-06-01
                00:00 UTC) and points earned subsequently. The NPN multiplier, once granted,
                remains in effect for the remainder of the campaign and does not require
                renewal.
              </p>
              <p className="mt-2 text-muted">
                <strong>For trial codes (b):</strong> The Promoter aims to issue requested trial
                codes within five (5) business days of receipt. Each code is
                single-use, expires 30 days from issuance (or at campaign close,
                whichever is earlier), and may not be redeemed by the requesting
                participant. Self-redemption is blocked at the application
                layer.
              </p>
              <p className="mt-2 text-muted">
                A trial code recipient who creates a Readlink account and meets
                the &apos;Bring a reader&apos; threshold (5+ books in 72h) is counted as
                a referral for the NPN participant under Section 2.2 and its
                downstream actions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7.3 Scope of equivalence</h3>
              <p className="mt-2 text-muted">
                The No-Purchase-Necessary path provides equivalence with respect
                to every campaign mechanic that affects competitive position in
                the contest. The relevant mechanics are:
              </p>
              <p className="mt-2 text-muted">
                (a) The 2× points multiplier (Go Premium action) — equalized by
                the NPN multiplier.
              </p>
              <p className="mt-2 text-muted">
                (b) Golden Tickets as referral-acquisition tools — equalized by
                NPN trial codes (up to 4 per participant per campaign window).
              </p>
              <p className="mt-2 text-muted">
                A participant entering via the No-Purchase-Necessary path has
                equal eligibility for all campaign tiers and prizes (Top
                Founders, First Edition, Collection) as a participant who
                subscribed to Premium, subject only to the same prize-
                qualification thresholds defined in Section 3.2 and Section 3.3.
              </p>
              <p className="mt-2 text-muted">
                The No-Purchase-Necessary path is not lesser, secondary, or
                limited in any campaign-mechanic respect. Both Premium
                subscribers and NPN participants have access to all five point-
                earning actions and the 2× multiplier; only the means of access
                to the multiplier and acquisition tooling differs.
              </p>
              <p className="mt-2 text-muted">
                Premium product features unrelated to the campaign — the
                standalone benefits of a Premium subscription such as full app
                features, knowledge-graph proposals, advanced search, and
                similar — are not covered by the No-Purchase-Necessary
                equivalence. These are product features purchased through the
                Premium subscription, not campaign mechanics that affect
                competitive position.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              8. Disputes and termination
            </h2>

            <div>
              <h3 className="font-semibold">
                8.1 Promoter&apos;s right to modify or terminate
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
              <h3 className="font-semibold">8.2 Decisions final</h3>
              <p className="mt-2 text-muted">
                The Promoter&apos;s decisions on eligibility, ranking, prize
                awards, and the application of these Rules are final and binding
                on all participants.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">8.3 Disputes</h3>
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
              9. Miscellaneous
            </h2>

            <div>
              <h3 className="font-semibold">9.1 Severability</h3>
              <p className="mt-2 text-muted">
                If any provision of these Rules is found to be invalid or
                unenforceable, the remaining provisions remain in full force.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">9.2 No waiver</h3>
              <p className="mt-2 text-muted">
                The Promoter&apos;s failure to enforce any provision of these
                Rules in any specific case does not waive the Promoter&apos;s
                right to enforce that provision in other cases.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">9.3 Independent campaign</h3>
              <p className="mt-2 text-muted">
                This campaign is not sponsored, endorsed, administered by, or
                associated with Apple Inc., Google LLC, Meta Platforms Inc., or
                any other third-party platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">9.4 Contact</h3>
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
