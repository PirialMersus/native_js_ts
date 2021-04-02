export type UserType = {
    name: string
    hair: number
    address: { title: string }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
}
export type UserWithLaptopSuperType = UserType & {
    laptop: {
        title: string
        cores: number
    }
}

export function makeHairStyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, title: city}
    }
}

export function changeLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function changeAddress(u: UserWithLaptopType & UserWithBooksType, title: string) {
    return {
        ...u,
        address: {...u.address, title: title}
    }
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...newBooks]
    }
}

export function updateCompanyTitle(u: UserWithLaptopSuperType & WithCompaniesType, id: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map((company, index) =>
                company.id === id ? {...company, title: newTitle} : company
            // ({...company, title: index === 0 ? newTitle : company.title}))
        )
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, bookForChange: string, newBook: string) {
    const newBooksArray = {
        ...u, books: [...u.books]
    }
    for (let i = 0; i < u.books.length; i++) {
        if (u.books[i] === bookForChange) {
            newBooksArray.books[i] = newBook
        }
    }
    return newBooksArray
}

export const updateCompanyTitleWithAssociativeArray = (companies: {
                                                           [key: string]: Array<{ id: number, title: string }>
                                                       },
                                                       userName: string,
                                                       companyID: number,
                                                       newTitle: string) => {


    const companiesCopy = {...companies}
    companiesCopy[userName] = companiesCopy[userName].map(company => {
        return company.id === companyID ? {...company, title: newTitle} : company
    })


    return companiesCopy
}