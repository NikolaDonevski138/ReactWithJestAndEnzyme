import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAtr, checkProps } from './../../../Utils/'
import Header from './index'
import Headline from './index'



const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}


// describe('Header Component', () => {

//     let component;
//     beforeEach(() => {
//         component = setUp()
//     })

//     it('It should render without errors', () => {
//         const component = setUp()
//         const wrapper = findByTestAtrr(component, 'headerComponent')
//         expect(wrapper.length).toBe(1)
//     })
//     it('Should render a logo', () => {
//         const component = setUp()
//         const logo = findByTestAtrr(component, 'logoIMG')
//         expect(logo.length).toBe(1)
//     })

// })


describe('Headline Components', () => {

    describe('Checking PropTypes', () => {
        it('It Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                description: 'Test description',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test ;Name',
                    email: 'test@email.com',
                    age: false,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe('Have props', () => {

    })

    describe('Have NO props', () => {

    })
})