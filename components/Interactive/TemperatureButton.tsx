import { styled } from '@ui/stiches';

export const TemperatureButton = styled('button', {
  $$ledColor: '#F1F1F1',

  position: 'relative',
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  border: '1px solid #FFFFFF',
  cursor: 'pointer',
  color: 'inherit',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
  transition: 'all 200ms',

  '&::before': {
    content: '',
    position: 'absolute',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '$$ledColor',
    left: '50%',
    top: '115%',
    transform: 'translateX(-50%)',
  },

  variants: {
    variant: {
      3000: {
        background: '#fffce1',
        '&:hover': {
          background: '#fefce4',
        },
      },
      4000: {
        background: '#f2f2f2',
        '&:hover': {
          background: 'WhiteSmoke',
        },
      },
      5000: {
        background: '#f1fcff',
        '&:hover': {
          background: '#f7feff',
        },
      },
    },
    active: {
      true: {
        $$ledColor: '#44ffae',
      },
    },
  },

  defaultVariants: {
    variant: '3000',
  },
});
