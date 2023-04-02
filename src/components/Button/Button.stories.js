import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => { return <Button>Hello Roman</Button>;
  })
  .add('Secondary', () => <Button secondary>Hello Roman</Button>);
