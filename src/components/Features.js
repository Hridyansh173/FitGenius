const features = [
    { icon: 'path-to-icon1.svg', title: 'Heart Rate Monitoring', description: 'Keep track of your heart rate 24/7.' },
    { icon: 'path-to-icon2.svg', title: 'GPS Tracking', description: 'Accurately track your runs and cycling routes.' },
    { icon: 'path-to-icon3.svg', title: 'Sleep Analysis', description: 'Monitor your sleep patterns for better rest.' },
  ];
  
  const Features = () => {
    return (
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={feature.icon} alt={feature.title} className="w-20 h-20 mb-4"/>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  