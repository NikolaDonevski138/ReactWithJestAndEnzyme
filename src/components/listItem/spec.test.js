import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtr, checkProps } from './../../../Utils'
import ListItem from './index'

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()

        })
    })
    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {

            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            }

            wrapper = shallow(<ListItem {...props} />)
        })
        it('Should Render without error', () => {
            const component = findByTestAtr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1)
        })
        it('Should render a title', () => {
            const title = findByTestAtr(wrapper, 'componentTitle')
            expect(title.length).toBe(1)
        })
        it('Should render a desc', () => {
            const desc = findByTestAtr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1)
        })
    })

})