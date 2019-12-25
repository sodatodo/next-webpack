/*
 * @Author: soda
 * @Date: 2019-12-25 09:33:52
 * @LastEditors  : soda
 * @LastEditTime : 2019-12-25 14:09:34
 */
import './style.css';
import './style.less';
import './style.scss';
import { Button } from 'antd';
// import image from './big-images.jpg'

export default () => (
  <div className="bg lessstyle"> Welcome
  {/* <img src={image} alt="image" />  */}
  to
  <Button type="primary">Button</Button> next.js!
  <div className="test-sass">sass content</div>
  </div>
)
