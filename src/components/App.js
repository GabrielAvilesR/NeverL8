import React from 'react'
import ReactDOM from 'react-dom'
import { getEvents, addEvent } from '../api'

import Event from './Event'
import Header from './Header'
import Menu from './Menu'


class App extends React.Component {
 
  state = {
      EventList:[],
      originalList:[],
      viewContainerHeight: "100%",
      menuHeight:"100%"
  };

  addEventHandler(event){
    addEvent(event)
      .then((event) => {
        this.setState({EventList:[event, ...this.state.EventList]})
      })
      .catch(console.error)
  }

  orderEventHandler(orderType){
    let newEventList = this.state.EventList;
    if(orderType === "dueAsc"){
      newEventList.sort((a,b) => {
        return (new Date(a.dueDate)).getTime() - (new Date(b.dueDate)).getTime()
      })
    }
    else if(orderType === "dueDesc"){
      newEventList.sort((a,b) => {
        return (new Date(b.dueDate)).getTime() - (new Date(a.dueDate)).getTime()
      })
    }
    else if(orderType === "createdAsc"){
      newEventList.sort((a,b) => {
        return (new Date(a.createdAt)).getTime() - (new Date(b.createdAt)).getTime()
      })
    }
    else if(orderType === "createdDesc"){
      newEventList.sort((a,b) => {
        return (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime()
      })
    }
    this.setState({EventList:newEventList})
  }
  filterEventHandler(filter){
    let newEventList = this.state.originalList;
    

    if(filter.to !== "" && filter.from !== ""){
      newEventList = newEventList.filter((event) => {
        let eventDate = new Date(event.dueDate)
        let fromDate = new Date(filter.from)
        let toDate = new Date(filter.to)
        return (eventDate.getTime() >= fromDate.getTime()) && (eventDate.getTime() <= toDate.getTime())
      })
    }

    if(filter.categoryF !== ""){
      newEventList = newEventList.filter((event) => {
        return event.category === filter.categoryF
      })
    }
    console.log('newEvent', newEventList)
    this.setState({
      EventList:newEventList
    })
    console.log('state', this.state)
  }
  
  getViewContainerHeight(){
    let headerHeight = ReactDOM.findDOMNode(this.refs.header).clientHeight;
    this.setState({menuHeight:headerHeight})
    return window.innerHeight - headerHeight;
  }
  componentDidMount() {
    this.setState({viewContainerHeight: this.getViewContainerHeight()})
    this.addEventHandler = this.addEventHandler.bind(this)
    this.orderEventHandler = this.orderEventHandler.bind(this)
    this.filterEventHandler = this.filterEventHandler.bind(this)
    getEvents()
      .then((events) => this.setState({EventList:[...events.reverse()], originalList:[...events.reverse()]}))
  }
  render() {
    return (
      <div className="App container-fluid">
        <Header ref={"header"}/>
        <div className="viewContainer" ref={"viewContainer"} style={{maxHeight:this.state.viewContainerHeight}}>
            {Object.keys(this.state.EventList).map(eventKey =>
            <Event
                key={this.state.EventList[eventKey]._id}
                {...this.state.EventList[eventKey]}  />
            )}
        </div>
        <Menu addEventHandler={this.addEventHandler} orderEventHandler={this.orderEventHandler} filterEventHandler={this.filterEventHandler} />
      </div>
    );
  }
}

export default App;