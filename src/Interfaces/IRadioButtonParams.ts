export default interface IRadioButtonParams{
    labels: string[]
    varName: string
    onChange: (e: React.FormEvent) => void
}