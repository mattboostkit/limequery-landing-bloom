export const Footer = () => {
  return (
    <footer className="bg-[#8b9aa3] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <address className="not-italic mb-4">
            <div className="font-bold mb-2">Limekiln</div>
            Park Wood Lane<br />
            Eridge Road<br />
            East Sussex<br />
            TN6 3HD
          </address>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.291595418404!2d0.18715637753097195!3d51.06616704283957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df5d16ff5cacf1%3A0xc9f81a42cf24f113!2sLIMEKILN!5e0!3m2!1sen!2suk!4v1739544670335!5m2!1sen!2suk" 
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
