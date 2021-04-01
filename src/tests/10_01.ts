export type UserType = {
    name: string
    hair: number
    address: {title: string}
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copyUser = {
        ...u,
        hair: u.hair / power
    }
    return copyUser
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const copyUser = {
        ...u,
        address: {...u.address, title: city}
    }
    return copyUser
}