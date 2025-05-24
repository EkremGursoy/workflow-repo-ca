import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "../storage";

const testLocalStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] ?? null,
    setItem: (key, value) => {
      store[key] = value;
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

globalThis.localStorage = testLocalStorage;

beforeEach(() => {
  localStorage.clear();
});

describe("getUsername", () => {
  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Ekrem" });
    expect(getUsername()).toBe("Ekrem");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
