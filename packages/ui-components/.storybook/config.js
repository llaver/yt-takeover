import React from "react";
import { configure, addDecorator } from "@storybook/react";
import Theme from "../src/Theme";

function loadStories() {
  require("../stories");
}

addDecorator(story => <Theme>{story()}</Theme>);

configure(loadStories, module);
