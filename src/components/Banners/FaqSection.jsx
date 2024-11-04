import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com or on any internet-connected device that offers the Netflix app. You can also download your favorite shows to watch on the go without an internet connection.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. No cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls to restrict content.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="bg-black text-white py-10 px-5 md:py-20 lg:px-24 mt-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div id="accordion">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-zinc-700 p-6 flex justify-between items-center focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? (
                    <i className="fas fa-minus">-</i>
                  ) : (
                    <i className="fas fa-plus">+</i>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500  ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-zinc-700 p-4 mt-1">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" p-6 rounded-lg mt-10 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </h3>
          <form className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="p-3 w-full md:w-2/3 mb-4 md:mb-0 md:mr-2 rounded-md text-white bg-black border border-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded-md font-semibold flex items-center"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                className="ml-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
