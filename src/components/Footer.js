import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="w-full font-zilla p-5 text-center text-slate-800 bg-green-300 md:fixed md:bottom-0">
        <article>
          <p>Find me on social media</p>
          <span className="flex flex-row justify-center items-center space-x-1 my-2 text-2xl">
            <a
              href="https://www.facebook.com/debadityabhar/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[#3b5998]">
                <FaFacebookSquare />
              </span>
            </a>
            <a
              href="https://www.instagram.com/debadityabhar14/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[#d6249f]">
                <FaInstagramSquare />
              </span>
            </a>
            <a
              href="https://github.com/debapps"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[#f4a261]">
                <BsGithub />
              </span>
            </a>
          </span>
          <p className="text-sm font-extralight">
            Made with &#128150; Debaditya Bhar
          </p>
        </article>
      </footer>
    </>
  );
}
