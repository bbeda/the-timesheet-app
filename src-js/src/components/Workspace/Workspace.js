import React, { Component } from 'react'
import WorkDay from '../WorkDay/WorkDay'
import WorkItem from '../WorkItem/WorkItem'
import moment from 'moment'


class Workspace extends Component {
    constructor() {
        super();
        this.state = {
            workItems: [
                {
                    day: new Date(2018, 6, 1),
                    work: "A lot of work 1"
                },
                {
                    day: new Date(2018, 6, 1),
                    work: "A lot of work 2"
                },
                {
                    day: new Date(2018, 6, 2),
                    work: "A lot of work 3"
                }
            ]
        }
    }

    onNewItem(workItem) {
        this.setState({ workItems: [...this.state.workItems, workItem] });
    }

    render() {
        const itemsPerDay = this.state.workItems.reduce((daysWork, current) => {
            const currentDateFormat = moment(current.day).format("yyyy-MM-dd");

            var day = daysWork.find(d => moment(d.day).format("yyyy-MM-dd") === currentDateFormat);
            if (day === undefined) {
                day = {
                    day: current.day,
                    workItems: []
                };
                daysWork.push(day);
            }

            day.workItems.push(current);

            return daysWork;
        }, []).sort((i1, i2) => {
            if (i1.day < i2.day)
                return 1;
            else if (i1.day > i2.day)
                return -1;
            else return 0;
        });

        const workDays = itemsPerDay.map((day, index) => {
            return (
                <div key={index}>
                    <WorkDay workItems={day.workItems} day={day.day} />
                </div>
            )
        });

        return (
            <div>
                <div>
                    <WorkItem isNew={true} onSave={(item) => this.onNewItem(item)}></WorkItem>
                </div>
                <div>
                    {workDays}
                </div>
            </div>
            // <p>aa</p>
        );
    }
}

export default Workspace;