class Mobile{
    constructor(){
        this.battery=95;
        this.inboxs=[];
        this.sents=[];
        this.dafts=[];
        this.powerStatus=true;
    }
   
    turnOff(){
      //  this.decreaseBattery();
        this.powerStatus=false;
    }
    turnOn(){
       // this.decreaseBattery();
        this.powerStatus=true;
    }
    decreaseBattery(){
        this.battery-=1;
        if(this.battery<=0){
            this.turnOff();
            console.log("The mobile power off");
        }
        return this.battery>=0;
    }
    chargeBattery(){
        setInterval(function(that) {
            that.battery += 1; 
            console.log(this.battery)
            if(that.battery = 100){
            clearInterval(this) }
        }, 1000,this);
        
    }
   
    checkPowerStatus() {
        if(this.powerStatus)
            console.log(`Mobile power on battery percent ${this.battery} %`);
        else
            console.log("Mobile power off");
    }
    composeMesssageDaft(message,phone){
        this.decreaseBattery();
        if(!this.powerStatus){
            return;
        }
        console.log(`Message: "${message}"  to ${phone} saving dafts`);
        console.log(`Message: saving dafts complete`);
        this.dafts.push(message);
    }
    composeMesssage(message,phone){
        this.decreaseBattery();
        if(!this.powerStatus){
            return;
        }
        console.log(`Message: "${message}" sending to ${phone}`);
        console.log("Message send complete");
        this.sents.push(message);
    }

}
class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }

    consumeEnergy() {
        this.energy -= 2;
    }

    chargeBattery() {
        while (this.energy < 100) {
            this.energy++;
        }
    }
}


