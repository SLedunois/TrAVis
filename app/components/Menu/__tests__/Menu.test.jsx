import React from "react";
import { MemoryRouter, NavLink } from "react-router-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Menu from "../Menu";

Enzyme.configure({ adapter: new Adapter() });

describe("[Component@Menu]", () => {
  const user = {
    username: "user.test",
    firstname: "User",
    lastname: "TEST"
  };

  it("should render without throwing and error", () => {
    const menu = shallow(<Menu user={user} />);
    expect(menu.exists()).toBe(true);
  });

  it("should render `User TEST` on logout link", () => {
    const menu = shallow(<Menu user={user} />);
    expect(menu.find("#logout").text()).toEqual("User TEST");
  });

  it("should render class name `active` on first NavLink", () => {
    const menu = shallow(
      <MemoryRouter>
        <Menu user={user} />
      </MemoryRouter>
    );
    expect(
      menu
        .find(NavLink)
        .first()
        .render()
        .hasClass(".active")
    );
  });
});
