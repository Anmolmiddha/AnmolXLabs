const Home = () => {
  return (
    <div className="text-center px-6 py-12 bg-gradient-to-b from-white via-purple-50 to-white">
      <section className="mb-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 leading-tight">
          Empowering Students to Lead, Build & Publish
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Learn how to go from a student to a standout leader, founder, or researcher. Get hands-on with our premium toolkits, workshops, and strategy kits.
        </p>
        <a
          href="/workshop"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md transition"
        >
          Join the June 7 Workshop →
        </a>
      </section>

      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-600 mb-8">Explore Our Toolkits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Pitch Deck Kit</h3>
            <p className="text-gray-700">
              Craft winning startup decks with our ready-to-use templates and pitch guidance. Ideal for founders and early-stage entrepreneurs.
            </p>
          </div>
          <div className="bg-white border shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">📄 Research Paper Toolkit</h3>
            <p className="text-gray-700">
              Learn how to write, structure, and publish impactful research papers. Perfect for students and aspiring scholars.
            </p>
          </div>
          <div className="bg-white border shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🎯 Event Strategy Guide</h3>
            <p className="text-gray-700">
              Organize campus events like a pro with our complete planner and promotional strategy kit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
