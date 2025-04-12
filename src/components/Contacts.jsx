import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div
      id="contact"
      className="text-white w-full text-center px-4 sm:px-6 md:px-10 py-16 bg-[#140028]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect 🤝</h2>

      <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-sm sm:text-base px-2">
        I’m open to exciting opportunities where I can contribute to meaningful
        projects—especially ones that make life simpler through thoughtful
        design and full-stack development. Got something in mind? I’d love to
        hear from you. Whether it's a collaboration, freelance gig, or just a
        random tech rant, I’m all ears (and code).
      </p>

      <p className="text-base sm:text-lg mb-4 font-medium break-all">
        📩{" "}
        <a
          href="mailto:dmahto2001@gmail.com"
          className="underline underline-offset-2 hover:text-purple-400 transition"
        >
          dmahto2001@gmail.com
        </a>
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-2xl sm:text-3xl mt-6">
        <a
          href="https://github.com/Dushyant-Mahto"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:dmahto2001@gmail.com"
          className="hover:text-purple-500 transition"
        >
          <MdEmail />
        </a>

        <a
          href="https://www.linkedin.com/in/dushyant-mahto"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/Dushyant_1307"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
