import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-500 text-center mb-10">
        Effective Date: April 28, 2025
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>Gifterra</strong>. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, shipping address.</li>
            <li><strong>Payment Information:</strong> Billing details through secure payment gateways.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, actions performed.</li>
            <li><strong>Cookies:</strong> To personalize and enhance your experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p>
            We use your data to process orders, provide customer support, improve our services, and send you promotional updates (only if you opt-in).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your data with trusted service providers (like payment processors or delivery partners) only for fulfilling your orders or legal compliance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We use industry-standard security measures to protect your information. However, no online platform is completely secure. We encourage you to protect your login information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
          <p>
            We use cookies to improve website performance and personalize your experience. You can manage cookie settings through your browser.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
          <p>
            You can request access, correction, or deletion of your personal data at any time. Contact us at <a href="mailto:support@gifterra.com" className="text-primary underline">support@gifterra.com</a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. All changes will be posted here with a revised effective date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, please contact us at:  
            <br />
            📧 <a href="mailto:support@gifterra.com" className="text-primary underline">support@gifterra.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
