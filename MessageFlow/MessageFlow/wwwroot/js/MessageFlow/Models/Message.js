var Message = /** @class */ (function () {
    function Message() {
        this.Controls = new Array();
        this.toastOptions = {
            positionClass: "toast-top-center",
        };
    }
    Message.prototype.Show = function () {
        var toastrStyle = this.Style.toString();
        toastr.warning(this.Text, this.Title, this.toastOptions);
    };
    return Message;
}());
//# sourceMappingURL=Message.js.map