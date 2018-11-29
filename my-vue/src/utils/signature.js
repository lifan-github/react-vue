//签名算法
// let before_sign = sort({'code': 950541});
// let after_sign = rsa_sign(before_sign);
// header['sign'] = after_sign;

import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';

const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n\
MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ\n\
WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR\n\
aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB\n\
AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv\n\
xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH\n\
m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd\n\
8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF\n\
z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5\n\
rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM\n\
V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe\n\
aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil\n\
psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz\n\
uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876\n\
-----END RSA PRIVATE KEY-----';


const rsa_sign = (msg) => {
  const signer = new JSEncrypt();
  signer.setPrivateKey(privateKey);
  let signature = signer.sign(msg, CryptoJS.SHA256, 'sha256');
  return signature;
};

const afterSign = function (dict) {
  var str = [];
  for(var k in dict) {
    if (dict[k] === false) {
      dict[k] = 'false'
    } else if (dict[k] === 0) {
      dict[k] = '0'
    }

    if (dict.hasOwnProperty(k) && dict[k] && k !== 'sign') {
      str.push(k + '=' + dict[k]);
    }
  }

  var after_sign = (str.sort().join('&') + '&_timestamp_=' + parseInt(new Date().getTime() / 1000 / 60 / 5, 10)).replace(/^&|&$/g, '');

  return rsa_sign(after_sign)
};

export default afterSign

