import React from "react";
import { RandomUsers } from "./RandomUsers.js";
import { shallow } from "jest";

describe("RandomUsers", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<RandomUsers />);
    
    expect(wrapper).toMatchSnapshots();
  });
});
