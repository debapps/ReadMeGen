import React, { useState } from "react";
import ShowDown from "showdown";

export default function MainPage() {
  //useState hook for input text.
  const [text, setText] = useState(null);

  // Showdown converter configurations.
  const converter = new ShowDown.Converter();
  converter.setOption("noHeaderId", true);

  // This function is called when user types text inside the text area input.
  function handleText(event) {
    setText(event.target.value);
  }

  // This function converts the input markdown text into HTML text and show it
  // into the preview section.
  function getHTML(inputText) {
    let htmlText = converter.makeHtml(inputText);
    return { __html: htmlText };
  }

  // This function copies the HTML text to clipboard.
  function handleHTMLCopy() {
    let htmlText = converter.makeHtml(text);
    navigator.clipboard.writeText(htmlText);
  }

  // This function copies the markdown text to clipboard.
  function handleMarkCopy() {
    navigator.clipboard.writeText(text);
  }

  // This function clears the input textbox.
  function handleClearText() {
    setText("");
  }

  return (
    <>
      <main className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-10">
        <aside className="flex flex-col justify-center items-center w-[80%] md:w-1/5 mt-5 md:ml-10 border-2 shadow-md p-10 order-last md:order-first">
          <h3 className="text-xl my-2 font-oswald">Functions</h3>
          <section className="flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
            <button
              onClick={handleHTMLCopy}
              className="m-2 p-2 rounded-lg text-slate-800 bg-green-300 hover:bg-green-400 active:bg-slate-100 border-2 border-black"
            >
              Copy Raw HTML
            </button>
            <button
              onClick={handleMarkCopy}
              className="m-2 p-2 rounded-lg text-slate-800 bg-green-300 hover:bg-green-400 active:bg-slate-100 border-2 border-black"
            >
              Copy Markdown
            </button>
            <button
              onClick={handleClearText}
              className="m-2 p-2 rounded-lg text-slate-800 bg-green-300 hover:bg-green-400 active:bg-slate-100 border-2 border-black"
            >
              Clear Text
            </button>
          </section>
        </aside>
        <form className="flex flex-col justify-center items-center w-full md:w-2/5 md:-mr-36">
          <h3 className="text-xl my-5 font-oswald">Enter Markdown Text</h3>
          <textarea
            className="border overflow-auto p-5 text-sm md:text-base font-extrabold font-montserrat bg-slate-800 text-emerald-200"
            rows="15"
            cols="40"
            value={text}
            onChange={handleText}
          ></textarea>
        </form>
        <div className="flex flex-col justify-center items-center w-full md:w-2/5">
          <h3 className="text-xl my-5 font-oswald">Preview</h3>
          <div
            dangerouslySetInnerHTML={getHTML(text)}
            className="preview"
          ></div>
        </div>
      </main>
    </>
  );
}
