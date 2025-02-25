import { describe, expect, test } from "vitest";
import { generateDeployManifest } from "./generateDeployManifest";

describe("generateDeployManifest", () => {
  test("should generate a deploy manifest", () => {
    expect(generateDeployManifest("7.2.0")).toMatchSnapshot();
  });
});
