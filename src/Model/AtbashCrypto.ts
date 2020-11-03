import ICrypto from "../Interfaces/ICrypto";
import IAtbashParams from "../Interfaces/IAtbashParams";

class AtbashCrypto implements ICrypto{
    dict = ["абвгдеёжзийклмнопрстуфхцчшщъыьэюя", "abcdefghijklmnopqrstuvwxyz"]

    replace(element: string, dictionary: string, isUpper: boolean): string{
        let index: number = dictionary.indexOf(element)
        let newIndex: number = dictionary.length - index - 1

        let result: string = isUpper ? dictionary[newIndex].toUpperCase() : dictionary[newIndex]
        return result
    }

    encryptDecrypt(params: IAtbashParams): string {
        let result: string = ""

        for (let i = 0; i < params.input.length; i++) {
            let element: string = params.input[i]

            let isUpper: boolean = element === element.toUpperCase()

            element = element.toLowerCase()

            let includesIndicator: boolean[] =
                this.dict.map((d: string) => d.includes(element))

            if (includesIndicator.includes(true)){
                let dictIndex: number = includesIndicator.indexOf(true)
                result += this.replace(element, this.dict[dictIndex], isUpper)
            }
            else{
                result += element
            }
        }
        return result
    }

    operate(params: IAtbashParams): string {
        if (params.input === ""){
            return ""
        }
        else{
            return this.encryptDecrypt(params)
        }
    }

}

export default AtbashCrypto