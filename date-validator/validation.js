class DateValidator {
    parts = null;
    error = "";
    constructor(strDate) {
        this.value = strDate;
    }
    get valid() {
        this.parts = this.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (this.parts == null) {
            this.error = "Invalid format";
            return false;
        }
        const datDate = new Date(this.parts[3], this.parts[2] - 1, this.parts[1]);
        if ((datDate.getDate() != this.parts[1]) || (datDate.getMonth() != this.parts[2] - 1)) {
            this.error = "Invalid date";
            return false;
        }
        if (datDate >= new Date()) {
            this.error = "Future date";
            return false;
        }
        this.error = "";
        return true;
    }
}
