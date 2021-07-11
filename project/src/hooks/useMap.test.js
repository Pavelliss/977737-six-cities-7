import {renderHook} from '@testing-library/react-hooks';
import useMap from './useMap';

const testCity = {
  'location': {
    'latitude': 52.370216,
    'longitude': 4.895168,
    'zoom': 10,
  },
};

const testMapRef = {
  current: true,
};

jest.mock('leaflet', () => ({
  map: () => {},
}));

describe('Hook: useMap', () => {
  it('should return Object', () => {
    const {result} = renderHook(() =>
      useMap(testMapRef, testCity));

    expect(result).toBeInstanceOf(Object);
  });
});
