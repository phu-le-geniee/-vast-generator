import moment from 'moment';

class TrackingEvent {
    constructor(attrs, beacon) {
        this.$ = attrs;
        this._ = beacon;
    }
}

export default TrackingEvent;