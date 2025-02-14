export const Contact = () => {
  return (
    <section id="enquiry" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E34000] mb-8">
            Make an Enquiry
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-limekiln-stone mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-limekiln-green/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-limekiln-stone mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-limekiln-green/20"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-limekiln-stone mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-limekiln-green/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-limekiln-stone mb-2">
                Event Type
              </label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-limekiln-green/20">
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="celebration">Private Celebration</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-limekiln-stone mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-limekiln-green/20"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#E34000] text-white py-3 rounded-lg transition-colors hover:bg-[#E34000]/90"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
