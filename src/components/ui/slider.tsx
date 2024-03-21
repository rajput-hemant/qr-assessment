import React from "react";
import type { SliderProps as NextUISliderProps } from "@nextui-org/slider";
import { Slider as NextUISlider } from "@nextui-org/slider";

export type SliderProps = NextUISliderProps & {
  type?: "continuous" | "range" | "discrete";
  size?: "sm" | "md";
};

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ type = "continuous", size = "sm", ...props }, ref) => {
    return (
      <NextUISlider
        ref={ref}
        showSteps={type === "discrete"}
        classNames={{
          track: "h-2.5",
          thumb: [
            "after:bg-primary bg-white hover:bg-[#edfaed]",
            size === "sm" && "after:h-3 after:w-3 h-6 w-6",
            size === "md" && "after:h-4 after:w-4 h-8 w-8",
            "data-[dragging=true]:after:scale-100",
            "data-[focused=true]:ring-2 ring-primary ring-offset-2 ring-offset-white transition-transform duration-200",
          ],
          step: "bg-primary data-[in-range=true]:bg-white",
        }}
        tooltipProps={{
          offset: 10,
          classNames: {
            base: "before:bg-[#0f0f0f]",
            content: "h-11 w-11 rounded-[10px] bg-[#0f0f0f] text-white",
          },
        }}
        {...props}
      />
    );
  }
);
