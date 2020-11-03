import ICaesarParams from "./ICaesarParams";
import IAtbashParams from "./IAtbashParams";
import IAffineParams from "./IAffineParams";

export default interface ICrypto{
    operate(params: ICaesarParams | IAtbashParams | IAffineParams): string
    encryptDecrypt(params: ICaesarParams | IAtbashParams | IAffineParams): string
}