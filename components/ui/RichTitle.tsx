import { Fragment } from "react";
import type { TitleLine } from "@/types/shared";

type RichTitleProps = {
  title: TitleLine[];
};

const RichTitle = ({ title }: RichTitleProps) => {
  return (
    <>
      {title.map((line, index) => (
        <Fragment key={index}>
          {line.segments.map((segment, i) => (
            <span
              key={i}
              className={`${segment.italic ? "italic" : ""} ${
                segment.accent ? "text-accent" : ""
              }`}
            >
              {segment.text}
            </span>
          ))}
          {index < title.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
};

export default RichTitle;