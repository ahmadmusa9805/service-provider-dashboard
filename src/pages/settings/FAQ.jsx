import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const FAQ = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(null);

  // Accordion data
  const AccordionData = [
    {
      title: "What is HTML, and why is it important in web development?",
      description:
        "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure of a website and is essential for displaying content on the web.",
    },
    {
      title: "What is CSS, and how does it enhance web design?",
      description:
        "CSS (Cascading Style Sheets) is a stylesheet language that allows developers to style and layout web pages. It controls the design, including colors, fonts, and layouts, making the site visually appealing.",
    },
    {
      title: "What is JavaScript, and how is it used in web development?",
      description:
        "JavaScript is a scripting language that enables interactivity on web pages. It is widely used for tasks such as form validation, animations, and dynamic content updates, enhancing user experience.",
    },
    {
      title: "Explain the concept of responsive web design.",
      description:
        "Responsive web design ensures that a website looks and functions well on various screen sizes, from desktops to mobile devices, by using flexible layouts, images, and CSS media queries.",
    },
    {
      title:
        "What are the differences between frontend and backend development?",
      description:
        "Frontend development focuses on the client side, including the layout and design that users interact with. Backend development involves server-side functionality, including databases, application logic, and APIs.",
    },
  ];

  const handleClick = (index) => {
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <div className="relative p-5 z-0 bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-start text-3xl font-bold mb-5">FAQ</h1>
        <button className="bg-[#00c0b5] text-white font-semibold px-5 py-2 rounded transition duration-200">
          + Add FAQ
        </button>
      </div>

      <div className="flex gap-2 flex-col w-[90%] mt-5">
        {AccordionData?.map((accordion, index) => (
          <section
            key={index}
            className="border-b border-[#e5eaf2] rounded py-3"
          >
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleClick(index)}
            >
              <h2 className="font-bold text-2xl flex gap-2 items-center">
                <FaRegQuestionCircle />
                {accordion.title}
              </h2>
              <div className="flex gap-4 items-center">
                <FaChevronDown
                  className={`text-xl text-[#0D0D0D] transition-all duration-300 ${
                    isAccordionOpen === index &&
                    "rotate-[180deg] !text-[#00c0b5]"
                  }`}
                />
                <RiDeleteBin6Line
                
                  className="text-[#00c0b5] text-2xl cursor-pointer hover:text-red-500 transition-all"
                />
              </div>

            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isAccordionOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                {accordion.description}
              </p>
            </div>
          </section>
        ))}
      </div>

     
    </div>
  );
};

export default FAQ;
