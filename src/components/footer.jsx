import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Website Section */}
        <div>
          <h4 className="text-5xl tracking-tighter font-extrabold mb-2">WEBSITE</h4>
          <p className='m-5'>Categories</p>
          <p className='m-5'>Activities Near Me</p>
          <p className='m-5' >Add a Place</p>
        </div>

        {/* Important Section */}
        <div>
        <h4 className="text-5xl tracking-tighter font-extrabold mb-2">IMPORTANT</h4>
        <p className='m-5'>Terms and Condition</p>
          <p className='m-5'>Privacy policy</p>
          <p className='m-5' >Terms of Usage</p>
        </div>

        {/* Contact Section */}
        <div>
        <h4 className="text-5xl tracking-tighter font-extrabold mb-2">CONTACT</h4>
          
          <p className='m-5'>Phone: +123 456 789</p>
          <p className='m-5'>Mumbai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
