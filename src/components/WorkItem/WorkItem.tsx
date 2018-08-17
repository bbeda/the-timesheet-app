import Button from '@material-ui/core/Button'
import * as React from 'react'
import IWorkItem from '../../data/WorkItem'

interface IState {
    isEditing: boolean,
    workItem: IWorkItem
}

interface IProps {
    workItem?: IWorkItem,
    isNew?: boolean,
    onSave?: (workItem: IWorkItem) => void
}

class WorkItem extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const workItem = props.workItem || this.createNewItem()

        this.state = {
            isEditing: props.isNew || false,
            workItem
        }
    }

    public render() {
        return this.state.isEditing ? this.renderEdit() : this.renderReadOnly();
    }

    private updateWork(value: string) {
        const workItem = {
            ...this.state.workItem, work: value
        }
        this.setState({ workItem });
    }

    private onSave() {
        if (this.props.onSave === undefined) {
            return;
        }

        this.props.onSave(this.state.workItem);
        if (this.props.isNew) {
            this.setState({
                workItem: this.createNewItem()
            })
        }
    }

    private createNewItem() {
        return {
            day: new Date(),
            work: ''
        }
    }

    private renderEdit() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.workItem.work}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={e => this.onInputChange(e)} />
                <Button
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onSave()}
                    className={"classes.button"}
                    color="primary"
                    variant="contained"
                    size="small">Save</Button>
            </div>
        )
    }

    private onInputChange(event: any) {
        this.updateWork(event.target.value);
    }

    private renderReadOnly() {
        if (this.props.workItem === undefined) {
            return <p>No item</p>
        }

        return <p>{this.props.workItem.work}</p>;
    }
}

export default WorkItem;