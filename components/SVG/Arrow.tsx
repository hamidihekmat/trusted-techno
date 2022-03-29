import { CSS } from '@stitches/react';
import { styled } from '@ui/stiches';

export const Arrow = ({ css }: { css?: CSS }) => {
  return (
    <Wrapper css={css}>
      <svg
        width="77"
        height="180"
        viewBox="0 0 77 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66.9095 173.809C67.3562 173.484 67.455 172.859 67.1302 172.412L61.8374 165.133C61.5126 164.686 60.8872 164.587 60.4405 164.912C59.9938 165.237 59.895 165.862 60.2198 166.309L64.9246 172.779L58.4542 177.484C58.0075 177.809 57.9087 178.434 58.2335 178.881C58.5583 179.328 59.1837 179.426 59.6304 179.102L66.9095 173.809ZM66.4775 172.012C65.8226 171.909 65.1727 171.798 64.5277 171.679L64.166 173.646C64.8275 173.768 65.494 173.882 66.1654 173.988L66.4775 172.012ZM60.7173 170.878C59.4468 170.577 58.1967 170.246 56.9671 169.886L56.4049 171.805C57.6681 172.175 58.9518 172.515 60.256 172.824L60.7173 170.878ZM53.2617 168.692C52.0327 168.259 50.8256 167.796 49.6403 167.304L48.8737 169.151C50.0927 169.657 51.3338 170.133 52.5971 170.578L53.2617 168.692ZM46.0911 165.714C44.9187 165.15 43.7694 164.556 42.6432 163.933L41.6759 165.684C42.8347 166.324 44.0171 166.935 45.2232 167.516L46.0911 165.714ZM39.2968 161.96C38.1961 161.269 37.1194 160.549 36.0667 159.803L34.91 161.434C35.9929 162.202 37.1006 162.942 38.233 163.654L39.2968 161.96ZM32.9621 157.47C31.9461 156.661 30.9546 155.827 29.9878 154.967L28.6589 156.462C29.6527 157.345 30.672 158.204 31.7169 159.035L32.9621 157.47ZM27.1546 152.308C26.2329 151.396 25.3361 150.459 24.4643 149.5L22.9843 150.845C23.8794 151.83 24.8005 152.792 25.7474 153.729L27.1546 152.308ZM21.9226 146.555C21.1013 145.552 20.3051 144.529 19.5338 143.485L17.9253 144.673C18.7161 145.744 19.5328 146.794 20.3755 147.822L21.9226 146.555ZM17.2965 140.297C16.5782 139.218 15.8848 138.122 15.2165 137.008L13.5015 138.036C14.1858 139.177 14.896 140.301 15.632 141.405L17.2965 140.297ZM13.2891 133.62C12.6741 132.478 12.084 131.322 11.5187 130.15L9.71748 131.019C10.2955 132.217 10.8992 133.401 11.5285 134.568L13.2891 133.62ZM9.90115 126.602C9.38872 125.41 8.90098 124.205 8.438 122.988L6.56875 123.699C7.04168 124.942 7.54003 126.174 8.06376 127.392L9.90115 126.602ZM7.12686 119.314C6.71571 118.082 6.32911 116.84 5.96712 115.589L4.04589 116.144C4.41532 117.422 4.80995 118.69 5.22973 119.947L7.12686 119.314ZM4.95784 111.82C4.64658 110.558 4.35975 109.288 4.09743 108.011L2.13838 108.414C2.40592 109.716 2.69848 111.011 3.01603 112.298L4.95784 111.82ZM3.38569 104.174C3.17313 102.891 2.98494 101.602 2.82117 100.31L0.837036 100.561C1.00398 101.879 1.19585 103.193 1.41258 104.501L3.38569 104.174ZM2.40388 96.4285C2.28923 95.1322 2.19895 93.8332 2.13308 92.5325L0.135642 92.6337C0.202771 93.9593 0.294794 95.2834 0.41166 96.6047L2.40388 96.4285ZM2.00885 88.6299C1.99187 87.3284 1.99931 86.0266 2.03124 84.7256L0.0318419 84.6765C-0.000699997 86.0026 -0.00828779 87.3295 0.00902492 88.656L2.00885 88.6299ZM2.20067 80.8239C2.28169 79.5249 2.38728 78.2279 2.51747 76.9343L0.527525 76.734C0.394781 78.053 0.28714 79.3752 0.204544 80.6994L2.20067 80.8239ZM2.98309 73.056C3.1631 71.767 3.36787 70.4826 3.59746 69.2038L1.62894 68.8504C1.39474 70.1548 1.18588 71.4649 1.00231 72.7794L2.98309 73.056ZM4.36332 65.3743C4.64381 64.1035 4.94935 62.8397 5.27996 61.5842L3.3459 61.0749C3.00839 62.3566 2.69655 63.6465 2.41032 64.9433L4.36332 65.3743ZM6.35112 57.8306C6.73393 56.587 7.1421 55.353 7.57566 54.1299L5.69059 53.4617C5.24756 54.7115 4.8306 55.9721 4.43964 57.2422L6.35112 57.8306ZM8.95741 50.4823C9.44435 49.2763 9.95697 48.0825 10.4953 46.9022L8.67564 46.0723C8.12494 47.2797 7.60071 48.5005 7.10287 49.7335L8.95741 50.4823ZM12.1921 43.3939C12.7844 42.2372 13.4027 41.0953 14.047 39.9695L12.3112 38.9761C11.6513 40.1291 11.0182 41.2983 10.4119 42.4823L12.1921 43.3939ZM16.061 36.637C16.7587 35.5426 17.4826 34.4658 18.2327 33.4076L16.601 32.251C15.8318 33.3362 15.0897 34.4402 14.3746 35.5617L16.061 36.637ZM20.562 30.2896C21.3631 29.2719 22.1903 28.274 23.0437 27.2973L21.5376 25.9814C20.6614 26.9841 19.8124 28.0083 18.9904 29.0526L20.562 30.2896ZM25.6805 24.4338C26.58 23.5071 27.5054 22.6024 28.4568 21.721L27.0975 20.2539C26.12 21.1595 25.1693 22.089 24.2454 23.0409L25.6805 24.4338ZM31.3855 19.1505C32.3752 18.328 33.3902 17.5294 34.4307 16.7558L33.2374 15.1508C32.1678 15.9461 31.1245 16.767 30.1072 17.6123L31.3855 19.1505ZM37.6244 14.5138C38.6935 13.8059 39.7872 13.1232 40.9054 12.4666L39.8928 10.7419C38.7435 11.4167 37.6193 12.1185 36.5203 12.8462L37.6244 14.5138ZM44.3271 10.5803C45.4629 9.99348 46.6221 9.43252 47.8048 8.89846L46.9816 7.0757C45.767 7.62421 44.5762 8.20047 43.4091 8.80343L44.3271 10.5803ZM51.4159 7.3808C52.6029 6.91801 53.8119 6.48125 55.0429 6.07145L54.4112 4.17384C53.1485 4.5942 51.9079 5.04237 50.6894 5.5174L51.4159 7.3808ZM58.8022 4.92389C60.0255 4.5834 61.2691 4.26859 62.5332 3.98029L62.0886 2.03036C60.7939 2.32561 59.5197 2.64814 58.2659 2.99714L58.8022 4.92389ZM66.3817 3.19677C67.6348 2.97163 68.9067 2.77171 70.1976 2.59778L69.9306 0.61569C68.611 0.793491 67.3101 0.997931 66.0281 1.22829L66.3817 3.19677ZM74.0851 2.15854C74.7422 2.09829 75.404 2.04459 76.0705 1.99751L75.9295 0.00248522C75.2493 0.0505358 74.5736 0.105366 73.9025 0.166888L74.0851 2.15854Z"
          fill="#F97316"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled('div', {});