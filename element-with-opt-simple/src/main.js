import ReactDOM from 'react-dom'

// import {Button} from 'antd';

import {Button} from 'antd/lib/button';
import 'antd/lib/style';

ReactDOM.render(
  <div>
    <Button onClick={onClick} />
  </div>
, document.body);

function onClick() {
  console.log('click');
}
