/*
 * @Author: soda
 * @Date: 2019-12-25 09:33:52
 * @LastEditors  : soda
 * @LastEditTime : 2019-12-27 15:33:42
 */
import React from 'react'
import { Button } from 'antd';
import {connect} from 'react-redux';
import stylesheet from 'antd/dist/antd.min.css';
import image from './big-images.jpg'

class Home extends React.Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <img src={image} alt="image" style={{ width: '300px'}} />
        <Button type="primary">Hello</Button>
      </div>
    )
  }
}

export default connect(state => state)(Home);
