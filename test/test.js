import { Selector } from 'testcafe'; //고정영역
var alpha = `http://aws-web.etoos.com`;
var real = `http://www.etoos.com`;

fixture `이투스닷컴`
   .page(real);
test('로그인', async t => {
    // Test code
    await t
    .click('.tools_list > li')
    .typeText('#mem_id', 'tjrgus515')
    .typeText('#pwd', 'qatest1!')
    .click('#divG_H_LOGIN_LAYER > a.login_btn.mt_20');
});
test('로그아웃', async t => {
    await t
    .click('.tools_list > li')
    .typeText('#mem_id', 'tjrgus515')
    .typeText('#pwd', 'qatest1!')
    .click('#divG_H_LOGIN_LAYER > a.login_btn.mt_20')
    .click('#divG_H_LOGON > li:nth-child(1) > span > a');
});