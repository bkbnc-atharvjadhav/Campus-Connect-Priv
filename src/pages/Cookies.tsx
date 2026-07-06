import { useSeo } from "@/lib/useSeo";
import LegalLayout from "@/components/layout/LegalLayout";

export default function Cookies() {
  useSeo({
    title: "Cookie Policy",
    description: "How Campus Connect uses cookies and similar technologies across the platform and marketing site.",
    path: "/cookies",
  });

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookie Policy"
      updated="July 2026"
      sections={[
        {
          id: "what-are-cookies",
          title: "1. What Are Cookies",
          content: (
            <p>
              Cookies are small text files stored on your device that help websites remember information about your
              visit, such as preferences and session state.
            </p>
          ),
        },
        {
          id: "how-we-use",
          title: "2. How We Use Cookies",
          content: (
            <>
              <p>Campus Connect uses cookies to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Keep you securely signed in between sessions</li>
                <li>Remember interface preferences, like dashboard layout</li>
                <li>Understand aggregate usage patterns to improve the product</li>
                <li>Protect against fraudulent or abusive activity</li>
              </ul>
            </>
          ),
        },
        {
          id: "types",
          title: "3. Types of Cookies We Use",
          content: (
            <>
              <p>
                <strong>Essential cookies</strong> are required for core functionality like authentication and
                cannot be disabled. <strong>Analytics cookies</strong> help us understand how the platform is used,
                in aggregate and anonymized form.
              </p>
            </>
          ),
        },
        {
          id: "managing",
          title: "4. Managing Cookies",
          content: (
            <p>
              Most browsers let you control or delete cookies through their settings. Disabling essential cookies
              may prevent the platform from functioning correctly.
            </p>
          ),
        },
        {
          id: "changes",
          title: "5. Changes to This Policy",
          content: (
            <p>
              We may update this Cookie Policy from time to time. Continued use of the platform after changes take
              effect constitutes acceptance of the revised policy.
            </p>
          ),
        },
        {
          id: "contact",
          title: "6. Contact Us",
          content: (
            <p>
              Questions about our use of cookies can be directed to{" "}
              <a href="mailto:privacy@campusconnect.app" className="text-primary underline">privacy@campusconnect.app</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
