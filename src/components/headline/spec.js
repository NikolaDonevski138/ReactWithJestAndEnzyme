import React from 'react'
import { shallow } from 'enzyme'
import HeadLine from './index'

import { findByTestAtr } from './../../../Utils/index'


const setUp = (props = {}) => {
    const component = shalllow(<Headline {...props} />)
    return component
}


describe('Headline Component', () => {
    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test description'
            }
            wrapper = setUp(props)
        })
        it('Should render without errors', () => {
            const component = findByTestAtr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1)
        })

        it('Should render a H1', () => {
            const h1 = findByTestAtr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })
        it('Should render a desc', () => {
            const desc = findByTestAtr(wrapper, 'desc');
            expect(desc.length).toBe(1)
        })
    })
    describe('Have no props', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setUp();
        })
        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponet')
            expect(component.length).toBe(1)
        })
    })
})