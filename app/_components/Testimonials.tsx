import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Corp",
    quote:
      "WebSolutions delivered an outstanding website that exceeded our expectations. Their team was professional and responsive throughout the entire process.",
    avatar: "/avatars/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    company: "Design Studio",
    quote:
      "We saw a significant increase in leads after WebSolutions optimized our site for search engines. Highly recommended!",
    avatar: "/avatars/jane-smith.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
