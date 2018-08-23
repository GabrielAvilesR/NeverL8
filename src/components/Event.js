import React from 'react';
import ReactDOM from 'react-dom'
class Event extends React.Component {
  state = {
      date:new Date(this.props.dueDate),
      maxHeight:100
  }
  parseFormat(number, n) {
    let res = number + n;
    return res < 10 ? "0"+res : res;
  }
  parseYearF(number){
      return number%100
  }
  componentDidMount(){
    this.setState({maxHeight:ReactDOM.findDOMNode(this.refs.elementBodyLeft).clientHeight})
  }
  render() {
    return (
      <div className="row Event">
        <div className="col-md-8 col-sm-12 offset-md-2">
            <div className="element">
                <div className="row element-title">
                    <div className="col-12 title">
                        {this.props.title}
                    </div>
                </div>
                <div className="row element-body">
                    <div className="col-2 element-body-left" ref={"elementBodyLeft"}>
                        <p className="date">{this.parseFormat(this.state.date.getDate(), 0)}</p>
                        <p className="month">{this.parseFormat(this.state.date.getMonth(), 1)}</p>
                        <p className="year">{this.parseYearF(this.state.date.getFullYear())}</p>
                    </div>
                    <div className="col-10 element-body-right" style={{maxHeight:this.state.maxHeight}}>
                        <p className="description">{this.props.description}</p>
                        <p className="category"><span className="categoryL">Category:</span> {this.props.category}</p>
                        <p className="hour"><span className="hourL">Hour:</span> {this.parseFormat(this.state.date.getHours(),0)}:{this.parseFormat(this.state.date.getMinutes(),0)}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Event;