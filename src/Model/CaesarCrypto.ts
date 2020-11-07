import ICrypto from "../Interfaces/ICrypto";
import ICaesarParams from "../Interfaces/ICaesarParams";

class CaesarCrypto implements ICrypto{
    dict = ["абвгдеёжзийклмнопрстуфхцчшщъыьэюя", "abcdefghijklmnopqrstuvwxyz"]

    operate(params: ICaesarParams){
        if (params.input !== ""){
            if (params.step !== 0){
                return this.encryptDecrypt(params)
            }
            else{
                return params.input
            }
        }
        else{
            return ""
        }
    }

    replace(element: string, dictionary: string, shift: number, opType: number, isUpper: boolean): string {
        let index: number = dictionary.indexOf(element)
        let newIndex: number
        shift = shift % 33
        if (opType === 1){
            if (shift < 0){
                newIndex = (index - shift) % dictionary.length
            }
            else{
                newIndex = index - shift < 0 ? dictionary.length + index - shift : index - shift
            }
        }
        else{
            if (shift < 0){
                newIndex = index + shift < 0 ? dictionary.length + (shift + index) : (index + shift) % dictionary.length
            }
            else{
                newIndex = (index + shift) % dictionary.length
            }
        }
        let result: string = isUpper ? dictionary[newIndex].toUpperCase() : dictionary[newIndex];
        return result
    }

    encryptDecrypt(params: ICaesarParams) {
        let result: string = "";

        for (let i = 0; i < params.input.length; i++) {
            let element: string = params.input[i]

            let isUpper: boolean = element === element.toUpperCase()

            element = element.toLowerCase()

            let includesIndicator: boolean[] =
                this.dict.map((d: string) => d.includes(element))

            if (includesIndicator.includes(true)){
                let dictIndex: number = includesIndicator.indexOf(true)
                result += this.replace(element, this.dict[dictIndex], params.step, params.mode, isUpper)
            }
            else{
                result += element;
            }
        }

        return result
    }
}

export default CaesarCrypto