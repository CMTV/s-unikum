const pug = require('pug');
const p =   require('path');
const fs =  require('fs');

function gView_Index()
{
    return {};
}

function genHtml(toRender, out, view = {})
{
    let rendered = pug.renderFile(
        p.normalize(toRender),
        Object.assign({ pretty: true, basedir: 'src' }, view)
    );

    fs.writeFileSync(out, rendered);
}

//
//
//

module.exports =
{
    genHtml: genHtml
}