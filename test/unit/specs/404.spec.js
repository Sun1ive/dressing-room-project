import Vue from 'vue';
import FourOFour from '@/components/pages/404.vue';

describe('FourOFour', () => {
  const Constructor = Vue.extend(FourOFour);
  const vm = new Constructor().$mount();

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1').textContent).toEqual('404');
  });

  it('should return correct data count', () => {
    expect(vm.count).toBe(0);
  });

  it('should render correctly paragraph', () => {
    expect(vm.$el.querySelector('p').textContent).toBe('Очень сложно, до свидания');
  });
});
