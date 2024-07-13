const testimonials = [
    { quote: 'FitGenius has transformed my fitness journey!', name: 'John Doe' },
    { quote: 'I love how easy it is to track my health stats.', name: 'Jane Smith' },
  ];
  
  const Testimonials = () => {
    return (
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-right">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  