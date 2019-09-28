var s = document.createElement('script')  
if ('noModule' in s) {  // notice the casing  
  s.type = 'module'
  s.src = '/modern.js'
}
else  
  s.src = '/legacy.js'
}
document.head.appendChild(s)  
