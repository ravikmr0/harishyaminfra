export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Privacy Policy</h1>
          <p className="text-xl text-gray-300">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Harishyam Infra ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, postal address, and other contact information</li>
                  <li><strong>Financial Information:</strong> Payment details and transaction history</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data</li>
                  <li><strong>Marketing Data:</strong> Preferences regarding communications and marketing materials</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">3. Use of Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Process your transactions and send related information</li>
                  <li>Email regarding your account or order</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site</li>
                  <li>Generate a personal profile about you so that future visits to the Site will be personalized</li>
                  <li>Increase the efficiency and operation of the Site</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">4. Disclosure of Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may share information we have collected about you in certain situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                  <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law</li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us</li>
                  <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">5. Security of Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use administrative, technical, and physical security measures to protect your personal information. However, perfect security does not exist on the Internet. We cannot guarantee absolute security of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">6. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-[#f8f9fa] p-6 rounded-lg mt-4 border-l-4 border-[#d4af37]">
                  <p className="text-gray-700"><strong>Harishyam Infra</strong></p>
                  <p className="text-gray-700">Email: privacy@harishyaminfra.com</p>
                  <p className="text-gray-700">Phone: +91 9540074200</p>
                  <p className="text-gray-700">Address: Office Tower-A, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201304, India</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">7. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting to the website. If we make material changes to this policy, we will notify you here that it has been updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}