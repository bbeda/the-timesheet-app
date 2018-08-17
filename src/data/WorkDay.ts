import * as moment from 'moment';
import WorkItemEntity from './WorkItem';

export default class WorkDay {
    public day: Date;
    public workItems: WorkItemEntity[];

    private displayName: string;

    constructor(day: Date) {
        this.day = day;
        this.displayName = moment(day).format("yyyy-MM-dd");
    }

    public getDisplayName() {
        return this.displayName;
    }
}