import {
    addNewBooks,
    changeAddress,
    changeLaptop,
    makeHairStyle,
    moveUser,
    updateBook, updateCompanyTitle,
    updateCompanyTitleWithAssociativeArray,
    UserType,
    UserWithBooksType,
    UserWithLaptopSuperType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference typetest', () => {
    const user: UserType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(1422)
    expect(awesomeUser.hair).toBe(711)
    expect(awesomeUser.address).toBe(user.address)

})
test('change address', () => {
    const user: UserWithLaptopType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        },
        laptop: {
            title: 'Acer'
        }
    }

    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiev')

})
test('upgrade laptop to macbook', () => {
    const user: UserWithLaptopSuperType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        },
        laptop: {
            title: 'Acer',
            cores: 8
        }
    }

    const changedLaptopUser = changeLaptop(user, "MacBook")

    expect(user).not.toBe(changedLaptopUser)
    expect(user.laptop).not.toBe(changedLaptopUser.laptop)
    expect(user.address).toBe(changedLaptopUser.address)
    expect(changedLaptopUser.laptop.title).toBe("MacBook")
    expect(user.laptop.title).toBe("Acer")
})
test('change address of user', () => {
    const user: UserWithLaptopSuperType & UserWithBooksType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        },
        laptop: {
            title: 'Acer',
            cores: 8
        },
        books: [
            'The Monk Who Sold His Ferrari',
            'Odyssey book', 'html', 'css', 'js'
        ]
    }

    const changedAddressUser = changeAddress(user, 'Detroit')

    expect(user).not.toBe(changedAddressUser)
    expect(user.address).not.toBe(changedAddressUser.address)
    expect(user.books).toBe(changedAddressUser.books)
    expect(changedAddressUser.address.title).toBe("Detroit")
    expect(user.address.title).toBe("Odessa")
})
test('add new books to array', () => {
    const user: UserWithLaptopSuperType & UserWithBooksType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        },
        laptop: {
            title: 'Acer',
            cores: 8
        },
        books: [
            'The Monk Who Sold His Ferrari',
            'Odyssey book', 'html', 'css', 'js'
        ]
    }

    const userWithNewBooks = addNewBooks(user, ['ts', 'react'])

    expect(user).not.toBe(userWithNewBooks)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books.length).toBe(7)
    expect(user.books.length).toBe(5)
})
test('update js to ts', () => {
    const user: UserWithLaptopSuperType & UserWithBooksType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        },
        laptop: {
            title: 'Acer',
            cores: 8
        },
        books: [
            'The Monk Who Sold His Ferrari',
            'Odyssey book', 'html', 'css', 'js'
        ]
    }

    const userWithNewBook = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userWithNewBook)
    expect(user.books).not.toBe(userWithNewBook.books)
    expect(userWithNewBook.books.length).toBe(5)
    expect(userWithNewBook.books[4]).toBe('ts')
})
test('update company', () => {
    const user: UserWithLaptopSuperType & WithCompaniesType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        },
        laptop: {
            title: 'Acer',
            cores: 8
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'Apple'},
            {id: 3, title: 'World Wide Web'},
        ]
    }

    const updateUser = updateCompanyTitle(user, 1, 'Epam')

    expect(user).not.toBe(updateUser)
    expect(user.companies).not.toBe(updateUser.companies)
    expect(updateUser.companies[0].title).toBe("Epam")
    expect(user.companies[0].title).toBe("Епам")
})
test('update company with associative array', () => {
    const user: UserWithLaptopSuperType = {
        name: 'Gena',
        hair: 1422,
        address: {
            title: 'Odessa'
        },
        laptop: {
            title: 'Acer',
            cores: 8
        }
    }


    const companies = {
        'Gena': [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'Apple'},
            {id: 3, title: 'World Wide Web'},
        ],
        'Julia': [
            {id: 1, title: 'sdfsdf'},
            {id: 2, title: 'sdf'},
            {id: 3, title: 'Wfb'},
        ],
    }

    const updatedCompanies = updateCompanyTitleWithAssociativeArray(companies, 'Gena', 2, "New Title")

    expect(companies).not.toBe(updatedCompanies)
    expect(updatedCompanies['Gena']).not.toBe(companies['Gena'])
    expect(updatedCompanies['Gena'][1]).not.toBe(companies['Gena'][1])
    expect(updatedCompanies['Julia']).toBe(companies['Julia'])
    expect(updatedCompanies['Gena'][1].title).toBe("New Title")
})