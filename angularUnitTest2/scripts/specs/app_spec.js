/*global describe, it,expect */

(function(){
	'use strict';
	describe('app: demoApp',function(){
		
		beforeEach(module('demoApp'));
		it('is version 0.0.1',inject(function(version){
				expect(version).toBe('0.0.1');
			}));
	});
}())
