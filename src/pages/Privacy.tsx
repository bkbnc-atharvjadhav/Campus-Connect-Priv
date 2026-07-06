import { useSeo } from "@/lib/useSeo";
import LegalLayout from "@/components/layout/LegalLayout";

export default function Privacy() {
  useSeo({
    title: "Privacy Policy",
    description: "How Campus Connect collects, uses, and protects institutional and personal data.",
    path: "/privacy",
  });

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          id: "overview",
          title: "1. Overview",
          content: (
            <p>
              This Privacy Policy explains how Campus Connect ("we", "us", "our") collects, uses, stores and
              protects information when institutions, students, faculty and other users interact with our platform.
            </p>
          ),
        },
        {
          id: "data-we-collect",
          title: "2. Data We Collect",
          content: (
            <>
              <p>We collect information necessary to operate the platform, including:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Account information such as name, email, role and institution</li>
                <li>Academic data including attendance, grades and course activity</li>
                <li>Usage data such as login activity and feature interactions</li>
                <li>Communication data exchanged through the platform's messaging tools</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use-data",
          title: "3. How We Use Data",
          content: (
            <p>
              Data is used to provide and improve platform functionality, generate analytics and reports for
              authorized roles, send relevant notifications, and maintain the security and integrity of the system.
              We do not sell personal data to third parties.
            </p>
          ),
        },
        {
          id: "data-sharing",
          title: "4. Data Sharing",
          content: (
            <p>
              Data is shared only with the institution that owns the account and with service providers who help us
              operate the platform (such as hosting and infrastructure providers), under strict confidentiality
              obligations.
            </p>
          ),
        },
        {
          id: "data-security",
          title: "5. Data Security",
          content: (
            <p>
              We apply encryption in transit and at rest, role-based access controls, and regular backups to protect
              data against unauthorized access, loss or misuse. See our{" "}
              <a href="/security" className="text-primary underline">Security page</a> for details.
            </p>
          ),
        },
        {
          id: "your-rights",
          title: "6. Your Rights",
          content: (
            <p>
              Depending on your role and applicable law, you may request access to, correction of, or deletion of
              your personal data by contacting your institution's administrator or our support team.
            </p>
          ),
        },
        {
          id: "children",
          title: "7. Data of Minors",
          content: (
            <p>
              Where students are minors, data is processed under the institution's authority and consent
              arrangements in accordance with applicable education and data protection regulations.
            </p>
          ),
        },
        {
          id: "changes",
          title: "8. Changes to This Policy",
          content: (
            <p>
              We may update this policy periodically. Material changes will be communicated to institutional
              administrators in advance of taking effect.
            </p>
          ),
        },
        {
          id: "contact",
          title: "9. Contact Us",
          content: (
            <p>
              Questions about this policy can be directed to{" "}
              <a href="mailto:privacy@campusconnect.app" className="text-primary underline">privacy@campusconnect.app</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
