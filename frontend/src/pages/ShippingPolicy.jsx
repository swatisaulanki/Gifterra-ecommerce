import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 font-poppins py-8">
      <h1 className="text-3xl font-bold text-center text-primary  mb-6">Shipping Policy</h1>
      <p className="text-lg mb-6 text-center">
        At Gifterra, we aim to provide fast and reliable shipping to ensure your products reach you safely. Here’s everything you need to know about our shipping process.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Shipping Methods</h2>
        <p>
          We offer various shipping methods to meet your needs. Depending on your location and product, you can choose from the following:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Standard Shipping (5-7 business days)</li>
          <li>Express Shipping (2-3 business days)</li>
          <li>Next-Day Delivery (available in select areas)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Shipping Costs</h2>
        <p>
          Shipping costs are calculated based on the weight of your order, the delivery address, and the chosen shipping method. Here’s a general breakdown:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Standard Shipping: Free for orders above ₹999</li>
          <li>Express Shipping: ₹150 (charged at checkout)</li>
          <li>Next-Day Delivery: ₹250 (charged at checkout)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Delivery Locations</h2>
        <p>
          We deliver to most locations across India. However, some remote areas may not be eligible for certain shipping options. You can check if we deliver to your area by entering your PIN code at checkout.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Order Processing Time</h2>
        <p>
          Once your order is placed, we process it within 1-2 business days. Orders placed after 2 PM or on weekends/holidays will be processed on the next business day.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Shipping Confirmation</h2>
        <p>
          After your order is shipped, you will receive a shipping confirmation email with a tracking number. You can track your order on our website or via the carrier’s tracking page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Delayed or Lost Shipments</h2>
        <p>
          While we strive to ensure timely delivery, sometimes delays can happen due to weather conditions, holidays, or other unforeseen events. If your order is delayed or lost, please reach out to our customer support team at <a href="mailto:support@gifterra.com" className="text-primary">support@gifterra.com</a> for assistance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">7. Returns & Exchanges</h2>
        <p>
          If you received a damaged or incorrect product, please refer to our <a href="/refund-policy" className="text-primary">Refund & Return Policy</a> for detailed instructions on how to return or exchange your items.
        </p>
      </section>

      <footer className="text-center mt-8">
        <p className="text-sm">For more details, you can contact our customer service team at <a href="mailto:support@gifterra.com" className="text-primary">support@gifterra.com</a>.</p>
      </footer>
    </div>
  );
};

export default ShippingPolicy;
