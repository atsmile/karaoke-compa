import { useEffect } from "react";
import type { StoryContext } from "@storybook/nextjs-vite";
import "../app/globals.css";
import "./preview.css";

const viewports: Record<string, { width: string; height: string }> = {
  mobile: { width: "390px", height: "844px" },
  tablet: { width: "768px", height: "1024px" },
  desktop: { width: "1280px", height: "800px" },
};

const ViewportDecorator = (
  Story: React.ComponentType,
  context: StoryContext,
) => {
  const viewportKey = context.globals?.viewport?.value;
  const size = viewportKey ? viewports[viewportKey] : null;

  useEffect(() => {
    if (size) {
      const iframe = window.parent?.document.querySelector(
        "iframe[data-vitest]",
      );
      const wrapper = iframe?.parentElement;
      if (wrapper) {
        wrapper.style.width = size.width;
        wrapper.style.height = size.height;
      }
      document.body.style.width = size.width;
      document.body.style.minHeight = size.height;
    } else {
      const iframe = window.parent?.document.querySelector(
        "iframe[data-vitest]",
      );
      const wrapper = iframe?.parentElement;
      if (wrapper) {
        wrapper.style.width = "";
        wrapper.style.height = "";
      }
      document.body.style.width = "";
      document.body.style.minHeight = "";
    }
  }, [size]);

  return <Story />;
};

export const decorators = [ViewportDecorator];
