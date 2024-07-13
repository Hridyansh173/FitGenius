const pricingOptions = [
    { title: 'Basic', price: '$99', features: ['Heart Rate Monitoring', 'GPS Tracking', 'Sleep Analysis'] },
    { title: 'Pro', price: '$199', features: ['All Basic Features', 'Advanced Health Insights', 'Priority Support'] },
    { title: 'Premium', price: '$299', features: ['All Pro Features', 'Personalized Coaching', 'Lifetime Warranty'] },
  ];
  
  const Pricing = () => {
    return (
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                <p className="text-2xl font-bold mb-4">{option.price}</p>
                <ul className="mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <button className="px-6 py-3 bg-blue-500 text-white rounded">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;
  