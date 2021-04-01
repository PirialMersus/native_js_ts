import {makeHairStyle, moveUser, UserType, UserWithLaptopType} from "./10_01";




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