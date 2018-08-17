import * as moment from 'moment'
import * as React from 'react'
import WorkItemEntity from '../../data/WorkItem'
import WorkDay from '../WorkDay/WorkDay'
import WorkItem from '../WorkItem/WorkItem'



interface IState {
    workItems: WorkItemEntity[]
}

interface IWorkDay {
    day: Date,
    workItems: WorkItemEntity[]
}

class Workspace extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
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

    public render() {
        const itemsPerDay = this.state.workItems.reduce<IWorkDay[]>((daysWork, current) => {
            const currentDateFormat = moment(current.day).format("yyyy-MM-dd");

            let day = daysWork.find(d => moment(d.day).format("yyyy-MM-dd") === currentDateFormat);

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
            if (i1.day < i2.day) {
                return 1;
            }
            else if (i1.day > i2.day) {
                return -1;
            }
            else { return 0; }
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
                    <WorkItem
                        isNew={true}
                        // tslint:disable-next-line:jsx-no-lambda
                        onSave={wi => this.onNewItem(wi)} />
                </div>
                <div>
                    {workDays}
                </div>
            </div>
            // <p>aa</p>
        );
    }

    private onNewItem(workItem: WorkItemEntity) {
        this.setState({ workItems: [...this.state.workItems, workItem] });
    }
}

export default Workspace;