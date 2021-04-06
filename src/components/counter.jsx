import React, { Component } from 'react';
class Counter  extends Component {
    state = {
        value: this.props.counter.value,
        tags: ['tag1','tag2','tag3']
    };

    renderTags(){
       if (this.state.tags.length === 0) return <p>There are no tags!</p>;
       return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)} </ul>;
    }

    handleIncrement = product => {
      this.setState({ value: this.state.value + 1 });
      console.log('Increment Clicked ' + product.id);
    }

    render() { 
        return (<React.Fragment>
            {this.props.children}
            {this.state.tags.length === 0 && "Please create a new tag!"}
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncrement({ id: this.state.value })} className="btn btn-secundary btn-sm">Increment</button>
            <button 
            onClick={ () => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
            {this.renderTags()}
        </React.Fragment>);
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.state.value === 0 ? <h8>Zero</h8> : this.state.value;
    }
}
export default Counter;