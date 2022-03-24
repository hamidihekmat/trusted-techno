// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    adjustDimLevel: "ADJUST";
    setTemp: "CHANGE_TEMP";
    turnOn: "ON" | "TOGGLE";
    turnOff: "ADJUST" | "OFF" | "TOGGLE";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    isValidDimLevel: "ADJUST";
  };
  eventsCausingDelays: {};
  matchesStates: "active" | "inactive" | "dim";
  tags: never;
}
