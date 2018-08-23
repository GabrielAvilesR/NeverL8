import React from 'react'

class Menu extends React.Component {
    state = {
        title: "",
        description:"",
        dueDate:"",
        category:"",
        orderType:"",
        from:"",
        to:"",
        categoryF:""
    }
    showModal(option){
        $('#'+option).modal('show')
    }
    updateTitle(evt) {
        this.setState({
          title: evt.target.value
        });
      }
    updateDescription(evt) {
        this.setState({
            description: evt.target.value
        });
    }
    updateDueDate(evt) {
        this.setState({
          dueDate: evt.target.value
        });
    }
    updateCategory(evt) {
        this.setState({
          category: evt.target.value
        });
    }
    updateOrderType(evt){
        this.setState({
            orderType:evt
        })
    }
    updateFrom(evt) {
        this.setState({
          from: evt.target.value
        });
    }
    updateTo(evt) {
        this.setState({
          to: evt.target.value
        });
    }
    updateCategoryF(evt) {
        this.setState({
          categoryF: evt.target.value
        });
    }
    addEvent(){
        let s = this.state.dueDate
        console.log('s', s)
        let dueDate = Date.parse(this.state.dueDate)
        console.log('d', dueDate)
        let event = {
            title:this.state.title,
            description:this.state.description,
            dueDate,
            category:this.state.category
        }
        this.props.addEventHandler(event)
        $('#add').modal('hide')
    }
    filterList(){
        this.props.filterEventHandler({
            from:this.state.from,
            to:this.state.to,
            categoryF:this.state.categoryF
        })
        $('#filter').modal('hide')
    }
    orderList(){
        this.props.orderEventHandler(this.state.orderType)
        $('#order').modal('hide')
    }
    render() {
        return(
            <div className="Menu">
                    <div className="addB" onClick={() => this.showModal("add")}>ADD</div>
                    <div className="orderB" onClick={() => this.showModal("order")}>ORDER</div>
                    <div className="filterB" onClick={() => this.showModal("filter")}>FILTER</div>
                    <div className="modal" id="add" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">ADD</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="titleInput">Title</label>
                                        <input type="text" className="form-control" id="titleInput" value={this.state.title} onChange={evt => this.updateTitle(evt)} placeholder="Enter Title"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categoryInput">Category</label>
                                        <input type="text" className="form-control" id="categoryInput" value={this.state.category} onChange={evt => this.updateCategory(evt)}  placeholder="Enter Category"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descriptionInput">Description</label>
                                        <input type="textarea" className="form-control" id="descriptionInput" value={this.state.description} onChange={evt => this.updateDescription(evt)}  placeholder="Enter Description"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dueDateInput">Due Date</label>
                                        <input type="text" className="form-control" id="dueDateInput" value={this.state.dueDate} onChange={evt => this.updateDueDate(evt)}  placeholder='Use "MM/dd/yy h:mm"'/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => this.addEvent()}>ADD</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal" id="order" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">ORDER</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-check form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={evt => {if(evt.target.checked) this.updateOrderType("dueAsc")}}/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Due Asc</label>
                                </div>
                                <div className="form-check form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={evt => {if(evt.target.checked) this.updateOrderType("dueDesc")}}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Due Desc</label>
                                </div>
                                <div className="form-check form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={evt => {if(evt.target.checked) this.updateOrderType("createdAsc")}}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Created Asc</label>
                                </div>
                                <div className="form-check form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" onChange={evt => {if(evt.target.checked) this.updateOrderType("createdDesc")}}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Created Desc</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => this.orderList()}>ORDER</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal" id="filter" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">FILTER</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <form>
                                    <div className="form-group">
                                        <label htmlFor="FromInput">From</label>
                                        <input type="text" className="form-control" id="FromInput" value={this.state.from} onChange={evt => this.updateFrom(evt)} placeholder='Enter FROM for due date, use "MM/dd/yy h:mm"'/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="toInput">To</label>
                                        <input type="text" className="form-control" id="toInput" value={this.state.to} onChange={evt => this.updateTo(evt)}  placeholder='Enter TO for due date, use "MM/dd/yy h:mm"'/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categoryFInput">Category</label>
                                        <input type="textarea" className="form-control" id="categoryFInput" value={this.state.categoryF} onChange={evt => this.updateCategoryF(evt)}  placeholder="Enter Category"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary"  onClick={() => this.filterList()}>FILTER</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>  
        )
    }
}

export default Menu