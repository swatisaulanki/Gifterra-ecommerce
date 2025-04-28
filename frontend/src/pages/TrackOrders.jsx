import React, { useState } from 'react';

const TrackOrders = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  // Simulate tracking data for demonstration
  const trackOrder = (orderId) => {
    if (orderId === '12345') {
      setTrackingData({
        status: 'Shipped',
        estimatedDelivery: 'April 30, 2025',
        trackingId: 'TRACK123456',
        courier: 'BlueDart',
        location: 'Bangalore',
        trackingUrl: 'https://www.bluedart.com/track-trace',
      });
    } else {
      setTrackingData(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Track Your Order</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-2/3 sm:w-1/2"
          placeholder="Enter Order ID"
        />
        <button
          onClick={() => trackOrder(orderId)}
          className="bg-primary text-white rounded-lg px-6  py-2 ml-4"
        >
          Track
        </button>
      </div>

      {trackingData && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Tracking Details</h2>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Order Status: <span className="text-green-600">{trackingData.status}</span></p>
            <p className="font-medium text-gray-700">Estimated Delivery: <span className="text-gray-600">{trackingData.estimatedDelivery}</span></p>
            <p className="font-medium text-gray-700">Tracking ID: <span className="text-blue-600">{trackingData.trackingId}</span></p>
            <p className="font-medium text-gray-700">Courier: <span className="text-gray-600">{trackingData.courier}</span></p>
            <p className="font-medium text-gray-700">Current Location: <span className="text-gray-600">{trackingData.location}</span></p>
          </div>

          <div className="flex justify-between mt-4">
            <a
              href={trackingData.trackingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Track via {trackingData.courier}
            </a>
            <button className="text-blue-600 hover:underline">Need Help?</button>
          </div>
        </div>
      )}

      {!trackingData && orderId && (
        <p className="text-red-600 text-center mt-4">Sorry, no order found with this ID. Please check your order ID and try again.</p>
      )}
    </div>
  );
};

export default TrackOrders;
