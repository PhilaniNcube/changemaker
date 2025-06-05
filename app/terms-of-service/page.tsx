import Link from "next/link";

export const metadata = {
  title: "Terms of Service | masifunde Changemaker Network",
  description:
    "Terms of Service for the masifunde Changemaker Network website and platform.",
};

const TermsOfService = () => {
  return (
    <main className="bg-white">
      <div className="max-w-4xl min-h-screen px-8 py-16 mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-slate-800">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-ZA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              Welcome to the masifunde Changemaker Network website
              (&quot;Website&quot;, &quot;Platform&quot;). These Terms of
              Service (&quot;Terms&quot;) govern your use of our website located
              at www.changemaker-network.org and all related services provided
              by masifunde Learner Development (&quot;masifunde&quot;,
              &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
            </p>
            <p className="mb-4">
              By accessing or using our Website, you agree to be bound by these
              Terms. If you disagree with any part of these terms, then you may
              not access the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              2. About masifunde Changemaker Network
            </h2>
            <p className="mb-4">
              The masifunde Changemaker Network is a youth empowerment platform
              that aims to capacitate high school learners with practical
              knowledge on relevant social topics such as school safety,
              violence, bullying and environmental awareness and protection.
              Through activation workshops for all Grade 9 learners and
              intensive changemaker trainings for selected learners, we enable
              young people to spark positive change in their schools and
              communities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              3. User Accounts and Registration
            </h2>
            <p className="mb-4">
              To access certain features of our Platform, you may be required to
              create an account. When you create an account, you must provide
              information that is accurate, complete, and current at all times.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding your account credentials and
              for all activities that occur under your account. You must notify
              us immediately upon becoming aware of any breach of security or
              unauthorized use of your account.
            </p>
            <p className="mb-4">
              We reserve the right to refuse service, terminate accounts, or
              remove content at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              4. Acceptable Use
            </h2>
            <p className="mb-4">You agree not to use the Website to:</p>
            <ul className="pl-6 mb-4 space-y-2 list-disc">
              <li>
                Violate any applicable local, state, national, or international
                law or regulation
              </li>
              <li>
                Upload, post, or transmit any content that is harmful,
                offensive, or inappropriate
              </li>
              <li>Harass, abuse, or harm other users or staff members</li>
              <li>
                Impersonate any person or entity or falsely state your
                affiliation with a person or entity
              </li>
              <li>
                Interfere with or circumvent the security features of the
                Website
              </li>
              <li>
                Use the Website for any commercial purpose without our express
                written consent
              </li>
              <li>Upload viruses or other malicious code</li>
              <li>
                Collect or harvest any personally identifiable information from
                the Website
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              5. Content and User Submissions
            </h2>
            <p className="mb-4">
              Our Website may allow you to submit, upload, or post content
              including but not limited to text, photographs, videos, and other
              materials (&quot;User Content&quot;). You retain ownership of your
              User Content, but by submitting it, you grant masifunde a
              worldwide, non-exclusive, royalty-free license to use, reproduce,
              modify, adapt, publish, and distribute such content for the
              purposes of operating and promoting the Changemaker Network.
            </p>
            <p className="mb-4">
              You represent and warrant that your User Content does not violate
              any third-party rights and complies with these Terms and
              applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              6. Privacy and Data Protection
            </h2>
            <p className="mb-4">
              Your privacy is important to us. Our collection and use of
              personal information is governed by our Privacy Policy, which is
              incorporated into these Terms by reference. By using our Website,
              you consent to our collection and use of personal information as
              outlined in our Privacy Policy.
            </p>
            <p className="mb-4">
              We are committed to protecting personal information in accordance
              with applicable South African data protection laws, including the
              Protection of Personal Information Act (POPIA).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              7. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              The Website and its original content, features, and functionality
              are and will remain the exclusive property of masifunde and its
              licensors. The Website is protected by copyright, trademark, and
              other laws. Our trademarks and trade dress may not be used in
              connection with any product or service without our prior written
              consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              8. Third-Party Links and Services
            </h2>
            <p className="mb-4">
              Our Website may contain links to third-party websites or services,
              including social media platforms like Facebook and Instagram.
              These links are provided for your convenience only. We do not
              endorse or assume responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              9. Age Restrictions and Parental Consent
            </h2>
            <p className="mb-4">
              Given our focus on high school learners, we recognize that some
              users may be under 18 years of age. Users under 18 must have
              parental or guardian consent to use our Website and participate in
              our programs. We encourage parents and guardians to monitor their
              children&apos;s online activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              10. Disclaimer of Warranties
            </h2>
            <p className="mb-4">
              The Website is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. masifunde makes no representations or
              warranties of any kind, express or implied, as to the operation of
              the Website or the information, content, or materials included
              therein.
            </p>
            <p className="mb-4">
              To the full extent permissible by applicable law, we disclaim all
              warranties, express or implied, including but not limited to
              implied warranties of merchantability and fitness for a particular
              purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              11. Limitation of Liability
            </h2>
            <p className="mb-4">
              In no event shall masifunde, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your use of the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              12. Indemnification
            </h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless masifunde and
              its licensee and licensors, and their employees, contractors,
              agents, officers and directors, from and against any and all
              claims, damages, obligations, losses, liabilities, costs or debt,
              and expenses (including but not limited to attorney&apos;s fees).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              13. Termination
            </h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the
              Website immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
            <p className="mb-4">
              If you wish to terminate your account, you may simply discontinue
              using the Website or contact us at{" "}
              <a
                href="mailto:chuma@masifunde.org"
                className="text-masifunde hover:underline"
              >
                chuma@masifunde.org
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              14. Governing Law
            </h2>
            <p className="mb-4">
              These Terms shall be interpreted and governed by the laws of the
              Republic of South Africa, without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              15. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days&apos; notice prior to any new terms
              taking effect. What constitutes a material change will be
              determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our Website after any revisions
              become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              16. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="p-6 mb-4 rounded-lg bg-slate-50">
              <p className="mb-2">
                <strong>masifunde Changemaker Network</strong>
              </p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:chuma@masifunde.org"
                  className="text-masifunde hover:underline"
                >
                  chuma@masifunde.org
                </a>
              </p>
              <p className="mb-2">
                Website:{" "}
                <a
                  href="https://www.changemaker-network.org"
                  className="text-masifunde hover:underline"
                >
                  www.changemaker-network.org
                </a>
              </p>
              <p className="mb-2">National Coordinator: Debaneigh Jordaan</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              17. Acknowledgment
            </h2>
            <p className="mb-4">
              By using this Website, you acknowledge that you have read these
              Terms of Service and agree to be bound by them.
            </p>
          </section>

          <div className="pt-8 mt-12 border-t">
            <p className="text-center text-slate-600">
              <Link href="/" className="text-masifunde hover:underline">
                Return to Homepage
              </Link>
              {" | "}
              <Link href="/contact" className="text-masifunde hover:underline">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
