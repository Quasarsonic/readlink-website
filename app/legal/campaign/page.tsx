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
                including the Participant tier, regardless of whether they
                subscribed to Premium during the campaign window.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2.2 Earning points</h3>
              <p className="mt-2 text-muted">
                Once registered, you earn points through the following five
                actions:
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
                        Someone signs up via your unique referral link and adds
                        5+ books within 72 hours
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Your referral goes deep</td>
                      <td className="py-2 pr-4">500 pts bonus</td>
                      <td className="py-2">
                        A user who signed up via your referral link reaches 25
                        books in their library
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">
                        Referral converts to Premium
                      </td>
                      <td className="py-2 pr-4">1,500 pts bonus</td>
                      <td className="py-2">
                        A user who signed up via your referral link subscribes to
                        Premium
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Go Premium (campaign multiplier)
                      </td>
                      <td className="py-2 pr-4">
                        2× all points earned across the entire campaign
                        (retroactive + going forward)
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
                Golden Tickets — Premium subscriber benefit (not a campaign
                reward):
              </p>
              <p className="mt-2 text-muted">
                Premium subscribers receive 2 Golden Tickets during the campaign
                window. Golden Tickets are gift codes that grant the recipient
                one calendar month of free Premium access.{" "}
                <strong>
                  Golden Tickets and their recipients do not contribute any
                  points, multipliers, or competitive advantage in the campaign.
                </strong>{" "}
                A recipient of a Golden Ticket is not, by virtue of receiving
                the ticket, counted as a referral for the gifter; the
                &quot;Bring a reader&quot; action and its related bonuses only
                apply to users who sign up via the gifter&apos;s unique referral
                link, separately from any gift activity. Golden Tickets are
                characterised as a Premium product benefit (a generosity feature
                for Premium subscribers to share their subscription with
                friends) and not as a contest mechanic, and are therefore not
                subject to the Section 7 No-Purchase-Necessary equivalence (see
                Section 7.3).
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
                  <strong>all</strong> campaign points credited to their account — both
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
                  <strong>Referrals — campaign points vs. lifetime commission</strong>:
                  campaign points (the &quot;Bring a reader&quot; action and the related
                  deep-engagement and Premium-conversion bonuses in Section 2.2) are
                  credited only for signups where the referred user creates their
                  Readlink account <strong>during the campaign window</strong>{" "}
                  (2026-06-01 00:00 UTC through 2026-08-31 23:59 UTC) via the
                  referrer&apos;s unique referral link. Referral signups completed before
                  2026-06-01 do not contribute to leaderboard points, even if the
                  qualifying conditions (5+ books within 72 hours, 25 books, Premium
                  subscription) are met after the window opens.{" "}
                  <strong>Lifetime referral commissions (Section 3.1) are separate</strong>:
                  once a participant qualifies for a prize tier at campaign close, the
                  lifetime commission rate associated with that tier applies to all
                  referrals the participant has brought to Readlink, including referrals
                  who signed up during the pre-launch period and including referrals
                  brought in after the campaign closes. The window restriction governs
                  campaign-point credit only; it does not narrow the population of
                  referrals against which the lifetime commission rate is paid.
                </li>
                <li>
                  <strong>Golden Tickets</strong>: Premium subscribers whose
                  subscription is active at the moment the window opens receive their
                  2 Golden Tickets at 2026-06-01 00:00 UTC. Users who subscribe to
                  Premium on or after 2026-06-01 receive their 2 Golden Tickets at the
                  moment of subscription. Golden Tickets remain a Premium product
                  benefit unrelated to campaign points (Section 2.2).
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
                      <td className="py-2 pr-4">Top Founders</td>
                      <td className="py-2">
                        50% lifetime referral commission rate + permanent
                        featured spot on the Readlink homepage hero section
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">#4 – #20</td>
                      <td className="py-2 pr-4">First Edition</td>
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
                        featured spot on the founders leaderboard at
                        readlink.app/launch
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
              <h3 className="font-semibold">3.2 Prize qualification threshold</h3>
              <p className="mt-2 text-muted">
                To qualify for <strong>any</strong> prize tier (Top Founders,
                First Edition, The Shelf, or Participant), a registered user must,
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
                close date are not eligible for any prize tier — including the
                Participant tier — regardless of (i) leaderboard position, (ii)
                points accumulated, (iii) Premium subscription status, or (iv)
                Golden Tickets gifted or received. Subscribing to Premium during
                the campaign window does not substitute for, lower, or otherwise
                affect the 25-book qualification threshold; non-qualifying
                Premium subscribers retain full Premium product access for the
                duration of their subscription but receive no campaign commission
                entitlement, no hero-section placement, no founders-leaderboard
                placement, and no campaign award.
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
                Top 200 finishers receive permanent featured placement displaying
                their profile photo, display name, handle, and rank, with the
                placement surface determined by tier. The top 20 finishers (Top
                Founders and First Edition tiers, ranks #1–#20) are displayed on
                the Readlink homepage hero section — the prominent rotating
                &quot;founders tiles&quot; surface on readlink.app. The Shelf tier
                (ranks #21–#200) is displayed on the founders leaderboard at
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
                The Promoter may revoke any prize tier (commission rate and/or
                hero placement) if the participant:
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
              tier, and reverse any accrued points or commissions if the
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
                reversal, commission balance reversal, removal from the
                leaderboard, disqualification from the campaign, revocation of
                prize tier, and account suspension or termination.
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
                  tier), and permanent display on the founders leaderboard
                  at readlink.app/launch if the participant finishes in The Shelf
                  tier (ranks #21–#200) — in both cases with no time limit on this
                  use, subject to the participant retaining their Readlink account.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6.4 Data retention</h3>
              <p className="mt-2 text-muted">
                Campaign data is retained for the duration of the campaign and
                for the longer of: (i) the lifetime of the participant&apos;s
                Readlink account, or (ii) such period as is necessary to
                administer the lifetime commission prize and comply with
                applicable legal and tax requirements.
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
              <h3 className="font-semibold">7.1 What the alternative is</h3>
              <p className="mt-2 text-muted">
                The &quot;Go Premium&quot; campaign action (Section 2.2) provides
                Premium subscribers with a 2× points multiplier. The Premium
                subscription requires payment, which could be interpreted as
                consideration in some jurisdictions. The No-Purchase-Necessary
                alternative allows any participant to receive an equivalent 2×
                points multiplier without subscribing to Premium.
              </p>
              <p className="mt-2 text-muted">
                The No-Purchase-Necessary alternative covers <strong>only</strong>{" "}
                the 2× points multiplier — that being the sole element of the
                &quot;Go Premium&quot; campaign action that affects competitive
                position in the campaign (see Section 7.3 on what is and is not
                covered).
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7.2 How to claim</h3>
              <p className="mt-2 text-muted">
                To claim the No-Purchase-Necessary points multiplier, submit a
                request through the Readlink contact form at readlink.app/contact:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                <li>
                  Select the request type &quot;NPN Campaign Entry.&quot;
                </li>
                <li>Provide your Readlink handle.</li>
                <li>
                  Attach a handwritten declaration (scanned or photographed)
                  stating: &quot;I request the No-Purchase-Necessary alternative
                  entry to the Readlink 200 Founders Edition campaign,&quot;
                  signed and dated.
                </li>
              </ul>
              <p className="mt-2 text-muted">
                Upon receipt and verification, the Promoter will apply the
                equivalent of the Premium 2× multiplier to the participant&apos;s
                account for the same duration the Premium multiplier would have
                applied (one calendar month from grant date, renewable monthly by
                submitting a new request through the same form).
              </p>
              <p className="mt-2 text-muted">
                The Promoter aims to verify and apply No-Purchase-Necessary
                multipliers within five (5) business days of receipt. Once verified,
                the 2× multiplier is applied to <strong>all</strong> campaign points
                credited to the participant&apos;s account — both points already earned
                earlier in the campaign window (applied retroactively to 2026-06-01
                00:00 UTC) and points earned subsequently (applied going forward through
                campaign close). The NPN multiplier, once granted, remains in effect for
                the remainder of the campaign and does not require renewal or re-request.
                This matches the application of the Premium 2× multiplier described in
                Section 2.2 and Section 2.4 and preserves equal-dignity between the two
                entry paths.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                7.3 Scope of equivalence — what the No-Purchase-Necessary path
                does and does not cover
              </h3>
              <p className="mt-2 text-muted">
                The No-Purchase-Necessary path provides{" "}
                <strong>
                  equivalence with respect to every campaign mechanic that
                  affects competitive position in the contest
                </strong>
                . Currently, the only such mechanic introduced by the &quot;Go
                Premium&quot; campaign action is the 2× points multiplier. The
                No-Purchase-Necessary path equalises this mechanic in full.
              </p>
              <p className="mt-4 font-semibold text-muted">
                Golden Tickets are not covered
              </p>
              <p className="mt-2 text-muted">
                by the No-Purchase-Necessary path because Golden Tickets are
                characterised as a Premium product benefit (a generosity feature
                for Premium subscribers to share a free month of Premium with
                friends), not as a campaign mechanic. Under the terms of Section
                2.2, Golden Tickets and their recipients do not contribute any
                points, multipliers, or competitive advantage in the campaign —
                receiving or gifting a Golden Ticket has no effect on a
                participant&apos;s leaderboard position or prize tier
                qualification. Because Golden Tickets do not affect competitive
                position, they fall outside the equal-dignity scope of the
                No-Purchase-Necessary alternative.
              </p>
              <p className="mt-4 font-semibold text-muted">
                Premium product features
              </p>
              <p className="mt-2 text-muted">
                (the standalone benefits of a Premium subscription unrelated to
                the campaign — full app features, knowledge-graph proposals,
                advanced search, and similar) are likewise not covered. These are
                product features purchased through the Premium subscription, not
                campaign mechanics.
              </p>
              <p className="mt-2 text-muted">
                A participant entering via the No-Purchase-Necessary path has{" "}
                <strong>
                  equal eligibility for all campaign tiers and prizes
                </strong>{" "}
                (Top Founders, First Edition, The Shelf, Participant) as a
                participant who subscribed to Premium, subject only to the same
                prize-qualification threshold defined in Section 3.2 (complete
                profile + 25 books). The No-Purchase-Necessary path is not
                lesser, secondary, or limited in any campaign-mechanic respect.
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
