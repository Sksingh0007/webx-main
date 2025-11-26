export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-light mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-light mb-4">Information We Collect</h2>
          <p className="text-gray-400 leading-relaxed">
            We collect information you provide directly to us, such as when you create an account, 
            subscribe to our newsletter, or contact us for support.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-light mb-4">How We Use Your Information</h2>
          <ul className="text-gray-400 space-y-2">
            <li>• To provide and improve our services</li>
            <li>• To send you newsletters and updates</li>
            <li>• To respond to your inquiries</li>
            <li>• To analyze usage patterns</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-light mb-4">Information Sharing</h2>
          <p className="text-gray-400 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-light mb-4">Contact Us</h2>
          <p className="text-gray-400 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at privacy@webspherx.com
          </p>
        </div>
      </div>
    </div>
  )
}