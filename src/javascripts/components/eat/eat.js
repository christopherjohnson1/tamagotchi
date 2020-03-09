import utils from '../../helpers/utils';
import './eat.scss';

const hi = () => {
  let domstring = '';
  domstring += '<h1>Hi</h1>';
  utils.printToDom('eat', domstring);
};

export default { hi };
