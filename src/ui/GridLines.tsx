import type { CSSProperties } from "react";

export type VerticalGridLine = {
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  color?: CSSProperties["backgroundColor"];
};

export type HorizontalGridLine = {
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  color?: CSSProperties["backgroundColor"];
};

type GridLinesProps = {
  verticalLines?: VerticalGridLine[];
  horizontalLines?: HorizontalGridLine[];
  color?: CSSProperties["backgroundColor"];
  thickness?: number;
  zIndex?: number;
};

export default function GridLines({
  verticalLines = [],
  horizontalLines = [],
  color = "#D7D7D7",
  thickness = 0.5,
  zIndex = 0,
}: GridLinesProps) {
  return (
    <>
      {/* Vertical grid lines */}
      {verticalLines.map((line, index) => (
        <div
          key={`vertical-grid-line-${index}`}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
          "
          style={{
            left: line.left,
            right: line.right,
            top: line.top ?? 0,
            bottom: line.bottom ?? 0,
            width: `${thickness}px`,
            backgroundColor:
              line.color ?? color,
            zIndex,
          }}
        />
      ))}

      {/* Horizontal grid lines */}
      {horizontalLines.map((line, index) => (
        <div
          key={`horizontal-grid-line-${index}`}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
          "
          style={{
            top: line.top,
            bottom: line.bottom,
            left: line.left ?? 0,
            right: line.right ?? 0,
            height: `${thickness}px`,
            backgroundColor:
              line.color ?? color,
            zIndex,
          }}
        />
      ))}
    </>
  );
}