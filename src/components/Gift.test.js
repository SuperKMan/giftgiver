import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("should renders property", () => {
    expect(gift).toMatchSnapshot();
  });

  it("should initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into the person input", () => {
    const person = "Uncle";

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    it("should update the person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("when typing into the present input", () => {
    const present = "Golf Club";

    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });

    it("should update the present in `state`", () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe("when clicking the `Remove Gift` button", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });

    it("should calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
