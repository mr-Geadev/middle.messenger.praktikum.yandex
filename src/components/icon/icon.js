import * as file from 'bundle-text:../../assets/icons/file.svg';
import * as message from 'bundle-text:../../assets/icons/message.svg';
import * as moreHorizontal from 'bundle-text:../../assets/icons/more-horizontal.svg';
import * as plusSquare from 'bundle-text:../../assets/icons/plus-square.svg';
import * as search from 'bundle-text:../../assets/icons/search.svg';
import * as send from 'bundle-text:../../assets/icons/send.svg';
import * as user from 'bundle-text:../../assets/icons/user.svg';
import * as userCheck from 'bundle-text:../../assets/icons/user-check.svg';

export default (iconName) => {
  switch (iconName) {
    case 'file':
      return file;
    case 'message':
      return message;
    case 'moreHorizontal':
      return moreHorizontal;
    case 'plusSquare':
      return plusSquare;
    case 'search':
      return search;
    case 'send':
      return send;
    case 'user':
      return user;
    case 'userCheck':
      return userCheck;

    default:
      return ``;
  }
}

