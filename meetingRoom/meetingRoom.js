import { LightningElement,api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingInfo//{RoomName:'A-1',RoomCapacity:8}
}