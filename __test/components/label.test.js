import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { Label } from 'v-ui-template';

test('Button', () => {
  const wrapper = mount(Label, {
    props: {
      label: 'Hello world',
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world');
});
