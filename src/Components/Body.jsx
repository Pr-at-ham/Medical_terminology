import axios from "axios";
import { Terms } from "./MedicalTerms";
import { useState } from "react";

export function Body() {
  const [value, setvalue] = useState(" ");

  const getInput = (event) => {
    setvalue(event.target.value);
  };

  const FilteredArray = Terms.filter((term) => {
    return term.term.includes(value);
  });

  const searchIt = async () => {
    if (value == " ") {
      return;
    }
    const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: "query",
        list: "search",
        srsearch: `what is ${value}`,
        format: "json",
        origin: "*",
      },
    });
    response.data.query.search[0].snippet;
  };

  return (
    <div>
      <div className="flex items-center justify-center m-5">
        <input
          onChange={getInput}
          placeholder="Search Here "
          className="shadow-balck shadow-lg p-2 w-96 rounded-l-md  "
        />
        <p
          onClick={searchIt}
          className="cursor-pointer shadow-balck shadow-lg rounded-r-md bg-[#FF7800]  p-2"
        >
          🔍
        </p>
      </div>
      <div>
        {FilteredArray.map((term, idx) => {
          {
            if (term.defination == undefined) {
              return (
                <div className="text-5xl m-3" id={term.term.trim()}>
                  {term.term.trim()}
                </div>
              );
            }
          }
          {
            if (idx % 2 == 0) {
              return (
                <div
                  className="bg-slate-400 m-2 text-xl border-2 border-black p-2"
                  key={idx}
                >
                  <span>
                    <b>{term.term}:</b> {term.defination}
                  </span>
                </div>
              );
            } else {
              return (
                <div
                  className="border-2 border-black text-xl p-2 m-2"
                  key={idx}
                >
                  <span>
                    <b>{term.term}:</b> {term.defination}
                  </span>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}
