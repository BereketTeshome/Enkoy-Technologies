import React, { useState } from "react";
import LearningExperienceDesign from "./contents/LearningExperienceDesign";
import ADDIEModel from "./contents/ADDIEModel";
import InstructionalDesign from "./contents/InstructionalDesign";
import { LibraryBooksOutlined } from "@mui/icons-material";

const Contents = () => {
  const [changeContent, setChangeContent] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "Level Up: Digital Training & LXD",
      content: <LearningExperienceDesign />,
    },
    {
      id: 2,
      title: "Game On: Engaging Digital Learning",
      content: <ADDIEModel />,
    },
    {
      id: 3,
      title: "Quest for Knowledge: LXD in Digital Training",
      content: <InstructionalDesign />,
    },
    {
      id: 4,
      title: "Play to Learn: Digital Training with LXD",
      content: <InstructionalDesign />,
    },
    {
      id: 5,
      title: "Unlocking Potential: LXD in Digital Training",
      content: <InstructionalDesign />,
    },
    {
      id: 6,
      title: "Power-Up: Transforming Training with LXD",
      content: <InstructionalDesign />,
    },
  ];
  return (
    <div className="flex gap-12 px-24 mt-20">
      <div>
        <div className="w-[320px] sticky top-10 mb-6">
          <div>
            <div className="flex items-center bg-[#161628] text-white gap-5 text-lg py-2 px-4 font-semibold mb-5">
              <img src="/img/contentsMenuImg.png" alt="" className="w-[30px]" />
              <p>Learning Experience Design</p>
            </div>
            <div>
              {tabs.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 pl-8 mb-3 cursor-pointer"
                    onClick={() => setChangeContent(item.id)}
                  >
                    <LibraryBooksOutlined
                      fontSize="small"
                      sx={{ color: "gray" }}
                    />
                    <p className="text-[#161628] font-semibold">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="">{tabs[changeContent - 1].content}</div>
    </div>
  );
};

export default Contents;
