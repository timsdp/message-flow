/// <reference path="../models/message.ts" />

class MessageFlowService {
    public FlowStart(): void {
        let message = new Message();
        message.Show();
}
}