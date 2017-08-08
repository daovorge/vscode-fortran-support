
import * as fs from 'fs'; // to read the files
import {IntrinsicProcDescription} from './IntrinsicProcDescription';


export  class Intrinsics {

    private static  INTRINSIC_PROCEDURE_LIST:string = "intrinsic-procedures.txt"; //$NON-NLS-1$
    private static  ISO_C_BINDING_LIST:string = "iso_c_binding.txt"; //$NON-NLS-1$
    private static  ISO_FORTRAN_ENV_LIST:string = "iso_fortran_env.txt"; //$NON-NLS-1$
    static intrinsicProcedures: IntrinsicProcDescription[] = null;

    static get(identifier:string):IntrinsicProcDescription | null{
        let target:string = identifier.toUpperCase();
        let result =  this.intrinsicProcedures.find( item => item.genericName === target);
        if(result !== undefined) return result;
        return null;
    }
    static getAllIntrinsicProcedures(){
        if(this.intrinsicProcedures == null) this.loadData();
        return this.intrinsicProcedures;
    }
   private static  loadData(){
        this.intrinsicProcedures = [];
        this.addIntrinsicsFrom(this.INTRINSIC_PROCEDURE_LIST, null);
        this.addIntrinsicsFrom(this.ISO_C_BINDING_LIST, "ISO_C_BINDING");
        this.addIntrinsicsFrom(this.ISO_FORTRAN_ENV_LIST, "ISO_FORTRAN_ENV");
    }
    private static addIntrinsicsFrom(file: string, moduleName:string) {
        let lines = fs.readFileSync(file, "utf8").split("\n");
        lines.forEach(line => {
            let fields: string[] = line.split("\t");
            const name = fields[0].replace(" ", "_");
            const args = fields[1];
            const description = fields[2];
            this.intrinsicProcedures.push( new IntrinsicProcDescription(moduleName,
                name,
                args,
                description));
        });

    }

}