import {describe,expect,test} from '@jest/globals';
import { weatherToken } from './config';
describe('Configuration setup', () => { 
  
    test('it reads environment variables',()=>{
      expect(weatherToken).toBeDefined();
      expect(weatherToken).toBe('test-token');
    });

});