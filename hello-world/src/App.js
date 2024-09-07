import React, { Component } from 'react';
import './App.css';
import Counter from './component/Counter';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import FunctionClick from './component/FunctionClick';
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import { Form } from './component/Form';
import LifecycleA from './component/LifecycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import ParentComp from './component/ParentComp';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';
import FRParentInput from './component/FRParentInput';
import PortalDemo from './component/PortalDemo';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import HoverCounterTwo from './component/HoverCounterTwo';
import User from './component/User';
import Counter2 from './component/Counter2';
import ClickCounterTwo from './component/ClickCounterTwo';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/userContext';


class App extends Component {
  render(){
  return (
    
    <div className="App">
     <UserProvider value  = "Anubhav">
       <ComponentC />
     </UserProvider>
     {/* <Counter2
     render = {(count , incrementCount) => (
        <ClickCounterTwo count = {count} incrementCount = {incrementCount}/>
     )}/>
       <Counter2
     render = {(count , incrementCount) => (
        <HoverCounterTwo count = {count} incrementCount = {incrementCount}/>
     )}/> */}


     
     
     
     
     
      {/* <HoverCounter/>
  <ClickCounter/> */}
    {/* <HoverCounterTwo/>
    
      <ClickCounterTwo/>
      <User render = {(is)=> {return is ? 'Anubhav' : ''}}/> */}
      {/* <ErrorBoundary>
       <Hero heroName = "Batman"/>
       </ErrorBoundary>
       <ErrorBoundary>

      <Hero heroName = "Superman"/>
      </ErrorBoundary>
    
      <ErrorBoundary>
      <Hero heroName = "Joker"/> 
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
    {/* //   // it is rendered in child component because it is global css
    //  <h1 className = 'error'>Error</h1>
    //  //it is not rendered in child component because of css module
    //  <h1 className = {styles.success}>Success</h1> */}
    {/* <LifecycleA/> */}
    {/* <RefsDemo/> */}
    {/* <ParentComp
    {/* <Table/> */}
    {/* <ParentComp/>  */}
      {/* <FragmentDemo/> */}
      {/* <Columns
      {/* <Message/> */}
      {/* <Form/> */}
      {/* <Inline/>
      <Stylesheet primary = {true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> 
      <ClassClick/> */}
      {/* <Greet name = "Bruce"> <p>THis is children Props</p></Greet>
      <Greet name ="Bruce"/>
      <Greet name = "Clark"><button>Action</button></Greet>
      <Welcome name = "Bruce"/>
      <Welcome name = "Clark"/>
       */}
    </div>
  );
}
}

export default App;


