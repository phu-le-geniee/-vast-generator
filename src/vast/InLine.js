class InLine {
    constructor(adSystem, adTitle) {
        this.AdSystem = adSystem;
        this.AdTitle = adTitle;

        this.Creatives = {
            Creative: []
        };
    }

    addCreative(creative) {
        this.Creatives.Creative.push(creative);
    }

    setAdTitle(adTitle) {
        this.AdTitle = adTitle;
    }
}

export default InLine;