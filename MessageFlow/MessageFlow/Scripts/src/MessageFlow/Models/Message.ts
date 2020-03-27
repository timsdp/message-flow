class Message {
    public Type: MessageType;
    public Style: MessageStyle;
    public Title: string;
    public Text: string;
    public Controls: Control[];

    toastOptions: ToastrOptions;

    constructor() {
        this.Controls = new Array<Control>();
        this.toastOptions = {
            positionClass: "toast-top-center",
        }

    }

    Show() {
        let toastrStyle = this.Style.toString();
        toastr.warning(this.Text, this.Title, this.toastOptions);
    }



}
