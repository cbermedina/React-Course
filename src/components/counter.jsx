import React, { Component } from 'react';
class Counter  extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags(){
       if (this.state.tags.length === 0) return <p>There are no tags!</p>;
       return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)} </ul>;
    }

    handleIncrement = product => {
      this.setState({ count: this.state.count + 1 });
      console.log('Increment Clicked ' + product.id);
    }

    render() { 
        return (<div>
            {this.state.tags.length === 0 && "Please create a new tag!"}
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: this.state.count })} className="btn btn-secundary btn-sm">Increment</button>
                {this.renderTags()}
            </div>);
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.state.count===0? <h8>Zero</h8> : this.state.count;
    }
}
export default Counter;