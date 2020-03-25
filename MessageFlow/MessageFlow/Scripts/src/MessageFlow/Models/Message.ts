class Message {
    public Type: MessageType;
    public Style: MessageStyle;
    public Message: string;
    public Controls: Control[];
    Show() {
        toastr.info(this.Message);
    }
}
