import React, { Component } from 'react'
import WorkItem from '../WorkItem/WorkItem'
import Moment from 'react-moment'

export default class WorkDay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const days = this.props.workItems.map((workItem, index) => {
            return (
                <div key={index}>
                    <WorkItem workItem={workItem} />
                </div>
            )
        });
        return (
            <div>
                <h2><Moment format="Do of MMM YYYY">{this.props.day}</Moment></h2>
                <div>
                    {days}
                </div>
            </div>

        )
    }
}