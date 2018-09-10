import moment from 'moment';

class MediaFile {
    constructor(duration) {
        this.Duration = moment("2015-01-01").startOf('day').seconds(duration).format('HH:mm:ss');
        this.MediaFiles = {
            MediaFile: []
        };
        this.VideoClicks = {};
        this.TrackingEvents = {};
    }
}

export default MediaFile;