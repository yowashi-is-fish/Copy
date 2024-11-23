let u=new URL(window.location.href);
let p=url.searchParams;
navigator.clipboard.writeText(p.get('id'));
// window.open('about:blank','_self').close();