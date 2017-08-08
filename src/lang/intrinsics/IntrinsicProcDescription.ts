

export  class IntrinsicProcDescription {

    constructor( public moduleName: string,
     public genericName: string,
     public args: string,
     public description: string){

    }
     
    public  isFromIntrinsicModule(): boolean {
        return this.moduleName != null;
    }

    toString(): string {
        let stringForm: string = "";
        stringForm += "! ";
        stringForm += this.description + "\n";
        stringForm += "!\n";
        stringForm += "! Usage: " + this.genericName + this.args + "\n";
        stringForm += "!\n";
        stringForm += "INTRINSIC " + this.genericName  + "\n";
        return stringForm;
    }

}
