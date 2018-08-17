import * as moment from 'moment'
import * as React from 'react'
import WorkDayEntity from '../../data/WorkDay'
import IWorkItem from '../../data/WorkItem'
import WorkDay from '../WorkDay/WorkDay'
import WorkItem from '../WorkItem/WorkItem'



interface IState {
    workDays: WorkDayEntity[]
}


class Workspace extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            workDays: []
        }
    }

    public render() {
        const daysToShow = this.state.workDays.sort((d1, d2) => {
            if (d1.day > d2.day) {
                return 1;
            } else if (d1.day < d2.day) {
                return -1;
            } else {
                return 0;
            }
        });

        const workDays = daysToShow.map((day, index) => {
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

    private onNewItem(workItem: IWorkItem) {

        const workDays = this.state.workDays.slice();
        let workDay = workDays.find(wd => this.normalizeDate(wd.day) === this.normalizeDate(workItem.day));

        if (workDay === undefined) {
            workDay = new WorkDayEntity(workItem.day);
            workDay.workItems = [{ ...workItem }];
            workDays.push(workDay);
        } else {
            const workItems = workDay.workItems.slice();
            workItems.push(workItem);
            workDay.workItems = workItems;
        }



        this.setState({ workDays });
    }

    private normalizeDate(d: Date): string {
        return moment(d).format('yyyy-MM-dd');
    }
}

export default Workspace;