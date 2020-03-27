/// <reference path="../models/message.ts" />
/// <reference path="../Enums/MessageStyle.ts" />


class MessageFlowService {
    public FlowStart(): void {
        let message = new Message();
        message.Title = "Test";
        message.Text = "Message text";

        message.Style = MessageStyle.Warning;
        message.Controls.push(new ButtonControl());
        message.Show();
    }
}