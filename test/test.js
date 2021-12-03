import { Selector } from 'testcafe'; //고정영역
var alpha = `http://aws-web.etoos.com`;
var real = `http://www.etoos.com`;

fixture `이투스닷컴`
   .page(real);
test('로그인', async t => {
    // Test code
    await t
    .click('.tools_list > li')
});
