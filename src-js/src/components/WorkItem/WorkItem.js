import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'


class WorkItem extends Component {
    constructor(props) {
        super(props);
        const workItem = props.workItem || this.createNewItem()

        this.state = {
            isEditing: props.isNew,
            workItem: workItem
        }
    }

    updateWork(value) {
        var workItem = {
            ...this.state.workItem, work: value
        }
        this.setState({ workItem: workItem });
    }

    onSave() {
        this.props.onSave(this.state.workItem);
        if (this.props.isNew)
            this.setState({
                workItem: this.createNewItem()
            })
    }

    createNewItem() {
        return {
            day: new Date(),
            work: ''
        }
    }

    renderEdit() {
        return (
            <div>
                <input type="text" value={this.state.workItem.work} onChange={(event) => this.updateWork(event.target.value)} />
                <Button 
                    onClick={() => this.onSave()} 
                    className={"classes.button"}
                    color="primary" 
                    variant="contained" 
                    size="small">Save</Button>
            </div>
        )
    }

    renderReadOnly() {
        return <p>{this.props.workItem.work}</p>;
    }

    render() {
        return this.state.isEditing ? this.renderEdit() : this.renderReadOnly();
    }
}

export default WorkItem;