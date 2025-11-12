export default function TermsAndConditions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Terms & Conditions</h1>
          <p className="text-xl text-gray-300">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">2. Use License</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Harishyam Infra's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">3. Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials on Harishyam Infra's website are provided on an 'as is' basis. Harishyam Infra makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">4. Limitations</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Harishyam Infra or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Harishyam Infra's website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">5. Accuracy of Materials</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing on Harishyam Infra's website could include technical, typographical, or photographic errors. Harishyam Infra does not warrant that any of the materials on its website are accurate, complete, or current. Harishyam Infra may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">6. Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Harishyam Infra has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Harishyam Infra of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">7. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Harishyam Infra may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">8. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">9. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-[#f8f9fa] p-6 rounded-lg mt-4 border-l-4 border-[#d4af37]">
                  <p className="text-gray-700"><strong>Harishyam Infra</strong></p>
                  <p className="text-gray-700">Email: legal@harishyaminfra.com</p>
                  <p className="text-gray-700">Phone: +91 9540074200</p>
                  <p className="text-gray-700">Address: Office Tower-A, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201304, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}