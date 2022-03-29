import { createMachine } from 'xstate';

type ToggleEvent = {
  type: 'TOGGLE';
};

export const toggleMachine = createMachine({
  initial: 'inactive',
  tsTypes: {} as import('./toggleMachine.typegen').Typegen0,
  schema: {
    events: {} as ToggleEvent,
  },
  states: {
    inactive: {
      entry: 'onInactive',
      on: {
        TOGGLE: {
          target: 'active',
        },
      },
    },
    active: {
      entry: 'onActive',
      on: {
        TOGGLE: {
          target: 'inactive',
        },
      },
    },
  },
});
