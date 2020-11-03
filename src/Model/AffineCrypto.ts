import ICrypto from "../Interfaces/ICrypto";
import IAffineParams from "../Interfaces/IAffineParams";

class AffineCrypto implements ICrypto{
    dict = ["абвгдеёжзийклмнопрстуфхцчшщъыьэюя", "abcdefghijklmnopqrstuvwxyz"]

    isCoprime(n: number): boolean{
        let result: boolean = true
        for (let i = 0; i < this.dict.length; i++) {
            let d: number = this.dict[i].length
            const smaller = n > d ? n : d
            for (let ind = 2; ind < smaller; ind++){
                if ((n % ind === 0) && (d % ind === 0)){
                    result = false
                }
            }
        }
        return result
    }

    replace(element: string, dictionary: string, a: number, b: number, opType: number, isUpper: boolean): string{
        let index: number = dictionary.indexOf(element)
        let newIndex: number

        if (opType === 1){
            let rawIndex: number = (a * (index - b)) % dictionary.length
            console.log(rawIndex)
            newIndex = rawIndex < 0 ? dictionary.length + rawIndex : rawIndex
            console.log(newIndex)
        }
        else{
            newIndex = (a * index + b) % dictionary.length
        }

        let result: string = isUpper ? dictionary[newIndex].toUpperCase() : dictionary[newIndex]

        return result
    }

    encryptDecrypt(params: IAffineParams): string {
        let result: string = ""

        let a: number = params.a

        for (let i = 0; i < params.input.length; i++) {
            let element: string = params.input[i]

            let isUpper: boolean = element === element.toUpperCase()

            element = element.toLowerCase()

            let includesIndicator: boolean[] =
                this.dict.map((d: string) => d.includes(element))

            if (includesIndicator.includes(true)){
                let dictIndex: number = includesIndicator.indexOf(true)
                if (params.mode === 1){
                    let j: number = 0
                    let isFound: boolean = false
                    let polarCandidate: number = -1;
                    while (!isFound) {
                        //Опасный момент, может входить в бесконечный
                        //цикл, если "а" не взаимнопростое с "m"
                        polarCandidate = (this.dict[dictIndex].length * j + 1) / params.a
                        isFound = polarCandidate % 1 === 0

                        j++
                    }

                    a = polarCandidate
                }
                result += this.replace(element, this.dict[dictIndex], a, params.b, params.mode, isUpper)
            }
            else{
                result += element
            }

        }

        return result
    }

    operate(params: IAffineParams): string {
        if(this.isCoprime(params.a)){
            if (params.input !== ""){
                if (params.a === 0 && params.b === 0){
                    return params.input
                }
                else{
                    return this.encryptDecrypt(params)
                }
            }
            else{
                return ""
            }
        }
        else{
            return "Число \"а\" не является взаимно простым с алфавитами"
        }
    }
}

export default AffineCrypto