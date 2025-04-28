import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-poppins">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Refund and Return Policy</h1>
      <p className="text-lg mb-4">
        At Gifterra, we want you to be completely satisfied with your purchase. If you're not satisfied for any reason, we offer a hassle-free return and refund policy. Please review the details below to understand how returns and refunds work at Gifterra.
      </p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Returns Policy</h2>
        <p>
          We accept returns for products that are unused, undamaged, and in their original packaging within 30 days of delivery. You can initiate a return if:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>The product is defective or damaged.</li>
          <li>The wrong item was delivered.</li>
          <li>The item does not match the description on our website.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold  text-gray-800 mb-3">2. Refund Eligibility</h2>
        <p>
          To be eligible for a refund, your item must meet the following criteria:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>The product must be returned in its original condition, unused, and undamaged.</li>
          <li>You must have a valid proof of purchase or order number.</li>
          <li>Refunds can only be processed for the same payment method used for the original transaction.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold  text-gray-800 mb-3">3. How to Request a Refund or Return</h2>
        <p>To initiate a refund or return, follow these simple steps:</p>
        <ol className="list-decimal pl-6 mt-2">
          <li>Log in to your Gifterra account and go to the 'Orders' section.</li>
          <li>Click on the order you wish to return or refund.</li>
          <li>Select the 'Return or Refund' option and follow the instructions.</li>
          <li>Pack the product securely in the original packaging and send it back to us using the provided return label.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Refund Processing Time</h2>
        <p>
          Once your return is received and inspected, we will notify you via email regarding the approval or rejection of your refund. If approved, your refund will be processed and credited to your original payment method within 7–10 business days.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Non-Returnable/Non-Refundable Items</h2>
        <p>The following items are not eligible for return or refund:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Gift cards</li>
          <li>Perishable goods (e.g., food items, flowers)</li>
          <li>Personalized or custom-made products</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Exchanges</h2>
        <p>
          We do not offer direct exchanges. If you need a different size, color, or model, please return the original product for a refund and place a new order for the desired item.
        </p>
      </section>

      <footer className="text-center mt-8">
        <p className="text-sm">For any questions or concerns, please contact our customer service team at <span className='text-primary'>support@gifterra.com</span>.</p>
      </footer>
    </div>
  );
};

export default RefundPolicy;
