import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Text } from 'react-native';

import Disclaimer from '../Disclaimer';

const onAccept = jest.fn();
const Layout = ({ content, safeBgColors, onAccept }) => <Text onPress={onAccept}>{content}</Text>;
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Disclaimer renders correctly', () => {
  beforeEach(() => {
    onAccept.mockClear();
  });

  it('with disclaimer.accepted === false', () => {
    const initialState = {
      disclaimer: {
        accepted: false,
      },
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(<Disclaimer Layout={Layout} content={content} onAccept={onAccept} store={store} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(onAccept.mock.calls.length).toBe(0);
  });

  it('with disclaimer.accepted === true', () => {
    const initialState = {
      disclaimer: {
        accepted: true,
      },
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(<Disclaimer Layout={Layout} content={content} onAccept={onAccept} store={store} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(onAccept.mock.calls.length).toBe(1);
    expect(onAccept.mock.calls[0][0]).toBeUndefined();
  });

  it('with disclaimer has accepted property', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const tree = renderer
      .create(<Disclaimer Layout={Layout} content={content} onAccept={onAccept} store={store} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(onAccept.mock.calls.length).toBe(0);
  });
});

it('Disclaimer dispatches onAcceptDisclaimer', async () => {
  onAccept.mockClear();
  const initialState = {
    disclaimer: {
      accepted: false,
    },
  };
  const store = mockStore(initialState);
  const component = renderer.create(
    <Disclaimer Layout={Layout} content={content} onAccept={onAccept} store={store} />,
  ).root;

  await component.findByType(Text).props.onPress();

  expect(store.getActions()).toMatchSnapshot();
  expect(onAccept.mock.calls.length).toBe(1);
  expect(onAccept.mock.calls[0][0]).toBeUndefined();
});
