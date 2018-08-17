import * as React from 'react'
import Moment from 'react-moment'
import IWorkItem from '../../data/WorkItem'
import WorkItem from '../WorkItem/WorkItem'


interface IProps {
    workItems: IWorkItem[]
    day: Date
}

export default class WorkDay extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const days = this.props.workItems.map((workItem, index) => {
            return (
                <div key={index}>
                    <WorkItem workItem={workItem} />
                </div>
            )
        });
        return (
            <div>
                <h2><Moment format="Do of MMM YYYY" date={this.props.day}/></h2>
                <div>
                    {days}
                </div>
            </div>

        )
    }
}