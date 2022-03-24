import { styled } from '@ui/stiches';

export const TempButton = styled('button', {
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  border: '1px solid #FFFFFF',
  cursor: 'pointer',
  boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)',
  variants: {
    variant: {
      3000: {
        background: '#FFFBCC',
      },
      4000: {
        background: '#FFFFFF',
      },
      5000: {
        background: '#EAFBFF',
      },
    },
    active: {
      true: {
        outline: '1px solid pink',
      },
    },
  },

  defaultVariants: {
    variant: '3000',
  },
});
