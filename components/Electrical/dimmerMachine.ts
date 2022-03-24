import { assign, createMachine, InterpreterFrom } from 'xstate';

export interface DimmerContext {
  dimLevel: number;
}

export type DimmerEvent =
  | {
      type: 'TOGGLE';
    }
  | { type: 'ON' }
  | { type: 'OFF' }
  | { type: 'ADJUST'; value: number };

type DimerTypestate =
  | {
      value: 'inactive';
      context: DimmerContext & {
        dimLevel: 0;
      };
    }
  | {
      value: 'active';
      context: DimmerContext & {
        dimLevel: 100;
      };
    }
  | {
      value: 'dim';
      context: DimmerContext & {
        dimLevel: number;
      };
    };

export const dimmerMachine = createMachine<
  DimmerContext,
  DimmerEvent,
  DimerTypestate
>({
  id: 'light',
  initial: 'inactive',
  context: {
    dimLevel: 0,
  },
  states: {
    active: {
      entry: assign({ dimLevel: 100 }),
      on: {
        TOGGLE: {
          target: 'inactive',
        },
      },
    },
    inactive: {
      entry: assign({ dimLevel: 0 }),
      on: {
        TOGGLE: {
          target: 'active',
        },
      },
    },
    dim: {
      on: {
        TOGGLE: {
          target: 'inactive',
        },
      },
    },
  },
  on: {
    ADJUST: [
      {
        cond: (_, event) => event.value > 0,
        actions: assign({ dimLevel: (_, { value }) => value }),
        target: 'dim',
      },
      { target: 'inactive' },
    ],
    ON: {
      target: 'active',
    },
    OFF: {
      target: 'inactive',
    },
  },
});

export type IDimmerMachine = InterpreterFrom<typeof dimmerMachine>;
