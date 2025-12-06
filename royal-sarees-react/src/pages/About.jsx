import React, { useEffect } from 'react';
import { FiAward, FiUsers, FiGlobe, FiTarget } from 'react-icons/fi';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="gradient-hero text-white py-16">
        <div className="container-max">
          <h1 className="text-5xl font-serif font-bold">About VINARM BANARSI RITHEE</h1>
          <p className="text-xl text-gray-200 mt-4">Preserving Banarasi Heritage, Celebrating Timeless Beauty</p>
        </div>
      </div>

      {/* Our Story */}
     <section className="py-16">
    <div className="container-max">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded with a passion for preserving Banarasi weaving heritage, VINARM BANARSI RITHEE is dedicated to bringing authentic, handcrafted sarees to customers worldwide. For over three decades, we've been the trusted source for premium Banarasi sarees.
        </p>
        <p className="text-gray-700">
          Each saree in our collection tells a story of craftsmanship, tradition, and timeless elegance. We work directly with master weavers in Varanasi to ensure every piece meets our exacting standards of quality.
        </p>
      </div>

      {/* VIDEO IN PLACE OF IMAGE */}
      <video
        className="rounded-lg shadow-lg"
        src="https://www.shutterstock.com/shutterstock/videos/3851014719/preview/stock-footage-close-up-of-two-artisans-weaving-a-banarasi-saree-with-gold-thread-on-handloom-in-varanasi-india.webm"
        controls
        autoPlay
        loop
        muted
      />
    </div>
    </div>
    </section>


      {/* Heritage */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0387/7463/6683/files/Making_Process.jpg?v=1745830804"
              alt="Weaving Heritage"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Banarasi Weaving Heritage</h2>
              <p className="text-gray-700 mb-4">
                The art of Banarasi weaving is centuries old, originating from the holy city of Varanasi. Recognized by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity, Banarasi sarees are sought after by women across the world.
              </p>
              <p className="text-gray-700">
                We're proud to continue this legacy by supporting skilled artisans and promoting traditional weaving techniques. Every purchase supports local communities and keeps this beautiful craft alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: "2025", title: "Founded", desc: "Established first workshop in Varanasi" },
              { year: "2025", title: "Growth", desc: "Expanded to 50+ master weavers" },
              { year: "2025", title: "Online", desc: "Launched e-commerce platform" },
              { year: "2025", title: "Global", desc: "Serving customers in 5+ countries" }
            ].map((milestone, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-serif font-bold text-primary-800 mb-2">{milestone.year}</div>
                <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiAward className="text-primary-800 mb-4" size={40} />
              <h3 className="font-serif font-bold text-2xl mb-4">Authenticity</h3>
              <p className="text-gray-700">
                We believe in preserving the authentic Banarasi weaving tradition. Every saree is genuinely handcrafted using traditional techniques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiUsers className="text-primary-800 mb-4" size={40} />
              <h3 className="font-serif font-bold text-2xl mb-4">Fair Trade</h3>
              <p className="text-gray-700">
                We ensure fair compensation for our artisans and support ethical weaving practices that respect both people and the environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiGlobe className="text-primary-800 mb-4" size={40} />
              <h3 className="font-serif font-bold text-2xl mb-4">Global Reach</h3>
              <p className="text-gray-700">
                While we celebrate our roots in Varanasi, we're proud to bring authentic Banarasi sarees to customers around the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FiTarget className="text-primary-800 mb-4" size={40} />
              <h3 className="font-serif font-bold text-2xl mb-4">Excellence</h3>
              <p className="text-gray-700">
                Quality is non-negotiable. We maintain the highest standards in every aspect of our business, from weaving to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-hero text-white">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Master Weavers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50k+</div>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-lg">Countries Served</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

