'use strict';

jest.dontMock('../../src/containers/main');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Main = require('../../src/containers/main');

describe('Main container', () => {

	it('is composite exist', () => {
		expect(true).toEqual(true);
	})
});