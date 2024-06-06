import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    @track num1;
    @track num2;
    @track res;
    @track his=[];
    @track hisCheck=false;
    numchang(event)
    {
        const name=event.target.name;
        if(name ==='num1')
            {
                this.num1=event.target.value;
                console.log(this.num1)
            }
        if(name ==='num2')
        {
                this.num2=event.target.value;
                console.log(this.num2)
        }

    }
    add()
    {
        
        const firstN=parseInt(this.num1);
        const secondN=parseInt(this.num2);
        const sum=firstN+secondN;
        this.res=`The sum of ${firstN} and ${secondN} is ${sum}`;

        this.his.push(this.res);
        console.log(this.res);
        
    }
    sub(){
        const firstN=parseInt(this.num1);
        const secondN=parseInt(this.num2);
        const sum=firstN-secondN;
        this.res=`The Subraction of ${firstN} and ${secondN} is ${sum}`;

        this.his.push(this.res);
        console.log(this.res);

    }
    Multiply()
    {
        const firstN=parseInt(this.num1);
        const secondN=parseInt(this.num2);
        const sum=firstN*secondN;
        this.res=`The multiply of ${firstN} and ${secondN} is ${sum}`;

        this.his.push(this.res);
        console.log(this.res);
    }
    showHistory(event)
    {
        console.log('im in showhistory')
        this.hisCheck=event.target.checked;   
    }
}