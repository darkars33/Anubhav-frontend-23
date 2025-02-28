import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";


//commit

const Inputtag = (props) => {
  const [tags, settags] = useState<string[]>([]);
  const [tag, settag] = useState<string>("");

  function handleChange(e) {
    settag(e.target.value);
  }

  function handleClick() {
    if (tag.trim() !== "") {
      settags([...tags, tag]);
      settag("");
    }
  }

  function handleTagDelete(index) {
    const updatedTags = tags.filter((_, i) => i !== index);
    settags(updatedTags);
  }

  return (
    <div>
      <div className="relative flex flex-col gap-1">
        <label className="block text-sm font-semibold leading-6 text-gray-900">
          Add Tag
        </label>
        <div className="flex flex-wrap gap-2 w-[350px]">
          {tags.map((tagItem, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-500 px-1 rounded-md"
            >
              <span className="text-black text-sm">{tagItem}</span>
              <span
                onClick={() => handleTagDelete(index)}
                className="cursor-pointer ml-1"
              >
                <CloseTwoToneIcon className="text-sm" />
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type={props.type}
            name={props.title}
            id={props.id}
            className="block w-full rounded-md bg-secondry border-opacity-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-secondry-900  focus:outline-none sm:text-xs sm:leading-6"
            placeholder="Enter tag"
            onChange={handleChange}
            value={tag}
          />
          <span
            onClick={handleClick}
            className="relative text-white mb-1 text-3xl cursor-pointer bg-blue-500 px-1 rounded-md"
          >
            <ArrowForwardIcon className="w-16 h-16" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inputtag;
