import { assign, createMachine, InterpreterFrom } from 'xstate';

type Temperature = '3000' | '4000' | '5000';

export interface DimmerContext {
  dimLevel: number;
  temperature: Temperature;
}

export type DimmerEvent =
  | {
      type: 'TOGGLE';
    }
  | { type: 'ON' }
  | { type: 'OFF' }
  | { type: 'ADJUST'; value: number }
  | { type: 'CHANGE_TEMP'; temp: Temperature };
export const dimmerMachine = createMachine(
  {
    schema: {
      context: {} as DimmerContext,
      events: {} as DimmerEvent,
    },
    tsTypes: {} as import('./dimmerMachine.typegen').Typegen0,
    id: 'light',
    initial: 'active',
    context: {
      dimLevel: 0,
      temperature: '3000',
    },
    states: {
      active: {
        entry: 'turnOn',
        on: {
          TOGGLE: {
            target: 'inactive',
          },
        },
      },
      inactive: {
        entry: 'turnOff',
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
          cond: 'isValidDimLevel',
          actions: 'adjustDimLevel',
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
      CHANGE_TEMP: {
        actions: 'setTemp',
      },
    },
  },
  {
    actions: {
      turnOn: assign((context) => ({
        dimLevel: 100,
        temperature: context.temperature,
      })),
      turnOff: assign((context) => ({
        dimLevel: 0,
        temperature: context.temperature,
      })),
      adjustDimLevel: assign({ dimLevel: (_, event) => event.value }),
      setTemp: assign((context, event) => ({
        dimLevel: context.dimLevel,
        temperature: event.temp,
      })),
    },
    guards: {
      isValidDimLevel: (_, event) => event.value > 0,
    },
  }
);

export type IDimmerMachine = InterpreterFrom<typeof dimmerMachine>;
