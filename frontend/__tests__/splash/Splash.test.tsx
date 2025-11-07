import React from "react";
import '@testing-library/jest-dom';
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Splash } from "../../app/splash/Splash";

describe("splash screen tests", () => {
  it("should render splash screen media and text", () => {
    render(<Splash />);

    expect(screen.getByText("Sqrrl")).toBeVisible();
    expect(screen.getByText("Your personal media reminder assistant")).toBeVisible();
  });
});
