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

    render() { 
        console.log('Counter - Rendered');
        return (<React.Fragment>
            {this.props.children}
            {this.state.tags.length === 0 && "Please create a new tag!"}
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secundary btn-sm">Increment</button>
            <button 
            onClick={ () => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
            {this.renderTags()}
        </React.Fragment>);
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.props.counter.value === 0 ? <h8>Zero</h8> : this.props.counter.value;
    }
}
export default Counter;