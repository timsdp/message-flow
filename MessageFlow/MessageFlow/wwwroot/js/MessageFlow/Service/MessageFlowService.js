/// <reference path="../models/message.ts" />
/// <reference path="../Enums/MessageStyle.ts" />
var MessageFlowService = /** @class */ (function () {
    function MessageFlowService() {
    }
    MessageFlowService.prototype.FlowStart = function () {
        var message = new Message();
        message.Title = "Test";
        message.Text = "Message text";
        message.Style = MessageStyle.Warning;
        message.Controls.push(new ButtonControl());
        message.Show();
    };
    return MessageFlowService;
}());
//# sourceMappingURL=MessageFlowService.js.map