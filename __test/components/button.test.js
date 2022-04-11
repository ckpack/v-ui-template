import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { Button } from 'v-ui-template';

test('Button', () => {
  const wrapper = mount(Button, {
    slots: {
      default: 'Hello world',
    },
  });

  expect(wrapper.text()).toContain('Hello world');
});
