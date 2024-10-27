import React, { Component } from 'react';

// FOR COMPUTER
import Navbar from './navBar';
import Comp1 from './comp1';
import Comp2 from './comp2';
import Comp3 from './comp3';
import Comp4 from './comp4';
import Comp5 from './comp5.js';
import Comp6 from './comp6.js';
import Comp7 from './comp7.js';
import Comp8 from './comp8.js';
import Comp9 from './comp9.js';
import Comp10 from './comp10.js';

// FOR MOBILE
import Mnav from './Mnav.js'
import Mob1 from './mob1.js'
import Mob2 from './mob2.js'
import Mob3 from './mob3.js'
import Mob4 from './mob4.js'
import Mob5 from './mob5.js'
import Menu from './menu.js'


export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count:1,
       menu:false
    }
  }
  countHandler = ()=>{
    this.setState({count:2})
  };
  menuHandler = ()=>{
   this.setState({menu:!this.state.menu})
  };
  menuHandler2 = ()=>{
    this.setState({menu:!this.state.menu})
   }
  render() {
    return (
      <>
      <div className='hidden lg:block'>
        <Navbar/>
        <Comp1/> 
        <Comp2/> 
        <Comp3/> 
        <Comp4/> 
        <Comp5/> 
        <Comp6 countHandler={this.countHandler} count={this.state.count}/> 
        <Comp7/>
        <Comp8/>
        <Comp9/>
        <Comp10/>
      </div>
      <div className='lg:hidden'>
        <Mnav menuHandler={this.menuHandler}/>
        {this.state.menu===true?<Menu menuHandler={this.menuHandler2}/>:''}
        <Mob1/>
        <Mob2/>
        <Mob3/>
        <Mob4/>
        <Mob5/>
      </div>
      </>
    )
  }
}
