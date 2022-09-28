class Mobile {
    constructor(name){
        this.phonename=name;
    }
    useBattery(battery){
        return this.battery= battery;
    }
    useMemory(memory){
        return this.memory= memory;
    }
    showEnergy(){
        return this.battery.getEnergy();
    }
    receiveMessenger(msg){
       this.memory.saveInboxMessage();
    }
    composeMessage(msg, otherphone) {
        this.memory.saveSentMessage(msg);
        otherphone.receivedMessage(msg);
        this.battery.consumeEnergy();
    }
    showSentMessage() {
        return this.memory.getSentMessage();
    }
    showReceivedMessage() {
        return this.memory.getInboxMessage();
    }

    turnOnCharge() {
        this.battery.chargeBattery();
    }
}
class Battery{
    constructor (energy){
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    consumeEnergy(){
        return this.energy-=1;
    }
    chargeBattery(){
            while (this.energy < 100) {
                this.energy++;
    }
}
}
class Memory(){
    constructor(capacity) {
        this.capacity = capacity;
        this.sent = [];
        this.inbox = [];
    }

    saveInboxMessage(msg) {
        this.inbox.push(msg);
    }
    saveSentMessage(msg) {
        this.sent.push(msg);
    }

    getSentMessage() {
        return this.sent;
    }
    getInboxMessage() {
        return this.inbox;
    }
}
