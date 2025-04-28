import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Terms of Service</h1>
        <section className="space-y-6 text-gray-700 text-base leading-relaxed">
          
          <p>
            Welcome to Gifterra! These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our site, you agree to be bound by these Terms. If you do not agree, you may not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">1. General Conditions</h2>
          <p>
            You must be at least the age of majority in your jurisdiction to use our services. You agree not to use our products for any unlawful purpose or violate any applicable laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">2. Online Store Terms</h2>
          <p>
            Gifterra reserves the right to refuse service, limit quantities, or cancel orders at our sole discretion. Prices and product availability are subject to change without notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">3. Accuracy of Information</h2>
          <p>
            We strive to display accurate product information, but we do not guarantee that descriptions, images, or other content is complete, reliable, or current.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">4. Modifications to the Service</h2>
          <p>
            We reserve the right to modify or discontinue any part of the service without notice. We are not liable for any modifications, price changes, or discontinuations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, products, or services provided by third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">6. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information and agree to accept responsibility for all activities under your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">7. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our site after changes constitutes acceptance of the new Terms. Please check back periodically.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500 mt-6">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at <span className="text-primary font-medium">support@gifterra.com</span>.
          </p>

        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
