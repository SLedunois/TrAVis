import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Loader from "../Loader";

Enzyme.configure({ adapter: new Adapter() });

describe("[Component@Loader]", () => {
  it("should render without throwing and error", () => {
    const app = shallow(<Loader />);

    expect(app.exists()).toBe(true);
  });
});
