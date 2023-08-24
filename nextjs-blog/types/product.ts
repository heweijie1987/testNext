export interface BasicProduct{
    id:number|null
}

export interface Product extends BasicProduct{
    name: string,
    description: string,
    instockQuantity: number,
    price: number
}