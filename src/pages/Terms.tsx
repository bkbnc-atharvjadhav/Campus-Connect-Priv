import { useSeo } from "@/lib/useSeo";
import LegalLayout from "@/components/layout/LegalLayout";

export default function Terms() {
  useSeo({
    title: "Terms of Service",
    description: "The terms and conditions governing use of the Campus Connect platform.",
    path: "/terms",
  });

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          id: "acceptance",
          title: "1. Acceptance of Terms",
          content: (
            <p>
              By accessing or using Campus Connect, your institution and its authorized users agree to be bound by
              these Terms of Service and any applicable institutional agreement.
            </p>
          ),
        },
        {
          id: "accounts",
          title: "2. Accounts & Roles",
          content: (
            <p>
              Access is provisioned by role (Student, Faculty, Principal, Administration, Parent, Placement Cell,
              and others). Institutions are responsible for accurate role assignment and for deactivating accounts
              when access should end.
            </p>
          ),
        },
        {
          id: "acceptable-use",
          title: "3. Acceptable Use",
          content: (
            <>
              <p>Users agree not to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Attempt to access data or accounts outside their authorized role</li>
                <li>Interfere with the platform's security or availability</li>
                <li>Upload unlawful, harmful or infringing content</li>
                <li>Use the platform for purposes outside legitimate institutional operations</li>
              </ul>
            </>
          ),
        },
        {
          id: "subscriptions",
          title: "4. Subscriptions & Payment",
          content: (
            <p>
              Institutional subscriptions are billed per the agreed plan and term. Fees, renewal and cancellation
              terms are set out in the institution's specific order form or agreement.
            </p>
          ),
        },
        {
          id: "ip",
          title: "5. Intellectual Property",
          content: (
            <p>
              Campus Connect and its underlying software, design and branding remain the property of Campus
              Connect. Institutions retain ownership of their own academic and operational data.
            </p>
          ),
        },
        {
          id: "availability",
          title: "6. Availability & Support",
          content: (
            <p>
              We aim to maintain high platform availability and provide support during published support hours,
              subject to scheduled maintenance and factors outside our reasonable control.
            </p>
          ),
        },
        {
          id: "liability",
          title: "7. Limitation of Liability",
          content: (
            <p>
              To the extent permitted by law, Campus Connect's liability for any claim arising from use of the
              platform is limited to the fees paid by the institution in the twelve months preceding the claim.
            </p>
          ),
        },
        {
          id: "termination",
          title: "8. Termination",
          content: (
            <p>
              Either party may terminate the agreement per the terms of the institutional contract. Upon
              termination, institutions may request export of their data within a reasonable transition period.
            </p>
          ),
        },
        {
          id: "governing-law",
          title: "9. Governing Law",
          content: <p>These terms are governed by the laws of India, without regard to conflict-of-law principles.</p>,
        },
        {
          id: "contact",
          title: "10. Contact Us",
          content: (
            <p>
              Questions about these terms can be directed to{" "}
              <a href="mailto:legal@campusconnect.app" className="text-primary underline">legal@campusconnect.app</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
