/* eslint-disable no-undef */
import {shallowMount } from '@vue/test-utils';
import Toggler from './toggler';

describe('toggler', () => {
it('Компонент смонтировался', () => {
    const wrapper = shallowMount(Toggler);

    expect(wrapper.find('.toggler').exists()).toBe(true)
})
it('Изначально отображается "Show Issues"', async () => {
    const wrapper = shallowMount(Toggler);
    
    await wrapper.setProps({
        isHidden: true
    })
    expect(wrapper.find('.action-desc').text()).toBe('Show issues')
})

it('Меняет надпись при клике', async () => {
    const wrapper = shallowMount(Toggler);
    
    await wrapper.setProps({
        isHidden: true
    })

    expect(wrapper.find('.action-desc').text()).toBe('Show issues')
    await wrapper.find('.toggler__title').trigger('click')
    await wrapper.setProps({
        isHidden: false
    })
    expect(wrapper.find('.action-desc').text()).toBe('Hide issues')
})
})
 