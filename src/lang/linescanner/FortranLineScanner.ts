


import { FortranLineType } from "./LineType";

export class FortranLineScanner {
    private lineLength:number = -1;
    private lineType: FortranLineType = null;

    constructor(fixedForm: boolean = false, preprocessed: boolean){}
    public scan() {

    }
    private classify(line: string): FortranLineType {
        return FortranLineType.COMMENT;
    }

}