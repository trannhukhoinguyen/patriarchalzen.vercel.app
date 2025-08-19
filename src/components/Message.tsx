// Message.tsx
import React from "react";

type MessageProps = {
  nameProp?: string;
  imageURLProp?: string;
  actionProp?: string;
  character?: "YoungMonkToLeft" | "YoungMonkToRight" | "Master" | "OtherMonk";
  direction?: "left" | "right";
  children: React.ReactNode;
};

const defaultCharacterDetails = {
  YoungMonkToLeft: {
    imageURL: "/characters/young-monk-towards-left.jpg",
    name: "Tăng",
    action: "hỏi",
  },
  YoungMonkToRight: {
    imageURL: "/characters/young-monk-towards-right.jpg",
    name: "Tăng",
    action: "hỏi",
  },
  Master: {
    imageURL: "/characters/old-monk.jpg",
    name: "Sư",
    action: "nói",
  },
  OtherMonk: {
    imageURL: "/characters/other-monk.jpg",
    name: "Tăng khác",
    action: "hỏi",
  },
};

const Message = ({
  character = "Master",
  direction = "left",
  nameProp,
  imageURLProp,
  actionProp,
  children,
}: MessageProps) => {
  const defaults = defaultCharacterDetails[character];

  const name = nameProp ?? defaults.name;
  const imageURL = imageURLProp ?? defaults.imageURL;
  const action = actionProp ?? defaults.action;

  const isStringChild = typeof children === "string";

  return (
    <div
      data-direction={direction}
      className="mt-4 mb-4 flex w-full gap-2 data-[direction=right]:flex-row-reverse"
    >
      <img
        className="not-prose size-12 inline-block flex-shrink-0 rounded-full bg-slate-300 object-cover"
        src={imageURL}
        alt={`${name} profile-pic`}
        height={50}
        width={50}
        loading="lazy"
      />
      <div className="overflow-hidden">
        <p
          data-direction={direction}
          className="not-prose m-0 text-sm font-normal text-gray-500 leading-snug data-[direction=right]:text-right"
        >
          {name} {action && ` ${action}`}
        </p>

        {isStringChild && (children as string).includes("🌳")
          ? (children as string).split("🌳").map((item, index) => (
              <div
                key={index}
                className="w-full max-w-2xl rounded-md bg-primary/20 p-4 font-normal leading-relaxed [&>*]:!mt-0 [&_p]:font-normal [&_p]:leading-relaxed"
              >
                🌳 {item}
              </div>
            ))
          : (
            <div className="w-full max-w-2xl rounded-md bg-primary/20 p-4 font-normal leading-relaxed [&>*]:!mt-0 [&_p]:font-normal [&_p]:leading-relaxed">
              {children}
            </div>
          )}
      </div>
    </div>
  );
};

export default Message;
