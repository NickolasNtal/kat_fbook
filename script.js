import { Resend } from 'resend';

const resend = new Resend('re_8CnQeKk2_51qHcpkZu4T2QJSArbSHdTSE');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'nickolasdalianis@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});

if(window.self!==window.top){
  var s=document.createElement("script");s.src="/visual-edit-overlay.js";document.head.appendChild(s);
  window.tailwind=window.tailwind||{};tailwind.config={corePlugins:{preflight:false}};var t=document.createElement("script");t.src="https://cdn.tailwindcss.com";document.head.appendChild(t);
};
