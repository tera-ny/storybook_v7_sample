import { composeStory } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "./Button.stories";

const cases: [stories: keyof typeof stories][] = [["Default"]];

describe("Button component", () => {
  describe.each(cases)("%s", (story) => {
    const Story = composeStory(stories[story], stories.default);

    it("render component", () => {
      const { container } = render(<Story />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
